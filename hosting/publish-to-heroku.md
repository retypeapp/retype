---
icon: <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 24 24"><path fill-rule="evenodd" d="m 19.44,0 c 1.1928,0 2.16,0.9672 2.16,2.16 v 0 19.68 c 0,1.1928 -0.9672,2.16 -2.16,2.16 v 0 H 2.16 C 0.9672,24 0,23.0328 0,21.84 v 0 V 2.16 C 0,0.9672 0.9672,0 2.16,0 v 0 z m 0,1.2 H 2.16 C 1.6308,1.2 1.2,1.6305 1.2,2.16 v 0 19.68 c 0,0.5292 0.4308,0.96 0.96,0.96 v 0 h 17.28 c 0.5295,0 0.96,-0.4308 0.96,-0.96 v 0 V 2.16 C 20.4,1.6305 19.9695,1.2 19.44,1.2 Z M 5.7,15.6 8.4000004,18 5.7,20.4 Z m 2.4000004,-12 v 6.8133 C 9.2982004,10.0233 10.9731,9.6 12.6,9.6 c 1.4835,0 2.3715,0.5832 2.8551,1.0725 0.989287,1.0005 1.043457,2.263571 1.044993,2.502279 L 16.500068,20.4 H 14.1 V 13.233 C 14.0883,12.6729 13.8186,12 12.6,12 10.269063,12 7.6671274,13.119853 7.4149964,13.230859 l -0.0197,0.0087 -1.6953004,0.768 V 3.599959 Z M 16.5,3.6 c -0.162,1.3632 -0.7146,2.67 -1.8,3.9 v 0 h -2.4 c 0.9432,-1.2375 1.5354,-2.5398 1.8,-3.9 v 0 z"/></svg>
layout: page
tags: [guide, heroku, publish]
---
# Publish to Heroku

Easily publish your documentation using Heroku by just uploading the raw project and letting Retype build for you!

With the dedicated Retype Buildpack for Heroku, any retype project can be published to Heroku in just a few steps!

This guide will use the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) to go through four simple steps to publish this very website to a freshly created Heroku App.

---

## Step 1: Clone this website's repository

To clone this website on your end using the **git** commandline client, issue the following command:

```bash Make a local clone of retype.com website
git clone https://github.com/retypeapp/retype
```

It will then create a **retype** directory containing a copy of this website.

### Switch to the repository folder

This is important for Heroku to be able to set up the repository remotes in the next step.

```bash Switch into the repository folder
cd retype
```

---

## Step 2: Create the app

Run the following in your command prompt:

```bash New app using the Heroku CLI.
heroku create my-app-name
```

!!! Replace `my-app-name`
Remember to replace `my-app-name` with the app name of your preference. The name of the app is prefixed to the public app address. With the code above it would be:
**https://my-app-name.herokuapp.com/**.
!!!

!!! Log in to Heroku
If you are not logged already, you can log in to Heroku with the CLI by issuing the `heroku login` command.
!!!

---

## Step 3: Enable Retype Buildpack

<!-- FIXME FIXME FIXME FIXME
Assign the elements' address (something like retypeapp/heroku-buildpack, whatever is published to Heroku Elements)
FIXME FIXME FIXME FIXME -->
```bash Set Retype Buildpack using the Heroku CLI
heroku buildpacks:set https://github.com/retypeapp/heroku-buildpack
```

This will do the actual magic: With this, once the documentation project is pushed to Heroku, our dedicated buildpack will kick in and handle the documentation build!

---

## Step 4: Publish the project

Now, simply push the repository to heroku using the **git** command:

```bash Push the repository
git push heroku main
```

The `git push` process should take a few seconds to complete. Once it is done, the last lines of output should show the full URL to your app. With the app name used in this guide, it would be **https://my-app-name.herokuapp.com/**.

!!! The project is built remotely
You don't need to build your documentation project with Retype beforehand other than for testing it. You also don't need to commit any built files. The Heroku Buildpack will handle all that for you!
!!!

!!! Your project is safe
The Retype Buildpack will use your project data to build the documentation, and will keep only the built output from Retype; this means that anything that is not deployed to Retype's output won't be accessible in the published website.
!!!

---

## Publishing your own project

Any documentation project set up to be built with retype can be replaced in [step 1](#step-1-clone-this-websites-repository). The buildpack requires a **retype.yml** file in order to build the documentation. The file may be provided in different ways:

- a **retype.yml** file at the root of the repository
- a **retype.yml** file anywhere in the repository
- the full path to a directory containing **retype.yml**, specified via the [Heroku config var](https://devcenter.heroku.com/articles/config-vars) `RETYPE_CONFIG`
- the full path to the file. The specified file will then be used as **retype.yml** regardless of its name; also specified via Heroku config var](https://devcenter.heroku.com/articles/config-vars) `RETYPE_CONFIG`

If there's no **retype.yml** file in the repository, just run `retype watch` and adjust the settings to your liking in the just-created **retype.yml**, then commit it. Your project would then be ready to be pushed to Heroku.

See [Quick Start](../README.md#quick-start) for details on `retype watch`, and see [Configuration > Project](../configuration/project.md) for possible **retype.yml** config values.

!!! Several **retype.yml** files in the repo
If there are various **retype.yml** files across the repository, we can't guarantee which one the buildpack is going to pick, and it is a good idea to use the `RETYPE_CONFIG` config var to indicate where the intended configuration file is to be found within the repo.
!!!

---

## Summary

- [x] Grab a local copy of Retype's Website, see [step 1](#step-1-clone-this-websites-repository).
- [x] Create the Heroku App, see [step 2](#step-2-create-the-app).
- [x] Instruct the app to use Retype's Buildpack, see [step 3](#step-3-enable-retype-buildpack).
- [x] Publish (by pushing the repo to Heroku), see [step 4](#step-4-publish-the-project).

---

## Further Reading

- [x] Install Retype to build locally, see [Getting Started](getting-started).
- [x] Details on `retype watch`, see [Quick Start](../README.md#quick-start).
- [x] Accepted configuration settings in **retype.yml**, see [Configuration > Project](../configuration/project.md).
- [x] Troubleshoot Heroku push/build issues, see [Retype Buildpack's README Troubleshooting section](https://github.com/retypeapp/heroku-buildpack/blob/main/README.md#troubleshooting).
- [x] More information on Retype Buildpack, see [README in Retype Buildpack's repo](https://github.com/retypeapp/heroku-buildpack/blob/main/README.md).
- [x] Create account in Heroku, see [Heroku website](https://heroku.com).
- [x] Download the Heroku CLI, see [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
- [x] Heroku CLI documentation, see [Command Line Article in Heroku dev center](https://devcenter.heroku.com/categories/command-line)