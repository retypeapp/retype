---
label: Project config
order: 200
icon: package
---
# Project configuration

Retype will read the `retype.json` file for additional instructions on how to configure and build your project.

The `retype.json` file is typically stored in the root of your project, although can be placed elsewhere. Please ensure the `input` and `output` paths are correct if moved to a different location.

!!!
After making a change to the `retype.json`, if you are running `retype watch`, Retype will automatically rebuild the project for you and your web browser will refresh with the changes.

If you started the local web server using `retype run`, you'll need to call `retype build` to regenerate a :sparkles: sparkly :sparkles: fresh new build of the project, then manually refresh your web browser to see update.
!!!

The `retype.json` file is actually optional (not required), but is recommended as you will almost certainly want to customize some options, so adding a `retype.json` is a good first step.

Running the command `retype init` will create a default `retype.json` file. The following sample demonstrates a common set of configuration options and everything can be customized to your requirements.

```json Sample retype.json
{
  "input": ".",
  "output": ".retype",

  "branding": {
    "title": "Project Name",
    "label": "Docs"
  },

  "links": [
    {
      "text": "Getting Started",
      "link": "https://retype.com/getting_started/"
    }
  ],

  "footer": {
    "copyright": "© Copyright {{ year }}. All rights reserved."
  }
}
```

## input

+++ input : `string`

Custom path to the input directory. Default is `.`.

The path is relative to the `retype.json` location.

```json Change input location to /src folder
{
  "input": "./src"
}
```
+++

## output

+++ output : `string`

Custom path to the output directory. Default is `.retype`.

The path is relative to the `retype.json` location.

```json Sample: Change output location to /docs folder
{
  "output": "./docs"
}
```
+++

## base

+++ base : `string`

Base subfolder path appended to all URL's. Default is `null` or empty string.

If you deploy the build website to a subfolder of another website, use the `base` to ensure the URL's correclty resolve.

For instance, let's say your main site is `https://example.com` and will remain unchanged.  If you would like to deploy the Retype built website into a `/docs` subfolder, with the final URL of `https://example.com/docs`, then setting `"base": "docs"` would be required.

```json Sample: Change output location to /docs folder
{
  "base": "docs"
}
```

Another common scenario for setting a `base` is when using GitHub Pages **without** a custom `CANME`.

For instance, if your GitHub organization was `CompanyX` and your repo was named `my-repo`, the URL to your GitHub Pages hosted website would be:

```
https://companyx.github.io/my-repo/
```

The Retype generated wesite would require `"base": "my-repo"` to be set within your projects `retype.json` file in order to properly resolve the URL paths during build.

The `retype.json` file for that scenario would be...

```json retype.json
{
  "base": "my-repo"
}
```

...and the GitHub Pages configuration within your repo Settings would be:

![GitHub Pages configuration](../static/project-base-config-github-pages.png)
+++

## cname

+++ cname : `string`

