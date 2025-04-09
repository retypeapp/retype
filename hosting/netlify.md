---
icon: /static/logos/netlify.svg
tags:
  - guide
  - hosting
---
# Netlify

[Netlify](https://netlify.com) is a popular web hosting platform that allows you to deploy your website easily. In this tutorial, we will go through the steps to sign up, configure, and deploy a Retype built website on Netlify, using GitHub as our version control system. We will assume that the source files for the website are available on the retype branch of the GitHub repository.

## Step 1: Add retype-action.yml workflow

We first recommend adding the [Retype GitHub Build Action](https://retype.com/guides/github-actions/#step-1-add-retype-actionyml-workflow) to your project to automate the building and deployment of your Retype powered website.

## Step 2: Sign up for Netlify

1. Go to the Netlify website at https://www.netlify.com/.
1. Click on the "Sign up" button in the top-right corner of the page.
1. You can sign up using your GitHub account or by providing your email and a password. Choose the method that you prefer.
1. After signing up, you will be taken to the Netlify dashboard.

## Step 3: Create a New Site

1. Click on the "New site from Git" button in the Netlify dashboard.
1. Choose GitHub as the Git provider.
1. Connect your GitHub account by following the prompts.
1. Select the repository that you want to deploy.
1. Choose the branch that you want to deploy (in this case, it is the retype branch).
1. Netlify will automatically detect the build command and publish directory for your website. If your website uses a different configuration, you can customize 1. these settings in the "Build & Deploy" section.
1. Click on the "Deploy site" button.

## Step 4: Configure Netlify DNS (optional)

If you want to use a custom domain for your website, you can configure Netlify DNS to point to your domain.

1. In the Netlify dashboard, click on the "Domain settings" button.
1. Under the "Custom domains" section, click on the "Add custom domain" button.
1. Enter your domain name and click on the "Verify" button.
1. Follow the prompts to configure your DNS settings.
1. Once your DNS settings are configured, click on the "Save" button.

## Step 5: Deploy Updates
When you make changes to your website, you can deploy them to Netlify using the following steps:

1. Push your changes to the retype branch of your GitHub repository.
1. Netlify will automatically detect the changes and start the deployment process.
1. Once the deployment is complete, your changes will be live on your website.
