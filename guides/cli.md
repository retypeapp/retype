---
order: -100
icon: terminal
tags: [guide]
---
# Retype CLI

The Retype CLI is clean and simple. The majority of the time you will run just one command: `retype start`

!!!
Be sure to review the [project](/configuration/project.md) options available within the **retype.yml** as it does unlock more power, flexibility, and customization.
!!!

The `--help` option can be passed with any command to get additional details, for instance `retype start --help` will return all options for the `retype start` command.

The command `retype --version` will return the current version number of your Retype install. See all public Retype [releases](https://github.com/retypeapp/retype/releases).

Let's go through each of the `retype` CLI commands and be sure to check out the [Getting Started](/guides/getting-started.md) guide for step-by-step instructions on using each of these commands.

```
Description:
  Retype CLI

Usage:
  retype [command] [options]

Options:
  --info          Display Retype information
  --version       Show version information
  -?, -h, --help  Show help and usage information

Commands:
  start <path>  Build and serve the project using a local development only web server
  init  <path>  Initialize a new Retype project
  build <path>  Generate a static website from the project
  serve <path>  Serve the website in a local development only web server
  clean <path>  Clean the output directory
  wallet        Manage Retype secret license keys
```

---

## `retype start`

The `retype start` command is the easiest way to get your project built and running in a browser within seconds.

```
retype start
```

The `retype start` command will also watch for file changes and will automatically update the website in your web browser with the updated page.

The `retype start` command automatically opens the default web browser on your machine and loads the website into the browser. You can suppress this automatic opening of the default web browser by passing the `--no-open` flag or its alias `-n`.

```
retype start -n
```

### Options

```
Description:
  Build and serve the project using a local development only web server

Usage:
  retype start [<path>] [options]

Arguments:
  <path>  Path to the project root or project config file [Optional]

Options:
  --pro                  Enable Retype Pro preview
  --secret <secret>      Retype license key
  --password <password>  Private page password
  --host <host>          Custom Host name or IP address
  --port <port>          Custom TCP port
  -n, --no-open          Prevent default web browser from being opened
  -v, --verbose          Enable verbose logging
  -a, --api              Watch for API changes
  -?, -h, --help         Show help and usage information
```

!!!danger
While it is technically possible to host your website publicly using `retype start` and the web server built into Retype, **DON'T DO IT**.

You should use a dedicated website hosting service, such as [GitHub Pages](/hosting/github-pages.md), [Netlify](https://www.netlify.com/), [Cloudflare](/hosting/cloudflare.md), or absolutely any other web hosting service.

If you _really really really_ want to try public hosting using the built in web server, use [`retype serve`](#retype-serve).
!!!

---

## `retype init`

You can manually create a **retype.yml** file, or you can have Retype stub out a basic file with a few initial values by running the command `retype init`.

From your command line, navigate to any folder location where you have one or more Markdown **.md** files, such as the root of a GitHub project, then run the following command:

```
retype init
```

Calling the `retype init` command will create a simple **retype.yml** file with the following default values:

{%{
```yml Sample retype.yml
input: .
output: .retype
url: example.com # Add your website here
branding:
  title: Project Name
  label: Docs
links:
  - text: Getting Started
    link: https://retype.com/guides/getting-started/
footer:
  copyright: "&copy; Copyright {{ year }}. All rights reserved."
```
}%}
All the configs are optional, but the above sample demonstrates a few of the options you will typically want to start with. See the [project](/configuration/project.md) configuration docs for a full list of all options.

To change the title of the project, revise the `branding.title` config. For instance, let's change to `Company X`:

```yml
branding:
  title: Company X
```

If there is already a **retype.yml** file within the project, running the `retype init` command will not create a new **retype.yml** file.

The **retype.yml** file is not _actually_ required, but you will want to make custom [configurations](/configuration/project.md) to your project and this is how those instructions are passed to Retype.

### Options

```
Description:
  Initialize a new Retype project

Usage:
  retype init [<path>] [options]

Arguments:
  <path>  Path to the project root [Optional]

Options:
  --override <override>  JSON configuration overriding Retype config values
  -v, --verbose          Enable verbose logging
  -?, -h, --help         Show help and usage information
```

///region override
### `--override`

See the [`--override`](#retype---override) docs below for additional details.
///endregion

---

## `retype build`

To generate your new website, run the command `retype build`. This command builds a new website based upon the **.md** files within the [`input`](/configuration/project.md) location.

```
retype build
```

Within just a few seconds, Retype will create a new website and save to the `output` location as defined in the **retype.yml**. By default, the `output` location is a new folder named `.retype`. You can rename to whatever you like, or adjust the path to generate the output to any other location, such as another sub-folder.

If the **.md** documentation files for your project were not located in the root (`.`) but within a `docs` subfolder AND you wanted to have Retype send the output to a `website` folder, you would use the following config:

```yml
input: docs
output: website
```

Let's say you wanted your new Retype website to run from within a `docs` folder which was then also inside of a root `website` folder, then you would configure:

```yml
input: docs
output: website/docs
```

If you are hosting your website using [GitHub Pages](https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site) AND you wanted to host your website from the `docs` folder, you could then move your **.md** files into a different subfolder and configure as follows:

```yml
input: src
output: docs
```

The `input` and `output` configs provide unlimited flexibility to instruct Retype on where to get your project content and configurations files, and where to output the generated website.

### Options

```
Description:
  Generate a static website from the project

Usage:
  retype build [<path>] [options]

Arguments:
  <path>  Path to the project root or project config file [Optional]

Options:
  --output <output>      Custom path to the output directory
  --secret <secret>      Retype license key
  --password <password>  Private page password
  --override <override>  JSON configuration overriding project config values
  -w, --watch            Watch for file changes
  -v, --verbose          Enable verbose logging
  -a, --api              Watch for API changes
  -?, -h, --help         Show help and usage information
```

{{ include "cli.md#override" }}

---

## `retype serve`

The `retype serve` command starts a local development only web server and hosts your website.

```
retype serve
```

The website generated by Retype is a static HTML and JavaScript site. No special server-side hosting, such as Node, PHP, or Ruby is required. A Retype generated website can be hosted on any web server or hosting service, such as [GitHub Pages](https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site), [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/), [Netlify](https://www.netlify.com/), or [Cloudflare Pages](https://pages.cloudflare.com/).

You can also use any other local web server instead of `retype serve`. Retype only includes a web server out of convenience, not requirement. Any web server will do. A couple other simple web server options could be [live-server](https://www.npmjs.com/package/live-server) or [static-server](https://www.npmjs.com/package/static-server).

### Options

```
Description:
  Serve the website in a local development only web server

Usage:
  retype serve [<path>] [options]

Arguments:
  <path>  Path to the project root or project config file [Optional]

Options:
  --host <host>   Custom Host name or IP address
  --port <port>   Custom TCP port
  -l, --live      Live reload open browsers when a change in the project output is detected
  -v, --verbose   Enable verbose logging
  -?, -h, --help  Show help and usage information
```

{{ include "cli.md#override" }}

---

## `retype clean`

The `retype clean` command will delete the Retype managed files from the `output` folder.

If you manually add files or another process adds files to the `output`, those files will not be removed by `retype clean`.

Including the `--dry` flag triggers a dry run for the command and will list the files that _**would be**_ deleted if the `--dry` flag was not included.

### Options

```
Description:
  Clean the output directory

Usage:
  retype clean [<path>] [options]

Arguments:
  <path>  Path to the project root or project config file [Optional]

Options:
  --dry           List files and directories that would be deleted
  -v, --verbose   Enable verbose logging
  -?, -h, --help  Show help and usage information
```

---

## `retype wallet`

The `retype wallet` command is for managing Retype license keys.

Retype license keys are stored within an encrypted wallet file called **license.dat**.

To add a Retype license key to your wallet, run the following command:

```
retype wallet --add <your-license-key-here>
```

Once a license key is added to your wallet, the license key does not need to be added again. The key is stored in the wallet and Retype will read the key from the wallet with future builds.

A Retype license key can also be passed during a build. The key is NOT stored in wallet. The key would need to be passed with each call to `retype build`.

```
retype build --secret <your-license-key-here>
```

### RETYPE_SECRET

See how to configure a [`RETYPE_SECRET`](../configuration/envvars.md/#retype_secret) Environment variable for an option to set your project license key during runtime.

### Options

```
Description:
  Manage Retype secret license keys

Usage:
  retype wallet [options]

Options:
  --add <secret>     Add a secret license key to the wallet
  --remove <secret>  Remove a secret license key from the wallet
  --list             List the stored secret license keys
  --clear            Clear the wallet
  -?, -h, --help     Show help and usage information
```

---

## `retype --override`

The Retype CLI [`build`](#retype-build) command supports the `--override` option to allow dynamically modifying **retype.yml** project configurations during build.

The `--override` option is helpful in certain scenarios such as generating websites requiring different `url` configs, without the need to maintain several **retype.yml** files.

The CLI expects an escaped json object to be passed as the option value.

Retype merges the **retype.yml** configuration with the provided json object in a way that colliding configurations from the json override will overwrite the **retype.yml** values.

!!!
The `--override` json object may contain duplicate keys which will be processed sequentially. Last in wins.
!!!

### Basic config

Using the following **retype.yml** project configuration file as an example:

~~~yml **retype.yml**
url: https://retype.com
~~~

The command below will build the website with the url `https://beta.retype.com`.

```
retype build --override "{ \"url\": \"https://beta.retype.com\" }"
```

### Nested config

The following sample demonstrates overriding a more complex configuration object.

Using the following **retype.yml** project configuration file as an example, let's change the [`label`](/configuration/project.md#label) to `beta`, instead of `v1.10`.

~~~yml **retype.yml**
branding:
  title: Retype
  label: v1.10
~~~

The `retype build --override` would be:

```
retype build --override "{ \"branding\": { \"label\": \"beta\"} }"
```

To completely remove all the configs in `branding`, pass `null`:

```
retype build --override "{ \"branding\": null }"
```

### Add to list

The following command will add a `GitHub` link to the list of [`links`](/configuration/project.md#links).

~~~yml **retype.yml**
links:
  - link: Retype
    text: https://retype.com
~~~

```
retype build --override "{ \"links\": [{ \"link\": \"https://github.com/retypeapp/retype\", \"text\": \"GitHub\" }] }"
```

### Remove config

Passing `null` will remove the corresponding configuration value.

In the following sample, the website will be built as though `url` was not configured.

```
retype build --override "{ \"url\": null }"
```
