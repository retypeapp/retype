---
order: 100
icon: rocket
tags: [guide]
---
# Getting Started

Getting started with Retype is super quick and you can be up and running within seconds.

Check out the [Quick start](../README.md#quick-start) for the condensed process or continue here with the detailed instructions.

!!!

Please see the [Retype CLI](../cli.md) for full details on each command.

!!!

---

## Prerequisites

Retype is installed using either [`npm`](https://www.npmjs.com/get-npm), [`yarn`](https://classic.yarnpkg.com/en/docs/install/#mac-stable), or the [`dotnet`](https://dotnet.microsoft.com/download/dotnet-core) CLI.

You only need one of those three package managers as a prerequisite, although all three could be installed on your computer too. It's up to you. :raised_hands:

| Package Manager | Supported Platforms |
| --- | --- |
| [`npm`](https://www.npmjs.com/get-npm) | [!badge text="Mac" variant="light"] [!badge text="Win" variant="primary"] [!badge text="Linux" variant="warning"]
| [`yarn`](https://classic.yarnpkg.com/en/docs/install/#mac-stable) | [!badge text="Mac" variant="light"] [!badge text="Win" variant="primary"] [!badge text="Linux" variant="warning"]
| [`dotnet`](https://dotnet.microsoft.com/download/dotnet-core) | [!badge text="Mac" variant="light"] [!badge text="Win" variant="primary"] [!badge text="Linux" variant="warning"]

---

## Install

It takes just a few seconds to install Retype using any of the following commands. Choose a command based on a package manager you have installed on your computer.

+++  npm
```
npm install retypeapp --global
retype watch
```
+++  yarn
```
yarn global add retypeapp
retype watch
```
+++  dotnet
```
dotnet tool install retypeapp --global
retype watch
```
+++

That's it! :tada: Your new Retype website should be up and running. :tada:

!!!

If you already have the `dotnet` CLI installed on your machine, installing using `dotnet tool install retypeapp --global` will be the fastest option, but any of the options should install within seconds. They all produce the same result and run with the same performance.

!!!

---

## Update

Update to the latest release of Retype using on of the following commands for the package manager that you initially installed Retype with. For instance, if you used `npm` to install Retype, run the `npm` update command to update Retype locally.

+++  npm
```
npm update retypeapp --global
```
+++  yarn
```
yarn global upgrade retypeapp
```
+++  dotnet
```
dotnet tool update retypeapp --global
```
+++

---

## Uninstall

Done with Retype? It's okay, we understand. :cry:

Uninstalling Retype is just as simple as installing. Use the same package manager to uninstall as you did to install. For instance, if you used `npm` to install Retype, run the `npm` uninstall command to remove.

+++  npm
```
npm uninstall retypeapp --global
```
+++  yarn
```
yarn global remove retypeapp
```
+++  dotnet
```
dotnet tool uninstall retypeapp --global
```
+++

Any Retype related files within your project can be deleted, such as the `retype.json` file and the generated `.retype` folder.
