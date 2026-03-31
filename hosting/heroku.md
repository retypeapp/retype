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

The buildpack only requires a **retype.yml** file to build the documentation and the file can be provided serveral different ways:

1. A **retype.yml** file in the root of your project, or
2. A **retype.yml** file anywhere in the repository, or
3. The full path to a directory containing **retype.yml** or directly to the file itself. Configure using the Heroku [config var](https://devcenter.heroku.com/articles/config-vars) `RETYPE_CONFIG`, or

Please review the [Project](/configuration/project.md) configuration docs for all possible **retype.yml** options.

---

## Further Reading

- [x] Install Retype to run locally, see [Getting Started](/guides/getting-started.md)
- [x] Troubleshoot Heroku push/build issues, see [troubleshooting](https://github.com/retypeapp/heroku-buildpack/#troubleshooting)
- [x] Check out the open-source Retype Heroku [buildpack](https://github.com/retypeapp/heroku-buildpack/)
- [x] To create a Heroku account, see [heroku.com](https://heroku.com)
- [x] Download the Heroku [CLI](https://devcenter.heroku.com/articles/heroku-cli)
- [x] Heroku CLI [documentation](https://devcenter.heroku.com/categories/command-line)
