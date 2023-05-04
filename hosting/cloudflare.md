---
label: Cloudflare
icon: /static/logos/cloudflare.svg
tags: [guide,hosting]
author: TiagoVXII # Big thanks to TiagoVXII for writing this hosting guide
---
# Cloudflare Pages

[Cloudflare](https://www.cloudflare.com/) is a popular website used to host your websites and protect them, It's used by millions of people also using Retype.

## Step 1: Add retype-action.yml workflow

We first recommend adding the [Retype GitHub Build Action](https://retype.com/guides/github-actions/#step-1-add-retype-actionyml-workflow) to your project to automate the building and deployment of your Retype powered website.

## Step 2: Signup for Cloudflare

1. Go to the Cloudflare website at [cloudflare.com](https://www.cloudflare.com/)
2. Click on **Sign up** on the top right of the page and follow the instructions
4. After sign up, you will have access to your Cloudflare dashboard

## Step 3: Create a new page

1. Once in the dashboard, scroll down until you see **Pages**
2. Click on **Create a project**
3. Click on **Connect to Git**
4. Follow the instruction and choose your repository
5. Choose your project name and by default that will be the website name
6. Choose production branch as `retype`, but please ensure you have completed [Step 1](#step-1-add-retype-actionyml-workflow) above first
7. Save and deploy
8. Give Cloudflare a few moments and your website will be online :+1:
