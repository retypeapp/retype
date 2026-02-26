---
icon: number
tags: [theme, pro]
---
# Theme variables

This reference documents all available customizable [`theme`](/configuration/project.md#theme) variables that can be added to your `retype.yml` file. Each variable can be overridden in both `base` (light mode) and `dark` (dark mode) configurations.

The following demonstrates a basic configuration where the `base-color` and background color are configured with custom values:

```yml
theme:
  base:
    base-color: "#8839ef"
    base-bg: "#eff1f5"
  dark:
    base-color: "#ca9ee6"
    base-bg: "#303446"
```

## Base{#base-variables}

Core variables that define the fundamental appearance of your site.

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `base-color` | Brand color | `#5495f1` | `#5495f1` |
| `base-white` | Pure white color | `#ffffff` | `#ffffff` |
| `base-black` | Pure black color | `#000000` | `#000000` |
| `base-bg` | Main background color | `base-white` | `dark-900` |
| `base-text` | Primary text color | `gray-700` | `dark-300` |
| `base-text-muted` | Muted text color | `gray-400` | `gray-400` |
| `base-text-strong` | Strong/bold text color | `gray-900` | `base-white` |
| `base-border` | Default border color | `gray-200` | `dark-650` |
| `base-border-hover` | Border color on hover | `gray-300` | `gray-550` |
| `base-border-strong` | Strong border color | `gray-400` | `gray-450` |
| `base-link` | Link color | `base-500` | `base-500` |
| `base-link-hover` | Link hover color | `base-800` | `base-300` |
| `base-link-weight` | Link font weight | `500` | `500` |
| `base-item-text` | Base item text color | `base-text-strong` | `base-text-strong` |
| `base-item-text-active` | Active base item text color | `base-link` | `base-link` |
| `base-item-bg` | Base item background | `transparent` | `transparent` |
| `base-item-bg-hover` | Base item hover background | `base-50` | `dark-600` |
| `base-item-bg-active` | Active base item background | `base-100` | `dark-550` |

## Variants

Semantic color variants are used throughout Retype components. These colors provide consistent theming for different types of content and actions. Each variant is available as a full color palette from `50` (lightest) to `900` (darkest).

| Variable | Description | Default&nbsp;`base`  |
| --- | --- | --- |
| `base` | Foundation brand color for main actions and highlights | `#5495f1` |
| `primary` | Primary color variant used for actions, highlights, and key elements across components | `#5495f1` |
| `success` | Success state color for positive actions and confirmations | `#36ad99` |
| `danger` | Danger/error state color for warnings and destructive actions | `#e53e3e` |
| `warning` | Warning state color for caution and important notices | `#edab26` |
| `royal` | Royal purple color for special emphasis and premium features | `#a667e3` |

## Color Palettes

System elements and `base` variants for Components are derived from the `base-color` using the `base` color palette.

### Base

Color variations based on your `base-color` setting:

| Variable | Description |
| --- | --- |
| `base-50` | Lightest base color shade (10% mix with white) |
| `base-100` | Very light base color shade (15% mix with white) |
| `base-200` | Light base color shade (30% mix with white) |
| `base-300` | Medium-light base color shade (50% mix with white) |
| `base-400` | Medium base color shade (70% mix with white) |
| `base-500` | Base color (same as `base-color`) |
| `base-600` | Medium-dark base color shade (90% mix with black) |
| `base-700` | Dark base color shade (80% mix with black) |
| `base-800` | Very dark base color shade (60% mix with black) |
| `base-900` | Darkest base color shade (40% mix with black) |

## Semantic Color Palettes

Each semantic color includes shades from `50` (lightest) to `900` (darkest):

The semantic color shades follow a consistent pattern where:

- Lower numbers (50-400) are lighter shades created by mixing with white
- Higher numbers (600-900) are darker shades created by mixing with black
- The mid color `500` of each sequence represents the pure color for that sequence

### Primary

Semantic palette `primary` with shades `50` through `900`:

| Shade | Description |
|-------|-------------|
| `primary-50` | Lightest primary shade (10% mix with white) |
| `primary-100` | Very light primary shade (15% mix with white) |
| `primary-200` | Light primary shade (30% mix with white) |
| `primary-300` | Medium-light primary shade (50% mix with white) |
| `primary-400` | Medium primary shade (70% mix with white) |
| `primary-500` | Base primary color (`#5495f1`) |
| `primary-600` | Medium-dark primary shade (90% mix with black) |
| `primary-700` | Dark primary shade (80% mix with black) |
| `primary-800` | Very dark primary shade (60% mix with black) |
| `primary-900` | Darkest primary shade (40% mix with black) |

### Success

Semantic palette `success` with shades `50` through `900`:

| Shade | Description |
|-------|-------------|
| `success-50` | Lightest success shade (10% mix with white) |
| `success-100` | Very light success shade (15% mix with white) |
| `success-200` | Light success shade (30% mix with white) |
| `success-300` | Medium-light success shade (50% mix with white) |
| `success-400` | Medium success shade (70% mix with white) |
| `success-500` | Base success color (`#36ad99`) |
| `success-600` | Medium-dark success shade (90% mix with black) |
| `success-700` | Dark success shade (80% mix with black) |
| `success-800` | Very dark success shade (60% mix with black) |
| `success-900` | Darkest success shade (40% mix with black) |

### Danger

Semantic palette `danger` with shades `50` through `900`:

| Shade | Description |
|-------|-------------|
| `danger-50` | Lightest danger shade (10% mix with white) |
| `danger-100` | Very light danger shade (15% mix with white) |
| `danger-200` | Light danger shade (30% mix with white) |
| `danger-300` | Medium-light danger shade (50% mix with white) |
| `danger-400` | Medium danger shade (70% mix with white) |
| `danger-500` | Base danger color (`#e53e3e`) |
| `danger-600` | Medium-dark danger shade (90% mix with black) |
| `danger-700` | Dark danger shade (80% mix with black) |
| `danger-800` | Very dark danger shade (60% mix with black) |
| `danger-900` | Darkest danger shade (40% mix with black) |

### Warning

Semantic palette `warning` with shades `50` through `900`:

| Shade | Description |
|-------|-------------|
| `warning-50` | Lightest warning shade (10% mix with white) |
| `warning-100` | Very light warning shade (15% mix with white) |
| `warning-200` | Light warning shade (30% mix with white) |
| `warning-300` | Medium-light warning shade (50% mix with white) |
| `warning-400` | Medium warning shade (70% mix with white) |
| `warning-500` | Base warning color (`#edab26`) |
| `warning-600` | Medium-dark warning shade (90% mix with black) |
| `warning-700` | Dark warning shade (80% mix with black) |
| `warning-800` | Very dark warning shade (60% mix with black) |
| `warning-900` | Darkest warning shade (40% mix with black) |

### Royal

Semantic palette `royal` with shades `50` through `900`

| Shade | Description |
|-------|-------------|
| `royal-50` | Lightest royal shade (10% mix with white) |
| `royal-100` | Very light royal shade (15% mix with white) |
| `royal-200` | Light royal shade (30% mix with white) |
| `royal-300` | Medium-light royal shade (50% mix with white) |
| `royal-400` | Medium royal shade (70% mix with white) |
| `royal-500` | Base royal color (`#a667e3`) |
| `royal-600` | Medium-dark royal shade (90% mix with black) |
| `royal-700` | Dark royal shade (80% mix with black) |
| `royal-800` | Very dark royal shade (60% mix with black) |
| `royal-900` | Darkest royal shade (40% mix with black) |

### Gray

Predefined gray color variations:

| Variable    | Description           | Default&nbsp;`base` |
|-------------|----------------------|----------------|
| `gray-50`   | Lightest gray        | `#f8f9fc`      |
| `gray-100`  | Very light gray      | `#f4f6fc`      |
| `gray-150`  | Light gray variant   | `#edf0f6`      |
| `gray-200`  | Light gray           | `#e4e8f1`      |
| `gray-250`  | Medium-light gray variant | `#d2d9e3` |
| `gray-300`  | Medium-light gray    | `#bdc8da`      |
| `gray-350`  | Medium gray variant  | `#a4b1c6`      |
| `gray-400`  | Medium gray          | `#8693a9`      |
| `gray-450`  | Medium-dark gray variant | `#65718c`  |
| `gray-500`  | Medium-dark gray     | `#525e78`      |
| `gray-550`  | Dark gray variant    | `#46536d`      |
| `gray-600`  | Dark gray            | `#3f4a64`      |
| `gray-650`  | Very dark gray variant | `#313c56`    |
| `gray-700`  | Very dark gray       | `#2c3047`      |
| `gray-750`  | Darkest gray variant | `#1f2236`      |
| `gray-800`  | Near black gray      | `#181d2d`      |
| `gray-850`  | Almost black gray    | `#101523`      |
| `gray-900`  | Darkest gray         | `#090d1c`      |

### Dark

Specialized dark mode color variations:

| Variable | Description | Default&nbsp;`base` |
| --- | --- | --- |
| `dark-50` | Lightest dark mode color | `#fafafa` |
| `dark-100` | Very light dark mode color | `#f7f7f7` |
| `dark-150` | Light dark mode variant | `#f2f2f2` |
| `dark-200` | Light dark mode color | `#eeeeee` |
| `dark-250` | Medium-light dark mode variant | `#e0e0e0` |
| `dark-300` | Medium-light dark mode color | `#c4c4c4` |
| `dark-350` | Medium dark mode variant | `#9e9e9e` |
| `dark-400` | Medium dark mode color | `#616161` |
| `dark-450` | Medium-dark dark mode variant | `#424242` |
| `dark-500` | Medium-dark dark mode color | `#353535` |
| `dark-550` | Dark mode variant | `#323232` |
| `dark-600` | Dark mode color | `#2d2d2d` |
| `dark-650` | Very dark mode variant | `#2c2c2c` |
| `dark-700` | Very dark mode color | `#272727` |
| `dark-750` | Darkest mode variant | `#252525` |
| `dark-800` | Near black dark mode | `#222222` |
| `dark-850` | Almost black dark mode | `#1e1e1e` |
| `dark-900` | Darkest dark mode color | `#121212` |

## Helper

Utility variables used throughout the theme system.

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `transparent` | Transparent color value | `transparent` | `transparent` |
| `skeleton-bg` | Skeleton loading background | `gray-200` | `dark-600` |

## Selection

Variables for customizing text selection highlight appearance.

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `selection-bg` | Text selection background color | `var(--base-200)` | `var(--base-700)` |
| `selection-text` | Text selection text color | `var(--base-text-strong)` | `var(--base-white)` |

## Branding

Variables for customizing branding elements.

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `branding-label-text` | Branding label text color | `base-500` | `base-500` |
| `branding-label-bg` | Branding label background | `base-50` | `transparent` |
| `branding-label-border` | Branding label border color | `base-300` | `base-500` |

## Header

Variables controlling the header appearance.

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `header-bg` | Header background color | `base-bg` | `base-bg` |
| `header-border` | Header border color | `base-border` | `base-border` |
| `header-text` | Header text color | `base-link` | `base-link` |
| `header-text-weight` | Header text font weight | `base-link-weight` | `base-link-weight` |
| `header-text-hover` | Header text hover color | `base-link-hover` | `base-link-hover` |

## Search

Variables for customizing search functionality appearance.

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `search-text` | Search input text color | `base-text` | `base-text` |
| `search-placeholder` | Search placeholder text color | `base-text-muted` | `base-text-muted` |
| `search-bg` | Search input background | `header-bg` | `header-bg` |
| `search-border` | Search input border color | `base-border` | `base-border-hover` |
| `search-border-hover` | Search input hover border color | `base-border-hover` | `base-border-strong` |
| `search-border-focus` | Search input focus border color | `base-border-hover` | `base-border-strong` |
| `search-hint-text` | Search hint text color | `search-placeholder` | `search-placeholder` |
| `search-hint-bg` | Search hint background | `header-bg` | `header-bg` |
| `search-hint-border` | Search hint border color | `search-border` | `search-border` |

## Filter

Variables for customizing filter functionality.

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `filter-text` | Filter input text color | `base-text` | `base-text` |
| `filter-placeholder` | Filter placeholder text color | `base-text-muted` | `base-text-muted` |
| `filter-bg` | Filter input background | `sidebar-left-bg` | `sidebar-left-bg` |
| `filter-border` | Filter input border color | `base-border` | `base-border-hover` |
| `filter-border-hover` | Filter input hover border color | `base-border-hover` | `base-border-strong` |
| `filter-border-focus` | Filter input focus border color | `base-border-hover` | `base-border-strong` |

## Body

Variables controlling the main content area.

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `body-bg` | Main content background | `base-bg` | `base-bg` |
| `body-text` | Main content text color | `base-text` | `base-text` |
| `body-link` | Body link color | `base-link` | `base-link` |
| `body-link-hover` | Body link hover color | `base-link-hover` | `base-link-hover` |
| `body-link-weight` | Body link font weight | `base-link-weight` | `base-link-weight` |

## Heading

Variables for heading text styling.

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `heading-text` | Heading text color | `gray-900` | `base-white` |
| `heading-weight` | Default heading font weight | `700` | `700` |
| `heading-case` | Default heading text transform | `normal-case` | `normal-case` |
| `heading-h1` | H1 heading text color | `heading-text` | `heading-text` |
| `heading-h2` | H2 heading text color | `heading-text` | `heading-text` |
| `heading-h3` | H3 heading text color | `heading-text` | `heading-text` |
| `heading-h4` | H4 heading text color | `heading-text` | `heading-text` |
| `heading-h5` | H5 heading text color | `heading-text` | `heading-text` |
| `heading-h6` | H6 heading text color | `heading-text` | `heading-text` |
| `heading-h1-weight` | H1 heading font weight | `heading-weight` | `heading-weight` |
| `heading-h2-weight` | H2 heading font weight | `heading-weight` | `heading-weight` |
| `heading-h3-weight` | H3 heading font weight | `heading-weight` | `heading-weight` |
| `heading-h4-weight` | H4 heading font weight | `heading-weight` | `heading-weight` |
| `heading-h5-weight` | H5 heading font weight | `heading-weight` | `heading-weight` |
| `heading-h6-weight` | H6 heading font weight | `heading-weight` | `heading-weight` |
| `heading-h1-case` | H1 heading text transform | `heading-case` | `heading-case` |
| `heading-h2-case` | H2 heading text transform | `heading-case` | `heading-case` |
| `heading-h3-case` | H3 heading text transform | `heading-case` | `heading-case` |
| `heading-h4-case` | H4 heading text transform | `heading-case` | `heading-case` |
| `heading-h5-case` | H5 heading text transform | `heading-case` | `heading-case` |
| `heading-h6-case` | H6 heading text transform | `heading-case` | `heading-case` |
| `heading-h1-font-size` | H1 heading font size | `2.5rem` | `2.5rem` |
| `heading-h2-font-size` | H2 heading font size | `2rem` | `2rem` |
| `heading-h3-font-size` | H3 heading font size | `1.5rem` | `1.5rem` |
| `heading-h4-font-size` | H4 heading font size | `1.125rem` | `1.125rem` |
| `heading-h5-font-size` | H5 heading font size | `1rem` | `1rem` |
| `heading-h6-font-size` | H6 heading font size | `0.875rem` | `0.875rem` |
| `heading-h1-margin-bottom` | H1 heading bottom margin | `2rem` | `2rem` |
| `heading-h2-margin-bottom` | H2 heading bottom margin | `1.5rem` | `1.5rem` |
| `heading-h3-margin-bottom` | H3 heading bottom margin | `1rem` | `1rem` |
| `heading-h4-margin-bottom` | H4 heading bottom margin | `0.75rem` | `0.75rem` |
| `heading-h5-margin-bottom` | H5 heading bottom margin | `0.5rem` | `0.5rem` |
| `heading-h6-margin-bottom` | H6 heading bottom margin | `0.5rem` | `0.5rem` |
| `heading-h1-padding-top` | H1 heading top padding | `0` | `0` |
| `heading-h2-padding-top` | H2 heading top padding | `0` | `0` |
| `heading-h3-padding-top` | H3 heading top padding | `0` | `0` |
| `heading-h4-padding-top` | H4 heading top padding | `0` | `0` |
| `heading-h5-padding-top` | H5 heading top padding | `0` | `0` |
| `heading-h6-padding-top` | H6 heading top padding | `0` | `0` |
| `heading-h1-border-top` | H1 heading top border color | `transparent` | `transparent` |
| `heading-h2-border-top` | H2 heading top border color | `transparent` | `transparent` |
| `heading-h3-border-top` | H3 heading top border color | `transparent` | `transparent` |
| `heading-h4-border-top` | H4 heading top border color | `transparent` | `transparent` |
| `heading-h5-border-top` | H5 heading top border color | `transparent` | `transparent` |
| `heading-h6-border-top` | H6 heading top border color | `transparent` | `transparent` |

## Scheme

Variables for the Light/Dark switcher component.

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `scheme-menu-item-bg` | Switcher item background | `base-item-bg` | `base-item-bg` |
| `scheme-menu-item-bg-hover` | Switcher item hover background | `base-item-bg-hover` | `base-item-bg-hover` |
| `scheme-menu-item-bg-active` | Switcher active item background | `base-item-bg-active` | `base-item-bg-active` |
| `scheme-menu-item-text` | Switcher item text color | `base-text` | `base-text` |
| `scheme-menu-item-text-active` | Switcher active item text color | `base-item-text-active` | `base-item-text-active` |

## Sidebar

Variables controlling the left and right sidebars.

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `sidebar-left-bg` | Left sidebar background | `base-bg` | `base-bg` |
| `sidebar-left-border` | Left sidebar border | `base-border` | `base-border` |
| `sidebar-right-bg` | Right sidebar background | `base-bg` | `base-bg` |
| `sidebar-right-border` | Right sidebar border | `base-border` | `base-border` |

## Navigation

Variables for customizing navigation appearance and behavior.

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `nav-bg` | Navigation background | `sidebar-left-bg` | `sidebar-left-bg` |
| `nav-item-bg-hover` | Navigation item hover background | `base-item-bg-hover` | `base-item-bg-hover` |
| `nav-item-bg-active` | Active navigation item background | `base-item-bg-active` | `base-item-bg-active` |
| `nav-item-bg-active-hover` | Active navigation item hover background | `base-item-bg-active` | `base-item-bg-active` |
| `nav-item-text` | Navigation item text color | `gray-900` | `dark-300` |
| `nav-item-text-hover` | Navigation item hover text color | `base-item-text-active` | `base-item-text-active` |
| `nav-item-text-active` | Active navigation item text color | `base-item-text-active` | `base-item-text-active` |
| `nav-item-text-active-hover` | Active navigation item hover text color | `base-item-text-active` | `base-item-text-active` |
| `nav-item-text-active-weight` | Active navigation item font weight | `base-link-weight` | `base-link-weight` |
| `nav-item-button` | Navigation button color | `gray-400` | `dark-400` |
| `nav-item-button-active-hover` | Navigation button active hover color | `base-200` | `base-200` |
| `nav-item-border-active` | Active navigation item border color | `base-500` | `base-500` |
| `nav-item-text-stack` | Stack navigation text color | `gray-700` | `base-text-strong` |
| `nav-item-text-stack-case` | Stack navigation text transform | `uppercase` | `uppercase` |
| `nav-item-text-stack-weight` | Stack navigation text font weight | `600` | `600` |
| `nav-badge-margin-left` | Navigation badge left margin | `auto` | `auto` |
| `nav-badge-margin-left-alt` | Alternative navigation badge left margin | `0.75rem` | `0.75rem` |

## Table of Contents

Variables controlling the Table of Contents appearance in the right sidebar.

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `toc-heading` | Table of contents heading color | `gray-700` | `dark-400` |
| `toc-text` | Table of contents text color | `gray-700` | `dark-300` |
| `toc-text-hover` | Table of contents hover text color | `base-500` | `base-500` |
| `toc-text-active` | Table of contents active text color | `base-500` | `base-500` |
| `toc-border-active` | Table of contents active border color | `base-500` | `base-500` |
| `toc-heading-case` | Table of contents heading text transform | `uppercase` | `uppercase` |
| `toc-heading-weight` | Table of contents heading font weight | `600` | `600` |

## Footer

Variables controlling the footer appearance.

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `footer-text` | Footer text color | `gray-500` | `dark-350` |
| `footer-link` | Footer link color | `base-link` | `base-link` |
| `footer-link-hover` | Footer link hover color | `base-link-hover` | `base-link-hover` |
| `footer-link-weight` | Footer link font weight | `base-link-weight` | `base-link-weight` |

## Backlinks Component

Variables for customizing backlinks appearance.

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `backlinks-display` | Backlinks display mode | `block` | `block` |
| `backlinks-margin-top` | Backlinks top margin | `0` | `0` |
| `backlinks-margin-bottom` | Backlinks bottom margin | `1.5rem` | `1.5rem` |
| `backlinks-border-top` | Backlinks top border color | `transparent` | `transparent` |
| `backlinks-title` | Backlinks title color | `heading-h2` | `heading-h2` |
| `backlinks-title-case` | Backlinks title text transform | `heading-h2-case` | `heading-h2-case` |
| `backlinks-title-padding-top` | Backlinks title top padding | `heading-h2-padding-top` | `heading-h2-padding-top` |
| `backlinks-title-margin-top` | Backlinks title top margin | `0` | `0` |
| `backlinks-title-margin-bottom` | Backlinks title bottom margin | `heading-h2-margin-bottom` | `heading-h2-margin-bottom` |
| `backlinks-title-font-size` | Backlinks title font size | `heading-h2-font-size` | `heading-h2-font-size` |
| `backlinks-title-font-weight` | Backlinks title font weight | `heading-h2-weight` | `heading-h2-weight` |
| `backlinks-card-border` | Backlinks card border color | `base-border` | `base-border` |
| `backlinks-card-border-hover` | Backlinks card hover border color | `base-border-hover` | `base-border-hover` |
| `backlinks-card-rounded` | Backlinks card border radius | `0.5rem` | `0.5rem` |
| `backlinks-card-shadow-hover` | Backlinks card hover shadow | `shadow-xs` | `shadow-xs` |
| `backlinks-link` | Backlinks link color | `base-link` | `base-link` |
| `backlinks-link-hover` | Backlinks link hover color | `base-link-hover` | `base-link-hover` |
| `backlinks-link-font-size` | Backlinks link font size | `0.875rem` | `0.875rem` |
| `backlinks-text` | Backlinks text color | `body-text` | `body-text` |
| `backlinks-text-font-size` | Backlinks text font size | `0.875rem` | `0.875rem` |
| `backlinks-text-font-weight` | Backlinks text font weight | `400` | `400` |

## Badge Component

Variables for customizing badge components across all variants.

### Base Badge

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `badge-base` | Base badge background | `base-100` | `base-100` |
| `badge-base-hover` | Base badge hover background | `base-100` | `base-200` |
| `badge-base-text` | Base badge text color | `base-500` | `base-500` |
| `badge-base-text-hover` | Base badge hover text color | `base-500` | `base-500` |
| `badge-base-border` | Base badge border color | `base-200` | `base-200` |
| `badge-base-border-hover` | Base badge hover border color | `base-400` | `base-400` |

### Primary Badge

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `badge-primary` | Primary badge background | `primary-100` | `primary-100` |
| `badge-primary-hover` | Primary badge hover background | `primary-100` | `primary-200` |
| `badge-primary-text` | Primary badge text color | `primary-500` | `primary-500` |
| `badge-primary-text-hover` | Primary badge hover text color | `primary-500` | `primary-500` |
| `badge-primary-border` | Primary badge border color | `primary-200` | `primary-200` |
| `badge-primary-border-hover` | Primary badge hover border color | `primary-400` | `primary-400` |

### Secondary Badge

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `badge-secondary` | Secondary badge background | `gray-100` | `gray-100` |
| `badge-secondary-hover` | Secondary badge hover background | `gray-100` | `gray-250` |
| `badge-secondary-text` | Secondary badge text color | `gray-600` | `gray-600` |
| `badge-secondary-text-hover` | Secondary badge hover text color | `gray-600` | `gray-600` |
| `badge-secondary-border` | Secondary badge border color | `gray-200` | `gray-200` |
| `badge-secondary-border-hover` | Secondary badge hover border color | `gray-400` | `gray-400` |

### Success Badge

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `badge-success` | Success badge background | `success-100` | `success-100` |
| `badge-success-hover` | Success badge hover background | `success-100` | `success-200` |
| `badge-success-text` | Success badge text color | `success-700` | `success-700` |
| `badge-success-text-hover` | Success badge hover text color | `success-700` | `success-700` |
| `badge-success-border` | Success badge border color | `success-200` | `success-200` |
| `badge-success-border-hover` | Success badge hover border color | `success-400` | `success-400` |

### Question Badge

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `badge-question` | Question badge background | `royal-100` | `royal-100` |
| `badge-question-hover` | Question badge hover background | `royal-100` | `royal-200` |
| `badge-question-text` | Question badge text color | `royal-700` | `royal-700` |
| `badge-question-text-hover` | Question badge hover text color | `royal-700` | `royal-700` |
| `badge-question-border` | Question badge border color | `royal-200` | `royal-200` |
| `badge-question-border-hover` | Question badge hover border color | `royal-400` | `royal-400` |

### Danger Badge

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `badge-danger` | Danger badge background | `danger-100` | `danger-100` |
| `badge-danger-hover` | Danger badge hover background | `danger-100` | `danger-200` |
| `badge-danger-text` | Danger badge text color | `danger-600` | `danger-600` |
| `badge-danger-text-hover` | Danger badge hover text color | `danger-600` | `danger-600` |
| `badge-danger-border` | Danger badge border color | `danger-200` | `danger-200` |
| `badge-danger-border-hover` | Danger badge hover border color | `danger-400` | `danger-400` |

### Warning Badge

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `badge-warning` | Warning badge background | `warning-100` | `warning-100` |
| `badge-warning-hover` | Warning badge hover background | `warning-100` | `warning-200` |
| `badge-warning-text` | Warning badge text color | `warning-700` | `warning-700` |
| `badge-warning-text-hover` | Warning badge hover text color | `warning-700` | `warning-700` |
| `badge-warning-border` | Warning badge border color | `warning-200` | `warning-200` |
| `badge-warning-border-hover` | Warning badge hover border color | `warning-400` | `warning-400` |

### Info Badge

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `badge-info` | Info badge background | `transparent` | `transparent` |
| `badge-info-hover` | Info badge hover background | `transparent` | `transparent` |
| `badge-info-text` | Info badge text color | `base-500` | `base-500` |
| `badge-info-text-hover` | Info badge hover text color | `base-300` | `base-300` |
| `badge-info-border` | Info badge border color | `base-500` | `base-500` |
| `badge-info-border-hover` | Info badge hover border color | `base-300` | `base-300` |

### Light Badge

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `badge-light` | Light badge background | `base-white` | `base-white` |
| `badge-light-hover` | Light badge hover background | `gray-100` | `dark-200` |
| `badge-light-text` | Light badge text color | `gray-600` | `dark-600` |
| `badge-light-text-hover` | Light badge hover text color | `gray-600` | `dark-600` |
| `badge-light-border` | Light badge border color | `gray-200` | `transparent` |
| `badge-light-border-hover` | Light badge hover border color | `gray-400` | `gray-400` |

### Dark Badge

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `badge-dark` | Dark badge background | `gray-700` | `dark-450` |
| `badge-dark-hover` | Dark badge hover background | `gray-600` | `dark-400` |
| `badge-dark-text` | Dark badge text color | `base-white` | `base-white` |
| `badge-dark-text-hover` | Dark badge hover text color | `base-white` | `base-white` |
| `badge-dark-border` | Dark badge border color | `gray-700` | `dark-450` |
| `badge-dark-border-hover` | Dark badge hover border color | `gray-500` | `dark-400` |

### Ghost Badge

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `badge-ghost` | Ghost badge background | `body-bg` | `dark-550` |
| `badge-ghost-hover` | Ghost badge hover background | `gray-50` | `dark-450` |
| `badge-ghost-text` | Ghost badge text color | `gray-300` | `dark-400` |
| `badge-ghost-text-hover` | Ghost badge hover text color | `gray-300` | `dark-450` |
| `badge-ghost-border` | Ghost badge border color | `gray-200` | `dark-450` |
| `badge-ghost-border-hover` | Ghost badge hover border color | `gray-300` | `dark-450` |

### Contrast Badge

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `badge-contrast` | Contrast badge background | `gray-900` | `base-white` |
| `badge-contrast-hover` | Contrast badge hover background | `gray-600` | `dark-200` |
| `badge-contrast-text` | Contrast badge text color | `base-white` | `dark-850` |
| `badge-contrast-text-hover` | Contrast badge hover text color | `base-white` | `dark-850` |
| `badge-contrast-border` | Contrast badge border color | `gray-900` | `base-white` |
| `badge-contrast-border-hover` | Contrast badge hover border color | `gray-800` | `base-white` |

## Button Component

Variables for customizing button components across all variants.

### Base Button

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `button-base` | Base button background | `base-500` | `base-500` |
| `button-base-hover` | Base button hover background | `base-700` | `base-700` |
| `button-base-text` | Base button text color | `base-50` | `base-50` |

### Primary Button

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `button-primary` | Primary button background | `primary-500` | `primary-500` |
| `button-primary-hover` | Primary button hover background | `primary-700` | `primary-700` |
| `button-primary-text` | Primary button text color | `primary-50` | `primary-50` |

### Secondary Button

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `button-secondary` | Secondary button background | `gray-500` | `gray-500` |
| `button-secondary-hover` | Secondary button hover background | `gray-700` | `dark-450` |
| `button-secondary-text` | Secondary button text color | `gray-50` | `gray-50` |

### Success Button

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `button-success` | Success button background | `success-500` | `success-500` |
| `button-success-hover` | Success button hover background | `success-700` | `success-700` |
| `button-success-text` | Success button text color | `success-50` | `success-50` |

### Question Button

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `button-question` | Question button background | `royal-500` | `royal-500` |
| `button-question-hover` | Question button hover background | `royal-700` | `royal-700` |
| `button-question-text` | Question button text color | `royal-50` | `royal-50` |
| `button-question-text-hover` | Question button hover text color | `royal-100` | `royal-100` |
| `button-question-border` | Question button border color | `royal-500` | `royal-500` |
| `button-question-border-hover` | Question button hover border color | `royal-700` | `royal-700` |

### Danger Button

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `button-danger` | Danger button background | `danger-500` | `danger-500` |
| `button-danger-hover` | Danger button hover background | `danger-700` | `danger-700` |
| `button-danger-text` | Danger button text color | `danger-50` | `danger-50` |

### Warning Button

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `button-warning` | Warning button background | `warning-500` | `warning-500` |
| `button-warning-hover` | Warning button hover background | `warning-600` | `warning-600` |
| `button-warning-text` | Warning button text color | `warning-900` | `warning-900` |

### Info Button

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `button-info` | Info button background | `transparent` | `transparent` |
| `button-info-hover` | Info button hover background | `transparent` | `transparent` |
| `button-info-text` | Info button text color | `base-500` | `base-500` |
| `button-info-text-hover` | Info button hover text color | `base-300` | `base-300` |
| `button-info-border` | Info button border color | `base-500` | `base-500` |
| `button-info-border-hover` | Info button hover border color | `base-300` | `base-300` |

### Light Button

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `button-light` | Light button background | `gray-200` | `dark-250` |
| `button-light-hover` | Light button hover background | `gray-300` | `dark-350` |
| `button-light-text` | Light button text color | `gray-900` | `base-black` |

### Dark Button

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `button-dark` | Dark button background | `gray-700` | `dark-550` |
| `button-dark-hover` | Dark button hover background | `gray-600` | `dark-450` |
| `button-dark-text` | Dark button text color | `gray-50` | `dark-350` |

### Ghost Button

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `button-ghost` | Ghost button background | `gray-100` | `dark-600` |
| `button-ghost-hover` | Ghost button hover background | `gray-150` | `dark-450` |
| `button-ghost-text` | Ghost button text color | `gray-300` | `dark-400` |

### Contrast Button

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `button-contrast` | Contrast button background | `gray-900` | `base-white` |
| `button-contrast-hover` | Contrast button hover background | `gray-700` | `dark-300` |
| `button-contrast-text` | Contrast button text color | `gray-50` | `base-black` |

## Callout Component

Variables for customizing callout components.

### Base Callout

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `callout-base-bg` | Base callout background | `base-white` | `dark-800` |
| `callout-base-border` | Base callout border | `base-border` | `base-border` |
| `callout-base` | Base callout accent color | `base-500` | `base-500` |

### Callout Accent Colors

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `callout-primary` | Primary callout accent color | `primary-500` | `primary-500` |
| `callout-secondary` | Secondary callout accent color | `gray-500` | `gray-500` |
| `callout-success` | Success callout accent color | `success-500` | `success-500` |
| `callout-question` | Question callout accent color | `royal-500` | `royal-500` |
| `callout-tip` | Tip callout accent color | `success-400` | `success-400` |
| `callout-danger` | Danger callout accent color | `danger-500` | `danger-500` |
| `callout-warning` | Warning callout accent color | `warning-500` | `warning-500` |
| `callout-info` | Info callout accent color | `base-300` | `base-300` |
| `callout-light` | Light callout accent color | `gray-300` | `gray-300` |
| `callout-dark` | Dark callout accent color | `gray-900` | `gray-900` |
| `callout-ghost` | Ghost callout accent color | `gray-100` | `gray-100` |
| `callout-contrast` | Contrast callout accent color | `gray-600` | `gray-600` |
| `callout-contrast-bg` | Contrast callout background | `gray-900` | `base-white` |
| `callout-contrast-text` | Contrast callout text color | `gray-300` | `dark-800` |
| `callout-contrast-border` | Contrast callout border color | `gray-900` | `dark-700` |

## Card Component

Variables for customizing card appearance. Cards are used for blog listings, category pages, tag pages, and inline `[!card]` components.

| Variable | Description | Default `base` | Default `dark` |
| --- | --- | --- | --- |
| `card-bg` | Card background color | `var(--base-bg)` | `var(--base-bg)` |
| `card-border` | Card border color | `var(--gray-200)` | `var(--dark-700)` |
| `card-border-hover` | Card hover border color | `var(--gray-400)` | `var(--dark-450)` |
| `card-rounded` | Card border radius | `0.5rem` | `0.5rem` |
| `card-padding` | Card content padding | `1.5rem` | `1.5rem` |
| `card-margin-bottom` | Card bottom margin | `1.5rem` | `1.5rem` |
| `card-max-width` | Card maximum width (wide screens) | `960px` | `960px` |
| `card-max-width-sm` | Card maximum width (narrow screens) | `558px` | `558px` |
| `card-min-width` | Card minimum width | `250px` | `250px` |
| `card-flex-basis` | Card flex basis for portrait layout | `250px` | `250px` |
| `card-image-bg` | Card image placeholder background | `var(--gray-300)` | `var(--dark-450)` |
| `card-image-width` | Card image width percentage | `41.666667%` | `41.666667%` |
| `card-title-text` | Card title text color | `var(--base-text-strong)` | `var(--base-text-strong)` |
| `card-title-font-size` | Card title font size | `1.125rem` | `1.125rem` |
| `card-title-font-size-md` | Card title font size (wide screens) | `1.25rem` | `1.25rem` |
| `card-title-font-weight` | Card title font weight | `600` | `600` |
| `card-title-leading` | Card title line height | `1.375` | `1.375` |
| `card-description-text` | Card description text color | `var(--body-text)` | `var(--body-text)` |
| `card-description-margin-top` | Card description top margin | `0.5rem` | `0.5rem` |
| `card-category-text` | Card category text color | `var(--body-link)` | `var(--body-link)` |
| `card-category-font-size` | Card category font size | `0.8125rem` | `0.8125rem` |
| `card-category-font-weight` | Card category font weight | `600` | `600` |
| `card-category-case` | Card category text transform | `uppercase` | `uppercase` |
| `card-date-text` | Card date text color | `var(--gray-500)` | `var(--dark-350)` |
| `card-date-font-size` | Card date font size | `0.875rem` | `0.875rem` |
| `card-date-margin-top` | Card date top margin | `0.75rem` | `0.75rem` |
| `card-group-gap` | Portrait card group gap spacing | `1.5rem` | `1.5rem` |
| `card-group-margin-bottom` | Portrait card group bottom margin | `1.5rem` | `1.5rem` |

## Color Preview Component

Variables for customizing color preview appearance.

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `color-preview-display` | Color preview display mode | `inline-block` | `inline-block` |
| `color-preview-width` | Color preview width | `12px` | `12px` |
| `color-preview-height` | Color preview height | `12px` | `12px` |
| `color-preview-margin-left` | Color preview left margin | `0.25rem` | `0.25rem` |
| `color-preview-border` | Color preview border color | `base-border` | `base-border` |

## Description Block Component

Variables for customizing description block appearance.

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `description-font-size` | Description block font size | `1.2rem` | `1.2rem` |
| `description-weight` | Description block font weight | `500` | `500` |
| `description-color` | Description block text color | `gray-400` | `dark-350` |
| `description-line-height` | Description block line height | `1.75` | `1.75` |
| `description-margin-bottom` | Description block bottom margin | `2rem` | `2rem` |
| `description-margin-top` | Description block top margin | `-0.75rem` | `-0.75rem` |
| `description-letter-spacing` | Description block letter spacing | `0` | `0` |
| `description-text-transform` | Description block text transform | `none` | `none` |
| `description-display` | Description block display mode | `block` | `block` |

## Image Component

Variables for customizing image appearance.

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `image-rounded` | Image border radius | `0px` | `0px` |
| `image-border` | Image border color | `base-border` | `base-border` |
| `image-border-width` | Image border width | `0` | `0` |

## List Component

Variables for customizing list appearance.

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `list-checked` | Checked list item color | `base-500` | `base-500` |
| `list-unchecked` | Unchecked list item color | `gray-300` | `dark-400` |

## Pager Component

Variables for customizing blog pagination appearance.

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `pager-margin-top` | Pager top margin | `2.5rem` | `2.5rem` |
| `pager-margin-bottom` | Pager bottom margin | `1.5rem` | `1.5rem` |
| `pager-gap` | Gap between pager items | `0.5rem` | `0.5rem` |
| `pager-item-size` | Width and height of pager items | `2.5rem` | `2.5rem` |
| `pager-font-size` | Pager text font size | `0.875rem` | `0.875rem` |
| `pager-font-weight` | Pager text font weight | `500` | `500` |
| `pager-text-decoration` | Pager link text decoration | `none` | `none` |
| `pager-border-radius` | Pager item border radius | `0.25rem` | `0.25rem` |
| `pager-border-width` | Pager item border width | `1px` | `1px` |
| `pager-transition-duration` | Pager color transition duration | `200ms` | `200ms` |
| `pager-text` | Pager item text color | `base-500` | `dark-300` |
| `pager-bg` | Pager item background | `transparent` | `transparent` |
| `pager-border` | Pager item border color | `gray-200` | `dark-550` |
| `pager-text-hover` | Pager item hover text color | `base-500` | `dark-300` |
| `pager-bg-hover` | Pager item hover background | `gray-150` | `dark-600` |
| `pager-border-hover` | Pager item hover border color | `gray-200` | `dark-550` |
| `pager-text-active` | Active pager item text color | `base-white` | `base-white` |
| `pager-bg-active` | Active pager item background | `base-500` | `base-700` |
| `pager-border-active` | Active pager item border color | `base-600` | `base-800` |
| `pager-text-active-hover` | Active pager item hover text color | `base-white` | `base-white` |
| `pager-bg-active-hover` | Active pager item hover background | `base-400` | `base-500` |
| `pager-border-active-hover` | Active pager item hover border color | `base-500` | `base-600` |

## Tab Component

Variables for customizing tab appearance.

| Variable | Description | Default&nbsp;`base`  | Default&nbsp;`dark`  |
| --- | --- | --- | --- |
| `tab-text` | Tab text color | `gray-500` | `dark-350` |
| `tab-text-hover` | Tab hover text color | `base-500` | `base-500` |
| `tab-text-active` | Active tab text color | `base-500` | `base-500` |
| `tab-border` | Tab border color | `transparent` | `transparent` |
| `tab-border-hover` | Tab hover border color | `gray-300` | `dark-450` |
| `tab-border-active` | Active tab border color | `base-500` | `base-500` |