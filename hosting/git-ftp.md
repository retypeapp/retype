---
icon: <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 22.261003 24.000019"><path d="m 15.960532,23.575548 v -6.13409 q -3.18436,2.17877 -4.42459,2.88269 -2.8826896,1.57542 -5.0614696,1.57542 -2.61453,0 -4.49164,-1.91062 -1.91061997,-1.97766 -1.91061997,-4.52515 0.1676,-2.68158 1.13966997,-5.43019 2.01118,-5.8324199 6.67042,-8.5475099 2.3128496,-1.37431007 5.3296196,-1.37431007 h 0.13408 l 0.90503,-0.0335 q 1.54191,0 1.40783,1.20671007 -2.68158,0.13408 -5.02795,1.24023 -2.3463796,1.10614 -4.0726396,2.96649 -1.72626,1.86034 -2.71509,4.34079 -0.98883,2.4804599 -0.98883,5.0614699 0,2.58102 1.34078,3.72068 1.34079,1.13967 3.45253,1.13967 1.81006,0 5.0279496,-1.57542 2.0447,-1.00559 3.05029,-2.27934 0.50279,-0.60335 0.50279,-1.27375 V 9.6649081 q -1.00559,0 -4.67599,0.7709599 -3.6703996,0.77095 -4.2402396,0.87151 -0.1676,-0.10056 -0.40224,-0.21788 -0.23463,-0.11732 -0.26815,-0.35196 -0.067,-0.50279 1.47486,-1.5418999 0.36872,-0.20112 4.4245996,-0.78771 4.05588,-0.5866 5.16203,-0.7542 1.10615,-0.16759 1.84358,-0.26815 0.33519,0.067 0.83799,-0.0168 0.50279,-0.0838 0.93855,-0.0503 1.07263,0.0335 1.00559,1.17319 l -2.78213,1.13966 q -0.63688,2.0446999 -0.63688,7.7095299 l 0.067,4.99443 v 1.24022 q -1.00559,0.5028 -1.94414,0.5028 -0.93855,0 -1.07263,-0.5028 z"/></svg>
visibility: hidden
tags: [guide, git-ftp, ftp, publish, deploy, secrets]
---
# FTP sync using git history

Add a simple GitHub Action to your project to automate the building and deployment of your Retype powered website to any FTP host.

Two Retype GitHub actions will be involved in the process of sync+deploy:

