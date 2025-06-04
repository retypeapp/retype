---
label: Page
order: 100
icon: file
tags: [config]
---
# Page configuration

Individual **.md** pages can be configured using the [metadata](/faq.md#what-is-page-metadata) section added to the top of the page.

```md sample.md
---
label: Sample
layout: page
order: 100
---
# Sample

This is a sample page demonstrating page metadata.
```

## Default pages

{{ include "snippets/default-pages.md" }}

## Separate .yml file

If you would prefer to keep the page metadata separated and placed outside of the **.md** content page, the config can be moved into a paired **.yml** file.

For instance, **sample.md** would need a matching **sample.yml** file. The separate **.yml** file must have the exact same filename as its paired **.md** page.

Both **.yml** and **.yaml** extensions are supported.

Adding your configs into the top metadata section of a **.md** page, or into a separate **.yml** file is just a matter of preference. Both techniques produce the same result.

```md sample.md
# Sample

This is a sample page demonstrating page metadata.
```

```yml sample.yml
label: Sample
layout: page
order: 100
```

!!!
If you add configs to both locations, the page [metadata](/faq.md#what-is-page-metadata) takes precedence, even if they are different configs.

If you add one or more configs to a **.md** page, Retype will not look for nor read the separate **.yml** file. Just use one or the other, but not both.
!!!

See [folder configuration](folder.md) for details on how to configure a folder.

---

## author

!!!
The configuration name `authors` is also supported. The name `authors` is an alias of `author` and both can be used interchangeably.
!!!

=== author : `string`, `list`, or `object`

The author or multiple authors of this page.

```yml
---
author: Frank
---
```

```yml
---
author: frank@example.com
---
```

===

An author object can also be configured with specific values for the [`name`](#name), [`email`](#email), [`link`](#link), and [`avatar`](#avatar).

The `author` config is very flexible and can accept one or more author configurations and even a list of mixed types. The following sample demonstrates adding a list of authors. Two authors are added by name and a third is added only by their email address.

```yml
---
authors: [Frank, Annette Jones, steffen@example.com]
---
```

Mixed author types are also permitted, including adding a list of authors by name, email, or author configuration objects.

```yml
---
# Mix of author types
authors:
  - name: Frank Esposito
    email: frank@example.com
    link: https://twitter.com/frank
    avatar: https://example.com/frank.jpg
  - Annette Jones
  - steffen@example.com
---
```

### avatar

=== avatar : `string`

Possible options for the `avatar` include:

1. Path to local image
2. URL to an external image
3. Inline SVG
4. [Icon](/components/icon.md) shortcode
4. [Emoji](/components/emoji.md) shortcode

```yml
---
author:
  name: Frank Esposito
  avatar: https://example.com/frank.jpg # custom avatar takes precedence
---
```

===

### email

=== email : `string`

```yml
---
author:
  email: frank@example.com
---
```

===

### link

=== link : `string`

```yml
---
author:
  link: https://twitter.com/frank # custom link take precedence
---
```

===

### name

=== name : `string`

```yml
---
author:
  name: Frank Esposito
---
```

===

---

## breadcrumb

This config is Retype [!badge PRO](/pro/pro.md) only.

=== [!badge PRO] breadcrumb : `boolean`

The `breadcrumb` config controls whether to include the [breadcrumb](project.md#breadcrumb) navigation on this page. Default is `true`.

Set to `false` to disable the breadcrumb navigation on this page.

```yml
breadcrumb: false
```

It is also possible to disable the breadcrumb navigation on all pages within a [folder](folder.md) by setting `breadcrumb: false` in the folderh`index.yml` configuration file or the folder default page, such as `default.md`, `readme.md`, or `index.md`.
===

---

## category

!!!
The configuration name `categories` is also supported. The name `categories` is an alias of `category` and both can be used interchangeably.
!!!

=== category : `string` or `list`

A category for this page.

A single `category` or a list of `categories` can be configured in each **.md** page you would like to categorize.

The `category` is meant to be a broad grouping of content, where [`tags`](#tags) are meant to describe specific details of the content in that particular page. A page can belong to multiple (zero to many) categories and have multiple (zero to many) tags.

All of the following are acceptable techniques for configuring a single `category` or multiple `categories`.

```yml
---
category: news
categories: news
category: [news, general]
categories: [news, general]
category:
  - news
  - general
categories:
  - news
  - general
---
```

If a `category` is configured in the page metadata, the category is added to the top of the page under the main title.

Individual category summary pages will be automatically generated by Retype at `<url>/categories/<category>`, plus an additional `<url>/categories` index page which lists all categories in the project.

===

---

## date

=== date : `string`

A custom publish date for this page.

If a `date` is configured, Retype will add the **Published** date to the top of the page, just under the main title.

The date must be provided in the `yyyy-mm-dd` ISO format or `yyyy-mm-ddThh:mm` if you want to include a date and a time.

```yml
date: 2020-11-25 # November 25, 2020
date: 2020-11-25T15:30 # November 25, 2020 at 15:30 (3:30 PM)
```

The `date` is used by Retype to order blog pages. Newer blog pages are ordered first.

===

---

## expanded

=== expanded : `boolean`

Determines whether this [folder](folder.md) should be expanded in the tree navigation on initial page load. Default is `false`.

Set to `true` to expand the folder node in the navigation.

```yml
expanded: true
```

The `expanded` option only applies to [folders](folder.md) when configured within an **index.yml** folder configuration file.

Setting `expanded: true` within the metadata of an **.md** page or the paired **.yml** file will be ignored.
===

---

## icon

=== icon : `string`

Custom icon for the navigation node of the current page. Default is `null`.

Options include using an [Octicon](/components/octicons.md) name, [Emoji](https://mojee.io/emojis/) shortcode, `<svg>` element, or a path to an image file.

```yml Octicon
icon: rocket
```

```yml Emoji shortcode
icon: ":rocket:"
```

```yml SVG element
icon: "<svg>...</svg>"
```

```yml Path
icon: "../static/rocket.png"
```
===

---

## image

=== image : `string`

By default, Retype will try to find the first image on the page and use that image as the feature image to highlight when creating a summary of the page.

You can customize the feature image by setting the `image` config to any local path or external image hosted elsewhere.

### Local path

Configure a path to a local file stored within the project.

```yml
image: ../static/feature-image1.jpg
```

### External image

Configure a URL to any image hosted elsewhere.

```yml
image: https://example.com/static/feature-image1.jpg
```

===

---

## label

=== label : `string`

Custom label for the navigation node for the current page. Default is `null`.

```yml
label: Custom label
```
===

---

## layout

=== layout : `string`

The layout for the page. Default is `default`.

Supported values: `default`, `central`, `page`, and `blog`.

Layout | Description
--- | ---
`default` | The default layout for all **.md** pages. The page is added to the main navigation.
`page` | Similar to `default` layout, but is not added to the main navigation.
`central` | A page with no left or right sidebar columns.
`blog` | A blog page layout. Blog pages are not added to the main navigation and include blog specific `< Newer` and `Older >` navigation buttons at the bottom of each blog page.

```yml
layout: page
```
===

---

## meta

### title

=== title : `string`

A custom value for the `<title>` meta tag.

If set, the value will completely override any `<title>` meta tag value generated by Retype.

Default is `null`.

```md
---
meta:
  title: "A 100% custom title meta tag value"
---
# Sample
```

With the above sample, the `<title>` will be:

```html
<title>A 100% custom title meta tag value</title>
```

Without the `meta.title` set, by default, the `<title>` would be:

```html
<title>Sample</title>
```

!!!
This `meta.title` config is not to be confused with the Page [`title`](#title-1) config, which we recommend not using.

This `meta.title` config is also not to be confused with the Project level [`meta.title`](project.md#title-1) config.
!!!
===

### description

=== description : `string`

A custom value for the `<meta name="description">` meta tag.

If set, the value will be used as the `content` attribute of the `<meta name="description">` tag in the `<head>` of the page. This value will also be used for the `og:description` and `twitter:description` meta tags.

```md
---
meta:
  title: "Profile Page"
  description: "This is a custom description"
---
# Profile
```

With the above sample, the following meta tags will be generated:

```html
<meta name="description" content="This is a custom description">
<meta property="og:description" content="This is a custom description">
<meta name="twitter:description" content="This is a custom description">
```

===

---

## nav

Navigation configuration options to control the behavior of the left sidebar navigation.

### mode

This config is Retype [!badge PRO](/pro/pro.md) only.

=== [!badge PRO] mode : `string`
Controls how the sidebar navigation is created and functions. The default functionality is to create the navigation as an expandable Tree structure. The default value for `mode` is `default`.

Option | Description
---    | ---
`default` | Create the navigation as a Tree structure where top-level folders are expandable and collapsible.
`stack`   | Create the navigation where the top-level folders are automatically expanded, creating a "stacked" view of the navigation path.

The `nav.mode` setting can be configured on any page within a top-level folder to convert only that specific folder into a "stack" navigation structure. The remaining top-level folders will maintain their default tree navigation behavior.

The following sample demonstrates how to configure the "stacked" navigation structure for a specific top-level folder:

```yml
nav:
  mode: stack # Pro key required
```

When configured on a page within a top-level folder, this setting will only affect that specific folder's navigation structure.

To convert the entire navigation component to a `stack` type layout, please see the Project [`nav`](project.md#nav) setting.

===

---

## nextprev

This config is Retype [!badge PRO](/pro/pro.md) only.

The `nextprev` configuration controls the display of "Next" and "Previous" navigation buttons at the bottom of each page and whether a page is included in the navigation sequence.

### mode{#nextprev-mode}

=== mode : `string`

Controls how the Next/Previous navigation buttons are displayed and whether the page is included in the navigation sequence.

Option | Description
--- | ---
`show` | Show Next and Previous buttons and include page in sequence (Default)
`hide` | Hide buttons but keep page in sequential order
`exclude` | Hide buttons and exclude page from sequential order

The default value is `show`.

```yml
---
nextprev:
  mode: hide # Pro key required
---
```

See also [Project](project.md#nextprev-mode) and [Folder](folder.md#nextprev) configuration of `nextprev.mode`.

===

---

## order

=== order : `string`

A custom stack order for this page within the left side-bar tree navigation.

Options can include:

- [x] A number such as `100` or `-100`
- [x] Any string value that will be slotted into the `A -> Z` alpha ordering of all navigation nodes
- [x] A [SemVer](https://semver.org/) value such as `v2.0`

If the `order` is set with a number, a larger positive number will give more _weight_ or _priority_ to that page and Retype will _bubble up_ that page in the navigation. For instance, a page configured with `order: 100` will be higher in the navigation than a page configured with `order: 10`.

Similarily, a page configured with `order: -100` will be lower in the navigation than a page configured with `order: -10` or any page where no `order` is set.

!!!
The position of folders within the navigation can be [ordered](folder.md) as well using the same `order` technique, the only difference that folders are always pinned to the top of their `order` group.
!!!

In order of precedence, the `order` of a page in the navigation would be determined with the following priority:

Value type | Description
--- | ---
`number` (positive) | A larger positive number gets more _weight_ or _priority_ and is pushed higher in the navigation. Largest number at the top. Example: `order: 100` will be ordered above `order: 10`.
`alpha` (high) | Setting `order` with an alpha-numeric value is possible and those pages will be ordered against the `label` value of all other pages that do not have an `order` configured.  Example: `order: alpha` will be ordered above `order: beta` or a page configured with `label: bravo`.
no `order` set | If no `order` is configured, all pages will be ordered alphabetically based on its `label`, `title`, the first `h1` title, or the file name values. The `label` config has the highest priority.
`alpha` (low) | Example: `order: zulu` will be ordered below `order: zebra` or a page configured with `label: yakee`.
`vSemver` (newer) | Page `order` configured with a [semver](https://semver.org/) value are ordered with the newest version above an older version. These pages are also moved towards the bottom of the navigation. Example: `order: v1.1` will be ordered above `order: v1.0`.
`number` (negative) | A negative number gets less _weight_ or _priority_ and is pushed to the bottom of the navigation. Setting the `order` with a negative number is a simple way to push a page to the bottom of the navigation. Example: `order: -100` will be ordered below `order: -10`.

By default, the home page of the website has an order of `10000`. To add a page in the navigation just above the home page, set a value of `order: 10001` or greater. To add a page in the navigation just below the home page, set a value of `order: 9999` or lower. To move the home page to the bottom of the navigation, set a negative value, such as `order: -10000`.

### Order by number

Larger number = order higher in the stack.

No order number or `0` = order by alpha

Smaller number = order lower in the stack.

If multiple pages have the same `order` number, secondary ordering in that cluster is by alpha.

```
+
0
-
```

### Order by alpha

Order values by alpha.

`a` = higher
`z` = lower

```
Alpha
Bravo
Charlie
Zulu
```

### Order by `v{semver}`

Order by [semver](https://semver.org/) with latest release at the top

```
v5.0.1
v5
v4.0
v3.1
v3.0
v2.0
v1.0
```

Items prefixed with `v` would be grouped below the alpha ordered items.

```
alpha
bravo
yankee
zulu
v3.0
v2.1-beta
v2.0
v1.0
v1.0-beta
v1.0-alpha
```
===

---

## permalink

=== permalink : `string`

A custom URL path for this page or folder which overrides the default path generated by Retype.

```md sample.md
---
permalink: /custom/path
---
# My page title

Some content here.
```

A `permalink` allows the folder and file structure to remain unchanged, but allowing the final URL's to be customized.

Configuring the `permalink` is an excellent solution when moving to Retype from another platform and you would like to maintain existing public URL's, but would prefer to re-organize your **.md** files into a new structure. A `permalink` allows for a clean disconnect of the page path from the final published URL path.

In the following sample, the generated URL by Retype would be `/guide/2021-06-25-publishing-to-github-pages/`, but we override with a custom permalink which will publish the page to `/tutorial/publish-to-github-pages/`.

```md /guide/2021-06-25-publishing-to-github-pages.md
---
permalink: /tutorial/publish-to-github-pages/
---
# Publishing to GitHub Pages
```

If a `permalink` is configured on a folder, or on a **readme.md** or **index.md** page within the folder, or on an [**index.yml**](#separate-yml-file) file within the folder, that `permalink` is assumed to be the base permalink for all pages within that folder.

The following scenario demonstrates a basic scenario where we configure all pages within the `/guides/` folder to be served from the custom URL location of `/tutorials/`.

To accomplish this goal, configure the `permalink` on the **readme.md**, then all other pages within the same folder will adjust as well. The **configuration.md** page will now be served from `/tutorials/configuration/`.

``` Folder structure
|-- /guides
    |-- readme.md
    |-- configuration.md
```

```md /guides/readme.md
---
permalink: /tutorials
---
# Tutorials
```

File path | Old URL | New URL
-- | -- | --
`/guides/readme.md` | `/guides` | `/tutorials`
`/guides/configuration.md` | `/guides/configuration` | `/tutorials/configuration`
===

---

## redirect

=== redirect : `string`

Redirect requests for this page to another location.

The `redirect` can be set to another page within this project, or an external link.

For example, you have an existing **setup.md** page and you want to move the content to **getting-started.md**, but other websites might still be linking to your old **example.com/setup/** page and you want to ensure those links still work. You would then set the following `redirect` page config in **setup.md** to redirect to `getting-started.md`.

```yml
---
redirect: getting-started.md
---

# Setup
```

Retype will automatically handle any incoming **example.com/setup** requests and redirect to the new **example.com/getting-started** location.

Retype is also smart enough to scan your project for any **setup.md** links and replace those with a link directly to **getting-started.md**.

===

---

## route

See [permalink](#permalink).

---

## tags

=== tags : `list`

A list of tags can be added to the metadata at the top of each **.md** page you would like to tag.

The `tags` are meant to describe specific details of the content in that page. Tags are similar to [`category`](#category), although `category` is meant to describe be a broad grouping of content. A page can belong to multiple (zero to many) categories and have multiple (zero to many) tags.


If tags are configured in the page metadata, a list of tag links are added to the bottom of the page. See the bottom of this page for a working sample.

Individual tag summary pages will be automatically generated by Retype at [`<url>/tags/<tag>`](/tags/guide/), plus an additional [`<url>/tags`](/tags/) index page which lists all tags and their count used within the project.

!!!
Check out the pages of this website configured with the [!badge variant="info" text="guide"](/tags/guide/) tag.
!!!

``` Sample tags configuration
---
tags: [guide]
---
# Page title

Some content here.
```

Multiple tags can be added to the list by separating each with a comma `,`.

``` Sample list of tags
---
tags: [guide, config options, installation]
---
# Page title

Some content here.
```

A list style syntax is also supported for `tags`:

``` Sample tags list
---
tags:
  - guide
  - config options
  - installation
---
```

===

---

## templating

=== templating: `boolean`

Templating can be disabled on a per-page basis by setting `templating: false` in the page metadata.

```md
---
templating: false
---
```

===

---

## title

=== title : `string`

The `title` config instructs Retype to add a primary `# Page Title` to your page, but it is recommended to manually add a `# Page Title` to each of your pages, instead of setting a `title`.

As a general rule, the actual content of your page should not be configured in the page metadata.

!!!
The `title` is primarily used to support backwards compatibiity with the **.md** content style from other older legacy static site generator applications.
!!!

The following sample demonstrates setting the `title` config instead of explicitly using a `# Page Title` to your page.

```
---
title: Getting Started
---
Some content here.
```

Try to avoid using the `title` config. Please add a real page `# Page Title` to your document. The `# Page Title` will be rendered in HTML as `<h1>Page Title</h1>`.

For example, the sample above should ideally be written as the following instead of using a `title` config.

```
# Getting Started

Some content here.
```

===

---

## toc

This setting is Retype [!badge PRO](/pro/pro.md) only.

The `toc` config contains page options that apply to the right sidebar Table of Contents.

### depth

=== depth : `string`, `number`
The heading depth to include in the right Table of Contents.

The default is `2-3`.

```yml
toc:
  depth: 2-3
```

The `toc` can be configured at the Page or Project levels.

Configuring the `toc` at the Page level overrides the Project level settings.

Acceptable values for `depth` include:

Value | Description
--- | ---
2 | Include `H2` headings only
2-3 | `default` Include `H2` to `H3` headings
1-4 | Include `H1` to `H3` headings
2,3 | Include `H2` and `H3` headings
2,4 | Include `H2` and `H4` headings
1,3-4 | Include `H1` and `H3` to `H4` headings, skip `H2`
1,2,3,4 | Include `H1`, `H2`, `H3`, and `H4` headings

===

### label

=== label : `string`

A custom label for the top of the Table of Contents column.

```yml
toc:
  label: On this page
```
===

---

## visibility

=== visibility : `public|hidden|protected|private`

Configure the visibility of the page to be `public`, `hidden`, `protected`, or `private`. Default is `public`.

| Mode | Navigation | Search | Password | Description |
| --- | :---: | :---: | :---: | --- |
`public` | :white_check_mark: | :white_check_mark: | :no_entry_sign: | The page is public and visible in the main navigation. A password is not required to view this page.
[`hidden`](#hidden) | :no_entry_sign: | :no_entry_sign: | :no_entry_sign: | The page will not be included in the navigation or search results, and a password is NOT required to view the page. This visibility is helpful for sharing a draft page before exposing the page to be public ([sample](/samples/hidden.md)).
[`protected`](#protected) | :white_check_mark: | :no_entry_sign: | :white_check_mark: | The page is added to the public navigation but requires a password to access the content of the page ([sample](/samples/protected.md) password: `test`).
[`private`](#private) | :no_entry_sign: | :no_entry_sign: | :white_check_mark: | The page is hidden, not added to the navigation, and a password is required for access ([sample](/samples/private.md) password: `test`).

===


### hidden

With `hidden`, the page will still be created and added to the final website, but it is _hidden_. You can still link to the page or share a link to the page.

Retype would ensure no automatically generated links or references to the hidden page are created. If on a public page, a link to a hidden page is made by an author, the link will work and the hidden page will be visible.

The following [sample](/samples/hidden.md) demonstrates hiding a page:

```md
---
visibility: hidden
---
# A hidden page

This page will be hidden from the menu and search results.
```

The History :icon-history: component will continue to function as normal. Any hidden page visited would still be logged in the history, although that history is only available to the visitor.

Setting `visibility: hidden` on a page is a good way to create a _draft_ or _secret_ page that you do not want included in the navigation, but you still want to share a link to the page for others to view if they have the link.

### protected

To create a protected page, add `visibility: protected` and then set the password for the project using the `--password` flag.

{{ include "snippets/password-notice.md" }}

The following [sample](/samples/protected.md) (password: test) demonstrates creating a protected page:

```md
---
visibility: protected
---
# A protected page

This page will be visible in the main navigation, but will require a password to view the page.
```

Then call either of the following commands to set the password for the project:

```
retype start --password <your-password>
retype build --password <your-password>
```

The project password can also be set as an Environment variable by using [`RETYPE_PASSWORD`](../configuration/envvars.md/#retype_password).

An entire folder can be set to `protected` by adding an `index.yml` file with the following configuration to the root of the folder. See the [folder](folder.md) docs for additional examples.

```yml
visibility: protected
```

### private

To create a private page, add `visibility: private` and then set the password for the project using the `--password` flag.

{{ include "snippets/password-notice.md" }}

The following [sample](/samples/private.md) (password: test) demonstrates creating a private page:

```md
---
visibility: private
---
# A private page

This page will not be visible in the main navigation and will require a password to view the page.
```

Then call either of the following commands to set the password for the project:

```
retype start --password <your-password>
retype build --password <your-password>
```

The project password can also be set as an Environment variable by using [`RETYPE_PASSWORD`](../configuration/envvars.md/#retype_password).

!!!
For `hidden` and `private` pages, Retype does not provide a link to the page, but it still uses the same naming convention as all other pages. For instance, if your site is hosted at `https://example.com` and the page was called `my-hidden-page.md`, the URL would be `https://example.com/my-hidden-page/`.
!!!

An entire folder can be set to `private` by adding an `index.yml` file with the following configuration to the root of the folder. See the [folder](folder.md) docs for additional examples.

```yml
visibility: private
```
