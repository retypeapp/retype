---
tags: [guide]
---
# GitLab CI

## Step 1: Add `gitlab-ci.yml` pipeline

```yml
image: node:lts-buster # https://hub.docker.com/_/node

before_script:
  - npm install --global retypeapp # https://retype.com/guides/getting-started/

pages:
  script:
  - retype build
  - mv .retype public # https://retype.com/configuration/project/#output
  artifacts:
    paths:
    - public
  only:
  - master
```

## Step 2: Configure GitLab Pages

## Summary

- [x] Add a `gitlab-ci.yml` file, see [step 1](#step-1-add-gitlab-ciyml-workflow).
- [x] Configure GitLab Pages, see [step 2](#step-2-configure-gitlab-pages).
- [ ] todo
