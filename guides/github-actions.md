---
icon: git-compare
tags: [guide]
---
![](/static/headers/guides_github-actions.png)

# GitHub Actions

Add a simple GitHub Action to your project to automate the building and deployment of your Retype powered website.

Currently, there are two Retype related GitHub Actions:

1. Retype [Build Action](https://github.com/retypeapp/action-build)
2. Retype [GitHub Pages Action](https://github.com/retypeapp/action-github-pages)

The first, **Build Action** will automatically build your Retype powered website with each new change that is committed.

The second, **GitHub Pages Action** will automatically publish your newly built website to a branch in Github so it is available to host from [GitHub Pages](https://pages.github.com/). By default, the `retype` branch is used, but of course that is also configurable.

Automatically deploying to GitHub Pages requires a basic `retype-action.yml` configuration file to be added to your GitHub repo and some simple project configuration.

---

## Summary

- [x] Add a `retype-action.yml` file, see [step 1](#step-1-add-retype-actionyml-workflow)
- [x] Configure GitHub Pages, see [step 2](/hosting/github-pages.md#step-2-configure-github-pages)
- [x] Set the branch to `retype`, see [branch config](/hosting/github-pages.md#pick-a-branch)
- [x] Set the [`url`](/hosting/github-pages.md#set-a-url)
- [x] More details on the Retype [Build Action](https://github.com/retypeapp/action-build).
- [x] More details on the Retype [GitHub Pages Action](https://github.com/retypeapp/action-github-pages).

All of these options are configurable and your specific requirements may vary. There is a lot of flexibility. Please check out the [Project Configuration](/configuration/project.md) options for full details.

---

## Step 1: Add `retype-action.yml` workflow

Add the following `retype-action.yml` file to your GitHub project within the `.github/workflows/` folder.

If the `.github/workflows/` folders do not exist within the root of your project, you can manually create the folders and they will be committed along with the `retype-action.yml`.

```yml .github/workflows/retype-action.yml
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

      - uses: retypeapp/action-build@latest

      - uses: retypeapp/action-github-pages@latest
        with:
          update-branch: true
```

The above `retype-action.yml` workflow configuration instructs GitHub Actions to automatically build your website upon each commit to the `main` branch, and then deploy your new Retype powered website to a `retype` branch.

If the `retype` branch is not available, the GitHub Action will automatically create the branch.

If the default branch in your repo is `master`, change `- main` to `- master`. If the docs project was within a `docs` branch, change `- main` to `- docs`. The following snippet demonstrates setting the branch to `master`.

```yml
  push:
    branches:
      - master
```

Commit your `retype-action.yml` file and push to your repo.

### RETYPE_SECRET

If your project requires a Retype License Key, that key can be configured by adding a [`RETYPE_SECRET`](cli.md#retype_secret) secret to your repository and the corresponding `license: {%{${{ secrets.RETYPE_SECRET }}`}%} configuration to your `.github/workflows/retype-action.yml` file.

{%{
```yml
- uses: retypeapp/action-build@latest
  with:
    license: ${{ secrets.RETYPE_SECRET }}
```
}%}

A standard `.github/workflows/retype-action.yml` file with a Retype license key would look like the following:

```yml .github/workflows/retype-action.yml
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

      - uses: retypeapp/action-build@latest
        with:
          license: {%{${{ secrets.RETYPE_SECRET }}}%}

      - uses: retypeapp/action-github-pages@latest
        with:
          update-branch: true
```

---

## Step 2: Configure GitHub Pages

Once [Step 1](#step-1-add-retype-actionyml-workflow) is complete, configure your [GitHub Pages](/hosting/github-pages.md#step-2-configure-github-pages) setup.
