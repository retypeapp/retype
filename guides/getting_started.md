---
order: 100
icon: rocket
---
# Getting Started

Getting started with Retype is super quick and you can be up and running within seconds. 

Check out the [Quick start](../README.md#quick-start) for the condensed process, or continue here with the full details and expanded steps. 

## Prerequisites

Retype is installed using either [`npm`](https://www.npmjs.com/get-npm), [`yarn`](https://classic.yarnpkg.com/en/docs/install/#mac-stable), or the [`dotnet`](https://dotnet.microsoft.com/download/dotnet-core) CLI. 

You only need one of those three as a prerequisite, although all three could be installed on your computer too. It's up to you. :raised_hands:

| Package Manager | Supported Platforms |
| --- | --- |
| [`npm`](https://www.npmjs.com/get-npm) | `Mac`, `Win`, `Linux` |
| [`yarn`](https://classic.yarnpkg.com/en/docs/install/#mac-stable) | `Mac`, `Win`, `Linux` |
| [`dotnet`](https://dotnet.microsoft.com/download/dotnet-core) | `Mac`, `Win`, `Linux` |

## Install

It takes just a few seconds to install Retype using any of the following commands. Choose a command for a Package Manager you have installed on your computer.

||| npm
```
npm install --global retypeapp
retype watch
```
||| yarn
```
yarn global add retypeapp
retype watch
```
||| dotnet
```
dotnet tool install --global retypeapp
retype watch
```
|||

That's it! :tada: Your new Retype website should be up and running. :tada:

!!!

If you already have the `dotnet` CLI installed on your machine, installing using `dotnet tool install --global retypeapp` will be the fastest option, but any of the options should install within seconds. They all produce the same result and run with the same performance.

!!!

## Commands

Using the `retype watch` command is the easiest way to get your project built and running in a browser within seconds, although `retype watch` is just shortcut for a sequence of other commands that can be executed individually.

### `retype init`

The next step is to create a `retype.json` configuration file for you project. The `retype.json` file isn't _actually_ required, but you will want to make custom [configurations](../configuration/project.md) to your project and this is how those instructions are passed to Retype.

You can manually create a `retype.json` file, or you can have Retype stub out a basic file with a few initial values by running the command `retype init`.

From your command line, navigate to any folder location where you have one or more Markdown `.md` files, such as the root of a GitHub project, then run the following command: 

```
retype init
```

Calling the `retype init` command will create a simple `retype.json` file with the following default values:

```json Sample retype.json
{
  "input": ".",
  "output": ".retype",

  "branding": {
    "title": "Project Name",
    "label": "Docs"
  },

  "links": [
    {
      "text": "Getting Started",
      "link": "https://retype.com/getting_started/"
    }
  ],

  "footer": {
    "copyright": "© Copyright {{ year }}. All rights reserved."
  }
}
```

All the configs are optional, but the above demonstrates a few of the options you will typically want to start with. See the [Project configuration](../configuration/project.md) docs for a full list of all options.

To change the title of the project, revise the `branding.title` config. For instance, let's change to `"Company X"`:

```json
{
  "branding": {
    "title": "Company X",
  }
}
```

### `retype build`

To generate your new website, run the command `retype build`. 

```
retype build
```

Within just a few seconds, Retype will create a new website and save to the `output` location as defined in the `retype.json`. By default, the `output` location is a new folder named `retype`. You can rename to whatever you like, or adjust the path to generate the output to any other location, such as another sub-folder. 

If the `.md` documentation files for your project were located not in the root (`.`) but within a `docs` subfolder AND you wanted to have Retype send the output to a `website` folder, you would use the following config:

```json
{
  "input": "docs",
  "output": "website",
}
```

Let's say you wanted the your new Retype website to run from within a `docs` folder which was then also inside of a root `website` folder, then you would configure:

```json
{
  "input": "docs",
  "output": "website/docs"
}
```

If you are hosting your website using [GitHub Pages](https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site) AND you wanted to host your website from the `docs` folder, you could then move your `.md` files into a different subfolder and configure as follows:

```json
{
  "input": "src",
  "output": "docs"
}
```

The `input` and `output` configs provide unlimited flexibility to instruct Retype on where to get your project content and configurations files and where to output the generated website.

### `retype run`

To view your Retype generated website, just run the command `retype run`.

```
retype run
```

The website generated by Retype is a static HTML and JavaScript site. No special server-side hosting, such as PHP or Ruby is required. A Retype generated website can be hosted on any webserver or hosting service, such a [GitHub Pages](https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site).

You can also use any other local web server instead of `retype run`. Retype only includes a web server out of convenience, not requirement. Any web server will do. A couple other simple options could be [live-server](https://www.npmjs.com/package/live-server) or [static-server](https://www.npmjs.com/package/static-server).

## Uninstall

Done with Retype? It's okay, we understand. :cry: 

Uninstalling Retype is just as simple as installing. Use the same Package Manager to uninstall as you did to install. For instance, if you used `npm` to install Retype, run the `npm` uninstall command to remove.

||| npm
```
npm uninstall --global retypeapp
```
||| yarn
```
yarn global remove retypeapp
```
||| dotnet
```
dotnet tool uninstall --global retypeapp
```
|||

Any Retype related files within your project can be deleted, such as the `retype.json`.
