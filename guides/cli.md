---
order: -100
icon: terminal
---
# Retype CLI

The Retype CLI is clean and simple. The majority of the time you will run just one command: `retype watch`

!!!

Be sure to review the [project](../configuration/project.md) options available within the `retype.yml` as it does unlock a lot more power, flexibility, and customization.

!!!

The `--help` option can be passed with any command to get additional details, for instance `retype watch --help` will return all options for the `retype watch` command.

The command `retype --version` will return the current version number of your Retype install. See all public Retype [releases](https://github.com/retypeapp/retype/releases).

Let's go through each of the `retype` CLI commands and be sure to check out the [Getting Started](getting-started.md) guide for step by instructions on using each of these commands.

---

## `retype watch`

The `retype watch` command is the easiest way to get your project built and running in a browser within seconds, although `retype watch` is just shortcut for a sequence of other commands that could be executed individually.

```
retype init
retype build
retype run
```

The `retype watch` command will also watch for file changes and will automatically update the website in your web browser with the updated page.

### Options

```
watch:
  Serve a static website, watch for file changes

Usage:
  retype watch [options] [<path>]

Arguments:
  <path>    Path to the project root or a Retype config [Optional]

Options:
  -a, --api              Watch for API changes
  --license <license>    Retype license key
  --host <host>          Custom Host name or IP address
  --port <port>          Custom TCP port
  -v, --verbose          Verbose logging
  -?, -h, --help         Show help and usage information
```

---

## `retype init`

You can manually create a `retype.yml` file, or you can have Retype stub out a basic file with a few initial values by running the command `retype init`.

From your command line, navigate to any folder location where you have one or more Markdown `.md` files, such as the root of a GitHub project, then run the following command:

```
retype init
```

Calling the `retype init` command will create a simple `retype.yml` file with the following default values:

```yml Sample retype.yml
input: .
output: .retype
url: # Add your website address here
branding:
  title: Project Name
  label: Docs
links:
  - text: Getting Started
    link: https://retype.com/guides/getting-started/
footer:
  copyright: "&copy; Copyright {{ year }}. All rights reserved."
```

All the configs are optional, but the above sample demonstrates a few of the options you will typically want to start with. See the [project](../configuration/project.md) configuration docs for a full list of all options.

To change the title of the project, revise the `branding.title` config. For instance, let's change to `Company X`:

```yml
branding:
  title: Company X
```

If there is already a `retype.yml` file within the project, runnin the `retype init` command will not create a new `retype.yml` file.

The `retype.yml` file is not _actually_ required, but you will want to make custom [configurations](../configuration/project.md) to your project and this is how those instructions are passed to Retype.

### Options

```
init:
  Initialize a new Retype project

Usage:
  retype init [options] [<path>]

Arguments:
  <path>    Path to the project root [Optional]

Options:
  --override <override>    JSON configuration overriding Retype config values
  -v, --verbose            Verbose logging
  -?, -h, --help           Show help and usage information
```

---

## `retype build`

To generate your new website, run the command `retype build`. This command builds a new website based upon the `.md` files within the [`input`](../configuration/project.md) location.

```
retype build
```

Within just a few seconds, Retype will create a new website and save to the `output` location as defined in the `retype.yml`. By default, the `output` location is a new folder named `.retype`. You can rename to whatever you like, or adjust the path to generate the output to any other location, such as another sub-folder.

If the `.md` documentation files for your project were located not in the root (`.`) but within a `docs` subfolder AND you wanted to have Retype send the output to a `website` folder, you would use the following config:

```yml
input: docs
output: website
```

Let's say you wanted the your new Retype website to run from within a `docs` folder which was then also inside of a root `website` folder, then you would configure:

```yml
input: docs
output: website/docs
```

If you are hosting your website using [GitHub Pages](https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site) AND you wanted to host your website from the `docs` folder, you could then move your `.md` files into a different subfolder and configure as follows:

```yml
input: src
output: docs
```

The `input` and `output` configs provide unlimited flexibility to instruct Retype on where to get your project content and configurations files and where to output the generated website.

### Options

```
build:
  Generate a static website

Usage:
  retype build [options] [<path>]

Arguments:
  <path>    Path to the project root or a Retype config [Optional]

Options:
  --output <output>        Custom path to the output directory
  --license <license>      Retype license key
  --override <override>    JSON configuration overriding Retype config values
  -v, --verbose            Verbose logging
  -?, -h, --help           Show help and usage information
```

---

## `retype run`

The `retype run` command starts up your new Retype website and opens in a web browser.

```
retype run
```

The website generated by Retype is a static HTML and JavaScript site. No special server-side hosting, such as PHP or Ruby is required. A Retype generated website can be hosted on any web server or hosting service, such a [GitHub Pages](https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site).

You can also use any other local web server instead of `retype run`. Retype only includes a web server out of convenience, not requirement. Any web server will do. A couple other simple options could be [live-server](https://www.npmjs.com/package/live-server) or [static-server](https://www.npmjs.com/package/static-server).

### Options

```
run:
  Serve a static website

Usage:
  retype run [options] [<path>]

Arguments:
  <path>    Path to the project root or a Retype config [Optional]

Options:
  --host <host>     Custom Host name or IP address
  --port <port>     Custom TCP port
  -v, --verbose     Verbose logging
  -?, -h, --help    Show help and usage information
```

---

## `retype wallet`

The `retype wallet` command is for managing Retype license keys.

Retype license keys are stored within an encrypted wallet file called `license.dat`.

To add a Retype license key to your wallet, run the following command:

```
retype wallet --add <your-key-here>
```

### Options

```
wallet:
  Manage secret license keys

Usage:
  retype wallet [options]

Options:
  --add <key>          Add a license key to the wallet
  --remove <key>       Remove a license key from the wallet
  --list               List the stored license keys
  --clear              Clear the wallet
  -?, -h, --help       Show help and usage information
```

---

## Usage of `--override`

The Retype CLI commands supporting the `--override` option allow to modify configuration loaded from a `retype.yml` file prior to execution.

The `--override` option is helpful in certain scenarios like generating websites having different `url` config from the same sources, without the need to maintain several `retype.yml` files.

The CLI expects an **escaped** json object passed as the option value. Then Retype merges `retype.yml` configuration with the provided json object in the way that colliding configs from the latter win. The `--override` json object may contain duplicates that will be processed sequentially.

#### Override a single top-level config

~~~yml `retype.yml`
url: https://retype.com
~~~

The command below will build the webisite with `url: https://beta.retype.com`.

```
retype build --override "{ \"url\": \"https://beta.retype.com\" }"
```

Passing `null` will remove the corresponding config value, so the website will be built like if `url` was not configured at all:

```
retype build --override "{ \"url\": null }"
```

#### Override a single nested config

When overriding a nested config, all parent keys must be included too.

The sample below will build a website having `title: Retype` and `label: beta`.

~~~yml `retype.yml`
branding:
  title: Retype
  label: v1.10
~~~

```
retype build --override "{ \"branding\": { \"label\": \"beta\"} }"
```

#### Override a complex config object

In order to override a complex object completely, it needs to be removed first.

The sample below will build a website having `label: beta` and no title.

~~~yml `retype.yml`
branding:
  title: Retype
  label: v1.10
~~~

```
retype build --override "{ \"branding\": null, \"branding\": { \"label\": \"beta\"} }"
```

!!!
Please pay attention that duplicated keys are applied sequentially. Thus, it's important to place `null` before the overriding object.
!!!

#### Add new item to an array

The following command will add the `GitHub` link to the `links` configuration array.

~~~yml `retype.yml`
links:
  - link: Retype
    text: https://retype.com
~~~

```
retype build --override "{ \"links\": [ { \"link\": \"https://github.com/retypeapp/retype\", \"text\": \"GitHub\" } ] }"
```

In order to replace an array items, the array needs to be removed first, and then overridden with an array of desired items.
