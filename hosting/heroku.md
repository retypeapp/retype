---
icon: <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 24 24"><path fill-rule="evenodd" d="m 19.44,0 c 1.1928,0 2.16,0.9672 2.16,2.16 v 0 19.68 c 0,1.1928 -0.9672,2.16 -2.16,2.16 v 0 H 2.16 C 0.9672,24 0,23.0328 0,21.84 v 0 V 2.16 C 0,0.9672 0.9672,0 2.16,0 v 0 z m 0,1.2 H 2.16 C 1.6308,1.2 1.2,1.6305 1.2,2.16 v 0 19.68 c 0,0.5292 0.4308,0.96 0.96,0.96 v 0 h 17.28 c 0.5295,0 0.96,-0.4308 0.96,-0.96 v 0 V 2.16 C 20.4,1.6305 19.9695,1.2 19.44,1.2 Z M 5.7,15.6 8.4000004,18 5.7,20.4 Z m 2.4000004,-12 v 6.8133 C 9.2982004,10.0233 10.9731,9.6 12.6,9.6 c 1.4835,0 2.3715,0.5832 2.8551,1.0725 0.989287,1.0005 1.043457,2.263571 1.044993,2.502279 L 16.500068,20.4 H 14.1 V 13.233 C 14.0883,12.6729 13.8186,12 12.6,12 10.269063,12 7.6671274,13.119853 7.4149964,13.230859 l -0.0197,0.0087 -1.6953004,0.768 V 3.599959 Z M 16.5,3.6 c -0.162,1.3632 -0.7146,2.67 -1.8,3.9 v 0 h -2.4 c 0.9432,-1.2375 1.5354,-2.5398 1.8,-3.9 v 0 z"/></svg>
tags:
  - guide
  - hosting
visibility: hidden
---
# Heroku

Easily publish your project using [Heroku](https://heroku.com/) using the the dedicated [buildpack](https://github.com/retypeapp/heroku-buildpack/) and let Retype do the building for you!

![](heroku-logo.png)

## Step 1: Clone repository

Clone a git repository using the `git` command line client.

For demonstrations purposes, let's use the Retype website [repo](https://github.com/retypeapp/retype), but of course you likely want to use your own project.

```bash
git clone https://github.com/retypeapp/retype
```

Cloning will create a `retype` directory containing a copy of this website.

### Switch folders

This is important for Heroku to be able to set up the repository remotes in the next step.

```bash
cd retype
```

---

## Step 2: Create the app

Run the following command to create a new Heroku app instance.

```bash
heroku create my-app-name
```

!!!
Remember to replace `my-app-name` with the app name of your preference. The name of the app is prefixed to the public app address.

With the sample above, that would be `https://my-app-name.herokuapp.com/`.
!!!

### Login to Heroku

If you are not already signed into Heroku, run the `heroku login` command.

```bash
heroku login
```

---

## Step 3: Enable buildpack

<!-- TODO
Assign the element address.
Should be retypeapp/heroku-buildpack, or whatever is published to Heroku Elements
-->

Enable the Retype Heroku buildpack using the Heroku CLI.

```bash
heroku buildpacks:set https://github.com/retypeapp/heroku-buildpack
```

The Retype Heroku buildpack will do all the magic. Once the documentation project is pushed to Heroku, the Retype buildpack will start up and handle the documentation build.

---

## Step 4: Publish

Push the repository to Heroku using the `git push` command.

```bash
git push heroku main
```

The `git push` process should only take a few seconds to finish. Once complete, the last lines of output should print out the URL to your app.

With the app name used in this guide, that URL would be `https://my-app-name.herokuapp.com/`.

!!!
Building your documentation project locally is not required, other than for testing. You do not need to commit any built files. The Heroku buildpack will handle all that for you! The project is built remotely.
!!!

---

## Publishing your project

Any Retype project can be deployed to Heroku. Just use your repo in [Step 1](#step-1-clone-repository).

The buildpack only requires a `retype.yml` file to build the documentation and the file can be provided serveral different ways:

1. A `retype.yml` file in the root of your project, or
2. A `retype.yml` file anywhere in the repository, or
3. The full path to a directory containing `retype.yml` or directly to the file itself. Configure using the Heroku [config var](https://devcenter.heroku.com/articles/config-vars) `RETYPE_CONFIG`, or

Please review the [Project](/configuration/project.md) configuration docs for all possible `retype.yml` options.

---

## Further Reading

- [x] Install Retype to run locally, see [Getting Started](/guides/getting-started.md)
- [x] Troubleshoot Heroku push/build issues, see [troubleshooting](https://github.com/retypeapp/heroku-buildpack/#troubleshooting)
- [x] Check out the open-source Retype Heroku [buildpack](https://github.com/retypeapp/heroku-buildpack/)
- [x] To create a Heroku account, see [heroku.com](https://heroku.com)
- [x] Download the Heroku [CLI](https://devcenter.heroku.com/articles/heroku-cli)
- [x] Heroku CLI [documentation](https://devcenter.heroku.com/categories/command-line)