---
icon: globe
tags:
  - guide
  - hosting
---
# Netlify

[Netlify](https://netlify.com) is a popular web hosting platform that allows you to deploy your website easily. In this tutorial, we will go through the steps to sign up, configure, and deploy a Retype built website on Netlify, using GitHub as our version control system. We will assume that the source files for the website are available on the retype branch of the GitHub repository.

## Step 1: Add retype-action.yml workflow

We first recommend adding the Retype Build Action to your project to automate the building and deployment of your Retype powered website.

## Step 2: Sign up for Netlify

Go to the Netlify website at https://www.netlify.com/.
Click on the "Sign up" button in the top-right corner of the page.
You can sign up using your GitHub account or by providing your email and a password. Choose the method that you prefer.
After signing up, you will be taken to the Netlify dashboard.

## Step 3: Create a New Site

Click on the "New site from Git" button in the Netlify dashboard.
Choose GitHub as the Git provider.
Connect your GitHub account by following the prompts.
Select the repository that you want to deploy.
Choose the branch that you want to deploy (in this case, it is the retype branch).
Netlify will automatically detect the build command and publish directory for your website. If your website uses a different configuration, you can customize these settings in the "Build & Deploy" section.
Click on the "Deploy site" button.

## Step 4: Configure Netlify DNS (optional)

If you want to use a custom domain for your website, you can configure Netlify DNS to point to your domain.

In the Netlify dashboard, click on the "Domain settings" button.
Under the "Custom domains" section, click on the "Add custom domain" button.
Enter your domain name and click on the "Verify" button.
Follow the prompts to configure your DNS settings.
Once your DNS settings are configured, click on the "Save" button.

## Step 5: Deploy Updates
When you make changes to your website, you can deploy them to Netlify using the following steps:

Push your changes to the retype branch of your GitHub repository.
Netlify will automatically detect the changes and start the deployment process.
Once the deployment is complete, your changes will be live on your website.
