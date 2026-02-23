---
label: FTP
icon: upload
tags: [guide, ftp, github]
---
# Publish using FTP

Add a simple GitHub Action to your project to automate the building and deployment of your Retype powered website to any FTP host.

Two Retype GitHub actions will be involved in the process of sync+deploy:

1. Retype [Build Action](https://github.com/retypeapp/action-build)
2. Retype [git-ftp Action](https://github.com/retypeapp/action-git-ftp)

The first, **Build Action** will automatically build your Retype powered website with each new change that is committed.

The second, **git-ftp Action** will automatically publish your newly built website to the specified FTP host using the provided credentials. In order to optimally sync only changes between builds, it needs to keep a branch (or a directory within a branch) where it would track differences between sync-up events. By default, the `retype` branch is used, but of course that is also configurable.

Automatically deploying to FTP requires a basic **retype-action.yml** configuration file to be added to your GitHub repo and some simple project configuration.

---

## Step 1: Add **retype-action.yml** workflow

Add the following **retype-action.yml** file to your GitHub project within the `.github/workflows/` folder. 

!!!tip
See the [GitHub Action](/guides/github-actions.md) page for details on setting `RETYPE_KEY`.
!!!

If the `.github/workflows/` folder does not exist within the root of your project, you can manually create those folders and they will be committed along with the **retype-action.yml**.

{%{
```yaml .github/workflows/retype-action.yml
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
      - uses: actions/checkout@v6

      - uses: retypeapp/action-build@latest

      - uses: retypeapp/action-git-ftp@latest
        with:
          ftp-host: ${{ secrets.FTP_SERVER_ADDRESS }}
          ftp-root: public_html
          ftp-user: ${{ secrets.FTP_USERNAME }}
          ftp-pass: ${{ secrets.FTP_PASSWORD }}
          update-branch: true
```
}%}

The above **retype-action.yml** workflow configuration instructs GitHub Actions to automatically build and deploy your website every time commits are pushed to the `main` branch. A copy of the built files is committed into the `retype` branch to maintain change history.

### FTP host root

Usually hosting providers inform a value to fill in the `ftp-root` parameter. Some common values are `public_html`, `wwwroot`, domain name of the website, but it can also be the root of the FTP server itself, where the value of `.` or `/` can be used.

---

## Step 2: Configure Secrets

Navigate to the **Settings** > **Secrets** page of your GitHub repository. There, create **New repository secrets** for each of the following parameters:

- `FTP_SERVER_ADDRESS` with the URL or IP address provided by your hosting. To also pass the FTP port number just use `myhost.address:21`, replacing `21` with the actual port number. 21 is the default and you may omit if so.
- `FTP_USERNAME` will contain the login username to the FTP server
- `FTP_PASSWORD` being probably the most important information to be kept safe in an encrypted secret holds the actual FTP password

See more about using secrets in actions at [the Encrypted Secrets GitHub Docs article](https://docs.github.com/en/actions/reference/encrypted-secrets).

---

## Step 3: Commit the workflow

Now, simply commit and push the `.github/workflows/retype-action.yml` file to GitHub.

The action will be triggered and GitHub will then perform the following processes:

- Build the website from markdown files
- Create the branch or commit the changes between builds to GitHub
- Upload the website to the FTP server

With the first workflow run, it will generate and upload every file. From the second time onwards, only changed files should be updated.
