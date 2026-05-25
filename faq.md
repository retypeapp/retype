---
icon: question
label: FAQ
order: -1000
---
# Frequently Asked Questions

## Is Retype free to use?

Yes, Retype is free to use with both open-source and commercial projects.

With [Retype Pro](/pro/pro.md), you get all the [Pro Features](/feature-log.md#pro-features), including:

1. The [`Powered by Retype`](/configuration/project.md#poweredbyretype) branding can be removed
2. Password protected [`private`](/configuration/page.md#visibility-private) and [`protected`](/configuration/page.md#visibility-protected) pages
3. [Outbound](/configuration/project.md#outbound) link configuration
4. [Breadcrumb](/configuration/project.md#breadcrumb) navigation
5. [Hub](/configuration/project.md#hub) link
6. [Table of Contents](/configuration/project.md#toc) configuration

## How do I install Retype?

Installing Retype is super simple and takes only a few seconds. Please see our [Getting Started](/guides/getting-started.md) and [Installation](/guides/installation.md) guides for detailed instructions.

If you are using :icon-brand-obsidian: Obsidian, you can also install Retype using the [Retype for Obsidian](/guides/obsidian-plugin.md) plugin.

If you ain't got no time for that, just run the following commands on a folder that contains at least one `.md` file, depending on your preferred [package manager](/guides/installation.md).

+++ npm
```
npm install retypeapp --global && retype start
```
+++ yarn
```
yarn global add retypeapp && retype start
```
+++ dotnet
```
dotnet tool install retypeapp --global && retype start
```
+++

## What is page metadata?

The page metadata is an optional block of [configuration](/configuration/page.md) that can be placed at the top of any Markdown `.md` page. This block of configuration can also be referred to as the page [Front Matter](https://jekyllrb.com/docs/front-matter/).

The block of page metadata must be the first item at the top of the `.md` page and must be added between `---` lines above and below the configs.

```md sample.md
---
icon: rocket
---
# Your page title here
```

The page metadata is completely optional and typically only required when you want to override the Retype defaults.

You can also add page metadata into a separate **.yml** file, see [page config](/configuration/page.md#separate-yml-file) options.
