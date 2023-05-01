---
title: Cloudflare Pages
icon: globe
tags: [guide,hosting]
---



Big thanks to TiagoVXII for doing this.
---

# CloudFlare Pages

[Cloudflare](https://www.cloudflare.com/) is a popular website used to host your websites and protect them, It's used by millions of people also using Retype.

## Step 1: Add retype-action.yml workflow

We first recommend adding the [Retype GitHub Build Action](https://retype.com/guides/github-actions/#step-1-add-retype-actionyml-workflow) to your project to automate the building and deployment of your Retype powered website.

## Step 2: Signup for Cloudflare
1. Go to the Cloudflare website at https://www.cloudflare.com/
2. Click on "Sign up" on the top right of the page.
3. You can sign up using your apple account or normal gmail account.
4. You will be taken to Cloudflare dashboard

## Step 3: Create a new page

1. Once in the dashboard, scroll down until you see "Pages"
2. Click on "Create a project"
3. "Connect to Git"
4. Choose your repository
5. Choose your project name that will be the website name
6. Choose production branch as "retype", refer to step 1.
7. Save and deploy
8. Your website will be up in CloudFlare Page!
