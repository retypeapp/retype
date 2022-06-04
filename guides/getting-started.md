---
order: 100
icon: rocket
tags: [guide]
---
![](/static/headers/guides_getting-started.png)

# Getting Started

Getting started with Retype is super quick and you can be up and running within seconds.

Check out the [Quick start](/README.md#quick-start) for the condensed process or continue here with the detailed instructions.

!!!

Please see the [Retype CLI](cli.md) for full details on each command.

!!!

---

## Prerequisites

Retype is installed using either [`npm`](https://www.npmjs.com/get-npm), [`yarn`](https://classic.yarnpkg.com/en/docs/install/), or the [`dotnet`](https://dotnet.microsoft.com/download/dotnet-core) CLI.

You only need one of those three package managers as a prerequisite, although all three could be installed on your computer too. It's up to you. :raised_hands:

| Package Manager | Supported Platforms |
| --- | --- |
| [`npm`](https://www.npmjs.com/get-npm) | [!badge text="Mac" variant="light"] [!badge text="Win" variant="primary"] [!badge text="Linux" variant="warning"]
| [`yarn`](https://classic.yarnpkg.com/en/docs/install/) | [!badge text="Mac" variant="light"] [!badge text="Win" variant="primary"] [!badge text="Linux" variant="warning"]
| [`dotnet`](https://dotnet.microsoft.com/download/dotnet-core) | [!badge text="Mac" variant="light"] [!badge text="Win" variant="primary"] [!badge text="Linux" variant="warning"]

---

## Install

It takes just a few seconds to install Retype using any of the following commands. Choose the command based on a package manager you have installed on your computer.

+++ npm
```
npm install retypeapp --global
retype watch
```
+++ yarn
```
yarn global add retypeapp
retype watch
```
+++ dotnet
```
dotnet tool install retypeapp --global
retype watch
```
+++

That's it! :tada: Your new Retype website should be up and running. :tada:

!!!

If you already have the `dotnet` CLI installed on your machine, installing using `dotnet tool install retypeapp --global` will be the fastest option, but any of the options should install within seconds. They all produce the same result and run with the same performance. The `dotnet` package size is the smallest.

!!!

### Platform specific

The default `retypapp` NPM and Yarn package is a bundle of several platform specific packages. The installer will automatically detect and choose the correct platform package from the bundle during installation.

The bundle provides convenience although at the cost of an increased download size.

It is possible to install smaller platform specific packages without the bundling. Currently, four platforms are supported and can be installed separately.

Platform | Install command
--- | ---
[`retypeapp-win-x86`](https://www.npmjs.com/package/retypeapp-win-x86) | `npm install retypeapp-win-x86 --global`
[`retypeapp-win-x64`](https://www.npmjs.com/package/retypeapp-win-x64) | `npm install retypeapp-win-x64 --global`
[`retypeapp-linux-x64`](https://www.npmjs.com/package/retypeapp-linux-x64) | `npm install retypeapp-linux-x64 --global`
[`retypeapp-darwin-x64`](https://www.npmjs.com/package/retypeapp-darwin-x64) | `npm install retypeapp-darwin-x64 --global`

---

## Update

Update to the latest release of Retype using on of the following commands for the package manager that you initially installed Retype with. For instance, if you used `npm` to install Retype, run the `npm` update command to update Retype locally.

+++ npm
```
npm update retypeapp --global
```
+++ yarn
```
yarn global upgrade retypeapp
```
+++ dotnet
```
dotnet tool update retypeapp --global
```
+++

---

## Uninstall

Done with Retype? It's okay, we understand. :cry:

Uninstalling Retype is just as simple as installing. Use the same package manager to uninstall as you did to install. For instance, if you used `npm` to install Retype, run the `npm` uninstall command to remove.

+++ npm
```
npm uninstall retypeapp --global
```
+++ yarn
```
yarn global remove retypeapp
```
+++ dotnet
```
dotnet tool uninstall retypeapp --global
```
+++

All Retype related files and folders within your project can be deleted, such as the `retype.yml` file and the generated `.retype` folder.
