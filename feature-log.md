---
icon: sparkles-fill
label: Feature Log
order: -200
templating: false
---
# Feature Log

A running log of notable features added to Retype, with links to the relevant docs.

For a complete list of changes in each release, see the [[Changelog]].

!!!
Have a feature idea? Open an [issue](https://github.com/retypeapp/retype/issues) and let's chat. :icon-comment:
!!!

---

## Pro features

The following features require a Retype [!badge PRO](/pro/pro.md) or Enterprise license.

[[Backlinks]] component
: Automatic display of inbound links from other pages in your project. Shows which pages reference the current page, helping readers discover related content. Configurable at [project](/configuration/project.md#backlinks) and [page](/configuration/page.md#backlinks) levels.

[`branding.baseColor`](/configuration/project.md#basecolor) setting
: Quick method to set a brand base color without full theme configuration. Applies the color to the left navigation and other key UI elements.

[Breadcrumb](/configuration/project.md#breadcrumb) navigation
: Add breadcrumb navigation trails to pages with the `breadcrumb` project setting. Configurable at [project](/configuration/project.md#breadcrumb) and [page](/configuration/page.md#breadcrumb) levels.

[Custom themes](/guides/themes.md)
: Full customization of your site's visual appearance through [[Theme Variables]] for both light and dark modes. Override colors, typography, and other design tokens via the `theme` project setting.

[Custom UI labels](/configuration/project.md#labels)
: Override any built-in UI string (search placeholders, table of contents heading, and more) using the `labels` project setting. Supports per-locale overrides and integrates with Retype's templating system.

[Default color scheme](/configuration/project.md#scheme) setting
: Control whether the site renders in `light`, `dark`, or `system` mode by default using the `scheme.mode` project setting. Without a Pro key the site always follows the visitor's system preference.

[Hub](/configuration/project.md#hub) link
: Add a back-link to a parent hub site in the header using the `hub` project setting. Displays a `<` link alongside the project logo for navigating back to a central documentation portal.

[Last updated](/components/last-updated.md) label
: Display an automatic "Last updated" date and author in the page footer, sourced from Git commit metadata. Configurable at [project](/configuration/project.md#lastupdated) and [page](/configuration/page.md#lastupdated) levels.

[`nav.badge`](/configuration/page.md#nav-badge) setting
: Add a badge to any page's entry in the left sidebar navigation. Supports all badge variants and the pipe shorthand notation.

[Navigation icon](/configuration/project.md#icons) control
: Show or hide navigation icons for all, some, or no items with the `nav.icons.mode` setting. Options include `all`, `folders`, `pages`, `top`, and `none`.

[Next/Previous](/configuration/project.md#nextprev) navigation control
: Configure the visibility and sequencing of Next and Previous navigation buttons. Supports `show`, `hide`, and `exclude` modes at [project](/configuration/project.md#nextprev), [page](/configuration/page.md#nextprev), and folder levels.

[Outbound](/configuration/project.md#outbound) links
: Automatically annotate and style all external outbound links with a trailing icon and new-tab behaviour. Control which domains are treated as outbound and customize the icon, target, and exclusions.

[Private](/configuration/page.md#private) and [protected](/configuration/page.md#protected) pages
: Restrict access to pages and folders using `visibility: private` or `visibility: protected`. Private pages are excluded from navigation, search, and the generated website. Protected pages are hidden from navigation and search but remain accessible via direct URL.

Remove [Powered by Retype](/configuration/project.md#poweredbyretype) branding
: Remove the `Powered by Retype` footer branding by setting `poweredByRetype: false` in your project `retype.yml`.

[Search](/configuration/project.md#search-exclude) filtering
: Fine-grained control over what content appears in search results. Use `search.exclude` to remove pages, folders, or path patterns from the index, and `search.include` to re-include specific paths within an excluded set.

[Stack](/configuration/project.md#nav-mode) navigation mode
: Transform top-level folders in the sidebar into visually distinct stacked blocks with `nav.mode: stack`. Configurable at [project](/configuration/project.md#nav-mode) and [page](/configuration/page.md#nav-mode) levels.

Strict [build](/guides/cli.md) mode
: The `--strict` flag on `retype build` returns a non-zero exit code when the build produces any errors or warnings. Useful for enforcing quality gates in CI pipelines.

[Table of contents](/configuration/project.md#toc)
: Enable and configure an in-page table of contents with the `toc` project setting. Configurable at [project](/configuration/project.md#toc) and [page](/configuration/page.md#toc) levels, with control over heading depth and label.

---

## v4.2.0

[!badge PRO] [Last updated](/components/last-updated.md) label
: Automatic "Last updated" date and author footer for each page, sourced from Git commit metadata. Configurable at [project](/configuration/project.md#lastupdated) and [page](/configuration/page.md#lastupdated) levels with control over date source (author vs committer) and display format.

[!badge PRO] [Custom UI labels](/configuration/project.md#labels)
: Override any built-in UI string using the `labels` project setting. Supports per-locale overrides and integrates with Retype's templating system via `project.labels`, see [#781](https://github.com/retypeapp/retype/discussions/781).

[Blog RSS](/configuration/project.md#blog-rss) feed configuration
: New `blog.rss` project settings for configuring the RSS feed `maxResults`, `title`, `description`, `copyright`, and `imageUrl`. The feed link is automatically added to all pages when a blog exists, see [#747](https://github.com/retypeapp/retype/issues/747).

[`created`](/configuration/page.md#created) and [`lastUpdated`](/configuration/page.md#lastupdated) page settings
: Set a fixed creation date or last updated date directly in page frontmatter. Useful for migrated content or pages where Git history does not reflect the true dates.

`compact` layout for [[Card]] component
: New compact card layout for displaying multiple wikilink cards in a tight list format. Supports the wikilink list pairs syntax for quick card group creation, see [docs](/components/card.md#list-pair-cards).

[Search filtering](/configuration/project.md#search-exclude)
: New `search.exclude` and `search.include` project settings to explicitly control which pages, folders, or path patterns appear in search results, see [#258](https://github.com/retypeapp/retype/discussions/258).

[`retype stop`](/guides/cli.md#retype-stop) command
: New CLI command to stop a running `retype start` development server process.

---

## v4.1.0

New search experience
: Improved search ranking, result UI, and keyboard navigation. Code blocks are now indexed and included in search results, see [#680](https://github.com/retypeapp/retype/discussions/680).

[`blog.layout`](/configuration/project.md#blog-layout) setting
: New project setting to configure the default layout for blog posts. Set a consistent layout across all posts without having to specify it in each page's frontmatter, see [#729](https://github.com/retypeapp/retype/discussions/729).

Unicode icon support
: Set a unicode character directly on any `icon` property in page frontmatter or project configuration, see [#785](https://github.com/retypeapp/retype/discussions/785).

---

## v4.0.0

[[Card]] component
: A styled preview card linking to another page in your project. Cards automatically display the target page's title, category, description, date, and image. Supports horizontal and vertical layouts with responsive grid behavior when multiple cards are placed together, see [docs](/components/card.md).

[[Steps]] component
: Create numbered step-by-step instructions with the `>>>` syntax. Each step includes a title and content area, with support for custom start numbers and nested content like code blocks, tabs, and callouts. Steps automatically generate anchor links for deep linking, see [docs](/components/steps.md).

Question variant for [[Button]] and [[Badge]]
: New `question` variant for Button and Badge components. Provides a question mark styled option for FAQ sections, help buttons, and troubleshooting guidance, see [docs](/components/button.md#variant) and [#658](https://github.com/retypeapp/retype/issues/658).

[`project`](/templating/project-properties.md) and [`page`](/templating/page-properties.md) properties
: Access page metadata and project configuration values directly in your templates. Use `page.*` for frontmatter properties and `project.*` for `retype.yml` settings. Enables dynamic content generation without hardcoding values, see [#619](https://github.com/retypeapp/retype/issues/619).

`content` template variables
: Query and access site content programmatically within templates. Includes `content.pages`, `content.blog.posts`, `content.tags`, `content.categories`, and `content.authors`. Supports wikilink-style lookup with `content["page-key"]` and search with `content.search("query")`.

[Blog configuration](/configuration/project.md#blog)
: Expanded blog configuration with `pageSize`, `maxResults`, `title`, and `base` settings. Control pagination, limit total posts on summary pages, customize the blog heading, and change the URL base path, see [#747](https://github.com/retypeapp/retype/issues/747).

`title` property on [`links`](/configuration/project.md#title)
: Add tooltip descriptions to navigation links. The `title` property on `links` and `footer.links` sets the HTML title attribute for hover tooltips, providing additional context without cluttering the interface, see [#672](https://github.com/retypeapp/retype/issues/672).

[`meta.siteName`](/configuration/project.md#sitename)
: Set the `og:site_name` meta tag for improved social media sharing. Defines the site name that appears when pages are shared on platforms like Facebook, Twitter, and LinkedIn.

Library and dependency upgrades
: Complete upgrade to the latest versions of all libraries and dependencies, including performance improvements and security updates.

## v3.12.0

[[Backlinks]] component
: Automatic display of inbound links from other pages in your project. Shows which pages reference the current page, helping users discover related content. Configure at [project](/configuration/project.md#backlinks) and [page](/configuration/page.md#backlinks) levels with `enabled`, `title`, and `maxResults` settings.

Color preview chips
: Automatic color preview chips for hexadecimal color codes in your documentation. When you write a hex color like `#FF5733`, Retype automatically displays a small color swatch next to it for instant visual reference.

Dark mode image switching
: Automatic detection and switching between light and dark mode images. Name your images with a `-dark` suffix (e.g., `diagram.png` and `diagram-dark.png`) and Retype automatically displays the appropriate version based on the active color scheme.

Dark mode favicon support
: Automatic discovery and switching of favicon variants for light and dark modes. Retype detects dark mode favicon files and automatically switches between them based on the user's color scheme preference.

Triple-star description syntax
: New `***` syntax block for defining page descriptions directly in markdown if placed immediately after the opening H1 heading. Provides a cleaner alternative to YAML frontmatter for setting page meta descriptions.

[`templating.loopLimit`](/configuration/project.md#looplimit)
: New project configuration setting to control the maximum number of loop iterations in templates. Helps prevent infinite loops and improves template safety.

[`target`](/configuration/page.md#target)
: New page-level setting to control where links on a page open. Set to `blank`, `parent`, `top`, or `self` to control link behavior for the entire page.

Heading theme variables
: Expanded theme variable support for all heading levels (H1 through H6). Customize typography, colors, and spacing for each heading level independently through theme configuration.

---

## v3.11.0

Custom themes
: Comprehensive [[theme variables]] customization for both [light](/configuration/project.md#theme-base) and [dark](/configuration/project.md#theme-dark) modes, see [docs](/configuration/project.md#theme), [Themes](/guides/themes.md) guide, and [[Theme Variables]].

[`branding.baseColor`](/configuration/project.md#basecolor)
: Quick method to set the base brand color without full [theme](/configuration/project.md#theme) configuration, see [docs](/configuration/project.md#basecolor).

[`nav.badge`](/configuration/page.md#nav-badge)
: Add a badge to navigation items in the left sidebar, see [docs](/configuration/page.md#nav-badge).

Three-way switcher
: Enhanced color scheme switcher with `Light`, `Dark`, and `System` options. Allows users to return to system preference after manual selection.

Pipe notation syntax
: Shorthand syntax for [[Button]], [[Badge]], and [Navigation Badge](/configuration/page.md#nav-badge) components using `text|variant` format. Example: `[!badge NEW|info]` instead of `[!badge text="NEW" variant"info"]`.

Icon-only links
: Support for icon-only [`links`](/configuration/project.md#links) in header and [footer](/configuration/project.md#footer) configurations without requiring [`text`](/configuration/project.md#text). Enables cleaner, minimal navigation designs.

Base variant
: New `base` variant for [[Button]], [[Badge]], and [[Callout]] components. Provides consistent styling with the site's base color theme.

Better print mode rendering
: Improved print style with better outbound link handling and visual consistency

Search and filter UX
: Added keyboard shortcuts hints, improved placeholder handling, and better focus states

Footer template support
: Full templating support in [`footer.copyright`](/configuration/project.md#copyright) including use of data variables, includes, and functions

---

## v3.10.0

Next/Previous navigation control
: Configure visibility and sequencing of `Next/Previous` navigation buttons. Configure at project, page, and folder levels with `show`, `hide`, and `exclude` modes, see [blog post](/blog/2025-06-09-whats-new-in-retype-v310.md), [Project](/configuration/project.md#nextprev) settings, [Page](/configuration/page.md#nextprev) settings, and [Folder](/configuration/folder.md#nextprev) settings.

GitHub Pages community key
: Retype Pro Community Key unlocks all Pro features for GitHub Pages projects. No cost, no strings attached for `*.github.io` domains, with up to 1000 pages with all [[Pro]] features included, see [blog post](/blog/2025-06-06-new-gitHub-pages-community-key.md) and [GitHub Pages](/hosting/github-pages.md) setup.

Hidden comments component
: Add hidden comments to markdown that won't appear in the final website. Supports both inline `%%comment%%` and block comment syntax, see [docs](/components/comments.md).

New [`tip`](/components/callout.md) Callout variant
: New `tip` callout variant with lightbulb icon and friendly green color scheme. Perfect for sharing best practices and helpful hints, see [docs](/components/callout.md).

Generic attributes for list items
: Apply CSS classes, IDs, and custom attributes directly to individual list items. Uses generic attribute syntax: `- List Item {.class-name #id data-value="test"}`, see [docs](/components/list.md#generic-attributes).

New CSS Classes
: Added rounded CSS classes including `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-4xl` and `rounded-full`

Custom Anchors
: Support for custom [Obsidian](https://obsidian.md/) style anchor points using `^anchor` syntax for block references. Enables wiki-style block linking and referencing.

---

## v3.9.0

Navigation icon settings
: Control which navigation items show icons with [`nav.icons.mode`](/configuration/project.md#icons) setting. Options include: `all`, `folders`, `pages`, `top`, `none`.

Default color scheme
: Set project's default color scheme with [`scheme.mode`](/configuration/project.md#scheme) configuration. Options include: `system`, `dark`, `light`.

Print-Friendly Stylesheets
: Comprehensive print stylesheet for professional PDF and paper output. Removes navigation, optimizes typography, prevents awkward page breaks. Shows full URLs for external links in print.

Question [[Callout]]
: New [`question`](/components/callout.md) callout variant with question mark icon. Perfect for FAQ sections and troubleshooting guides.

Pipe separator image dimensions
: Set image dimensions using intuitive pipe syntax: `![Image|300]` or `![Image|300x200]`. Cleaner alternative to generic attributes for image sizing, see [docs](/components/image.md#dimensions).

Universal Callout syntax
: Enhanced compatibility and seamless migration with other documentation platforms, including [Notion](https://www.notion.com/), [GitHub](https://github.com/), [Obsidian](https://obsidian.md/), [Just the Docs](https://just-the-docs.com/) and other platforms.

List-Icon styling
: Improved styling for creating icon lists with proper spacing and alignment which simplifies creation of icon-based list layouts.

Details/summary conversion
: Automatic conversion of HTML `details` elements into Retype Panel components to ensure seamless integration with other platforms, such as GitHub.

---

## v3.8.0

Stack navigation mode
: Transform top-level folders into visually distinct stacked blocks. Better organization and visual hierarchy for complex documentation sites, Configure at project or page level, see [blog post](/blog/2025-05-04-whats-new-in-retype-v38.md), [Project](/configuration/project.md#nav-mode) settings, and [Page](/configuration/page.md#nav-mode) settings.

WikiLinks Support
: Comprehensive wiki-style linking with double square brackets: `[[Page Name]]`. Intelligent link resolution that handles filename variations and support for custom labels using the syntax `[[page|Custom Label]]` for text links and `![[image.jpg|Alt text]]` for image wikilinks.

YouTube auto-embedding
: Automatic conversion of YouTube URLs into embedded video players. Supports all common YouTube URL formats including timestamps. Fully responsive with proper styling and controls, see [docs](/components/youtube.md).

Automatic [search](/configuration/project.md#search) language detection
: Automatically detects languages in content and optimizes search. Supports 25+ languages including English, Spanish, French, German, Japanese, Chinese, Arabic. Manual configuration still available with `"*"` token for auto-detection, see [docs](/configuration/project.md#search).

Greek and Hebrew Language Support
: Full support including proper text rendering, direction, and search functionality

Enhanced Include Functionality
: Support for accessing files outside project directory. Useful for including external readme files: `{{ include "../readme.md" }}`.

`home.md` Support
: Added `home.md` as another option for project home page. Joins existing options of `readme.md`, `index.md`, `default.md`, `welcome.md`.

[`permalink`](/configuration/page.md#permalink) Alias
: Added `permalink` as an alias for `route` in page configuration. Provides familiar naming for users migrating from other platforms, see [docs](/configuration/page.md#permalink).

Mermaid Upgrade
: Upgraded to Mermaid v11.6.0 with packet-beta diagram support for enhanced diagram rendering capabilities.

GitBook Image Handling
: Improved handling of GitBook image exports with relative paths for better compatibility with GitBook markdown exports.

Default Server Port
: Changed default development server port from `5000` to `5001` to avoid conflicts with macOS services using port `5000`.

UI Refinements
: Multiple UI improvements including search input styling, theme switcher icons, and navigation spacing for enhanced visual consistency and user experience.