If specified, a `CNAME` file with the corresponding value will be created and added to the root of the [output](#output). Default is `null`.

```json Sample: Host docs.example.com website using GitHub pages
{
  "cname": "docs.example.com"
}
```
+++

## exclude

+++ exclude : `array`
Retype can exclude files or folders from being built by configuring an `exclude` string array within your projects `retype.json` file.

Exclude patterns are similar to allowable patterns within a `.gitignore` file. Wildcards `*` are allowed.

The following sample demonstrates how to exclude an entire `draft/` folder, any folder that ends with `*_temp/`, and one specific `/src/temp.md` file.

```json Exclude patterns
{
  "exclude": [
    "draft/",
    "*_temp/",
    "/src/temp.md"
  ]
}
```

You could exclude everything in your project with by adding `"exclude": [ "*" ]`.

!!!
Any file are folder prefixed with an underscore `_` are also excluded.
!!!
+++

## favicon

+++ favicon : `string`

A custom path to a `.ico` or `.png` file to be used as the `favicon`. Default is `null`.

The path is relative to the [input](#input).

```json Favicon is stored in the /static folder
{
  "favicon": "static/favicon.png"
}
```

By default, Retype will look for a `favicon.ico` or `favicon.png` within the root of the [input](#input). The `favicon` config would typically only be used if you want to store the `favicon` file in a subfolder of the [output](#output) root.
+++

## meta

Meta tag configuration.

### title

+++ title : `string`

Common site-wide suffix appended to the html `<title>` element of all pages. Default is `null`.

```json Append this string to all page meta tag titles
{
  "meta": {
    "title": " | Example.com - Widgets for the internet"
  }
}
```

If we had an `About us` page, the final `<title>` with the `title` value above would be:

```html
<title>About us | Example.com - Widgets for the internet</title>
```
+++

## branding

Branding configuration.

### title

+++ title : `string`

Logo Title. Displayed when [logo](#logo) and [logoDark](#logoDark) are not configured. Default is `Project Name`.

```json Set the website title
{
  "branding": {
    "title": "Example.com"
  }
}
```

The above `title` would create the following branding title in the upper-left corner of the generated website.

![GitHub Pages configuration](../static/project-branding-title.png)
+++

### label

+++ label : `string`

Optional Logo Label text. Default is `Docs`.

```json Set a custom label
{
  "branding": {
    "label": "v2.2"
  }
}
```
The above `label` would be rendered as the following label in the upper-left corner of the generated website.

![GitHub Pages configuration](../static/project-branding-title.png)
+++

### logo

+++ logo : `string`

One of the following:

1. The path to a logo file (light theme), relative to the [input](#input), or
2. An inline `<svg>` logo

Default is `null`.

```json Set a custom label
{
  "branding": {
    "logo": "static/logo.png"
  }
}
```
+++

### logoDark

+++ logoDark : `string`

One of the following:

1. The path to a logo file (dark theme), relative to the [input](#input), or
2. An inline `<svg>` logo

Default is `null`.

```json Set a custom label
{
  "branding": {
    "logo": "static/logo.png",
    "logoDark": "static/logo-dark.png"
  }
}
```
+++


## Additional options

| Option                               | Type      | Default value              | Description                                                                                                                     |
| ------------------------------------ | --------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `branding.colors`                    | `object`  |                            | Custom color configuration                                                                                                      |
| `branding.colors.label`              | `object`  |                            | Logo label colors                                                                                                               |
| `branding.colors.label.text`         | `string`  | `#1f7aff`                  | Text color                                                                                                                      |
| `branding.colors.label.background`   | `string`  | `#e1edff`                  | Background color                                                                                                                |
|                                      |           |                            |                                                                                                                                 |
| `links`                              | `array`   |                            | Top-level navigation link configuration                                                                                         |
| `links[].text`                       | `string`  |                            | Navigation link text                                                                                                            |
| `links[].link`                       | `string`  |                            | Navigation link URL                                                                                                             |
| `links[].icon`                       | `string`  |                            | An icon for this link                                                                                                           |
| `links[].iconPosition`               | `string`  |                            | The icon position for the icon. Either `left` or `right`. Default is `left`                                                     |
|                                      |           |                            |                                                                                                                                 |
| `footer`                             | `object`  |                            | Footer configuration                                                                                                            |
| `footer.copyright`                   | `string`  |                            | Site-wide copyright statement that will be added to the footer of each page. Supports Markdown syntax and `{{ year }}` variable |
| `footer.links`                       | `array`   |                            | Footer navigation link configuration                                                                                            |
| `footer.links[].text`                | `string`  |                            | Navigation link text                                                                                                            |
| `footer.links[].link`                | `string`  |                            | Navigation link URL                                                                                                             |
|                                      |           |                            |                                                                                                                                 |
| `edit`                               | `object`  |                            | Edit plugin configuration                                                                                                       |
| `edit.repo`                          | `string`  |                            | Repository URL                                                                                                                  |
| `edit.branch`                        | `string`  | `main`                     | Optional repo branch                                                                                                            |
| `edit.base`                          | `string`  |                            | Optional base path within the repo branch                                                                                       |
| `edit.label`                         | `string`  | `Edit this page`           | Edit link label                                                                                                                 |
|                                      |           |                            |                                                                                                                                 |
| `plugins`                            | `object`  |                            | Plugin configuration                                                                                                            |
| `plugins.googleAnalytics`            | `object`  |                            | Google Analytics plugin configuration                                                                                           |
| `plugins.googleAnalytics.id`         | `string`  |                            | Google Analytics ID                                                                                                             |
|                                      |           |                            |                                                                                                                                 |
| `search`                             | `object`  |                            | Search configuration                                                                                                            |
| `search.minChars`                    | `number`  | 3                          | Min number of characters required in a search query                                                                             |
| `search.maxResults`                  | `number`  | 20                         | Max number of search results to render                                                                                          |
| `search.placeholder`                 | `string`  | `Search`                   | Placeholder text rendered on the search component                                                                               |
| `search.hotkeys`                     | `array`   | `["/"]`                    | Hotkeys (KeyboardEvent.key) enabling the search component                                                                       |
| `search.noResultsFoundMsg`           | `string`  | `Sorry, no results found.` | Message rendered when no results were found                                                                                     |
|                                      |           |                            |                                                                                                                                 |
| `code`                               | `object`  |                            | Source code reference configuration                                                                                             |
| `code.input`                         | `string`  |                            | Path to a project file, or a project directory                                                                                  |
| `code.output`                        | `string`  | `./api`                    | Custom path to the API output directory. Relative to `output`                                                                   |
|                                      |           |                            |                                                                                                                                 |
| `snippets`                           | `object`  |                            | Snippets configuration                                                                                                          |
| `lineNumbers`                        | `array`   |                            | Enables line numbers for the specified languages. The `*` (any language) and `none` (no language) wildcards are supported.      |
