---
icon: versions
---
![](/static/headers/roadmap.png)

# Roadmap

The entire release archives of Retype is available on [NPM](https://www.npmjs.com/package/retypeapp) or [NuGet](https://nuget.org/packages/retypeapp).

!!!
Need a new feature in Retype? Start a [discussion](https://github.com/retypeapp/retype/discussions) and let's chat. :icon-comment:
!!!

---

## v3.0.0 [!badge text="NEXT" variant="info"]

+++ Planned :icon-unverified:

- [x] :icon-shield-check: New Project level multi-language support with the ability to configure a different interface language within your project `retype.yml` file.
- [x] :icon-bug: Fixing misc defects and include several minor enhancements.

+++

## v2.4.0 [!badge text="LATEST" variant="info"]

Released: [2022-07-14](https://github.com/retypeapp/retype/releases/tag/v2.4.0)

+++ New :icon-shield-check:

1. `generator.directoryIndex.append` [project](/configuration/project.md) config.
1. `generator.trailingSlash` project config to instruct whether to add a trailing `/` when constructing links.
1. [`host`](/configuration/project.md#plausiblehost) config on `integrations.plausible`. See [#272](https://github.com/retypeapp/retype/discussions/272).

+++ Fixed :icon-bug:

1. Extra phantom `index.md` file if Retype output path ends with a slash char.
1. Anchored links receive extraneous slash char when `generator.directoryIndex.append: true`.
1. Links to home page ignore `generator.trailingShash` setting.
1. Link at top-left logo has trailing slash when `generator.trailingSlash` is set to `false`.
1. Pressing enter on search results creates invalid url. See [#333](https://github.com/retypeapp/retype/discussions/333).
1. Parent folder prefixed with an `_` underscore do not build properly. See [#336](https://github.com/retypeapp/retype/discussions/336).
1. Broken link to same page when `generator.trailingSlash` is `false`.

+++

## v2.3.0

Released: [2022-05-03](https://github.com/retypeapp/retype/releases/tag/v2.3.0)

+++ New :icon-shield-check:

- [x] Support for full relative URL pathing. See [#14](https://github.com/retypeapp/retype/discussions/14), [#133](https://github.com/retypeapp/retype/discussions/133), [#194](https://github.com/retypeapp/retype/discussions/194), [#222](https://github.com/retypeapp/retype/discussions/222), [#233](https://github.com/retypeapp/retype/discussions/233), and [#276](https://github.com/retypeapp/retype/issues/276).
- [x] New `generator.paths` [project](/configuration/project.md) config with `source`, `relative`, `root` options.
- [x] New `search.preload` project config to instruct Retype to preload the search index instead of on demand load.
- [x] New `generator.directoryIndex.name` project config for setting the default document name.
- [x] New `generator.directoryIndex.altNames` [project](/configuration/project.md) config.
- [x] New `RETYPE_DEFAULT_HOST` environment variable. See [#239](https://github.com/retypeapp/retype/discussions/239).
- [x] New self-referential canonical meta tag for all pages.
- [x] Link to API pages using fully qualified class name path.

+++ Fixed :icon-bug:

- [x] Exclude all contents of the `_includes` directory from being deployed.
- [x] Exclude files and pages within the `_includes` directory from the sitemap generation.
- [x] Sidebar menu item is not highlighted when missing trailing `/` in the URL.
- [x] Editor font request does not respect `base` path. See [#318](https://github.com/retypeapp/retype/discussions/318).
- [x] Syntax errors in yaml files results in corrupt category URLs. See [#316](https://github.com/retypeapp/retype/discussions/316).
- [x] `links` to the index document in the mobile sidebar footer not being resolved.
- [x] `.yml` files excluded from deploy even if explicitly declared in `include`. See [#311](https://github.com/retypeapp/retype/discussions/311).
- [x] `og:url` and `twitter:url` paths incorrect for API generated pages.
- [x] Include full version in the generator meta tag version.
- [x] Many `categories` extends beyond page width and does not wrap. See [#316](https://github.com/retypeapp/retype/discussions/316).

+++ Breaking :icon-shield-x:

- [x] Switch `generator.paths` default value to `relative`.

To revert to the previous functionality, set the `generator.paths` config to `root` in your project `retype.yml` file.

```yml
generator:
  paths: root # Old default functionality
```

+++

## v2.2.0

Released: [2022-03-30](https://github.com/retypeapp/retype/releases/tag/v2.2.0)

+++ New :icon-shield-check:

- [x] [`generator.recase`](https://retype.com/configuration/project/#generator) project config to recase file and folder names. See [#302](https://github.com/retypeapp/retype/issues/302).
- [x] Official Retype docker images published to [DockerHub](https://hub.docker.com/repository/docker/retypeapp/retype). See [#122](https://github.com/retypeapp/retype/issues/122).
- [x] New `@latest` tag to be used in your [`retype-action.yml`](http://localhost:5000/guides/github-actions/#step-1-add-retype-actionyml-workflow) configuration.
- [x] GitHub Action annotation to announce availability of Retype v2, only if using Retype v1.

+++ Fixed :icon-bug:

- [x] [author](/configuration/page.md#author), [date](/configuration/page.md#date), and [category](/configuration/page.md#category) metadata being rendered above page title
- [x] `top.md` content should be excluded from summary card generation

+++

## v2.1.0

Released: [2022-03-22](https://github.com/retypeapp/retype/releases/tag/v2.1.0)

+++ New :icon-shield-check:

- [x] Deploy `.html` and `.htm` files from [`input`](/configuration/project.md#input) to [`output`](/configuration/project.md#output) by default. See [#302](https://github.com/retypeapp/retype/issues/302).
- [x] Apply generic attribute syntax to Retype generated [`<table>`](/components/table.md#compact) element.

+++ Fixed :icon-bug:

- [x] Project [`include`](/configuration/project.md#include) config not including pages if `_*` configured. See [#296](https://github.com/retypeapp/retype/discussions/296).

+++

## v2.0.0

Released: [2022-03-14](https://github.com/retypeapp/retype/releases/tag/v2.0.0)

+++ New :icon-shield-check:

- [x] Redesign of Search results.
- [x] Page content live editor during [`retype watch`](/guides/cli.md#retype-watch).
- [x] Project configuration for `full`, `partial`, and `basic` search index [modes](/configuration/project.md#mode).
- [x] Content templating.
- [x] [Disable](/configuration/page.md#templating) templating on a page.
- [x] Line [highlighting](/components/code-block.md#line-highlighting) in code blocks.
- [x] `ghost` variant on [Button](/components/button.md#variants), [Badge](/components/badge.md#variants), and [Alert](/components/alert.md#variants).
- [x] Custom site-wide includes for `<head>`, `<body>`, `top.md`, and `bottom.md`.
- [x] Support for custom generic attributes on Markdown components.
- [x] Support for adding images above the top `h1` page heading.
- [x] [Google Tag Manager](/configuration/project.md#googletagmanager) integration.
- [x] [Plausible](/configuration/project.md#plausible) IO integration.
- [x] Page limit handling has been improved during `retype watch` mode.
- [x] Include [`description`](/configuration/page.md#description) in search index.

+++ Fixed :icon-bug:

- [x] Unable to scroll sidebar when navigating to a collapsed clickable sidebar menu. See [#128](https://github.com/retypeapp/retype/issues/128).
- [x] Double-quote in image caption is not encoded. See [#245](https://github.com/retypeapp/retype/discussions/245).
- [x] Build fails if root retype.yml configuration file is blank. See [#257](https://github.com/retypeapp/retype/discussions/257).
- [x] Super mega long word in page title causes rendering issue. See [#253](https://github.com/retypeapp/retype/issues/253).
- [x] Prevent float elements from interacting with Previous|Next buttons. See [#232](https://github.com/retypeapp/retype/issues/232).
- [x] Unreliable sidebar and Prev/Next button label word wrapping. See [#253](https://github.com/retypeapp/retype/issues/253).
- [x] Full width [Alert](/components/alert.md) component content. See [#242](https://github.com/retypeapp/retype/issues/242).
- [x] Strange link resolution `WARNING` on emphasized markdown links. See [#291](https://github.com/retypeapp/retype/issues/291).

+++

## v1.11.2

Released: [2021-12-23](https://github.com/retypeapp/retype/releases/tag/v1.11.2)

+++ New :icon-shield-check:

- [x] [`allowFullScreen`](/components/embed.md#allowfullscreen) attribute on the `[!embed]` component.

+++

## v1.11.1

Released: [2021-12-02](https://github.com/retypeapp/retype/releases/tag/v1.11.1)

+++ Fixed :icon-bug:

- [x] Badges configured without a link `[!badge x]` are being ignored.
- [x] Horizontal scroll issue with wide table. See [#192](https://github.com/retypeapp/retype/issues/192).
- [x] Relax client integrity verification rules. See [#225](https://github.com/retypeapp/retype/issues/225) and [#226](https://github.com/retypeapp/retype/issues/226).
- [x] Corrupted website config error appears on first load after rebuild. See [#212](https://github.com/retypeapp/retype/issues/212) and [#226](https://github.com/retypeapp/retype/issues/226).

+++

## v1.11.0

Released: [2021-11-19](https://github.com/retypeapp/retype/releases/tag/v1.11.0)

+++ New :icon-shield-check:

- [x] Multi-language search and automatic detection of content languages. See [#197](https://github.com/retypeapp/retype/issues/197).
- [x] [Retype Pro](/pro.md) with increased page limit and Retype branding removal option.
- [x] Better style for native scrollbars on Windows. See [#107](https://github.com/retypeapp/retype/issues/107).
- [x] [`server.watch.validation`](/configuration/project.md#watchvalidation) project configuration option.
- [x] All heading elements within the page content are now added to the search index. See [#166](https://github.com/retypeapp/retype/issues/166).
- [x] Page config and `SUMMARY.md` can be used together.
- [x] Upgrade Octicons icons library from v15.2.0 to v16.1.1.

+++

## v1.10.0

Released: [2021-09-30](https://github.com/retypeapp/retype/releases/tag/v1.10.0)

+++ New :icon-shield-check:

- [x] [$\KaTeX$](/components/math-formulas.md) math typesetting library support.
- [x] Auto generate RSS feed for blog posts.
- [x] [`server.watch.polling`](/configuration/project.md#watchpolling) project option.
- [x] Gravatar support for [`author`](/configuration/page.md#author) avatars.
- [x] [project](/configuration/project.md#gravatar) option to configure a [default](/configuration/project.md#gravatardefault) Gravatar image.
- [x] [`target`](/components/reference-link.md#target) and [`icon`](/components/reference-link.md#custom-icon) attributes on [`[!ref]`](/components/reference-link.md) component.
- [x] Smarter link resolution logic.

+++

## v1.9.0

Released: [2021-08-30](https://github.com/retypeapp/retype/releases/tag/v1.9.0)

+++ New :icon-shield-check:

- [x] Incremental build during [`retype watch`](/guides/cli.md#retype-watch) with page dependency graph
- [x] Ability to run `retype watch` with in-memory output. Turned on by default, see [`server.watch.mode`](/configuration/project.md#watch) to configure.
- [x] Platform specific NPM packages:
  1. [`retypeapp-win-x86`](https://www.npmjs.com/package/retypeapp-win-x86)
  2. [`retypeapp-win-x64`](https://www.npmjs.com/package/retypeapp-win-x64)
  3. [`retypeapp-linux-x64`](https://www.npmjs.com/package/retypeapp-linux-x64)
  4. [`retypeapp-darwin-x64`](https://www.npmjs.com/package/retypeapp-darwin-x64)
- [x] Lazy Prism and Mermaid plugin execution for hidden content
- [x] Keep scroll position on full page reload during [`retype watch`](/guides/cli.md#retype-watch).
- [x] Build is so fast now that the client refresh interval can be tightened up to `100ms`.
- [x] Add [`target`](/components/button.md#target) property for linkable components, such as [Button](/components/button.md) and [Badge](/components/badge.md).

+++

## v1.8.2

Released: [2021-08-06](https://github.com/retypeapp/retype/releases/tag/v1.8.2)

+++ Fixed :icon-bug:

- [x] Update expired NPM Access Token to fix broken NPM package publishing from [`v1.8.1`](#v181).

+++

## v1.8.1

Released: [2021-08-05](https://github.com/retypeapp/retype/releases/tag/v1.8.1)

+++ New :icon-shield-check:
- [x] Add broader checks for unresolved links, see [#112](https://github.com/retypeapp/retype/issues/112). For instance, if a link to `../components` is created, Retype will now try to resolve the path to any of the following:
```
../components.md
../components/index.md
../components/readme.md
../components/default.md
```
- [x] Allow inline Markdown components for [`author`](/configuration/page.md#author), [`title`](/configuration/page.md#title), and [`label`](/configuration/page.md#label) page configs, see [#114](https://github.com/retypeapp/retype/issues/114). Block-level Markdown components will be ignored for those configs.

+++ Fixed :icon-bug:
!!!warning

This release failed to run properly if the NPM package was installed. 🧐 We didn't notice that our NPM Access Token had expired between the `v1.8.0` and `v1.8.1` releases. The expired NPM token caused our automated release process to fail. Sorry about that. :weary: Once we figured out what was going wrong, a new NPM Access Token was set and [`v1.8.2`](https://github.com/retypeapp/retype/releases/tag/v1.8.2) was released. We have added NPM token pre-checks and verifications to the automated release process to hopefully prevent the issue from ever happening again.

!!!
+++

## v1.8.0

Released: [2021-08-03](https://github.com/retypeapp/retype/releases/tag/v1.8.0)

+++ New :icon-shield-check:

- [x] [`retype.yml`](/configuration/project.md) project configuration file format.
- [x] [`url`](/configuration/project.md#url) project config for setting your website URL.
- [x] Auto-generate a `sitemap.xml` file to inform search engines which pages to crawl.
- [x] Auto-generate a `robots.txt` file.
- [x] Open Graph and Twitter meta tags generated for every page.
- [x] [`server.host`](/configuration/project.md#host) and [`server.port`](/configuration/project.md#port) project configs.
- [x] `/blog` summary for any `.md` page added to a `/blog` folder.
- [x] [`author`](/configuration/page.md#author), [`category`](/configuration/page.md#category), and [`date`](/configuration/page.md#date) page configs.
- [x] [`redirect`](/configuration/page.md#redirect) page config.
- [x] [`visibility`](/configuration/page.md#visibility) page config.
- [x] Added logic to handle the manual creation of a [`CNAME`](/configuration/project.md#cname) file and copy to output.
- [x] Automated process to check for new Octicons release and merge update.
- [x] Update to latest [Octicons](/components/icon.md) icon release.
- [x] Cleaned up the CLI experience. See [#103](https://github.com/retypeapp/retype/issues/103).
- [x] Removed excessive bottom padding on blockquotes, see [#74](https://github.com/retypeapp/retype/issues/74).

+++

## v1.7.0

Released: [2021-06-24](https://github.com/retypeapp/retype/releases/tag/v1.7.0)

+++ New :icon-shield-check:

- [x] [Column](/components/column.md) component.
- [x] Stacking [Panels](/components/panel.md#stacking) component.
- [x] Open Graph and Twitter card support.
- [x] [Mermaid](/components/mermaid.md) diagram and visualization support.
- [x] [`target`](/configuration/project.md#target) config for all `links` within `retype.yml`.
- [x] Default page support for [`default.md`](/guides/formatting.md#home-page).
- [x] Hover style on [Badge](/components/badge.md) component when links.
- [x] Super improved handling of áccënt characters.

+++

## v1.6.0

Released: [2021-06-09](https://github.com/retypeapp/retype/releases/tag/v1.6.0)

+++ New :icon-shield-check:

- [x] [`tags`](/configuration/page.md#tags) config for pages.
- [x] [`:icon-shortcode:`](/components/icon.md) component.
- [x] [`include`](/configuration/project.md#include) project config.
- [x] [`exclude`](/configuration/project.md#exclude) project config.
- [x] Improved `<table>` styling.
- [x] Performance boost for [components](/components/readme.md).

+++

## v1.5.0

Released: 2021-05-12

+++ New :icon-shield-check:

- [x] [Badge](/components/badge.md) component
- [x] Syntax [highlighting](/components/code-block.md#syntax-highlighting) support for all code block languages
- [x] [`route`](/configuration/page.md#route) page config
- [x] [`port`](/configuration/project.md#port) project config
- [x] Larger font-size for `h1`, `h2`, and `h3` headers.
- [x] Better handing of special characters within file names.
- [x] Cleaner handling of `.md` pages created by GitHub Wiki.

+++

## v1.4.0

Released: 2021-04-12

+++ New :icon-shield-check:

- [x] Even cleaner upgrade to Retype from GitBook experience
- [x] Super fast [`retype watch`](/guides/cli.md#retype-watch) incremental build process
- [x] [image alignment](/components/image.md#alignment-options) and captions
- [x] [`exclude`](/configuration/project.md#exclude) config for `retype.yml`
- [x] `blog` layout and `/blog` folder defaults
- [x] [`[!file]`](/components/file-download.md) component
- [x] [`[!ref]`](/components/reference-link.md) component

+++

## v1.3.0

Released: 2021-03-30

+++ New :icon-shield-check:

- [x] GitHub [Actions](/guides/github-actions.md) for Retype.
- [x] [`expanded`](/configuration/page.md#expanded) config on [folder](/configuration/folder.md) configuration.
- [x] [`icon`](/configuration/project.md#icon) and [`iconAlign`](/configuration/project.md#iconalign) configs on [`links`](/configuration/project.md#links).

+++

## v1.2.0

Released: 2021-03-25

+++ New :icon-shield-check:

- [x] [`central`](/configuration/page.md#layout) layout.
- [x] [`page`](/configuration/page.md#layout) layout.
- [x] [`Edit this page`](/configuration/project.md#edit) link.
- [x] `Previous | Next` footer navigation buttons for pages.
- [x] [`order`](/configuration/page.md#order) Page level config.
- [x] `hidden` [`visibility`](/configuration/page.md#visibility) Page level config.
- [x] [`favicon`](/configuration/project.md#favicon) Project config available in `retype.yml`.

+++

## v1.1.0

Released: 2021-03-12

+++ New :icon-shield-check:

- [x] [Tab](/components/tab.md) component.
- [x] [Button](/components/button.md) component.
- [x] [Panel](/components/panel.md) component with expand/collapse.
- [x] [`retype watch`](/guides/cli.md#retype-watch) command.
- [x] Live Reload when using [`retype watch`](/guides/cli.md#retype-watch).
- [x] [`.yml`](/configuration/page.md#separate-yml-file) option for Page or Folder configs.
- [x] Code block [title](/components/code-block.md#title).
- [x] [line numbering](/components/code-block.md#line-numbers) in code blocks.

+++

## v1.0.0

Released: 2021-02-11

+++ New :icon-shield-check:

- [x] Publish to NPM
- [x] Publish to NuGet
- [x] Initial `v1.0.0` release

+++
