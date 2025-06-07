---
label: "Home"
icon: home
---
# Welcome to Retype

![](/static/retype-hero.png)

[Retype](https://retype.com/) is a static website generator that builds a website based on simple Markdown (.md) text files. Focus on your writing while Retype builds the rest.

{.callout}
> “Retype is the perfect fit for my user persona - tech savvy non-devs who want to write using the best web standards out there.”

No coding is required and just one Markdown file, such as a [README.md](https://www.makeareadme.com/), will get you started.

!!!
The [retype.com](https://retype.com/) website was generated using Retype. View the [source](https://github.com/retypeapp/retype/blob/main/README.md) files used to generate this very page.
!!!

{.callout}
> “I don't want to write code to write docs, I just want to write docs.”

A new Retype powered website can be up and running within seconds once Retype is installed, which itself takes only a few seconds. :+1:

---

## Quick start

You can install Retype using `npm`, `yarn`, or the `dotnet` CLI.

From your command line, navigate to a folder location where you have one or more Markdown (.md) files, such as a GitHub project.

Next, choose one of the following tools to first install `retypeapp` and then start Retype by using the `retype start` [command](/guides/cli.md#retype-start):

+++ NPM
```
npm install retypeapp --global
retype start
```
+++ Yarn
```
yarn global add retypeapp
retype start
```
+++ dotnet
```
dotnet tool install retypeapp --global
retype start
```
+++

That's it! Your new Retype website should be up and running.

!!!
You will require either [npm](https://www.npmjs.com/get-npm), [Yarn](https://classic.yarnpkg.com/en/docs/install/), or the [dotnet](https://dotnet.microsoft.com/download/dotnet-core) CLI to be installed before installing Retype. Only one of those three is required, although all three could be installed on your machine too. It's up to you. :raised_hands:

All operating systems are supported: including Mac, Windows, and Linux.
!!!

---

## Features

#### :icon-shield-check: It just works

Retype has been built to be easy to use and should _"just work"_ out-of-the-box without any special configuration or troublesome setup.

#### :icon-zap: Lightning fast

Don't blink. Retype was built for speed.

#### :icon-gear: Easy install

[Installation](/guides/getting-started.md) takes only a few seconds. Then all you need is one Markdown **.md** file which Retype will start building a new website from.

#### :icon-plug: Powerful

Project level [configuration](/configuration/project.md) using **retype.yml** unlocks many more features and customization.

#### :icon-pencil: Simple formatting

Pages are [formatted](/guides/formatting.md) using Markdown syntax and Retype [components](/components/components.md). Page level [configuration](/configuration/page.md) is available, such as setting a custom navigation [`label`](/configuration/page.md#label) or [`icon`](/configuration/page.md#icon).

#### :icon-sync: Live reload

If a change is detected, such as editing and saving an **.md** file, your Retype website will be updated almost instantly within the browser.

#### :icon-server: Host anywhere

Retype generates a basic HTML website that you can host on any web hosting service, or for free using [GitHub Pages](/hosting/github-pages.md), [Netlify](/hosting/netlify.md), or [Cloudflare](/hosting/cloudflare.md). No special server-side software or external dependencies are required. You can host your Retype site as a public website or as a private website within your organization's network.

---

## Support

Do you have a technical support question, find a defect, or would like to make a feature request? Please create an [issue](https://github.com/retypeapp/retype/issues) to get the conversation started.

Do you have a general inquiry? Please feel free to contact us at hello@retype.com.

We :heart: your feedback.
