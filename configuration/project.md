---
label: Project
order: 200
icon: package
tags: [config]
toc:
  depth: 2-5
---
# Project configuration

Retype will read the **retype.yml** file for additional instructions on how to configure and build your project.

The **retype.yml** file is typically placed in the root of your project, although it can be placed elsewhere. Please ensure the [`input`](#input) and [`output`](#output) paths are correct if moved to a different location.

!!!
After making a change to the **retype.yml**, if you are running `retype start`, Retype will automatically rebuild the project for you and your web browser will refresh with the changes.

If you started the local web server using `retype serve`, you will need to call `retype build` to regenerate a :sparkles: sparkly :sparkles: fresh new build of the project, then manually refresh your web browser to see the update. Using the command `retype serve --live` will automatically update all web browsers.
!!!

The **retype.yml** file is actually optional (not required), but is recommended as you will almost certainly want to customize some options, so adding a **retype.yml** is a good first step.

If you run the command `retype start` and do not have a **retype.yml** project configuration file within the root of your project, Retype will auto-generate a simple **retype.yml** file for your project. You can then edit the file to customize your project.

You can also explicitly have Retype generate a **retype.yml** file by running the command `retype init`.

The following sample demonstrates a common set of project configuration options and everything can be customized to your requirements.

```yml Sample retype.yml
input: .
output: .retype
url: example.com # Add your website here
branding:
  title: Project Name
  label: Docs
links:
  - text: Getting Started
    link: https://retype.com/guides/getting-started/
footer:
  copyright: "&copy; Copyright {{ year }}. All rights reserved."
```

[!ref Full retype.yml sample](/samples/advanced-project-config.md)

---

## branding

Branding configuration for your Retype generated website.

### title

=== title : `string`

The main text title added to the upper-left corner of the generated website.

The `title` can be used in conjunction with [`logo`](#logo) and [`logoDark`](#logodark). If a `title` and `logo` are configured, both will be added to the website. If only a `title` is configured, only the text title is used. If only a `logo` and/or `logoDark` are configured, only the logos are used.

```yml Set the website title
branding:
  title: Example.com
```

The above `title` would create the following branding title in the upper-left corner of the generated website.

![](/static/project-branding-title.png)
===

### label

=== label : `string`

Optional logo label text. Default is `Docs`.

```yml Set a custom label
branding:
  label: Docs
```
The `label` is rendered as the following label in the upper-left corner of the generated website, to the right of the [`title`](#title) or [`logo`](#logo).

![](/static/project-branding-title.png)
===

### logo

=== logo : `string`

One of the following:

1. The path to a logo file relative to the [`input`](#input), or
2. An inline `<svg>` logo

Default is `null`.

```yml Set a custom label
branding:
  logo: static/logo.png
```
===

### logoDark

=== logoDark : `string`

One of the following:

1. The path to a logo file (dark mode) relative to the [`input`](#input), or
2. An inline `<svg>` logo

Default is `null`.

```yml Set a custom label
branding:
  logo: static/logo.png
  logoDark: static/logo-dark.png
```
===

### logoAlign

=== logoAlign : `string`

Set a logo image alignment relative to the [`title`](#title). Supported values include `left` and `right`.

Default is `left`.

```yml
branding:
  logo: static/logo.png
  logoAlign: right
```
===

### colors

Custom color configuration.

!!!warning
Hex color values must be wrapped in `"` double-quotes, otherwise the value is treated as a comment because of the unquoted `#` character.
!!!

#### label

##### text

=== text : `string`
Set a custom label text color". Default is `"#1f7aff"`.

```yml
branding:
  colors:
    label:
      text: "#ffffff"
```
===

##### background

=== background : `string`
Set a custom label background color. Default is `"#e1edff"`.

```yml
branding:
  colors:
    label:
      background: "#ff0000"
```
===

---

## breadcrumb

This config is Retype [!badge PRO](/pro/pro.md) only.

The breadcrumb navigation provides a hierarchical representation of the user's location within the website. The breadcrumb simplifies navigating website content structures, allowing for easier backtracking and understanding of the website layout.

### enabled

=== [!badge PRO] enabled : `boolean`
To enable or disable the breadcrumb navigation within Retype Pro projects. Default is `true`.

For Retype Pro projects, breadcrumb navigation will be enabled by default.

For Retype projects (non-Pro), the breadcrumb navigation will not be added to any pages.

To disable the breadcrumb navigation across an entire project, set the `enabled` parameter to `false` as shown in the following sample:

```yml
breadcrumb:
  enabled: false # Disabled project wide
```
===

### home

=== [!badge PRO] home : `string` or `boolean`
The `home` config allows customization of the initial node in the breadcrumb navigation. The parameter can accept either a `string` or a `boolean` value.

By default, the label used for the first item of the breadcrumb navigation will be the label of the project home page. This label can be customized or even removed.

Set with a custom label:

```yml
breadcrumb:
  home: Home # custom label
```

Use an Octicon [icon](/components/icon.md) instead of text for the Home node:

```yml
breadcrumb:
  home: ":icon-home:" # icon
```

Use an [emoji](/components/emoji.md):

```yml
breadcrumb:
  home: ":rocket:" # emoji
```

The entire first item of the breadcrumb navigation, the "Home" node, can be removed by setting `home: false`:

```yml
breadcrumb:
  home: false # Do not include the Home node
```
===

### separator

=== [!badge PRO] separator : `string`
The `separator` config allows for the customization of the node separator used between each page label in the breadcrumb navigation.

Using a pipe `|` character as the separator:

```yml
breadcrumb:
  separator: "|"
```

Using an [icon](/components/icon.md) as the separator:

```yml
breadcrumb:
  separator: ":icon-dot:"
```
===

---

## cache

Cache configuration options.

### strategy

=== strategy : `string`
Cache busting configuration for the website resources, such as the JavaScript (.js) and CSS (.css) files.

Helps to ensure a loaded page refers to the most recent JavaScript and CSS resources.

Specifies the approach Retype will use for cache invalidation.

| Strategy     | Description |
| ------------ | ----------- |
| `none`       | Cache invalidation is disabled. |
| `path`       | Cache invalidation is achieved by concatinating the file name with a version token. |
| `query`      | Cache invalidation is achieved by adding a query parameter with a version token value. |

Default is `query`.

```yml
cache:
  strategy: query
```

Below are demo URLs generated for corresponding `cache.busting.strategy` options:

~~~html `strategy: none`
<script type="text/javascript" src="/resources/js/retype.js" />
~~~

~~~html `strategy: path`
<script type="text/javascript" src="/resources/js/retype.v1.10.js" />
~~~

~~~html `strategy: query`
<script type="text/javascript" src="/resources/js/retype.js?v=1.10" />
~~~

===

### token

=== token : `string`

An optional unique token used for website resource cache invalidation.

If specified, the provided value is used for all invalidatable resources as is.

If not specified, the default token having the following structure is used:
`{Retype version}.{total milliseconds elapsed since 2000-01-01}`

```yml
cache:
  token: v5
```
===

---

## cname

=== cname : `boolean` or `string`

!!!
In general, you should not require setting the `cname`. Please set the [`url`](#url).
!!!

By default, if the [`url`](#url) is set, Retype will automatically generate a **CNAME** file. This can be disabled by setting `cname: false`.

```yml Disable CNAME file generation
cname: false
```

If you do want a **CNAME** file generated, but for some reason require a value different than what the `url` creates, you can explicitly set instruct Retype to generate the **CNAME** with a different value.

This would be a highly unusual scenario, but Retype does allow you to configure these values separately, just in case you need it. We **HIGHLY** recommend that you just stick with setting the [`url`](#url).

```yml Custom CNAME file value
cname: docs.example.com
```

===

---

## edit

The `edit` config allows for enabling and customization of the `Edit this page` links on content pages.

!!!
Check out the bottom of this page for a working sample of `Edit this page`.
!!!

### repo

=== repo : `string`
The repository URL where the source files for this project are located.

Setting a `repo` value will enable the `Edit this page` links on all content pages.

```yml
edit:
  repo: "https://github.com/<your-organization>/<your-repo>/"
```

It is also possible to configure the links to point directly to the `/edit/` view of the page:

```yml
edit:
  repo: "https://github.com/<your-organization>/<your-repo>/edit/"
```

===

### base

=== base : `string`
An optional base path to a directory within the repository.

The `base` can be configured with an optional path to a directory within the [`repo`](#repo).

The following sample demonstrates how `edit.base` would be configured if the **.md** source files for this project are stored within the **/src/docs** sub-directory within the repo.

```yml
edit:
  repo: "https://github.com/your-organization/your-repo"
  base: /src/docs
```

The final **Edit this page** URL constructed by Retype for the sample above would be `https://github.com/your-organization/your-repo/blob/main/src/docs/your-page.md`.

===

### branch

=== branch : `string`
Point to a custom branch within the repo. Default is `main`.

```yml
edit:
  repo: "https://github.com/your-organization/your-repo"
  branch: master
```
===

### label

=== label : `string`
A custom label for the link. Default is `"Edit this page"`.

```yml
edit:
  repo: "https://github.com/your-organization/your-repo"
  label: Edit on GitHub
```
===

---

## editor

Custom configuration to control the page live editor functionality that is only available when `retype start` is running.

### enabled

=== enabled : `boolean`
To enable or disable the live editor. Default is `true`.

Set to `false` to disable and hide the live editor.

```yml
editor:
  enabled: false # Default is true
```
===

---

## exclude

=== exclude : `list`
Retype can exclude files or folders from being built or copied to the [`output`](#output) by configuring an `exclude` list within your projects **retype.yml** file.

Exclude patterns are similar to allowable patterns within a `.gitignore` file. The wildcards `?`, `*`, `**`, and `!` are supported.

The following sample demonstrates how to exclude an entire `draft/` folder, any folder that ends with `*_temp/`, and one specific `/src/temp.md` file.

```yml Exclude patterns
exclude:
  - "draft/"
  - "*_temp/"
  - "/src/temp.md"
```

You could exclude everything in your project with by adding `exclude: [ * ]`.

!!!
By default, any file or folder name prefixed with a `.` or a `_` will be excluded.

As well, any `node_modules` folder will be excluded.
!!!

To explicitly include any files or folders that might have been excluded, please see the [`include`](#include) config.
===

---

## favicon

=== favicon : `string`

A custom path to a `.ico` or `.png` file to be used as the `favicon`. Default is `null`.

The path is relative to the [`input`](#input).

```yml Favicon is stored in the /static folder
favicon: static/favicon.png
```

By default, Retype will look for a `favicon.ico` or `favicon.png` within the root of the [`input`](#input). The `favicon` config would typically only be used if you want to store the `favicon` file in a subfolder of the [`output`](#output) root.
===

---

## footer

### copyright

=== copyright : `string`
Site-wide copyright statement that will be added to the footer of each page. Supports Markdown syntax and `{{ year }}` variable.

```yml
footer:
  copyright: "© Copyright {{ year }}. [Example, Inc.](https://example.com/) All rights reserved."
```
===

### links (footer)

=== links : `object`
The `footer.links` have the same configuration options as [`links`](#links).

```yml
footer:
  links:
    - text: License
      link: license.md
```
===

---

## generator

### directoryIndex

Configuration options to instruct Retype on how and when to deal with the default directory index files, such as `index.html`.

#### altNames

=== altNames : `list`
A list of file names to treat as default HTML files.

By default, Retype will treat all of the following files as default pages if they are within a folder.

```yml
generator:
  directoryIndex:
    altNames:
      - index.html
      - index.htm
      - default.html
      - default.htm
```

If you have a **default.htm** file within a folder and do not want it to be treated as a default page, then set `altNames` to the following:

```yml
generator:
  directoryIndex:
    altNames:
      - index.html
```

===

#### append

=== append : `boolean`
Specifies if the default document file name should be appended to resolved URLs. By default, Retype does not append the default file name.

If `false`, the generated link will be `/guide/`. If `true`, the generated link will be `/guides/index.html`.

```yml
generator:
  directoryIndex:
    append: true # default is false
```

Using `append: true` in combination with the [`search.preload`](#preload) config allows for offline file system browsing of your generated website without having to install Retype and start a web server using [`retype start`](/guides/cli.md#retype-start). The following sample demonstrates how to configure:

```yml
search:
  preload: true

generator:
  directoryIndex:
    append: true
```

===

#### name

=== name : `string`
The default HTML document file name generated by Retype.

```yml
generator:
  directoryIndex:
    name: default.htm # Default is index.html
```
===

### paths

=== paths : `string`
Configures url kind preference for resolved urls. Supported values: `source`, `relative`, and `root`.

Option | Description
---    | ---
`relative` | Link paths are constructed using relative paths. Example: `../../guide/introduction/`. This is the default.
`root`     | Link paths are constructed using paths resolving to the website root. Example: `/guide/introduction/`
`source`   | Link paths are constructed using paths resolving to the source file root.

```yml
generator:
  paths: relative
```
===

### recase

=== recase : `string`
Instructs Retype on how to recase the project file and folder names created by the author. Default is `all`.

By default, Retype will recase all the generated file and folder names to all lowercase.

Option | Description
---    | ---
`all`  | Covert all file and folder names in the generated [`output`](#output) to all lowercase. This is the default.
`none` | Do not change the case of any file or folder names.


To have Retype NOT change the casing of any of your file or folder names, set `recase` to `none`.

```yml
generator:
  recase: none
```
===

### trailingSlash

=== trailingSlash : `boolean`
By setting `trailingSlash: false` in the project config, authors can instruct Retype to remove (or not add) the trailing `/` character when constructing links from paths to Markdown files.

For example, if you have a simple link in your project to `[Example](/guide/example.md)`, Retype will create the link as `/guide/example/`. By setting `trailingSlash: false` in your project, Retype would then create the link as `/guide/example`.

It is best practice to include the trailing slash and by default, Retype will automatically add the trailing slash to links that are missing.

```
generator:
  trailingSlash: false # default is true
```
===

---

## hub

This config is Retype [!badge PRO](/pro/pro.md) only.

The Hub creates a handy shortcut link in the top-left of the page, just to the left of your project logo or title.

![Hub link sample](/static/hub-screencapture.png)

The hub link lets visitors easily jump back to your main site or central doc hub, such as linking from your documentation deployed at `docs.example.com` to `example.com`.

The hub link is useful when deploying multiple documentation projects and you would like a bridge to your primary documentation hub.

The hub is optional. If you would like a hub link, just set a URL in the `link` config.

### link

=== [!badge PRO] link : `string`
Set to a local path or external URL. By setting the `link` value, the Hub will be enabled. To disable, remove the `link` config.

```yml
hub:
  link: https://example.com/ # default is empty
```
===

### alt

=== [!badge PRO] alt : `string`
Custom text value used to set the `title` attribute of the hub link.

```yml
hub:
  link: https://example.com/
  alt: Go to example.com
```
===

### target

=== [!badge PRO] target : `string`
Sets the `target` attribute of the hub link and specifies which window or tab to open the link into.

```yml
hub:
  link: https://example.com/
  target: blank
```

If no `target` is configured, the link will open in the current tab.

The `target` can be set to any value, although `blank` is common and will open the link in a new tab. Retype will automatically transform the value `blank` into `_blank` which is the actual value required by the browser to indicate that a hyperlink should be opened in a new tab.

There are several other values that may be prefixed with an `_` character, including `self`, `parent`, and `top`. The following table demonstrates some common scenarios and naming convention used by Retype to normalize the `target` values.

{.compact}
| Config `target` value | Runtime `target` value |
| --------------------- | ---------------------- |
| `blank`               | `_blank`               |
| `parent`              | `_parent`              |
| `top`                 | `_top`                 |
| `self`                | `_self`                |
| `news1`               | `news1`                |
| `nEWs2`               | `news2`                |
| `recent NEWS`         | `recent-news`          |

===

---

## include

=== include : `list`
Retype can explicitly include files or folders that might have been excluded by default or excluded within the [`exclude`](#exclude) config.

!!!
If you create a link to local static file, such as `.zip` file, Retype will automatically copy that file to the generated website.

That file or file type does not need to be explicitly configured to be included. Retype assumes that if you created a link to the file, you wanted that file published and it will be included in the [`output`](#output).
!!!

Include patterns are similar to allowable patterns within a `.gitignore` file. The wildcards `?`, `*`, `**`, and `!` are supported.

The following sample demonstrates how to include all **.py** files, all **.js** files that start with the name `demo`, and the entire contents of any `www` folder within the project.

```yml Include patterns
include:
  - "*.py"
  - "demo*.js"
  - "**/www/**"
```

You could explicitly include everything in your project with `include: [ "*" ]`, but be careful as all files within your [`input`](#input) will be publicly availble once your website is published. We would not recommend doing this, but it's your call. :fearful:

Retype treats all **.md** and **.yml** files as parsable content files that will be converted into **.html** files and are not copied over to the [`output`](#output). All other included file types would be copied straight across to the `output` unchanged and become static files that can be linked to.

By default, if Retype discovers any of the following file types, they will be automatically included and copied over to the `output` unchanged. If you require any other file types, they would need to be explicitly added to the `include` config.

File types that are automatically included:

1. `*.ai`
1. `*.bmp`
1. `*.eps`
1. `*.gif`
1. `*.heif`
1. `*.htm`
1. `*.html`
1. `*.jpeg`
1. `*.jpg`
1. `*.pdf`
1. `*.png`
1. `*.svg`
1. `*.tiff`
1. `*.txt`
1. `*.webp`
1. `*.zip`

By default, if Retype discovers any of the following folders anywhere within the project, the folder and its entire contents will be copied over to the `output` unchanged. If you require any other folders, please add to the `include` config.

Included folders:

1. `**/static/**`
1. `**/public/**`
1. `**/assets/**`
1. `**/resources/**`

If you would rather not include certain folders, files, or file types, please add the pattern to the [`exclude`](#exclude) config.

===

---

## input

=== input : `string`

Custom path to the input directory. Default is `.`.

The path is relative to the **retype.yml** location.

```yml Change input location to /src folder
input: ./src
```
===

---

## integrations

More `integrations` will be added over time. Do you have an integration suggestion? [let us know](https://github.com/retypeapp/retype/issues).

### googleAnalytics

Add [Google Analytics](https://analytics.google.com/analytics/web/) to your website.

=== googleAnalytics.id : `string`
Google Analytics ID value.

```yml
integrations:
  googleAnalytics:
    id: <id>
```

Replace the `<id>` with your Google Analytics measurement id. For example:

```yml
integrations:
  googleAnalytics:
    id: A-BCDEFGHIJ1
```

===

---

### googleTagManager

Add the [Google Tag Manager](https://tagmanager.google.com/) to your website.

=== googleTagManager.id : `string`
Google Tag manager ID value.

```yml
integrations:
  googleTagManager:
    id: <id>
```

Replace the `<id>` with your Google Tag Manager measurement id.
===

---

### gravatar

Specific setting to control Retype integration with the [Gravatar](https://gravatar.com/) profile picture service and used by the [page.authors](/configuration/page.md#author) configuration.

#### default

=== default : `string`

The default profile image to return from Gravatar queries whenever no image is assigned to the queried email address. Default value is `mp`.

Either a full URL to the image can be configured or one of the options listed below:

| Value | Sample |
| --- | --- |
| `404` | Broken image |
| `mp` (default) | ![](/static/gravatar-sample-mp.png) |
| `identicon` | ![](/static/gravatar-sample-identicon.png) |
| `monsterid` | ![](/static/gravatar-sample-monsterid.png) |
| `wavatar` | ![](/static/gravatar-sample-wavatar.png) |
| `retro` | ![](/static/gravatar-sample-retro.png) |
| `robohash` | ![](/static/gravatar-sample-robohash.png) |
| `blank` | Blank image |

Please see the [Default Image](https://en.gravatar.com/site/implement/images#default-image) documentation on the Gravatar website.

===

#### enabled

=== enabled : `boolean`

Whether Retype should use Gravatar to pull profile images. Default is `true`.

Setting to `false` will show the default image or specified resource.

!!!
Disabling Gravatar will also reset the default avatar to the Retype default.
!!!

===

---

### plausible

[Plausible.io](https://plausible.io/) is a simple and privacy-friendly Google Analytics alternative which can be integrated easily into Retype generated websites.

#### domain

=== domain : `string`

When you setup your project within Plausible, you enter a [`Domain`](https://plausible.io/docs/add-website) value which is then used to set the `integrations.plausible.domain` config within your **retype.yml** project configuration file.

```yml
integrations:
  plausible:
    domain: <string>
```

Plausible can also send statistics to [multiple](https://plausible.io/docs/plausible-script#can-i-send-stats-to-multiple-dashboards-at-the-same-time) dashboards by configuring a comma-separated list of domains. For example:

```yml
integrations:
  plausible:
    domain: domain1.com,domain2.com,subdomain.yourdomain.com
```

Check out the Plausible [documentation](https://plausible.io/docs/) for more details.

===

#### host

=== host : `string`

The Plausible service can be [self-hosted](https://plausible.io/docs/self-hosting) and your Retype project can be configured to use your custom `host`.

```yml
integrations:
  plausible:
    host: <string>
```

A typical `host` project configuration would look like the following sample:

```yml
integrations:
  plausible:
    host: plausible.example.com
```

If no transfer protocol is supplied, Retype will default the `host` value to use `https`.

All of the following sample `host` values are supported:

```yml
host: example.com
host: docs.example.com
host: https://example.com
host: http://example.com
host: example.com/js/plausible.js
host: docs.example.com/js/plausible.js
```

===

---

## links

Custom links added to the top-bar navigation of all pages.

The following sample demonstrates a basic `links` scenario which would add one link to the top bar of all pages.

```yml
links:
  - text: Getting Started
    link: https://retype.com/getting_started/
```

### text

=== text : `string`

The link text label.

```yml
links:
  - text: Demos
    link: https://demo.example.com/
```
===

### link

=== link : `string`

The URL to use for the link. The link can be a **.md** file name, or to any internal path, or to any external URL.

If a **.md** file set, such as `sample.md`, Retype will automatically resolve the path and in the generated website, the `sample.md` value will be replaced with the path to the actual generated HTML file.

```yml
links:
  - text: About us
    link: /about/
```
===

### icon

=== icon : `string`

An icon to use with the link. Default is `null`.

```yml
links:
  - text: Issues
    link: https://github.com/retypeapp/retype/issues/
    icon: bug
```

Options include using an [Octicon](https://primer.style/octicons/) name, [Emoji](https://mojee.io/emojis/) shortcode, `<svg>` element, or a path to an image file.

```yml Octicon
icon: rocket
```

```yml Emoji shortcode
icon: ":rocket:"
```

```yml SVG element
icon: <svg>...</svg>
```

```yml Path
icon: ../static/rocket.png
```
===

### iconAlign

=== iconAlign : `string`

The position for the icon relative to the link `text`. Either `left` or `right`. Default is `left`.

```yml
links:
  - text: Demos
    link: https://demo.example.com/
    icon: link-external
    iconAlign: right
```
===

### target

=== target : `string`

Sets the `target` attribute of the hyperlink and specifies which window or tab to open the link into.

```yml
links:
  - text: Demos
    link: https://demo.example.com/
    target: blank
```

If no `target` is configured, the link will open in the current tab.

The `target` can be set to any value, although `blank` is common and will open the link in a new tab. Retype will automatically transform the value `blank` into `_blank` which is the actual value required by the browser to indicate that a hyperlink should be opened in a new tab.

There are several other values that may be prefixed with an `_` character, including `self`, `parent`, and `top`. The following table demonstrates some common scenarios and naming convention used by Retype to normalize the `target` values.

{.compact}
| Config `target` value | Runtime `target` value |
| --------------------- | ---------------------- |
| `blank`               | `_blank`               |
| `parent`              | `_parent`              |
| `top`                 | `_top`                 |
| `self`                | `_self`                |
| `news1`               | `news1`                |
| `nEWs2`               | `news2`                |
| `recent NEWS`         | `recent-news`          |

===

---

## locale

The value of the `locale` config defines the primary language that will be used on the generated website. Retype will generate the website using system messages and labels in this language.

This flexibility makes your application more versatile and accessible to users from different languages. Currently, 24 languages are supported by Retype.

!!!
Please visit the [Retype Translation](https://retypeapp.github.io/retype-translations/) project for more details on adding new languages and making changes to existing languages.
!!!

=== locale : `string`

You can switch the `locale` to any other supported language by providing the corresponding ISO language code as listed below.

Default is `en`.

The following sample demonstrates switching the project to use French.

```yml
locale: fr
```

===


### Supported Languages

{.compact}
Code | Language | Native name
---  | --- | ---
`ar` | Arabic | العربية
`da` | Danish | Dansk
`de` | German | Deutsch
`en` [!badge variant="info" size="xs" text="default"] | English | English
`es` | Spanish | Español
`fi` | Finnish | Suomalainen
`fr` | French | Français
`hi` | Hindi | हिन्दी
`hu` | Hungarian | Magyar
`hy` | Armenian (Hayeren) | Հայերեն
`it` | Italian | Italiano
`ja` | Japanese | 日本語
`kn` | Kannada | ಕನ್ನಡ
`ko` | Korean | 한국어
`nl` | Dutch | Nederlands
`no` | Norwegian | Norsk
`pt` | Portuguese | Português
`pt-BR` | Brazilian Portuguese | Portuguese do Brasil
`ro` | Romanian | Română
`ru` | Russian | Русский
`sa` | Sankrit (Saṁskṛtam) | संस्कृतम्
`sv` | Swedish | Svenska
`ta` | Tamil | தமிழ்
`te` | Telugu | తెలుగు
`th` | Thai | ไทย
`tr` | Turkish | Türkçe
`vi` | Vietnamese | Tiếng Việt
`zh` | Chinese | 中文

---

## markdown

Markdown configuration options.

### lineBreaks

=== lineBreaks : `string`

Switches between `soft` and `hard` line break modes. The option instructs Retype in what way a regular line ending should be handled.

- in `soft` mode, regular line breaks are processed as [soft breaks](https://spec.commonmark.org/0.30/#soft-line-breaks) (no `<br />` is emitted to HTML markup), unless a line contains 2+ spaces before a line break.
- in `hard` mode, regular line breaks are always emitted as `<br />` HTML elements.

Default is `soft`.

```yml
markdown:
  lineBreaks: soft # or, hard
```

===

---

## meta

Project wide meta tag configuration options.

### title

=== title : `string`

Common site-wide suffix appended to the html `<title>` element of all pages. Default is `null`.

```yml Append this string to all page meta tag titles
meta:
  title: " | Example.com - Widgets for the internet"
```

Using the sample above, if we had an `About us` page, the final `<title>` would be:

```html
<title>About us | Example.com - Widgets for the internet</title>
```

!!!
See also, the Page level [`meta.title`](page.md/#title) configuration.
!!!
===
---

## outbound

This config is Retype [!badge PRO](/pro/pro.md) only.

The `outbound` configuration gives you the flexibility to customize the behavior of outbound links in your Retype project. It allows you to control which links are treated as outbound, where they open, what icon is used, and even exclude or include specific domains. For instance, [example.com](https://example.com/).

The `outbound` functionality will be automatically enabled for Retype Pro project. For projects that do not have a Retype Pro license, the `outbound` configuration and functionality is ignored.

If `outbound` is enabled, Retype will find all external (outbound) links within the project, add a trailing :icon-link-external: icon, and set the link to open in a new tab when clicked.

### enabled

=== [!badge PRO] enabled : `boolean`

Controls whether the outbound links feature is enabled.

The default is `true` for **Retype Pro** projects.

The following sample demonstrates disabling the `outbound` functionality:

```yml
outbound:
  enabled: false
```
===

### custom

=== [!badge PRO] custom : `string`

Provides a way to specify custom attributes to be added to the outbound links. The default value is empty/null.

The following sample demonstrates how to add the attribute `rel="noopener noreferrer"` to all outbound links:

```yml
outbound:
  custom: 'rel="noopener noreferrer"'
```
===

### icon

=== [!badge PRO] icon : `string`

Defines the icon to be used for outbound links and accepts all the same options as the [`links.icon`](#icon) config. The default value is `link-external` :icon-link-external:.

```yml
outbound:
  icon: link-external
```

If you would prefer to keep the `outbound` functionality enabled, but not include the :icon-link-external: icon, please set `icon: ""`. The following sample demonstrates:

```yml
outbound:
  icon: ""
```

===

### iconAlign

=== [!badge PRO] iconAlign : `string`

Determines the alignment of the icon for outbound links and accepts the same options as the [`links.iconAlign`](#iconalign) config. Acceptable values are `right` or `left`. The default value is `right`.

```yml
outbound:
  iconAlign: right
```
===

### target

=== [!badge PRO] target : `string`

Specifies the `target` attribute for the outbound links. The default value of `"blank"` opens the link in a new window or tab.

```yml
outbound:
  target: blank
```
===

### exclude

=== [!badge PRO] exclude : `list`

A list of outbound link patterns to be excluded from being captured by the Retype outbound functionality. This is useful if you do not want certain links to open in new tabs.

This configuration accepts similar path patterns as the [`exclude`](#exclude) config.

The following sample demonstrates excluding all links pointing to `example.com`.

```yml
outbound:
  exclude:
    - example.com
```

Please also see [`outbound.include`](#include-1).

===

### include

=== [!badge PRO] include : `list`

A list of outbound link patterns to be included for the Retype outbound functionality. This is useful if you only want certain links to open in new tabs. The default value of `*` includes all links.

This configuration accepts similar path patterns as the [`include`](#include) config.

The following sample demonstrates including only links that point to `example.com`.

```yml
outbound:
  include:
    - example.com
```

If any item is added to the `include` list, by default, all other paths will be excluded. Please also see [`outbound.exclude`](#exclude-1).
===

---

## output

=== output : `string`

Custom path to the output directory. Default is `.retype`.

The path is relative to the **retype.yml** location.

```yml Change output location to /docs folder
output: ./docs
```
===

---

## poweredByRetype

This config is Retype [!badge PRO](/pro/pro.md) only.

Controls whether to include or exclude the `Powered by Retype` branding.

![Sample Powered by Retype branding](/static/powered-by-retype.png)

=== [!badge PRO] poweredByRetype : `boolean`
With a Retype Pro license, the `Powered by Retype` branding can be removed by setting to `false`.

```yml
poweredByRetype: true # Set to `false` to remove.
```
===

---

## search

Customization of the website search component.

### hotkeys

=== hotkeys : `list`
Keyboard key to set the cursor focus into the search field. Default is `k`.

The following sample demonstrates how to change the search hotkey to use `/` instead of the default `k`:

```yml
search:
  hotkeys:
    - "/"
```
===

### maxResults

=== maxResults : `number`
Max number of search results to render. Default is `20`.

```yml
search:
  maxResults: 20
```
===

### minChars

=== minChars : `number`
Min number of characters required in a search query. Default is `2`.

The following sample demonstrates how to configure `search.minChars` with a new value:

```yml
search:
  minChars: 3
```
===

### mode

=== mode : `string`
The search index creation mode. Default is `full`.

Mode | Description
--- | ---
`full` | A full-text search index of the project content is made. Includes all headings and all text content.
`partial` | All headings plus the first paragraph under each heading is used to create the search index. The Page `description` config is also included if not empty.
`basic` | All headings plus only the first paragraph of each page is used to create the search index. The Page `description` config is also included if not empty.

The following sample demonstrates how to configure `search.mode` with a new value:

```yml
search:
  mode: partial
```

!!!
If your project includes a lot of content and your users find the search is running too slow, try changing to `mode: partial` or even a `mode: basic` if the website is really huge.
!!!
===

### noResultsFoundMsg

=== noResultsFoundMsg : `string`
Message rendered when no results were found. Default is `"Sorry, no results found."`.

```yml
search:
  noResultsFoundMsg: Sorry, no results found.
```
===

### placeholder

=== placeholder : `string`
Placeholder text rendered on the search component. Default is `"Search"`.

```yml
search:
  placeholder: Search
```
===

### preload

=== preload : `boolean`
Specifies if the search index should be preloaded. Default is `false`.

```yml
search:
  preload: true # Default is false
```

Using `preload: true` in combination with the [`generator.directoryIndex.append`](#directoryindexappend) config allows for offline file system browsing of your generated website without having to install Retype and start a web server using [`retype start`](/guides/cli.md#retype-start). The following sample demonstrates how to configure:

```yml
search:
  preload: true

generator:
  directoryIndex:
    append: true
```
===

## serve

Custom configuration for the built in Retype development web server.

### host

=== host : `string`

Serve the website from this host location. Default is `localhost`.

```yml
serve:
  host: 127.0.0.1
```

By default, the Retype development web server will serve from `http://localhost:5000`, although the port could be dynamically assigned if port `5000` is already in use.

A custom port value can also be assigned.

```yml
serve:
  host: 127.0.0.1:5005
```

A custom `--host` value can also be passed as an argument to the [`retype start`](/guides/cli.md#options) and [`retype serve`](/guides/cli.md#options-3) commands. If included, the `--host` value will override the `host` set within your **retype.yml** project configuration file.

```
retype start --host 127.0.0.1              # serve from a custom host
retype start --host 127.0.0.1 --port 5005  # serve from a custom host and port
```

===

### port

=== port : `number`

A custom port for the internal Retype development web server to use when hosting locally. Default is `5000`.

```yml
serve:
  port: 5005
```

If the default port is already being used by another service, Retype will auto-increment the port number until it finds an open port to host from.

If a custom `port` is explicitly configured in the **retype.yml** and if that port is already being used by another service, Retype will write a message to the console and exit. In that scenario, because the `port` was explicitly configured, Retype will not attempt to auto-increment.

!!!
The port number can also be included in the [`host`](#host) config.
!!!

A custom `--port` value can also be passed as an argument to the [`retype start`](/guides/cli.md#options) and [`retype serve`](/guides/cli.md#options-3) commands. If included, the `--port` value will override the `port` set within your **retype.yml** project configuration file.

```
retype start --port 5005  # serve from a custom port
```

===

### watch

Custom configuration for the [`retype serve`](/guides/cli.md#options-3) and [`retype start`](/guides/cli.md/#options) commands.

#### mode

=== mode : `string`

During `retype start` and `retype serve`, the `mode` configuration instructs the web server on where to host files from.

If `memory`, the entire website is built and then stored in memory during development with no files being written to disk.

If `disk`, the entire website is built and written to disk, then the web server will host those files from their disk location.

Default is `memory`.

| Mode     | Description |
| -------- | ----------- |
| `memory` | No output files are written to a disk. Retype serves a website from the in-memory storage. |
| `disk`   | Output files are written to the [`output`](#output) directory, and updated with each incremental build accordingly. |

```yml
serve:
  watch:
    mode: disk
```

The command [`retype build`](/guides/cli.md#retype-build) will always build and write all files to disk. The `memory` configuration is not an option with `retype build`. The Retype [GitHub Action](/guides/github-actions.md) uses `retype build`. The command `retype start` is only to be used during local development and not on a live production web server.

===

#### polling

=== polling : `boolean` or `number`

Instructs the local web server on how it should listen for file changes.

If `false`, the native filesystem event listeners are used to monitor for file changes.

If `true`, Retype will poll for file changes within your projects [input](#input) directory. By default, the polling interval is 1000 milliseconds (1 second).

The poll interval is configurable by setting a `number` value. For instance, setting `polling: 500` would configure a 500ms interval.

Default is `false`.

| Polling  | Description |
| -------- | ----------- |
| `false`  | Use native filesystem event listeners to receive file change notifications the project [input](#input) directory. |
| `true`   | Poll the [input](#input) directory for changes every 1000 milliseconds (1 second). |
| `number` | Poll the [input](#input) directory in milliseconds. |

```yml
serve:
  watch:
    polling: true
```

!!! Performance Warning
Disk polling may be a costly operation, especially in projects with a large quantity of files, and/or running over remote mounted directories (ftp mapping, NFS, SMB...). If configuring the poll interval, please adjust the value down in steps, monitoring performance as the poll interval decreases.

On the flip side, increasing the polling interval may cause an annoying experience during `retype start` as file changes will require a longer time before reflected in the browser.
!!!

===

#### validation

=== validation : `string`

Configure how thorough Retype is while looking for changed files.

Default value is `optimal`.

| Validation | Description |
| ---------- | ----------- |
| `fast`     | Compare file system metadata only (reported file size and last modification time). |
| `full`     | Perform full SHA2 comparison on every tracked file. |
| `optimal`  | Compare file system metadata and, for every file with changes, perform SHA2 comparison. |

===

---

## snippets

The `snippets` configuration allows for the project with custom configuration of code block formatting, including the project wide enabling of [line numbering](/components/code-block.md#line-numbers).

### lineNumbers

=== lineNumbers : `list`

A list of code block reference language strings to enable line numbering on. Default is `null`.

~~~yml Enable line numbering for `js` and `json` code blocks site wide
snippets:
  lineNumbers:
    - js
    - json
~~~

Configuring the `"*"` wildcard will enable line numbering for **all** code block types, including code blocks with no explicit reference language.

```yml Enable line numbering for all code blocks site wide
snippets:
  lineNumbers:
    - *
```

Enabling line numbering site wide on code blocks with no explicit reference language is configured with the none `"none"` specifier.

```yml Enable line numbering for all unspecified code blocks site wide
snippets:
  lineNumbers:
    - none
```
===

---

## start

The `start` config contains project options that apply during the [`retype start`](../guides/cli.md#retype-start) CLI command.

### open

=== open : `boolean`

Set to `false` to instruct Retype to not open the default web browser when the command `retype start` is run. By default, Retype will open a web browser when `retype start` is run.

The default is `true`.

The following sample demonstrates how to prevent the default web browser from opening during `retype start`:

```yml
start:
  open: false
```

Using the [CLI](../guides/cli.md#retype-start) command `retype start -n` or `retype start --no-open` will also prevent the default web browser from being opened.

===

### pro

=== pro : `boolean`

The default is `false`.

The following sample demonstrates how to start your project in _Pro mode_ and trial the [Retype Pro](/pro/pro.md) features:

```yml
start:
  pro: true
```

Using the [CLI](../guides/cli.md#retype-start) command `retype start --pro` will also start the project in Pro mode. 

===

## templating

Configurations to control the Retype content templating engine for this project.

### enabled

=== enabled : `boolean`

A project-wide option to enable or disable the Retype content templating engine. Default is `true`.

```yml
templating:
  enabled: true # Set to false to disable
```

The templating engine can also be disabled on a per-page basis by setting `templating: false` in the page metadata.

===

### liquid

=== liquid : `boolean`

Specifies if Liquid syntax `{% ... %}` is enabled. If `liquid: true` is set, Retype is incompatible with GitBook style of component configuration.

Default is `false`.

```yml
templating:
  liquid: false # Set to true to enable
```

===

---

## toc

This config is Retype [!badge PRO](/pro/pro.md) only.

The `toc` config contains project options that apply to the right sidebar Table of Contents.

### depth

=== [!badge PRO] depth : `string`, `number`
The heading depth to include in the right Table of Contents.

The default is `2-3`.

```yml
toc:
  depth: 2-3
```

The `toc` can be configured at the Project or Page levels.

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

=== [!badge PRO] label : `string`

A custom label for the top of the Table of Contents column.

```yml
toc:
  label: On this page
```
===

---

## url

=== url : `string`

The base URL of your website.

```yml
url: example.com
```

The `url` can also be a subdomain.

```yml
url: docs.example.com
```

If you deploy your Retype generated website into the subfolder of another website, add the subfolder in the `url`. For example, if the website will be available at `https://example.com/docs`, add that `docs` folder name to the `url`.

```yml
url: example.com/docs
```

If no protocol is supplied, such as `https` or `http`, Retype will assume `https`. A protocol can be explicitly defined by passing in the `url`.

```yml
url: http://example.com/docs/
```

Another common scenario for setting a `url` is when using [GitHub Pages](/guides/github-actions.md) **without** a custom **CNAME**.

For instance, if your GitHub organization was `CompanyX` and your repo was named `docs`, the URL to your GitHub Pages hosted website would be `https://companyx.github.io/docs/`.

Retype needs to know where your website will be hosted, so the `url` configuration for the above scenario would be:

```yml
url: companyx.github.io/docs
```

===

---

## Additional options

| Option       | Type     | Default value | Description                                                   |
| ------------ | -------- | ------------- | ------------------------------------------------------------- |
| `api`        | `object` |               | API reference doc generation                                  |
| `api.input`  | `string` |               | Path to a project file or a project directory                 |
| `api.output` | `string` | `./api`       | Custom path to the API output directory. Relative to `output` |
