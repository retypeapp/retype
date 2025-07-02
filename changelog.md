---
icon: log
---
# Changelog

The latest release of Retype is `v{{ version }}`.

You can check which version you have installed by running the command [`retype --version`](/guides/cli.md).

The entire release archive of Retype is available on [NPM](https://www.npmjs.com/package/retypeapp) and [NuGet](https://nuget.org/packages/retypeapp).

Retype does not have a fixed release cycle:

- Patch releases are released as needed.
- Minor version releases always contain new features, with a typical time frame of 2 to 4 months in between.
- Major version releases will be announced well ahead of time and will go through multiple pre-release phases.

!!!
Do have a suggestion for a new feature in Retype? Please open an [issue](https://github.com/retypeapp/retype/issues) and let's chat. :icon-comment:
!!!

---
## v3.12.0 [!badge NEXT|info]

Scheduled for late Q3-2025.

---
## v3.11.0 [!badge LATEST|info]

Released: [2025-07-02](https://github.com/retypeapp/retype/releases/tag/v3.11.0)

There were 15 changes in Retype 3.11.0.

+++ New :icon-shield-check:

1. [!badge PRO](/pro/pro.md) New [theme](/configuration/project.md#theme) color customization for `base` and `dark` themes, see [#42](https://github.com/retypeapp/retype/discussions/42) and [#697](https://github.com/retypeapp/retype/discussions/697)
1. [!badge PRO](/pro/pro.md) New [`branding.baseColor`](/configuration/project.md#basecolor) setting for quick configuration of the project `base-color` [theme variable](/configuration/theme-variables.md) to left navigation nodes, see [#763](https://github.com/retypeapp/retype/discussions/763)
1. [!badge PRO](/pro/pro.md) New Page level [`nav.badge`](/configuration/page.md#nav-badge) setting for adding a badge component to left navigation nodes, see [#763](https://github.com/retypeapp/retype/discussions/763)
1. New 3-way `Light`, `Dark`, and `System` color [scheme](/configuration/project.md#scheme) selector, see [#421](https://github.com/retypeapp/retype/discussions/421) and [#624](https://github.com/retypeapp/retype/discussions/624)
1. New pipe notation syntax support for adding variant to [[Button]], [[Badge]], and [Navigation Badge](/configuration/page.md#nav-badge) components
1. New support for icon-only [links](/configuration/project.md#links) in header and footer
1. New `base` variant for [[Button]], [[Badge]], and [[Callout]]

+++ Improved :icon-thumbsup:

1. Upgrade to latest release of VueJS
1. Update to latest v3.3.x release of TailwindCSS
1. Add keyboard hint into Search field, see [#762](https://github.com/retypeapp/retype/discussions/762)
1. Improve templating support within [`footer.copyright`](/configuration/project.md#copyright) project setting
1. Hide the placeholder text in the Search and Filter input fields when focused, see [#762](https://github.com/retypeapp/retype/discussions/762)
1. Upgrade Octicons icons library from v19.15.2 to v19.15.3
1. Improve icon margins on icon-only Badge and Button components
1. Improve print mode rendering

+++ Fixed :icon-bug:

1. Fixed search input  attribute value not being rendered, see [#764](https://github.com/retypeapp/retype/discussions/764)

+++


---

## v3.10.0

Released: [2025-06-08](https://github.com/retypeapp/retype/releases/tag/v3.10.0)

There were 13 changes in Retype `3.10.0`.

+++ New :icon-shield-check:

1. [!badge PRO](/pro/pro.md) New `nextprev` [project](/configuration/project.md#nextprev) and [page](/configuration/page.md#nextprev) setting to configure Next and Previous page navigation, see [#34](https://github.com/retypeapp/retype/discussions/34)
1. New Inline and block level hidden [[comments]] using wrapping `%%`
1. New [[Callout]] `tip` variant
1. New Page [`meta.description`](/configuration/page.md#description) configuration, see [#638](https://github.com/retypeapp/retype/discussions/638)
1. New support for adding [generic attribute](/components/list.md#generic-attributes) syntax on list items, see [#603](https://github.com/retypeapp/retype/discussions/603)
1. New custom anchors using Obsidian [`^block`](https://help.obsidian.md/links#Link+to+a+block+in+a+note) syntax

+++ Improved :icon-thumbsup:

1. Handle case-sensitive #anchor links and resolve if case-insensitive version found
1. Add `translate=\"no\"` attribute to code block `<pre>` element
1. Add unique `id` values to important template elements, see [#538](https://github.com/retypeapp/retype/discussions/538), [#639](https://github.com/retypeapp/retype/discussions/639) and [#640](https://github.com/retypeapp/retype/discussions/640)
1. Improve automatic smooth scroll to #anchor on document load
1. Added rounded css classes including `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-4xl` and `rounded-full`, see `v3.10.1`

+++ Fixed :icon-bug:

1. Fixed exception being thrown if `order` set with a huge number, see [#751](https://github.com/retypeapp/retype/discussions/751)
1. Fixed pipe separated dimensions issue where dimensions were added to image label if label is empty
1. Fixed code block height not rendering correctly if no content in code block
1. Fixed build error with `> [!hint]` [callout](/components/callout.md#github-alerts), see `v3.10.1`
1. Fixed lists with [lowercase](/components/list.md#lowercase-letters) letters and [roman numerals](/components/list.md#lowercase-roman-numerals) not rendered correctly, see [#760](https://github.com/retypeapp/retype/discussions/760), see `v3.10.1`
1. Fixed main layout background color that does not match sidebar background color, see [#759](https://github.com/retypeapp/retype/discussions/759), see `v3.10.1`

+++

## v3.9.0

Released: [2025-05-28](https://github.com/retypeapp/retype/releases/tag/v3.9.0)

There were 19 changes in Retype `3.9.0`.

+++ New :icon-shield-check:

1. [!badge PRO](/pro/pro.md) New [`nav.icons.enabled`](/configuration/project.md#icons) Project setting to hide icons in navigation, see [#381](https://github.com/retypeapp/retype/discussions/381) and [#621](https://github.com/retypeapp/retype/discussions/621)
1. [!badge PRO](/pro/pro.md) New [`scheme.mode`](/configuration/project.md#scheme-mode) project setting to default initial page rendering to be explicit `day`,`night`, or `system` modes, see [#421](https://github.com/retypeapp/retype/discussions/421)
1. New automatic conversion of `details > summary` elements into Retype Panel component
1. New print friendly stylesheet to enable better printing of pages, see [#85](https://github.com/retypeapp/retype/discussions/85) and [#628](https://github.com/retypeapp/retype/discussions/628)
1. New [Obsidian](https://obsidian.md/) style of setting width and height of image, see [#694](https://github.com/retypeapp/retype/discussions/692)
1. New `question` [callout](components/callout.md#samples) component variant, see [#223](https://github.com/retypeapp/retype/discussions/223)
1. New support for [Notion](https://www.notion.com/) style callout syntax
1. New support for [Hextra](https://imfing.github.io/hextra/) style callout syntax
1. New support for generic `Alert` callout syntax style
1. New support for [Just the Docs](https://just-the-docs.com/) style of callouts
1. New support for [Sphinx](https://www.sphinx-doc.org/) style callout syntax

+++ Improved :icon-thumbsup:

1. Rename the Alert component to [Callout](/components/callout.md)
1. Support titles on Obsidian style callout syntax plus all Obsidian callout types
1. Upgrade Octicons icons library from v19.15.1 to v19.15.2
1. Add background color on nav nodes and refinements to site label

+++ Fixed :icon-bug:

1. `layout: page` failing to be recognized on Pages within sub-folders, see [#732](https://github.com/retypeapp/retype/discussions/732)
1. Complex anchor id scenarios not being normalized as expected
1. WikiLink anchor only links to same page anchor not rendering a link
1. Callout parser confuses title for variant when space follows opening `!!!`

+++

## v3.8.0

Released: [2025-05-05](https://github.com/retypeapp/retype/releases/tag/v3.8.0)

There were 16 changes in Retype `3.8.0`.

+++ New :icon-shield-check:

1. [!badge PRO](/pro/pro.md) New stack navigation mode for [Project](/configuration/project.md#nav) and [Page](/configuration/page.md#nav) settings, see [#621](https://github.com/retypeapp/retype/issues/621#issuecomment-2848996632)
1. New Greek and Hebrew language support, see [#730](https://github.com/retypeapp/retype/discussions/730)
1. New [YouTube](/components/youtube.md) link parsing and embed template generation, see [#51](https://github.com/retypeapp/retype/issues/51)
1. New support for including a file outside the project root when using {%{`{{ include }}`}%}, see [#734](https://github.com/retypeapp/retype/issues/734)
1. New WikiLink and image WikiLink syntax support, including building [Obsidian](https://obsidian.md/) vaults

+++ Improved :icon-thumbsup:

1. Switched order of theme switcher buttons with sun in light mode and moon in dark mode
1. Revised default server to host on port 5001 instead of 5000, see [#688](https://github.com/retypeapp/retype/issues/688)
1. Refinements to automatic detection of search index languages
1. Improve project locale-specific template rendering
1. Minor UI refinements
1. Add `home.md` to list of default pages in a directory
1. Add [`permalink`](/configuration/page.md#permalink) as an alias of `route` page configuration
1. Support Description Lists with Single-Space After Colon, see [#740](https://github.com/retypeapp/retype/issues/740)
1. Upgrade [Mermaid](/components/mermaid.md) to the latest v11.6.0 release, see [#627](https://github.com/retypeapp/retype/issues/627), [#656](https://github.com/retypeapp/retype/issues/656), and [#716](https://github.com/retypeapp/retype/issues/716)
1. Improve automatic handling of GitBook image exports, see release `v3.8.1`

+++ Fixed :icon-bug:

1. Retype build errors if no matching `url` is found in wallet, see [#549](https://github.com/retypeapp/retype/issues/549)
1. Fix float rendering issue with definition list content wrapping multiple rows, see [#693](https://github.com/retypeapp/retype/issues/693)
+++

## v3.7.0

Released: [2025-04-07](https://github.com/retypeapp/retype/releases/tag/v3.7.0)

There were 6 changes in Retype `3.7.0`.

+++ New :icon-shield-check:
1. New `-v` flag as an alias on `retype --version` in CLI
1. New [`showSidebarFilter`](/configuration/project.md#showsidebarfilter) project setting to hide navigation Filter component, see [#538](https://github.com/retypeapp/retype/discussions/538)
+++ Improved :icon-thumbsup:
1. Restore support for official Retype Docker containers
1. Upgrade [Octicons](/components/octicons.md) to latest v19.15.1 release
1. Add support for .NET 9.0 and upgrade internal frameworks
+++ Fixed :icon-bug:
1. Fixed Retype version number where build hash was being appended
+++

## v3.6.0

Released: [2024-09-17](https://github.com/retypeapp/retype/releases/tag/v3.6.0)

There were 9 changes in Retype `3.6.0`.

+++ New :icon-shield-check:
1. [!badge PRO](/pro/pro.md) New `--strict` parameter for `retype build`, see [#618](https://github.com/retypeapp/retype/discussions/618)
+++ Improved :icon-thumbsup:
1. Upgrade Octicons icons library from v19.7.0 to v19.8.0
1. Allow words to break for the ToC and Headings, see [#633](https://github.com/retypeapp/retype/discussions/633)
1. Match folder node if `searchLabel` includes the filter query, see [#646](https://github.com/retypeapp/retype/discussions/646)
1. New link directly into Tab, see [#651](https://github.com/retypeapp/retype/discussions/651)
1. Resolve links to Panel titles, see [#389](https://github.com/retypeapp/retype/discussions/389), [#401](https://github.com/retypeapp/retype/discussions/401), and [#659](https://github.com/retypeapp/retype/discussions/659)
+++ Fixed :icon-bug:
1. Folder name starting with `1. ` creates raw HTML label in nav tree, see [#650](https://github.com/retypeapp/retype/discussions/650)
1. Sidebar filter does not work for CamelCase titles, see [#696](https://github.com/retypeapp/retype/discussions/696)
1. CI build process failing, see [#708](https://github.com/retypeapp/retype/discussions/708)
+++

## v3.5.0

Released: [2023-09-16](https://github.com/retypeapp/retype/releases/tag/v3.5.0)

+++ New :icon-shield-check:
1. New [`--pro`](/guides/cli.md#retype-start) flag during `retype start` to enable trial mode of Retype Pro features, see [#612](https://github.com/retypeapp/retype/discussions/612)
1. New [`start.pro: true`](/configuration/project.md#pro) project config to enable trial mode of Retype Pro features, see [#612](https://github.com/retypeapp/retype/discussions/612)
+++ Improved :icon-thumbsup:
1. Path independent doc_theme local storage variable, see [#624](https://github.com/retypeapp/retype/discussions/624)
+++

## v3.4.0

Released: [2023-09-08](https://github.com/retypeapp/retype/releases/tag/v3.4.0)

+++ New :icon-shield-check:
1. [!badge PRO](/pro/pro.md) New `hub` [Project](/configuration/project.md#hub) config with `<` header link, see [#592](https://github.com/retypeapp/retype/discussions/592)
1. [!badge PRO](/pro/pro.md) New `toc` [Project](/configuration/project.md#toc) and [Page](/configuration/page.md#toc) config and features, see [#598](https://github.com/retypeapp/retype/discussions/598)
1. Automatically scroll ToC with page content, see [#375](https://github.com/retypeapp/retype/discussions/375)
+++ Improved :icon-thumbsup:
1. Upgrade Octicons icons library from v19.6.0 to v19.7.0
+++ Fixed :icon-bug:
1. Tree nav `expanded` state not saving
+++

s## v3.3.0

Released: [2023-08-31](https://github.com/retypeapp/retype/releases/tag/v3.3.0)

+++ New :icon-shield-check:
1. [!badge PRO](/pro/pro.md) New [breadcrumb](/configuration/project.md#breadcrumb) navigation with [Project](/configuration/project.md#breadcrumb) and [Page](/configuration/page.md#breadcrumb) configs, see [#593](https://github.com/retypeapp/retype/discussions/593)
1. New [`list-icon`](/components/list.md#icon-list) css class to simplify creating Retype icon lists, see [#370](https://github.com/retypeapp/retype/discussions/370) and [#603](https://github.com/retypeapp/retype/discussions/603)
+++ Improved :icon-thumbsup:
1. Update all client libraries
+++

## v3.2.0

Released: [2023-08-23](https://github.com/retypeapp/retype/releases/tag/v3.2.0)

+++ New :icon-shield-check:
1. New [Description List](/components/list.md#description-list) support
+++ Improved :icon-thumbsup:
1. Upgrade Octicons icons library from v19.4.0 to v19.5.0
1. Upgrade Octicons icons library from v19.5.0 to v19.6.0
+++ Fixed :icon-bug:
1. Custom attributes on an image cause Retype to skip handling of component as a figure image
1. Custom css class not being applied correctly to table element
1. Escaping single braces inside inline code within headings
1. Adjust vertical alignment of Badge and Button components when in headings
1. Anchor is removed from `redirect` if set to internal page with anchor
1. Render icon on outbound link only if link contains plain or basic Markdown text, see [#589](https://github.com/retypeapp/retype/issues/589)
+++

## v3.1.0

Released: [2023-07-23](https://github.com/retypeapp/retype/releases/tag/v3.1.0)

+++ New :icon-shield-check:
1. [!badge PRO](/pro/pro.md) New [`outbound`](/configuration/project.md#outbound) project config for outbound external link configuration, see [#465](https://github.com/retypeapp/retype/issues/465)
1. [!badge PRO](/pro/pro.md) New folder level [`visibility: private`](/configuration/page.md#private) and [`visibility: protected`](/configuration/page.md#protected) support
1. New support for Armenian, Kannada, Sankrit, and Telugu [languages](/configuration/project.md#supported-languages)
1. The _includes/*.html files include full Templating support, see [#282](https://github.com/retypeapp/retype/discussions/282)
+++ Improved :icon-thumbsup:
1. Improved support for Cloudflare Rocket Loader, see [#117](https://github.com/retypeapp/retype/discussions/171), [#380](https://github.com/retypeapp/retype/discussions/380), and [#580](https://github.com/retypeapp/retype/issues/580)
1. Hide Tabs until finished rendering to avoid flash of unstyled content, see [#570](https://github.com/retypeapp/retype/issues/570)
1. Generated HTML syntax enhancements and clean up, see [#583](https://github.com/retypeapp/retype/issues/583)
1. Update the RU translation file, see [#586](https://github.com/retypeapp/retype/issues/586)
1. Upgrade to latest release of [Mermaid](/components/mermaid.md) see [#585](https://github.com/retypeapp/retype/issues/585)
1. Add cache buster to `_watch` scripts during `retype start`
1. Update client libraries including vue, monaco-editor, simplebar, katex, and lunr-languages ([credits](/about.md))
1. Upgrade Octicons icons library from v19.1.0 to v19.3.0
1. Upgrade Octicons icons library from v19.3.0 to v19.4.0
+++ Fixed :icon-bug:
1. Not supported value WARNING on first build with new locale, see [#573](https://github.com/retypeapp/retype/issues/573)
1. Finish translation file updated
1. `html lang=\"en\"` attribute not updated if locale changes, see [#574](https://github.com/retypeapp/retype/issues/574)
+++

## v3.0.0

Released: [2023-05-29](https://github.com/retypeapp/retype/releases/tag/v3.0.0)

+++ New :icon-shield-check:
1. [!badge PRO](/pro/pro.md) New [`visibility: private`](configuration/page.md#private) and [`visibility: protected`](configuration/page.md#protected) pages, see [#341](https://github.com/retypeapp/retype/discussions/341)
1. New multi-language [`locale`](configuration/project.md#locale) interface support for 22 languages, see [#18](https://github.com/retypeapp/retype/discussions/18) and [#24](https://github.com/retypeapp/retype/issues/24)
1. New [`meta.title`](configuration/page.md#title) page level config, see [#346](https://github.com/retypeapp/retype/discussions/346) and [#350](https://github.com/retypeapp/retype/issues/350)
1. New [CLI commands](guides/cli.md) and flags, see [#94](https://github.com/retypeapp/retype/issues/94) and [#323](https://github.com/retypeapp/retype/discussions/323)
1. New [`-n`](guides/cli.md#retype-start) flag to prevent default web browser from being opened, see [#323](https://github.com/retypeapp/retype/discussions/323)
1. New [`retype clean`](guides/cli.md#retype-clean) CLI command
1. New named regions with content, see [#368](https://github.com/retypeapp/retype/discussions/368)
1. New {%{`{{ nonce }}`}%} token for cache busting URLs in templates, see [#324](https://github.com/retypeapp/retype/issues/324)
1. New Inter and system based font-family, see [#179](https://github.com/retypeapp/retype/discussions/179)
1. New default Welcome page
1. New sticky TOC button
1. New context menu shortcuts for Retype components in Edit mode
1. New custom same name default page for a directory, see [#511](https://github.com/retypeapp/retype/discussions/511)
+++ Improved :icon-thumbsup:
1. Add `welcome.md` to the list of default page file names for the root `input` folder, see [#461](https://github.com/retypeapp/retype/issues/461)
1. Change default search hotkey to `k` instead of `/`
1. Panel title missing from search index, see [#363](https://github.com/retypeapp/retype/issues/363)
1. Nice looking prompt for password protected pages
1. Upgrade client and server dependencies
1. Upgrade to latest release of [Turbo](https://turbo.hotwired.dev/)
1. Updated all Prism languages and created new dependency tree process, see [#446](https://github.com/retypeapp/retype/issues/446)
1. Argh... Poppins font doesn't support non-latin character glyphs (cyrillic), see [#179](https://github.com/retypeapp/retype/discussions/179)
1. Use Inter font
1. Revise Plausible default script `plausible.js` to `script.js`
1. Remove Page `Edit` button on generated Welcome page
1. Links with icon that are images get empty alt attribute, see [#523](https://github.com/retypeapp/retype/issues/523)
1. Rename `server` project config to [`serve`](configuration/project.md#serve)
1. Upgrade Octicons icons library from v17.2.0 to v17.3.0
1. Upgrade Octicons icons library from v17.9.0 to v17.10.0
1. Upgrade Octicons icons library from v17.10.0 to v17.10.1
1. Upgrade Octicons icons library from v17.10.2 to v17.11.1
1. Upgrade Octicons icons library from v17.11.1 to v17.12.0
1. Upgrade Octicons icons library from v17.12.0 to v18.0.0
1. Upgrade Octicons icons library from v18.2.0 to v18.3.0
1. Upgrade Octicons icons library from v18.3.0 to v19.0.0
1. Upgrade Octicons icons library from v19.0.0 to v19.1.0
+++ Fixed :icon-bug:
1. JavaScript error if one stacked Panel is missing content, see [#388](https://github.com/retypeapp/retype/issues/388)
1. `--override` command fails when used with a templating data object, see [#509](https://github.com/retypeapp/retype/issues/509)
1. Editor icons are not rendered after `monaco` has been upgraded
1. Propagate `visibility` to all nested pages in `watch` mode
1. Messed up meta tag content value generation with escaped sequence, see [#513](https://github.com/retypeapp/retype/discussions/513)
1. `mark-github` icon issue in ref and file components, see [#517](https://github.com/retypeapp/retype/issues/517)
1. Exception thrown if `:icon-:` is added to a page
1. Case-insensitive `in-memory` file system
1. Prism theme issues after update to latest
+++

## v2.4.0

Released: [2022-07-14](https://github.com/retypeapp/retype/releases/tag/v2.4.0)

+++ New :icon-shield-check:
1. New `generator.directoryIndex.append` [project](/configuration/project.md) config.
1. New `generator.trailingSlash` project config to instruct whether to add a trailing `/` when constructing links.
1. New [`host`](/configuration/project.md#integration-plausible-host) config on `integrations.plausible`. See [#272](https://github.com/retypeapp/retype/discussions/272).
+++ Fixed :icon-bug:
1. Extra phantom `index.md` file if Retype output path ends with a slash char.
1. Anchored links receive extraneous slash char when `generator.directoryIndex.append: true`.
1. Links to home page ignore `generator.trailingShash` setting.
1. Link at top-left logo has trailing slash when `generator.trailingSlash` is set to `false`.
1. Pressing enter on search results creates invalid url. See [#333](https://github.com/retypeapp/retype/discussions/333).
1. Parent folder prefixed with an `_` underscore do not build properly. See [#336](https://github.com/retypeapp/retype/issues/336).
1. Broken link to same page when `generator.trailingSlash` is `false`.
+++

## v2.3.0

Released: [2022-05-03](https://github.com/retypeapp/retype/releases/tag/v2.3.0)

+++ New :icon-shield-check:
1. Support for full relative URL pathing. See [#14](https://github.com/retypeapp/retype/discussions/14), [#133](https://github.com/retypeapp/retype/discussions/133), [#194](https://github.com/retypeapp/retype/discussions/194), [#222](https://github.com/retypeapp/retype/discussions/222), [#233](https://github.com/retypeapp/retype/discussions/233), and [#276](https://github.com/retypeapp/retype/issues/276).
1. New `generator.paths` [project](/configuration/project.md) config with `source`, `relative`, `root` options.
1. New `search.preload` project config to instruct Retype to preload the search index instead of on demand load.
1. New `generator.directoryIndex.name` project config for setting the default document name.
1. New `generator.directoryIndex.altNames` [project](/configuration/project.md) config.
1. New `RETYPE_DEFAULT_HOST` environment variable. See [#239](https://github.com/retypeapp/retype/discussions/239).
1. New self-referential canonical meta tag for all pages.
1. Link to API pages using fully qualified class name path.
+++ Fixed :icon-bug:
1. Exclude all contents of the `_includes` directory from being deployed.
1. Exclude files and pages within the `_includes` directory from the sitemap generation.
1. Sidebar menu item is not highlighted when missing trailing `/` in the URL.
1. Editor font request does not respect `base` path. See [#318](https://github.com/retypeapp/retype/discussions/318).
1. Syntax errors in yaml files results in corrupt category URLs. See [#316](https://github.com/retypeapp/retype/discussions/316).
1. `links` to the index document in the mobile sidebar footer not being resolved.
1. **.yml** files excluded from deploy even if explicitly declared in `include`. See [#311](https://github.com/retypeapp/retype/discussions/311).
1. `og:url` and `twitter:url` paths incorrect for API generated pages.
1. Include full version in the generator meta tag version.
1. Many `categories` extends beyond page width and does not wrap. See [#316](https://github.com/retypeapp/retype/discussions/316).
+++ Breaking :icon-shield-x:

1. Switch `generator.paths` default value to `relative`.

To revert to the previous functionality, set the `generator.paths` config to `root` in your project **retype.yml** file.

```yml
generator:
  paths: root # Old default functionality
```

+++

## v2.2.0

Released: [2022-03-30](https://github.com/retypeapp/retype/releases/tag/v2.2.0)

+++ New :icon-shield-check:
1. [`generator.recase`](/configuration/project.md#generator) project config to recase file and folder names. See [#302](https://github.com/retypeapp/retype/issues/302).
1. Official Retype docker images published to [DockerHub](https://hub.docker.com/repository/docker/retypeapp/retype). See [#122](https://github.com/retypeapp/retype/issues/122).
1. New `@latest` tag to be used in your [retype-action.yml](/guides/github-actions/#step-1-add-retype-actionyml-workflow) configuration.
1. GitHub Action annotation to announce availability of Retype v2, only if using Retype v1.
+++ Fixed :icon-bug:
1. [author](/configuration/page.md#author), [date](/configuration/page.md#date), and [category](/configuration/page.md#category) metadata being rendered above page title
1. `top.md` content should be excluded from summary card generation
+++

## v2.1.0

Released: [2022-03-22](https://github.com/retypeapp/retype/releases/tag/v2.1.0)

+++ New :icon-shield-check:
1. Deploy **.html** and `.htm` files from [`input`](/configuration/project.md#input) to [`output`](/configuration/project.md#output) by default. See [#302](https://github.com/retypeapp/retype/issues/302).
1. Apply generic attribute syntax to Retype generated [`<table>`](/components/table.md#compact) element.
+++ Fixed :icon-bug:
1. Project [`include`](/configuration/project.md#include) config not including pages if `_*` configured. See [#296](https://github.com/retypeapp/retype/discussions/296).
+++

## v2.0.0

Released: [2022-03-14](https://github.com/retypeapp/retype/releases/tag/v2.0.0)

+++ New :icon-shield-check:
1. Redesign of Search results.
1. Page content live editor during [`retype start`](/guides/cli.md#retype-start).
1. Project configuration for `full`, `partial`, and `basic` search index [modes](/configuration/project.md#mode).
1. Content templating.
1. [Disable](/configuration/page.md#templating) templating on a page.
1. Line [highlighting](/components/code-block.md#line-highlighting) in code blocks.
1. `ghost` variant on [Button](/components/button.md#variant), [Badge](/components/badge.md#variant), and [Callout](/components/callout.md#variant).
1. Custom site-wide includes for `<head>`, `<body>`, `top.md`, and `bottom.md`.
1. Support for custom generic attributes on Markdown components.
1. Support for adding images above the top `h1` page heading.
1. [Google Tag Manager](/configuration/project.md#googletagmanager) integration.
1. [Plausible](/configuration/project.md#plausible) IO integration.
1. Page limit handling has been improved during `retype start` mode.
1. Include [`description`](/configuration/page.md#description) in search index.
+++ Fixed :icon-bug:
1. Unable to scroll sidebar when navigating to a collapsed clickable sidebar menu. See [#128](https://github.com/retypeapp/retype/issues/128).
1. Double-quote in image caption is not encoded. See [#245](https://github.com/retypeapp/retype/discussions/245).
1. Build fails if root retype.yml configuration file is blank. See [#257](https://github.com/retypeapp/retype/discussions/257).
1. Super mega long word in page title causes rendering issue. See [#253](https://github.com/retypeapp/retype/issues/253).
1. Prevent float elements from interacting with Previous|Next buttons. See [#232](https://github.com/retypeapp/retype/issues/232).
1. Unreliable sidebar and Prev/Next button label word wrapping. See [#253](https://github.com/retypeapp/retype/issues/253).
1. Full width [Callout](/components/callout.md) component content. See [#242](https://github.com/retypeapp/retype/issues/242).
1. Strange link resolution `WARNING` on emphasized markdown links. See [#291](https://github.com/retypeapp/retype/issues/291).
+++

## v1.11.2

Released: [2021-12-23](https://github.com/retypeapp/retype/releases/tag/v1.11.2)

+++ New :icon-shield-check:
1. [`allowFullScreen`](/components/embed.md#allowfullscreen) attribute on the `[!embed]` component.
+++

## v1.11.1

Released: [2021-12-02](https://github.com/retypeapp/retype/releases/tag/v1.11.1)

+++ Fixed :icon-bug:
1. Badges configured without a link `[!badge x]` are being ignored.
1. Horizontal scroll issue with wide table. See [#192](https://github.com/retypeapp/retype/issues/192).
1. Relax client integrity verification rules. See [#225](https://github.com/retypeapp/retype/issues/225) and [#226](https://github.com/retypeapp/retype/issues/226).
1. Corrupted website config error appears on first load after rebuild. See [#212](https://github.com/retypeapp/retype/issues/212) and [#226](https://github.com/retypeapp/retype/issues/226).
+++

## v1.11.0

Released: [2021-11-19](https://github.com/retypeapp/retype/releases/tag/v1.11.0)

+++ New :icon-shield-check:
1. Multi-language search and automatic detection of content languages. See [#197](https://github.com/retypeapp/retype/issues/197).
1. [Retype Pro](/pro/pro.md) with increased page limit and Retype branding removal option.
1. Better style for native scrollbars on Windows. See [#107](https://github.com/retypeapp/retype/issues/107).
1. [`serve.start.validation`](/configuration/project.md#serve-watch-validation) project configuration option.
1. All heading elements within the page content are now added to the search index. See [#166](https://github.com/retypeapp/retype/issues/166).
1. Page config and `SUMMARY.md` can be used together.
1. Upgrade Octicons icons library from v15.2.0 to v16.1.1.
+++

## v1.10.0

Released: [2021-09-30](https://github.com/retypeapp/retype/releases/tag/v1.10.0)

+++ New :icon-shield-check:
1. [$\KaTeX$](/components/math-formulas.md) math typesetting library support.
1. Auto generate RSS feed for blog posts.
1. [`serve.start.polling`](/configuration/project.md#serve-watch-polling) project option.
1. Gravatar support for [`author`](/configuration/page.md#author) avatars.
1. [project](/configuration/project.md#gravatar) option to configure a [default](/configuration/project.md#integrations-gravatar-default) Gravatar image.
1. [`target`](/components/reference-link.md#target) and [`icon`](/components/reference-link.md#custom-icon) attributes on [`[!ref]`](/components/reference-link.md) component.
1. Smarter link resolution logic.
+++

## v1.9.0

Released: [2021-08-30](https://github.com/retypeapp/retype/releases/tag/v1.9.0)

+++ New :icon-shield-check:
1. Incremental build during [`retype start`](/guides/cli.md#retype-start) with page dependency graph
1. Ability to run `retype start` with in-memory output. Turned on by default, see [`serve.start.mode`](/configuration/project.md) to configure.
1. Platform specific NPM packages:
  1. [`retypeapp-win-x86`](https://www.npmjs.com/package/retypeapp-win-x86)
  2. [`retypeapp-win-x64`](https://www.npmjs.com/package/retypeapp-win-x64)
  3. [`retypeapp-linux-x64`](https://www.npmjs.com/package/retypeapp-linux-x64)
  4. [`retypeapp-darwin-x64`](https://www.npmjs.com/package/retypeapp-darwin-x64)
1. Lazy Prism and Mermaid plugin execution for hidden content
1. Keep scroll position on full page reload during [`retype start`](/guides/cli.md#retype-start).
1. Build is so fast now that the client refresh interval can be tightened up to `100ms`.
1. Add [`target`](/components/button.md#target) property for linkable components, such as [Button](/components/button.md) and [Badge](/components/badge.md).
+++

## v1.8.2

Released: [2021-08-06](https://github.com/retypeapp/retype/releases/tag/v1.8.2)

+++ Fixed :icon-bug:
1. Update expired NPM Access Token to fix broken NPM package publishing from [`v1.8.1`](#v181).
+++

## v1.8.1

Released: [2021-08-05](https://github.com/retypeapp/retype/releases/tag/v1.8.1)

+++ New :icon-shield-check:
1. Add broader checks for unresolved links, see [#112](https://github.com/retypeapp/retype/issues/112). For instance, if a link to `../components` is created, Retype will now try to resolve the path to any of the following:
```
../components.md
../components/index.md
../components/components.md
../components/default.md
```
1. Allow inline Markdown components for [`author`](/configuration/page.md#author), [`title`](/configuration/page.md#title), and [`label`](/configuration/page.md#label) page configs, see [#114](https://github.com/retypeapp/retype/issues/114). Block-level Markdown components will be ignored for those configs.

+++ Fixed :icon-bug:
!!!warning

This release failed to run properly if the NPM package was installed. 🧐 We didn't notice that our NPM Access Token had expired between the `v1.8.0` and `v1.8.1` releases. The expired NPM token caused our automated release process to fail. Sorry about that. :weary: Once we figured out what was going wrong, a new NPM Access Token was set and [`v1.8.2`](https://github.com/retypeapp/retype/releases/tag/v1.8.2) was released. We have added NPM token pre-checks and verifications to the automated release process to hopefully prevent the issue from ever happening again.

!!!
+++

## v1.8.0

Released: [2021-08-03](https://github.com/retypeapp/retype/releases/tag/v1.8.0)

+++ New :icon-shield-check:
1. [**retype.yml**](/configuration/project.md) project configuration file format.
1. [`url`](/configuration/project.md#url) project config for setting your website URL.
1. Auto-generate a `sitemap.xml` file to inform search engines which pages to crawl.
1. Auto-generate a `robots.txt` file.
1. Open Graph and Twitter meta tags generated for every page.
1. [`serve.host`](/configuration/project.md#host) and [`serve.port`](/configuration/project.md#port) project configs.
1. `/blog` summary for any **.md** page added to a `/blog` folder.
1. [`author`](/configuration/page.md#author), [`category`](/configuration/page.md#category), and [`date`](/configuration/page.md#date) page configs.
1. [`redirect`](/configuration/page.md#redirect) page config.
1. [`visibility`](/configuration/page.md#visibility) page config.
1. Added logic to handle the manual creation of a [`CNAME`](/configuration/project.md#cname) file and copy to output.
1. Automated process to check for new Octicons release and merge update.
1. Update to latest [Octicons](/components/icon.md) icon release.
1. Cleaned up the CLI experience. See [#103](https://github.com/retypeapp/retype/issues/103).
1. Removed excessive bottom padding on blockquotes, see [#74](https://github.com/retypeapp/retype/issues/74).
+++

## v1.7.0

Released: [2021-06-24](https://github.com/retypeapp/retype/releases/tag/v1.7.0)

+++ New :icon-shield-check:
1. [Column](/components/column.md) component.
1. Stacking [Panels](/components/panel.md#stacking) component.
1. Open Graph and Twitter card support.
1. [Mermaid](/components/mermaid.md) diagram and visualization support.
1. [`target`](/configuration/project.md#target) config for all `links` within **retype.yml**.
1. Default page support for [`default.md`](/guides/formatting.md#home-page).
1. Hover style on [Badge](/components/badge.md) component when links.
1. Super improved handling of áccënt characters.
+++

## v1.6.0

Released: [2021-06-09](https://github.com/retypeapp/retype/releases/tag/v1.6.0)

+++ New :icon-shield-check:
1. [`tags`](/configuration/page.md#tags) config for pages.
1. [`:icon-shortcode:`](/components/icon.md) component.
1. [`include`](/configuration/project.md#include) project config.
1. [`exclude`](/configuration/project.md#exclude) project config.
1. Improved `<table>` styling.
1. Performance boost for [components](/components/components.md).
+++

## v1.5.0

Released: 2021-05-12

+++ New :icon-shield-check:
1. [Badge](/components/badge.md) component
1. Syntax [highlighting](/components/code-block.md#syntax-highlighting) support for all code block languages
1. [`route`](/configuration/page.md#route) page config
1. [`port`](/configuration/project.md#port) project config
1. Larger font-size for `h1`, `h2`, and `h3` headers.
1. Better handing of special characters within file names.
1. Cleaner handling of **.md** pages created by GitHub Wiki.
+++

## v1.4.0

Released: 2021-04-12

+++ New :icon-shield-check:
1. Even cleaner upgrade to Retype from GitBook experience
1. Super fast [`retype start`](/guides/cli.md#retype-start) incremental build process
1. [image alignment](/components/image.md#alignment-options) and captions
1. [`exclude`](/configuration/project.md#exclude) config for **retype.yml**
1. `blog` layout and `/blog` folder defaults
1. [`[!file]`](/components/file-download.md) component
1. [`[!ref]`](/components/reference-link.md) component
+++

## v1.3.0

Released: 2021-03-30

+++ New :icon-shield-check:
1. GitHub [Actions](/guides/github-actions.md) for Retype.
1. [`expanded`](/configuration/page.md#expanded) config on [folder](/configuration/folder.md) configuration.
1. [`icon`](/configuration/project.md#icon) and [`iconAlign`](/configuration/project.md#iconalign) configs on [`links`](/configuration/project.md#links).
+++

## v1.2.0

Released: 2021-03-25

+++ New :icon-shield-check:
1. [`central`](/configuration/page.md#layout) layout.
1. [`page`](/configuration/page.md#layout) layout.
1. [`Edit this page`](/configuration/project.md#edit) link.
1. `Previous | Next` footer navigation buttons for pages.
1. [`order`](/configuration/page.md#order) Page level config.
1. `hidden` [`visibility`](/configuration/page.md#visibility) Page level config.
1. [`favicon`](/configuration/project.md#favicon) Project config available in **retype.yml**.
+++

## v1.1.0

Released: 2021-03-12

+++ New :icon-shield-check:
1. [Tab](/components/tab.md) component.
1. [Button](/components/button.md) component.
1. [Panel](/components/panel.md) component with expand/collapse.
1. [`retype start`](/guides/cli.md#retype-start) command.
1. Live Reload when using [`retype start`](/guides/cli.md#retype-start).
1. [**.yml**](/configuration/page.md#separate-yml-file) option for Page or Folder configs.
1. Code Block [title](/components/code-block.md#title).
1. [line numbering](/components/code-block.md#line-numbers) in code blocks.
+++

## v1.0.0

Released: 2021-02-11

+++ New :icon-shield-check:
1. Publish to NPM
1. Publish to NuGet
1. Initial `v1.0.0` release
+++
