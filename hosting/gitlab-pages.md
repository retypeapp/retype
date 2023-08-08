---
icon: git-compare
tags: [guide]
---

# Gitlab-Pages 

Add a simple CI/CD pipeline to the project to automate the building and deployment of the Retype powered website via Gitlab Pages.

## Summary

- [x] Add a **.gitlab-ci.yml** file to the Repository 
- [] Add a License key to the ENV Variables
- [x] commit changes to deploy to pages

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
Gitlab will use the latest available **node** image from the Gitlab Registry and Download & install the latest version of `retype` via ***npm***.

```yml
image: node:latest

before_script:
  - npm install retypeapp --global
```

`pages` will be triggerd by the deploy stage.

`--secret $RETYPE_SECRET ` is optional.

the `only: main` argument make sure the rebuild is only triggered if commit new code is commited to the main branch.

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

If the project requires a Retype License Key,
that key can be configured as an ENV:var by adding a `RETYPE_SECRET` secret to the repository.
Doing so by adding a variable to `https://gitlab.com/[user]/[project]/-/settings/ci_cd`
Variable type must be **standard**, its also adviced to mask and protect the variable.

---

After the pipeline finished successfully, the page is online and can be viewed by visiting `https://[username].gitlab.io/[project]/`
