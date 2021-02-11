# Project Configuration

Retype will read your projects `retype.json` file for additional instructions on how to configure and generate your new website. 

:::
After making a change to the `retype.json`, you should run `retype build` to generate a fresh new build of the website.
:::

The `retype.json` file is actually optional (not required), but is recommended as you will almost certainly want to customize some options, so adding a `retype.json` is a good first step. See below for a full list of [Options](#options).

Running the command `retype init` will create a default `retype.json` file. The following sample demonstrates a common set of configuration options and everything can be customized to your requirements.

#### Sample

```json
{
  "input": ".",
  "output": "./retype",

  "identity": 
  {
    "title": "Project Name",
    "label": "Docs"
  },

  "links": [
    {
      "text": "Getting Started",
      "link": "https://retype.com/getting_started/"
    }
  ],

  "nav": [
    {
      "path": "/",
      "icon": "home"
    }
  ],

  "footer": {
    "copyright": "© Copyright {{ year }}. All rights reserved."
  }
}
```

## Options

| Option                               | Type     | Default&nbsp;value              | Description                                                                                                                     |
| ------------------------------------ | -------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `input`                              | `string` | `.`                        | Custom path to the input directory                                                                                              |
| `output`                             | `string` | `./retype`                 | Custom path to the output directory                                                                                             |
| `version`                            | `string` | `1.0.0`                    | Version label. Set to `null` to hide                                                                                            |
| `base`                               | `string` | `/`                        | Base URL                                                                                                                        |
| `cname`                              | `string` |                            | If specified, a `CNAME` file with the value provided will be created                                                            |
| `meta`                               | `object` |                            | Meta configuration                                                                                                              |
| `meta.title`                         | `string` |                            | Common title suffix                                                                                                             |
| `identity`                           | `object` |                            | Identity configuration                                                                                                          |
| `identity.title`                     | `string` | `Project Name`             | Logo Title. Displayed when `$(logo)` and `$(logoDark)` are not configured                                                       |
| `identity.label`                     | `string` |                            | Optional Logo Label text.                                                                                                       |
| `identity.logo`                      | `string` |                            | One of the following:                                                                                                           |
|                                      |          |                            | - Name of Logo file (light theme), relative to the `$(input)` directory                                                         |
|                                      |          |                            | - Inline SVG logo                                                                                                               |
| `identity.logoDark`                  | `string` |                            | Name of Logo file (dark theme), relative to the `$(input)` directory. Ignored if the `$(logo)` is configured with a SVG image   |
| `identity.colors`                    | `object` |                            | Custom color configuration                                                                                                      |
| `identity.colors.label`              | `object` |                            | Logo label colors                                                                                                               |
| `identity.colors.label.text`         | `string` | `#1f7aff`                  | Text color                                                                                                                      |
| `identity.colors.label.background`   | `string` | `#e1edff`                  | Background color                                                                                                                |
| `identity.colors.sidebar`            | `object` |                            | Sidebar colors                                                                                                                  |
| `identity.colors.sidebar.background` | `string` | `#eee`                     | Background color                                                                                                                |
| `identity.colors.sidebar.border`     | `string` | `#ccc`                     | Border color                                                                                                                    |
| `identity.colors.sidebar.link`       | `string` | `#333`                     | Link color                                                                                                                      |
| `identity.colors.sidebar.linkHover`  | `string` | `#444`                     | Link color on mouse hover                                                                                                       |
| `links`                              | `array`  |                            | Top-level navigation link configuration                                                                                         |
| `links[].text`                       | `string` |                            | Navigation link text                                                                                                            |
| `links[].link`                       | `string` |                            | Navigation link URL                                                                                                             |
| `nav`                                | `array`  |                            | Sidebar root-level navigation configuraton                                                                                      |
| `nav[].path`                         | `string` |                            | Relative path as it appears in the url                                                                                          |
| `nav[].label`                        | `string` |                            | Optional label. When set, overrides the item label inferred from title                                                          |
| `nav[].icon`                         | `string` |                            | Optional item icon. Could be one from the following options:                                                                    |
|                                      |          |                            | - Octicons icon name, e.g. `home` (see more: https://primer.style/octicons/)                                                    |
|                                      |          |                            | - Emoji shortcode, e.g. `:smile:` (see more: https://mojee.io/emojis/)                                                          |
|                                      |          |                            | - Svg element (`<svg>..</svg>`)                                                                                                 |
| `footer`                             | `object` |                            | Footer configuration                                                                                                            |
| `footer.copyright`                   | `string` |                            | Site-wide copyright statement that will be added to the footer of each page. Supports Markdown syntax and `{{ year }}` variable |
| `footer.links`                       | `array`  |                            | Footer navigation link configuration                                                                                            |
| `footer.links[].text`                | `string` |                            | Navigation link text                                                                                                            |
| `footer.links[].link`                | `string` |                            | Navigation link URL                                                                                                             |
| `plugins`                            | `object` |                            | Plugin configuration                                                                                                            |
| `plugins.google`                     | `object` |                            | Google Plugin configuration                                                                                                     |
| `plugins.google.analytics`           | `object` |                            | Google Analytics configuration                                                                                                  |
| `plugins.google.analytics.id`        | `string` |                            | Google Analytics ID                                                                                                             |
| `search`                             | `object` |                            | Search configuration                                                                                                            |
| `search.minChars`                    | `number` | 3                          | Min number of characters required in a search query                                                                             |
| `search.maxResults`                  | `number` | 20                         | Max number of search results to render                                                                                          |
| `search.placeholder`                 | `string` | `Search`                   | Placeholder text rendered on the search component                                                                               |
| `search.hotkeys`                     | `array`  | `["/"]`                    | Hotkeys (KeyboardEvent.key) enabling the search component                                                                       |
| `search.noResultsFoundMsg`           | `string` | `Sorry, no results found.` | Message rendered when no results were found                                                                                     |