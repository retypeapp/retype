---
icon: question
label: FAQ
---
# Frequently Asked Questions :thinking_face:

## How do I install Retype?

Installing Retype is super simple and takes only a few seconds. Please see our [Getting Started](guides/getting_started.md) guide for detailed installation instructions.

If you ain't got no time for that, just run the following two commands on a folder that contains at least one `.md` file, depending on your preferred [package manager](guides/getting_started.md#prerequisites).

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

## What is "Front Matter"?

Front Matter is an optional block of YAML [page configuration](configuration/page.md) that can be placed at the top of any Markdown `.md` page.

The Front Matter block must be the first item at the top of the `.md` page and must be added between `---` lines above and below the configs.

```md sample.md
---
icon: rocket
---
# Your page title here
```

The Front Matter section is completely optional.

You can also add YAML page configuration to a separate `.yml` file, see [page config](configuration/page.md#separate-yml-configuration) options.
