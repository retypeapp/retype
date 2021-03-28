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

The `retype.json` file is actually optional (not required), but is recommended as you will almost certainly want to customize some options, so adding a `retype.json` is a good first step. See below for a full list of [options](#options).

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

## Options

| Option                               | Type      | Default value              | Description                                                                                                                     |
| ------------------------------------ | --------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `input`                              | `string`  | `.`                        | Custom path to the input directory                                                                                              |
| `output`                             | `string`  | `.retype`                  | Custom path to the output directory                                                                                             |
| `version`                            | `string`  | `1.0.0`                    | Version label. Set to `null` to hide                                                                                            |
| `base`                               | `string`  | `/`                        | Base subfolder path appended to URL                                                                                             |
| `cname`                              | `string`  |                            | If specified, a `CNAME` file with the corresponding content will be emitted                                                     |
| `favicon`                            | `string`  |                            | Custom path to a favicon. Relative to the `input` directory                                                                     |
|                                      |           |                            |                                                                                                                                 |
| `license`                            | `string`  |                            | Retype license key                                                                                                              |
|                                      |           |                            |                                                                                                                                 |
| `meta`                               | `object`  |                            | Meta configuration                                                                                                              |
| `meta.title`                         | `string`  |                            | Common title suffix                                                                                                             |
|                                      |           |                            |                                                                                                                                 |
| `branding`                           | `object`  |                            | Branding configuration                                                                                                          |
| `branding.title`                     | `string`  | `Project Name`             | Logo Title. Displayed when `logo` and `logoDark` are not configured                                                             |
| `branding.label`                     | `string`  |                            | Optional Logo Label text.                                                                                                       |
| `branding.logo`                      | `string`  |                            | One of the following:                                                                                                           |
|                                      |           |                            | - Name of Logo file (light theme), relative to the `input` directory                                                            |
|                                      |           |                            | - Inline SVG logo                                                                                                               |
| `branding.logoDark`                  | `string`  |                            | Name of Logo file (dark theme), relative to the `input` directory. Ignored if the `logo` is configured with a SVG image         |
|                                      |           |                            |                                                                                                                                 |
| `branding.colors`                    | `object`  |                            | Custom color configuration                                                                                                      |
| `branding.colors.label`              | `object`  |                            | Logo label colors                                                                                                               |
| `branding.colors.label.text`         | `string`  | `#1f7aff`                  | Text color                                                                                                                      |
| `branding.colors.label.background`   | `string`  | `#e1edff`                  | Background color                                                                                                                |
|                                      |           |                            |                                                                                                                                 |
| `links`                              | `array`   |                            | Top-level navigation link configuration                                                                                         |
| `links[].text`                       | `string`  |                            | Navigation link text                                                                                                            |
| `links[].link`                       | `string`  |                            | Navigation link URL                                                                                                             |
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
