---
icon: versions
---
# Roadmap

The entire package release history of Retype is available on [NPM](https://www.npmjs.com/package/retypeapp) or [NuGet](https://nuget.org/packages/retypeapp).

Need a new feature in Retype? Start a [discussion](https://github.com/retypeapp/retype/discussions) and let's chat. :speech_balloon:

## `v2.0.0` [!badge text="NEXT" variant="info"]

- [ ] New `partials` support
- [ ] New `variables` support
- [ ] New `@region` code block tags
- [ ] New line highlighting in code blocks
- [ ] Include [`description`](configuration/page.md#description) in search index
- [ ] Any feature requests? Please [let us know](https://github.com/retypeapp/retype/discussions/)

## `v1.11.2` [!badge text="LATEST" variant="info"]

Released: [2021-12-23](https://github.com/retypeapp/retype/releases/tag/v1.11.2)

- [x] New [`allowFullScreen`](components/embed.md#allowfullscreen) attribute on the `[!embed]` component.

## `v1.11.1`

Released: [2021-12-02](https://github.com/retypeapp/retype/releases/tag/v1.11.1)

- [x] [FIX] Badges without links syntax `[!badge x]` are ignored.
- [x] [FIX] Horizontal scroll issue with wide table. See [#192](https://github.com/retypeapp/retype/issues/192).
- [x] [FIX] Relax client integrity verification rules. See [#225](https://github.com/retypeapp/retype/issues/225) and [#226](https://github.com/retypeapp/retype/issues/226).
- [x] [FIX] Corrupted website config error appears on first load after rebuild. See [#212](https://github.com/retypeapp/retype/issues/212) and [#226](https://github.com/retypeapp/retype/issues/226).

## `v1.11.0`

Released: [2021-11-19](https://github.com/retypeapp/retype/releases/tag/v1.11.0)

- [x] New multi-language search and automatic detection of content languages, see [#197](https://github.com/retypeapp/retype/issues/197)
- [x] New Retype Pro with increased page limit and Retype branding removal option
- [x] New style for native scrollbar styles on Windows, see [#107](https://github.com/retypeapp/retype/issues/107)
- [x] New [`server.watch.validation`](configuration/project.md#watchvalidation) project configuration option
- [x] Page config and SUMMARY.md can be used together
- [x] Upgrade Octicons icons library from v15.2.0 to v16.1.1
- [x] All heading elements within the page content added to the search index, see [#166](https://github.com/retypeapp/retype/issues/166).

## `v1.10.0`

Released: [2021-09-30](https://github.com/retypeapp/retype/releases/tag/v1.10.0)

- [x] New [$\KaTeX$](components/math-formulas.md) math typesetting library support
- [x] New Auto generate RSS feed for blog posts
- [x] New [`server.watch.polling`](configuration/project.md#watchpolling) project option
- [x] New Gravatar support for [`author`](configuration/page.md#author) avatars
- [x] New [project](https://retype.com/configuration/project/#gravatar) option to configure a [default](https://retype.com/configuration/project/#gravatardefault) Gravatar image
- [x] New [`target`](components/reference-link.md#target) and [`icon`](components/reference-link.md#custom-icon) attributes on [`[!ref]`](components/reference-link.md) component
- [x] New smarter link resolution logic

## `v1.9.0`

Released: [2021-08-30](https://github.com/retypeapp/retype/releases/tag/v1.9.0)

- [x] Incremental build during [`retype watch`](guides/cli/#retype-watch) with page dependency graph
- [x] Ability to run `retype watch` with in-memory output. Turned on by default, see [`server.watch.mode`](configuration/project/#watch) to configure.
- [x] New platform specific NPM packages:
  1. [`retypeapp-win-x86`](https://www.npmjs.com/package/retypeapp-win-x86)
  2. [`retypeapp-win-x64`](https://www.npmjs.com/package/retypeapp-win-x64)
  3. [`retypeapp-linux-x64`](https://www.npmjs.com/package/retypeapp-linux-x64)
  4. [`retypeapp-darwin-x64`](https://www.npmjs.com/package/retypeapp-darwin-x64)
- [x] Lazy Prism and Mermaid plugin execution for hidden content
- [x] Keep scroll position on full page reload during `retype watch`
- [x] Build is so fast now that the client refresh interval can be tightened up to `100ms`
- [x] Add [`target`](components/button/#target) property for linkable components, such as [Button](components/button/) and [Badge](components/badge/)

## `v1.8.2`

Released: [2021-08-06](https://github.com/retypeapp/retype/releases/tag/v1.8.2)

- [x] Update expired NPM Access Token to fix broken NPM package publishing from [`v1.8.1`](#v181)

## `v1.8.1`

Released: [2021-08-05](https://github.com/retypeapp/retype/releases/tag/v1.8.1)

- [x] Add broader checks for unresolved links, see [#112](https://github.com/retypeapp/retype/issues/112). For instance, if a link to `../components` is created, Retype will now try to resolve the path to any of the following:
```
../components.md
../components/index.md
../components/readme.md
../components/default.md
```
- [x] Allow inline Markdown components for [`author`](configuration/page/#author), [`title`](configuration/page/#title), and [`label`](configuration/page/#label) page configs, see [#114](https://github.com/retypeapp/retype/issues/114). Block-level Markdown components will be ignored for those configs.

!!!warning

This release failed to run properly if the NPM package was installed. 🧐 We didn't notice that our NPM Access Token had expired between the `v1.8.0` and `v1.8.1` releases. The expired NPM token caused our automated release process to fail. Sorry about that. :weary: Once we figured out what was going wrong, a new NPM Access Token was set and [`v1.8.2`](https://github.com/retypeapp/retype/releases/tag/v1.8.2) was released. We have added NPM token pre-checks and verifications to the automated release process to hopefully prevent the issue from ever happening again.

!!!

## `v1.8.0`

Released: [2021-08-03](https://github.com/retypeapp/retype/releases/tag/v1.8.0)

- [x] New [`retype.yml`](configuration/project.md) project configuration file format
- [x] New [`url`](configuration/project.md#url) project config for setting your website URL
- [x] New auto-generate a `sitemap.xml` file to inform search engines which pages to crawl
- [x] New auto-generate a `robots.txt` file
- [x] New Open Graph and Twitter meta tags generated for every page
- [x] New [`server.host`](configuration/project.md#host) and [`server.port`](configuration/project.md#port) project configs
- [x] New `/blog` summary for any `.md` page added to a `/blog` folder
- [x] New [`author`](configuration/page.md#author), [`category`](configuration/page.md#category), and [`date`](configuration/page.md#date) page configs
- [x] New [`redirect`](configuration/page.md#redirect) page config
- [x] New [`visibility`](configuration/page.md#visibility) page config
- [x] New process to handle the manual creation of a [`CNAME`](configuration/project/#cname) file and copy to output
- [x] New automated process to check for new Octicons release and merge update
- [x] Update to latest [Octicons](components/icon/#new-octicons) icon release
- [x] Improve the CLI experience, see [#103](https://github.com/retypeapp/retype/issues/103)
- [x] Fix excessive bottom padding on blockquotes, see [#74](https://github.com/retypeapp/retype/issues/74)

## `v1.7.0`

Released: [2021-06-24](https://github.com/retypeapp/retype/releases/tag/v1.7.0)

- [x] New [Column](components/column.md) component
- [x] New stacking [Panels](components/panel.md#stacking) component
- [x] New Open Graph and Twitter card support
- [x] New [Mermaid](components/mermaid.md) diagram and visualization support
- [x] New [`target`](configuration/project.md#target) config for all `links` within `retype.yml`
- [x] New default page support for [`default.md`](guides/formatting/#home-page)
- [x] New hover style on [Badge](components/badge.md) component when links
- [x] Super improved handling of áccënt characters

## `v1.6.0`

Released: [2021-06-09](https://github.com/retypeapp/retype/releases/tag/v1.6.0)

- [x] New [`tags`](configuration/page/#tags) config for pages
- [x] New [`:icon-shortcode:`](components/icon.md) component
- [x] New [`include`](configuration/project/#include) project config
- [x] New [`exclude`](configuration/project/#exclude) project config
- [x] Improved `<table>` styling
- [x] Performance boost for [components](components/readme.md)
- [x] Dozens of enhancements, optimizations, and adjustments

## `v1.5.0`

Released: 2021-05-12

- [x] New [Badge](components/badge.md) component
- [x] New [syntax highlighting](components/code-block/#syntax-highlighting) support for all code block languages
- [x] New [`route`](configuration/page.md#route) page config
- [x] New [`port`](configuration/project.md#port) project config
- [x] Larger font-size for `h1`, `h2`, and `h3` headers
- [x] Improved handing of special characters within file names
- [x] Improved handling of `.md` pages created by GitHub Wiki

## `v1.4.0`

Released: 2021-04-12

- [x] Even cleaner upgrade to Retype from GitBook experience
- [x] New super fast [`retype watch`](guides/cli.md#retype-watch) incremental build process
- [x] New [image alignment](components/image.md#alignment-options) and captions
- [x] New [`exclude`](configuration/project.md#exclude) config for `retype.yml`
- [x] New `blog` layout and `/blog` folder defaults
- [x] New [`[!file]`](components/file-download.md) component
- [x] New [`[!ref]`](components/reference-link.md) component
- [x] Many other minor enhancements and bug fixes

## `v1.3.0`

Released: 2021-03-30

- [x] New GitHub [Actions](guides/github-actions.md) for Retype
- [x] New [`expanded`](configuration/page.md#expanded) config on [folder](configuration/folder.md) configuration
- [x] New [`icon`](configuration/project.md#icon) and [`iconAlign`](configuration/project.md#iconalign) configs on [`links`](configuration/project.md#links)
- [x] Several important bug fixes

## `v1.2.0`

Released: 2021-03-25

- [x] New [`central`](configuration/page.md#layout) layout
- [x] New [`page`](configuration/page.md#layout) layout
- [x] New [`Edit this page`](configuration/project.md#edit) link
- [x] New `Previous | Next` footer navigation buttons for pages
- [x] New [`order`](configuration/page.md#order) Page level config
- [x] New ~~`hidden` [`visibility`](configuration/page.md#visibility) Page level config
- [x] New [`favicon`](configuration/project.md#favicon) Project config available in `retype.yml`
- [x] New beta release of building C# project reference documentation

## `v1.1.0`

Released: 2021-03-12

- [x] New [Tab](components/tab.md) component
- [x] New [Button](components/button.md) component
- [x] New [Panel](components/panel.md) component with expand/collapse
- [x] New [`retype watch`](guides/#retype-watch) command
- [x] New Live Reload when using [`retype watch`](guides/cli.md#retype-watch)
- [x] New [`.yml`](configuration/page.md#separate-yml-file) option for Page or Folder configs
- [x] New code block [title](components/code-block.md#title)
- [x] Enable [line numbering](components/code_blocks#line-numbers) in code blocks

## `v1.0.0`

Released: 2021-02-11

- [x] Publish to NPM
- [x] Publish to NuGet
- [x] Initial `v1.0.0` release