1. Retype [Build Action](https://github.com/retypeapp/action-build)
2. Retype [git-ftp Action](https://github.com/retypeapp/action-git-ftp)

The first, **Build Action** will automatically build your Retype powered website with each new change that is committed.

The second, **git-ftp Action** will automatically publish your newly built website to the specified FTP host using the provided credentials. In order to optimally sync only changes between builds, it needs to keep a branch (or a directory within a branch) where it would track differences between sync-up events. By default, the `retype` branch is used, but of course that is also configurable.

Automatically deploying to FTP requires a basic `retype.yml` configuration file to be added to your GitHub repo and some simple project configuration.

---

## Step 1: Add `retype.yml` workflow

Add the following `retype.yml` file to your GitHub project within the `.github/workflows/` folder.

If the `.github/workflows/` folder does not exist within the root of your project, you can manually create those folders and they will be committed along with the `retype.yml`.

```yaml .github/workflows/retype.yml
name: Publish Retype powered website to FTP
on:
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  publish:
    name: Publish to FTP host

    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - uses: retypeapp/action-build@v1

      - uses: retypeapp/action-git-ftp@v1
        with:
          ftp-host: ${{ secrets.FTP_SERVER_ADDRESS }}
          ftp-root: public_html
          ftp-user: ${{ secrets.FTP_USERNAME }}
          ftp-pass: ${{ secrets.FTP_PASSWORD }}
          update-branch: true
```

The above `retype.yml` workflow configuration instructs GitHub Actions to automatically build and deploy your website every time commits are pushed to the `main` branch. A copy of the built files is committed into the `retype` branch to maintain change history.

### The FTP host root

Usually hosting providers inform a value to fill in the `ftp-root` parameter. Some common values are `public_html`, `wwwroot`, domain name of the website, but it can also be the root of the FTP server itself, where the value of `.` or `/` can be used.

---

## Step 2: Configure Secrets

See the `${{ secrets.KEYWORD }}` occurrences in the sample `retype.yml` above? These are **GitHub Encrypted Secrets**, that are used to keep sensitive information away from the public.

To get started, navigate to the <kbd>Settings</kbd> > <kbd>Secrets</kbd> page of your GitHub repository. There, create **new repository secrets** for each parameter:

- `FTP_SERVER_ADDRESS` with the URL or IP address provided by your hosting. To also pass the FTP port number just use `myhost.address:21`, replacing `21` with the actual port number. 21 is the default and you may omit if so.
- `FTP_USERNAME` will contain the login username to the FTP server
- `FTP_PASSWORD` being probably the most important information to be kept safe in an encrypted secret holds the actual FTP password

See more about using secrets in actions at [the Encrypted Secrets GitHub Docs article](https://docs.github.com/en/actions/reference/encrypted-secrets).

---

## Step 3: commit + push the file

Now, simply commit and push the `.github/workflows/retype.yml` file to GitHub.

The action will then take place and will:

- build the website from markdown files
- create the branch or commit the changes between builds to GitHub
- upload the website to the FTP server

The first time it runs, it will "init" the history and FTP. That is, will upload every file. It should also create the GitHub branch.

From the second time onwards, only changed files should be updated in FTP and GitHub.

## Diving deeper

Here are some insight on more comprehensive usage of the git-ftp Action. The full documentation on all accepted settings and even more examples is available at [the git-ftp action's repository](https://github.com/retypeapp/action-git-ftp).

### Placing Retype website in a subdirectory

In case the documentation website is to be served from a subdirectory of the website, i.e. `/docs/`, the path should then be appended to the one informed by the hosting.

!!! No FTP mkdirs
The action will fail if the specified `ftp-root` path does not exist in the remote FTP server. If needed, create the directory beforehand. This helps prevent deployment to the wrong path in the remote end.
!!!

For example, the final expected docs URL will become:

```
https://www.mywebsite.com/docs/
```

Along with that, Retype will require the [`url`](/configuration/project.md#url) config to be added to the `retype.yml` project configuration file. The following sample demonstrates how the `url` would be configured for this scenario.

```yml
url: example.com
```

See [url](/configuration/project.md#url) for additional details.

---

### Use the same workflow for GitHub Pages and FTP sync

In the simplest case scenario, where the `url` setting is the same for both the GitHub Pages and FTP host, simply set up the branch (`retype` by default) used by the **git-ftp action** as the GitHub Pages' branch. See the [GitHub Actions Guide](/guides/github-actions) for more information.

Going forward, it will probably be the case that different values for `url` will be necessary for each published website. In this case, the following workflow can be used:

```yaml
name: Publish Retype powered website to FTP
on:
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  publish:
    name: Publish to FTP host

    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Build documentation for GitHub Pages
        uses: retypeapp/action-build@v1
        with:
          url: companyx.github.io/docs

      - name: Publish built documentation to GitHub Pages
        uses: retypeapp/action-github-pages@v1
        with:
          branch: gh-pages

      - name: Switch back to original branch
        run: git checkout ${{ github.sha }}

      - name: Build documentation for FTP site
        uses: retypeapp/action-build@v1

      - name: Publish built documentation to FTP site
        uses: retypeapp/action-git-ftp@v1
        with:
          ftp-host: ${{ secrets.FTP_SERVER_ADDRESS }}
          ftp-root: public_html
          ftp-user: ${{ secrets.FTP_USERNAME }}
          ftp-pass: ${{ secrets.FTP_PASSWORD }}
          branch: ftp-site-history
          update-branch: true
```

There are three key changes in the workflow if compared to the initial guide's example:

**1. specify `url` every time the `action-build` is called**

The `url` setting is passed to retype during build process; so if the website is built with a given `url`, a rebuild must take place before it can contemplate a different `url` value. So we need to rebuild for both publishes.

!!!info Dedicated retype.yml files
It is also possible to specify different `retype.yml` files for even more flexibility by just using `config: <retype-file>` instead of `url: <value>`. The `<retype-file>` bit should be replaced with the path to the desired configuration file (default is `/retype.yml`).
!!!

**2. specify a different `branch` where to push the website history**

If the same branch is used to hold both versions, the `url` change above will always imply changes in the branch; this may not only pollute history by changing the url back and forth, but may also force git-ftp to always push all files as the change history will contain most files instead of just what really changed.

!!!info Same branch in different dirs
Alternatively to different branch names, it is possible to use **different directories in a same branch**. It is important though, not to nest those directories. See examples about this in the [git-ftp Action's README](https://github.com/retypeapp/action-git-ftp).
!!!

**3. "Switch back to original branch"**

Every time either the GitHub Pages or git-ftp Actions are run, they will switch to the target repository's branch to commit files. So if the Build Action is to be called once again, a step is required to revert the working directory back to what it were when the workflow started.

## Summary

- [x] Add a `retype.yml` file, see [step 1](#step-1-add-retypeyml-workflow).
- [x] Configure Secrets, see [step 2](#step-2-configure-secrets).
- [x] Commit + push, see [step 3](#step-3-commit--push-the-file).
- [x] Dive deeper with some advanced setup scenarios, see [Diving deeper](#diving-deeper).
- [x] More details on the Retype [Build Action](https://github.com/retypeapp/action-build).
- [x] More details on the Retype [git-ftp Action](https://github.com/retypeapp/action-git-ftp).
- [x] More details on the Retype [GitHub Pages Action](https://github.com/retypeapp/action-github-pages).

All of these options are configurable and your specific requirements may vary. There is a lot of flexibility. Please check out the [Project Configuration](/configuration/project.md) options for full details.
