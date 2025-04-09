---
icon: /static/logos/gitlab.svg
tags:
  - guide
  - hosting
---

# GitLab Pages

Add a simple CI/CD pipeline to the project to automate the building and deployment of the Retype powered website via [Gitlab Pages](https://docs.gitlab.com/ee/user/project/pages/).

## Summary

- [x] Add a **.gitlab-ci.yml** file to your repository
- [x] [!badge Optional] Add a License key to the ENV variables
- [x] Commit a change to the repo to publish the website

## .gitlab-ci.yml

Add the following **.gitlab-ci.yml** file to the project within the root folder.

```yaml .gitlab-ci.yml
image: node:latest

before_script:
  - npm install retypeapp --global

stages:
  - deploy

pages:
  stage: deploy
  script:
  - retype build --secret $RETYPE_SECRET --output public
  artifacts:
    paths:
    - public/
  only:
  - main

```
Gitlab will use the latest available **node** image from the Gitlab Registry and Download & install the latest version of the `retypeapp` via [npm](https://www.npmjs.com/).

```yml
image: node:latest

before_script:
  - npm install retypeapp --global
```

GitLab Pages will publish your website every time the deploy stage is triggered by a new commit to the repository.

The `--secret $RETYPE_SECRET` is optional.

The `only: main` argument is to ensure the rebuild is only triggered if commit new code is commited to the main branch.

```yml
pages:
  stage: deploy
  script:
  - retype build --secret $RETYPE_SECRET --output public
  artifacts:
    paths:
    - public/
  only:
  - main
```

Commit the **.gitlab-ci.yml** file and push to the repo.

## RETYPE_SECRET

If using Retype [Pro](/pro/pro.md), the project requires a Retype License Key. The license key can be configured by adding the [`RETYPE_SECRET`](/configuration/envvars.md#retype_secret) Environment variable to the repository using the following URL location:

```
# Replace [username] and [project] with your values
https://gitlab.com/[username]/[project]/-/settings/ci_cd
```

The variable type must be `standard`, plus it is recommended to mask and protect the variable.

After the pipeline finishes successfully, your new generated website will be available online at the following location:

```
# Replace [username] and [project] with your values
https://[username].gitlab.io/[project]/
```