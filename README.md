---
label: "Home"
icon: home
backlinks:
  enabled: false
---
# Build docs from Markdown

![](/static/retype-hero.png)-

Retype turns your Markdown `.md` files into a beautiful, fully-functional website. Write in plain Markdown, run one command, and you have a production-ready site you can host anywhere.

No coding is required and just one Markdown file, such as a `README.md`, will get you started.

## Get Started

[!card layout="signal" text="Install Retype in seconds using npm, yarn, or dotnet"](/guides/installation.md)
[!card layout="signal" title="Quick Start" text="Get your first Retype site running in minutes"](/guides/getting-started.md)
[!card layout="signal" title="CLI Reference" text="All commands, flags, and options for the Retype CLI"](/guides/cli.md)
[!card layout="signal" icon="gear" title="Configuration" text="Customize your site with the retype.yml project file"](/configuration/project.md)
[!card layout="signal" text="Enrich your content with tabs, callouts, cards, and more"](/components/components.md)
[!card layout="signal" icon="server" title="Hosting" text="Deploy your site to GitHub Pages, Netlify, Cloudflare, and more"](/hosting/github-pages.md)

## How it works

>>> Install Retype

You can install Retype using [npm](https://www.npmjs.com/get-npm), [Yarn](https://classic.yarnpkg.com/en/docs/install/), or the [dotnet](https://dotnet.microsoft.com/download/dotnet-core) CLI.

+++ NPM
```
npm install retypeapp --global
```
+++ Yarn
```
yarn global add retypeapp
```
+++ dotnet
```
dotnet tool install retypeapp --global
```
+++

>>> Start your project

Navigate to any folder with Markdown files and run `retype start`.

```
retype start
```

Retype builds your site and opens it in the browser automatically.

>>>

{.callout}
> “I don't want to write code to write docs, I just want to write docs.”

## Why Retype?

Retype is designed to get out of your way so you can focus on writing. There’s no complex build pipeline, no framework to learn, and no dependencies to maintain.

### :icon-shield-check: It just works

Retype has been built to be easy to use and should **_just work_** out-of-the-box without any special configuration, technical knowledge, or troublesome setup.

### :icon-zap: Lightning fast

Don't blink. Retype was built for speed.

### :icon-gear: Easy install

[Installation](/guides/getting-started.md) takes only a few seconds. Then all you need is one Markdown `.md` file which Retype will start building a new website from.

### :icon-plug: Powerful

Project level [configuration](/configuration/project.md) using **retype.yml** unlocks many more features and customization.

### :icon-pencil: Simple formatting

Pages are formatted using [[Markdown]] syntax and Retype [components](/components/components.md). Page level [configuration](/configuration/page.md) is available, such as setting a custom navigation [`label`](/configuration/page.md#label) or [`icon`](/configuration/page.md#icon).

### :icon-sync: Live reload

If a change is detected, such as editing and saving an `.md` file, your Retype website will be updated almost instantly within the browser.

### :icon-server: Host anywhere

Retype generates an HTML website that you can self-host on any web hosting service, or for free using [GitHub Pages](/hosting/github-pages.md), [Netlify](/hosting/netlify.md), or [Cloudflare](/hosting/cloudflare.md). No special server-side software or external dependencies are required. You can host your Retype site as a public website or as a private website within your organization's network.

{.callout}
> “Retype is the perfect fit for my user persona - tech savvy non-devs who want to write using the best web standards out there.”

!!!
The [retype.com](https://retype.com/) website was generated using Retype. View the [source](https://github.com/retypeapp/retype/blob/main/README.md) files used to generate this very page.
!!!

{{ include "snippets/support" }}
