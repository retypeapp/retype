---
icon: git-compare
tags: [guide]
---
# GitHub Actions

Add a simple GitHub Action to your project to automate the building and deployment of your Retype powered website.

Currently, there are two Retype related GitHub Actions:

1. Retype [Build Action](https://github.com/retypeapp/action-build)
2. Retype [GitHub Pages Action](https://github.com/retypeapp/action-github-pages)

The first, **Build Action** will automatically build your Retype powered website with each new change that is committed.

The second, **GitHub Pages Action** will automatically publish your newly built website to a branch in Github so it's available to host from GitHub Pages. By default, the `retype` branch is used, but of course that is also configurable.

Automatically deploying to GitHub Pages requires a basic `retype.yml` configuration file to be added to your GitHub repo and some simple project configuration.

---

## Step 1: Add `retype.yml` workflow

Add the following `retype.yml` file to your GitHub project within the `.github/workflows/` folder.

If the `.github/workflows/` folder does not exist within the root of your project, you can manually create those folders and they will be committed along with the `retype.yml`.

``` .github/workflows/retype.yml
name: Publish Retype powered website to GitHub Pages
on:
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  publish:
    name: Publish to retype branch

    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - uses: actions/setup-dotnet@v1
        with:
          dotnet-version: 5.0.x

      - uses: retypeapp/action-build@v1

      - uses: retypeapp/action-github-pages@v1
        with:
          update-branch: true
```

The above `retype.yml` workflow configuration instructs GitHub Actions to automatically build your website upon each commit to the `main` branch, and then deploy your new Retype powered website to a `retype` branch. If the `retype` branch is not available, the GitHub Action will automatically create the branch.

Commit your `retype.yml` file and push to your repo.

---

## Step 2: Configure GitHub Pages

With a few basic configs, GitHub can host your website for free.

To get started, navigate to the <kbd>Settings</kbd> > <kbd>Pages</kbd> page of your repo. The URL should be the following, although you'll need to replace `<organization>` and `<repo>` with your values:

```
https://github.com/<organization>/<repo>/settings/pages
```

### Pick a branch

By default, the Retype Action will publish your website to the `retype` branch, although you can configure it to host in any branch.

If you have committed the `retype.yml` file as detailed in **Step 1**, you should now have a `retype` branch available from the list. Select `retype` then click the **Save** button.

![](../static/github-actions-configure-branch.png)

Your GitHub Pages config should now look similar to the following:

![](../static/github-actions-enable-pages.png)

!!! Enforce HTTPS
We recommend that you check the **Enforce HTTPS** checkbox.
!!!

### Set a `url`

With the above sample, GitHub will provide a unique `github.io` subdomain. Your website will be available from a subfolder of that subdomain. In our scenario, our website will be available in the `/retype/` subfolder.

For example, the URL will use the following pattern:

```
https://<organization>.github.io/<repo>/
```

You would then set the `url` configuration with the following, where `<organization>` is replaced with your GitHub organization name and `<repo>` is replaced with your repository name.

```yml
url: <organization>.github.io/<repo>/
```

If your GitHub organization name was `CompanyX` and your repo name was `Docs`, your `url` config would be:

```yml
url: companyx.github.io/docs/
```

See [url](../configuration/project.md#url) documentation.

### Custom domain

Instead of using the `github.io` domain, it is possible to configure GitHub Pages to use your custom domain or subdomain name.

Just enter your domain or subdomain name in the **Custom domain** field and click **Save**.

![](../static/github-actions-configure-custom-domain.png)

If your website will be available at `https://example.com`, enter `example.com` as the **Custom domain** value.

If your website will be available at `https://docs.example.com`, enter `docs.example.com`.

You will then need to [configure the DNS](https://docs.github.com/articles/using-a-custom-domain-with-github-pages/) for your domain name.

The last step would be updating the [`url`](../configuration/project.md#url) project configuration with the same value. For example, if your website will be available at `https://example.com`, use the following `url` configuration:

```yml
url: example.com
```

---

## Summary

- [x] Add a `retype.yml` file, see [step 1](#step-1-add-retypeyml-workflow)
- [x] Configure GitHub Pages, see [step 2](#step-2-configure-github-pages)
- [x] Set the branch to `retype`, see [branch config](#pick-a-branch)
- [x] Set the [`url`](../configuration/project.md#url)
- [x] More details on the Retype [Build Action](https://github.com/retypeapp/action-build).
- [x] More details on the Retype [GitHub Pages Action](https://github.com/retypeapp/action-github-pages).

All of these options are configurable and your specific requirements may vary. There is a lot of flexibility. Please check out the [Project Configuration](../configuration/project.md) options for full details.
