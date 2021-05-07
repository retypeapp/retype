---
label: Welcome
icon: home
---
# Welcome to Retype

[Retype](https://retype.com/) is an :sparkles: ultra-high-performance :sparkles: generator that builds a website based on simple text files. Focus on your writing while Retype builds the rest.

![Write anything, let Retype build the rest](static/retype-hero.svg)

No coding is required and just one Markdown file, such as a [`README.md`](https://www.makeareadme.com/), will get you started.

The [retype.com](https://retype.com/) website was generated using Retype. View the [source](https://github.com/retypeapp/retype/blob/main/README.md) used to generate this very page.

A new Retype powered website can be up and running within seconds once Retype is installed, which itself takes only a few seconds. :+1:

## Quick start

You can install Retype using `npm`, `yarn`, or the `dotnet` CLI.

From your command line, navigate to a folder location where you have one or more Markdown `.md` files, such as a GitHub project.

Next, choose one of the following tools to first install `retypeapp` and then start Retype by using the `retype watch` command:

||| NPM
```
npm install --global retypeapp
retype watch
```
||| Yarn
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

That's it! Your new Retype website should be up and running.

!!!
You will require either [npm](https://www.npmjs.com/get-npm), [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable), or the [dotnet](https://dotnet.microsoft.com/download/dotnet-core) CLI to be installed before installing Retype. Only one of those three is required, although all three could be installed on your machine too. It's up to you. :raised_hands:

All operating systems are supported, including Mac, Windows, and Linux.
!!!

## Live reload

If a change is detected, such as editing and saving an `.md` file, your Retype website will be updated almost instantly within the browser.

The `retype watch` command runs the following three commands and listens for any new changes in your content.

```
retype init
retype build
retype run
```

After running `retype watch`, edit any `.md` file and see your change appear in the browser.

!!! COMING SOON

Retype can also build amazing reference documentation based upon your projects source code. C# projects are currently in beta support, TypeScript is coming soon, and there are plans for many more languages in the future.

Just point Retype at a C# project and reference documentation will be generated based on your library's source code, code comments, and metadata.

!!!


## Features

#### :tada: It just works

Retype has been built to be easy to use and should _"just work"_ out-of-the-box without any special configuration or troublesome setup.

#### :zap: Lightning fast

Don't blink. Retype was built for speed.

#### :white_check_mark: Easy install

[Installation](guides/getting_started.md) takes only a few seconds. Then you need at least one Markdown `.md` file which Retype will start building a new website from.

#### :muscle: Powerful

Project level [configuration](configuration/project.md) using `retype.json` unlocks many more Retype features and customization.

#### :pencil2: Simple formatting

Pages are [formatted](guides/formatting.md) using Markdown syntax and Retype [Components](components/). Page level [configuration](configuration/page.md) is available, such as customizing the navigation `label` or `description` used by search engines.

#### :computer: Host anywhere

Retype generates a basic HTML website that you can host on any web hosting service, such as [GitHub Pages](https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site). No special server-side software or external dependencies are required. You can host your Retype site as a public website or as a private website inside your organization.

## Support

Technical support questions are best asked in the [Discussions](https://github.com/retypeapp/retype/discussions). The discussions are monitored 24 hours a day and we will do our best to assist.

If you find a defect or would like to submit a feature request, please create an [Issue](https://github.com/retypeapp/retype/issues) and we will investigate right away.