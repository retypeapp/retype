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

## What is page metadata?

The page metadata is an optional block of [configuration](configuration/page.md) that can be placed at the top of any Markdown `.md` page. This block of configuration can also be referred to as the page **Front Matter**.

The block of page metadata must be the first item at the top of the `.md` page and must be added between `---` lines above and below the configs.

```md sample.md
---
icon: rocket
---
# Your page title here
```

The page metadata is completely optional and typically only required when you want to override the Retype defaults.

You can also add page metadata into a separate `.yml` file, see [page config](configuration/page.md#separate-yml-configuration) options.
