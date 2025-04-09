---
icon: question
label: FAQ
---
# Frequently Asked Questions

## Is Retype free to use?

Yes, Retype is free to use with both open-source and commercial projects up to 100 pages per project.

With [Retype Pro](/pro/pro.md), you get the following additional features:

1. Up to 1000 pages can be built
2. The [`Powered by Retype`](/configuration/project.md#poweredbyretype) branding can be removed
3. [!badge text="NEW" variant="info"] Password protected [`private`](/configuration/page.md#private) and [`protected`](/configuration/page.md#protected) pages
4. [!badge text="NEW" variant="info"] [Outbound](/configuration/project.md#outbound) link configuration
5. [!badge text="NEW" variant="info"] [Breadcrumb](/configuration/project.md#breadcrumb) navigation
5. [!badge text="NEW" variant="info"] [Hub](/configuration/project.md#hub) link
5. [!badge text="NEW" variant="info"] [Table of Contents](/configuration/project.md#toc) configuration

## How do I install Retype?

Installing Retype is super simple and takes only a few seconds. Please see our [Getting Started](/guides/getting-started.md) guide for detailed installation instructions.

If you ain't got no time for that, just run the following two commands on a folder that contains at least one **.md** file, depending on your preferred [package manager](/guides/getting-started.md#prerequisites).

+++ npm
```
npm install retypeapp --global
retype start
```
+++ yarn
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

## What is page metadata?

The page metadata is an optional block of [configuration](/configuration/page.md) that can be placed at the top of any Markdown **.md** page. This block of configuration can also be referred to as the page [Front Matter](https://jekyllrb.com/docs/front-matter/).

The block of page metadata must be the first item at the top of the **.md** page and must be added between `---` lines above and below the configs.

```md sample.md
---
icon: rocket
---
# Your page title here
```

The page metadata is completely optional and typically only required when you want to override the Retype defaults.

You can also add page metadata into a separate **.yml** file, see [page config](/configuration/page.md#separate-yml-file) options.
