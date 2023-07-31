---
icon: git-compare
tags: [guide]
---

# Gitlab-Pages 

Add a simple CI/CD pipeline to your project to automate the building and deployment of your Retype powered website via Gitlab Pages.

## Summary

- [x] Add a **.gitlab-ci.yml** file to your Repository 
- [x]  

## .gitlab-ci.yml

Add the following **.gitlab-ci.yml** file to your project within the root folder.

```yaml .gitlab-ci.yml
image: node:latest

before_script:
  - npm install retypeapp --global
  - retype build --secret $RETYPE_SECRET

stages:
  - deploy

pages:
  stage: deploy
  script:
  - retype build --output public
  artifacts:
    paths:
    - public/
  only:
  - main

```
Gitlab will use the latest available **node** image from the Gitlab Registry and Download, install the latest version of `retype` via ***npm***.
`- retype build --secret $RETYPE_SECRET ` is optional.

```yml
image: node:latest

before_script:
  - npm install retypeapp --global
  - retype build --secret $RETYPE_SECRET 
```

`pages` will be triggerd by the deploy stage.
the `only: main` argument make sure the rebuild is only triggered if commit new code is commited to the main branch.

```yml
pages:
  stage: deploy
  script:
  - retype build --output public
  artifacts:
    paths:
    - public/
  only:
  - main
```

Commit your **.gitlab-ci.yml** file and push to your repo.

### RETYPE_SECRET

If your project requires a Retype License Key,
that key can be configured by adding a `RETYPE_SECRET` secret to your repository.
doing so by adding a variable to `https://gitlab.com/[user]/[project]/-/settings/ci_cd`
Variable type must be **standard**, its also adviced to mask and protect the variable.

---

After the pipeline finished successfully, the page is online and can be viewed by visiting `https://[username].gitlab.io/[project]/`
