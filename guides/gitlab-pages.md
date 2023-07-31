---
icon: git-compare
tags: [guide]
---

# Gitlab-Pages 

Add a simple GitLab Page to your project to automate the building and deployment of your Retype powered website.

---

## Summary

- [x] Add a **.gitlab-ci.yml** file to your Repository
- [x]  

---

## .gitlab-ci.yml

```yaml
image: node:latest

before_script:
  - npm install retypeapp --global

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
