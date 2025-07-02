---
icon: number
tags: [theme, pro]
nav:
  badge: NEW|info
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

## Base

Core variables that define the fundamental appearance of your site.

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `base-color` | Brand color | `#5495f1` | `#5495f1` |
| `base-white` | Pure white color | `#ffffff` | `#ffffff` |
| `base-black` | Pure black color | `#000000` | `#000000` |
| `base-bg` | Main background color | `var(--base-white)` | `var(--dark-900)` |
| `base-text` | Primary text color | `var(--gray-700)` | `var(--dark-300)` |
| `base-text-muted` | Muted text color | `var(--gray-400)` | `var(--gray-400)` |
| `base-text-strong` | Strong/bold text color | `var(--gray-900)` | `var(--base-white)` |
| `base-border` | Default border color | `var(--gray-200)` | `var(--dark-650)` |
| `base-border-hover` | Border color on hover | `var(--gray-300)` | `var(--gray-550)` |
| `base-border-strong` | Strong border color | `var(--gray-400)` | `var(--gray-450)` |
| `base-link` | Link color | `var(--base-500)` | `var(--base-500)` |
| `base-link-hover` | Link hover color | `var(--base-800)` | `var(--base-300)` |
| `base-link-weight` | Link font weight | `400` | `400` |
| `base-item-text` | Base item text color | `var(--base-text-strong)` | `var(--base-text-strong)` |
| `base-item-text-active` | Active base item text color | `var(--base-link)` | `var(--base-link)` |
| `base-item-bg` | Base item background | `var(--transparent)` | `var(--transparent)` |
| `base-item-bg-hover` | Base item hover background | `var(--base-50)` | `var(--dark-600)` |
| `base-item-bg-active` | Active base item background | `var(--base-100)` | `var(--dark-550)` |

## Variants

Semantic color variants used throughout Retype components. These colors provide consistent theming for different types of content and actions. Each variant automatically generates a full color palette from 50 (lightest) to 900 (darkest) using CSS color-mix functions.

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `base` | Foundation brand color for main actions and highlights | `#5495f1` | `#5495f1` |
| `primary` | Primary color variant for components | `#5495f1` | `#5495f1` |
| `success` | Success state color for positive actions and confirmations | `#36ad99` | `#36ad99` |
| `danger` | Danger/error state color for warnings and destructive actions | `#e53e3e` | `#e53e3e` |
| `warning` | Warning state color for caution and important notices | `#edab26` | `#edab26` |
| `royal` | Royal purple color for special emphasis and premium features | `#a667e3` | `#a667e3` |

## Helper

Utility variables used throughout the theme system.

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `transparent` | Transparent color value | `transparent` | `transparent` |
| `skeleton-bg` | Skeleton loading background | `var(--gray-200)` | `var(--dark-600)` |

## Branding

Variables for customizing branding elements.

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `branding-label-text` | Branding label text color | `var(--base-500)` | `var(--base-500)` |
| `branding-label-bg` | Branding label background | `var(--base-50)` | `transparent` |
| `branding-label-border` | Branding label border color | `var(--base-300)` | `var(--base-500)` |

## Header

Variables controlling the header appearance.

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `header-bg` | Header background color | `var(--base-bg)` | `var(--base-bg)` |
| `header-border` | Header border color | `var(--base-border)` | `var(--base-border)` |
| `header-text` | Header text color | `var(--base-link)` | `var(--base-link)` |
| `header-text-weight` | Header text font weight | `var(--base-link-weight)` | `var(--base-link-weight)` |
| `header-text-hover` | Header text hover color | `var(--base-link-hover)` | `var(--base-link-hover)` |

## Search

Variables for customizing search functionality appearance.

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `search-text` | Search input text color | `var(--base-text)` | `var(--base-text)` |
| `search-placeholder` | Search placeholder text color | `var(--base-text-muted)` | `var(--base-text-muted)` |
| `search-bg` | Search input background | `var(--header-bg)` | `var(--header-bg)` |
| `search-border` | Search input border color | `var(--base-border)` | `var(--base-border-hover)` |
| `search-border-hover` | Search input hover border color | `var(--base-border-hover)` | `var(--base-border-strong)` |
| `search-border-focus` | Search input focus border color | `var(--base-border-hover)` | `var(--base-border-strong)` |
| `search-hint-text` | Search hint text color | `var(--search-placeholder)` | `var(--search-placeholder)` |
| `search-hint-bg` | Search hint background | `var(--header-bg)` | `var(--header-bg)` |
| `search-hint-border` | Search hint border color | `var(--search-border)` | `var(--search-border)` |

## Filter

Variables for customizing filter functionality.

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `filter-text` | Filter input text color | `var(--base-text)` | `var(--base-text)` |
| `filter-placeholder` | Filter placeholder text color | `var(--base-text-muted)` | `var(--base-text-muted)` |
| `filter-bg` | Filter input background | `var(--sidebar-left-bg)` | `var(--sidebar-left-bg)` |
| `filter-border` | Filter input border color | `var(--base-border)` | `var(--base-border-hover)` |
| `filter-border-hover` | Filter input hover border color | `var(--base-border-hover)` | `var(--base-border-strong)` |
| `filter-border-focus` | Filter input focus border color | `var(--base-border-hover)` | `var(--base-border-strong)` |

## Body

Variables controlling the main content area.

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `body-bg` | Main content background | `var(--base-bg)` | `var(--base-bg)` |
| `body-text` | Main content text color | `var(--base-text)` | `var(--base-text)` |
| `body-link` | Body link color | `var(--base-link)` | `var(--base-link)` |
| `body-link-hover` | Body link hover color | `var(--base-link-hover)` | `var(--base-link-hover)` |
| `body-link-weight` | Body link font weight | `var(--base-link-weight)` | `var(--base-link-weight)` |

## Heading

Variables for heading text styling.

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `heading-text` | Heading text color | `var(--gray-900)` | `var(--base-white)` |

## Scheme

Variables for the Light/Dark switcher component.

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `scheme-menu-item-bg` | Switcher item background | `var(--base-item-bg)` | `var(--base-item-bg)` |
| `scheme-menu-item-bg-hover` | Switcher item hover background | `var(--base-item-bg-hover)` | `var(--base-item-bg-hover)` |
| `scheme-menu-item-bg-active` | Switcher active item background | `var(--base-item-bg-active)` | `var(--base-item-bg-active)` |
| `scheme-menu-item-text` | Switcher item text color | `var(--base-text)` | `var(--base-text)` |
| `scheme-menu-item-text-active` | Switcher active item text color | `var(--base-item-text-active)` | `var(--base-item-text-active)` |

## Sidebar

Variables controlling the left and right sidebars.

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `sidebar-left-bg` | Left sidebar background | `var(--base-bg)` | `var(--base-bg)` |
| `sidebar-left-border` | Left sidebar border | `var(--base-border)` | `var(--base-border)` |
| `sidebar-right-bg` | Right sidebar background | `var(--base-bg)` | `var(--base-bg)` |
| `sidebar-right-border` | Right sidebar border | `var(--base-border)` | `var(--base-border)` |

## Navigation

Variables for customizing navigation appearance and behavior.

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `nav-bg` | Navigation background | `var(--sidebar-left-bg)` | `var(--sidebar-left-bg)` |
| `nav-item-bg-hover` | Navigation item hover background | `var(--base-item-bg-hover)` | `var(--base-item-bg-hover)` |
| `nav-item-bg-active` | Active navigation item background | `var(--base-item-bg-active)` | `var(--base-item-bg-active)` |
| `nav-item-bg-active-hover` | Active navigation item hover background | `var(--base-item-bg-active)` | `var(--base-item-bg-active)` |
| `nav-item-text` | Navigation item text color | `var(--gray-900)` | `var(--dark-300)` |
| `nav-item-text-hover` | Navigation item hover text color | `var(--base-item-text-active)` | `var(--base-item-text-active)` |
| `nav-item-text-active` | Active navigation item text color | `var(--base-item-text-active)` | `var(--base-item-text-active)` |
| `nav-item-text-active-hover` | Active navigation item hover text color | `var(--base-item-text-active)` | `var(--base-item-text-active)` |
| `nav-item-text-active-weight` | Active navigation item font weight | `var(--base-link-weight)` | `var(--base-link-weight)` |
| `nav-item-button` | Navigation button color | `var(--gray-400)` | `var(--dark-400)` |
| `nav-item-button-active-hover` | Navigation button active hover color | `var(--base-200)` | `var(--base-200)` |
| `nav-item-border-active` | Active navigation item border color | `var(--base-500)` | `var(--base-500)` |
| `nav-item-text-stack` | Stack navigation text color | `var(--gray-700)` | `var(--base-text-strong)` |
| `nav-item-text-stack-case` | Stack navigation text transform | `uppercase` | `uppercase` |
| `nav-item-text-stack-weight` | Stack navigation text font weight | `600` | `600` |
| `nav-badge-margin-left` | Navigation badge left margin | `auto` | `auto` |
| `nav-badge-margin-left-alt` | Alternative navigation badge left margin | `0.75rem` | `0.75rem` |

## Table of Contents

Variables controlling the Table of Contents appearance in the right sidebar.

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `toc-heading` | Table of contents heading color | `var(--gray-700)` | `var(--dark-400)` |
| `toc-text` | Table of contents text color | `var(--gray-700)` | `var(--dark-300)` |
| `toc-text-hover` | Table of contents hover text color | `var(--base-500)` | `var(--base-500)` |
| `toc-text-active` | Table of contents active text color | `var(--base-500)` | `var(--base-500)` |
| `toc-border-active` | Table of contents active border color | `var(--base-500)` | `var(--base-500)` |
| `toc-heading-case` | Table of contents heading text transform | `uppercase` | `uppercase` |
| `toc-heading-weight` | Table of contents heading font weight | `600` | `600` |

## Footer

Variables controlling the footer appearance.

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `footer-text` | Footer text color | `var(--gray-500)` | `var(--dark-350)` |
| `footer-link` | Footer link color | `var(--base-link)` | `var(--base-link)` |
| `footer-link-hover` | Footer link hover color | `var(--base-link-hover)` | `var(--base-link-hover)` |
| `footer-link-weight` | Footer link font weight | `var(--base-link-weight)` | `var(--base-link-weight)` |

## Badge Component

Variables for customizing badge components across all variants.

### Base Badge

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `badge-base` | Base badge background | `var(--base-100)` | `var(--base-100)` |
| `badge-base-hover` | Base badge hover background | `var(--base-100)` | `var(--base-200)` |
| `badge-base-text` | Base badge text color | `var(--base-500)` | `var(--base-500)` |
| `badge-base-text-hover` | Base badge hover text color | `var(--base-500)` | `var(--base-500)` |
| `badge-base-border` | Base badge border color | `var(--base-200)` | `var(--base-200)` |
| `badge-base-border-hover` | Base badge hover border color | `var(--base-400)` | `var(--base-400)` |

### Primary Badge

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `badge-primary` | Primary badge background | `var(--primary-100)` | `var(--primary-100)` |
| `badge-primary-hover` | Primary badge hover background | `var(--primary-100)` | `var(--primary-200)` |
| `badge-primary-text` | Primary badge text color | `var(--primary-500)` | `var(--primary-500)` |
| `badge-primary-text-hover` | Primary badge hover text color | `var(--primary-500)` | `var(--primary-500)` |
| `badge-primary-border` | Primary badge border color | `var(--primary-200)` | `var(--primary-200)` |
| `badge-primary-border-hover` | Primary badge hover border color | `var(--primary-400)` | `var(--primary-400)` |

### Secondary Badge

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `badge-secondary` | Secondary badge background | `var(--gray-100)` | `var(--gray-100)` |
| `badge-secondary-hover` | Secondary badge hover background | `var(--gray-100)` | `var(--gray-250)` |
| `badge-secondary-text` | Secondary badge text color | `var(--gray-600)` | `var(--gray-600)` |
| `badge-secondary-text-hover` | Secondary badge hover text color | `var(--gray-600)` | `var(--gray-600)` |
| `badge-secondary-border` | Secondary badge border color | `var(--gray-200)` | `var(--gray-200)` |
| `badge-secondary-border-hover` | Secondary badge hover border color | `var(--gray-400)` | `var(--gray-400)` |

### Success Badge

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `badge-success` | Success badge background | `var(--success-100)` | `var(--success-100)` |
| `badge-success-hover` | Success badge hover background | `var(--success-100)` | `var(--success-200)` |
| `badge-success-text` | Success badge text color | `var(--success-700)` | `var(--success-700)` |
| `badge-success-text-hover` | Success badge hover text color | `var(--success-700)` | `var(--success-700)` |
| `badge-success-border` | Success badge border color | `var(--success-200)` | `var(--success-200)` |
| `badge-success-border-hover` | Success badge hover border color | `var(--success-400)` | `var(--success-400)` |

### Danger Badge

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `badge-danger` | Danger badge background | `var(--danger-100)` | `var(--danger-100)` |
| `badge-danger-hover` | Danger badge hover background | `var(--danger-100)` | `var(--danger-200)` |
| `badge-danger-text` | Danger badge text color | `var(--danger-600)` | `var(--danger-600)` |
| `badge-danger-text-hover` | Danger badge hover text color | `var(--danger-600)` | `var(--danger-600)` |
| `badge-danger-border` | Danger badge border color | `var(--danger-200)` | `var(--danger-200)` |
| `badge-danger-border-hover` | Danger badge hover border color | `var(--danger-400)` | `var(--danger-400)` |

### Warning Badge

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `badge-warning` | Warning badge background | `var(--warning-100)` | `var(--warning-100)` |
| `badge-warning-hover` | Warning badge hover background | `var(--warning-100)` | `var(--warning-200)` |
| `badge-warning-text` | Warning badge text color | `var(--warning-700)` | `var(--warning-700)` |
| `badge-warning-text-hover` | Warning badge hover text color | `var(--warning-700)` | `var(--warning-700)` |
| `badge-warning-border` | Warning badge border color | `var(--warning-200)` | `var(--warning-200)` |
| `badge-warning-border-hover` | Warning badge hover border color | `var(--warning-400)` | `var(--warning-400)` |

### Info Badge

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `badge-info` | Info badge background | `var(--transparent)` | `var(--transparent)` |
| `badge-info-hover` | Info badge hover background | `var(--transparent)` | `var(--transparent)` |
| `badge-info-text` | Info badge text color | `var(--base-500)` | `var(--base-500)` |
| `badge-info-text-hover` | Info badge hover text color | `var(--base-300)` | `var(--base-300)` |
| `badge-info-border` | Info badge border color | `var(--base-500)` | `var(--base-500)` |
| `badge-info-border-hover` | Info badge hover border color | `var(--base-300)` | `var(--base-300)` |

### Light Badge

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `badge-light` | Light badge background | `var(--base-white)` | `var(--base-white)` |
| `badge-light-hover` | Light badge hover background | `var(--gray-100)` | `var(--dark-200)` |
| `badge-light-text` | Light badge text color | `var(--gray-600)` | `var(--dark-600)` |
| `badge-light-text-hover` | Light badge hover text color | `var(--gray-600)` | `var(--dark-600)` |
| `badge-light-border` | Light badge border color | `var(--gray-200)` | `var(--transparent)` |
| `badge-light-border-hover` | Light badge hover border color | `var(--gray-400)` | `var(--transparent)` |

### Dark Badge

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `badge-dark` | Dark badge background | `var(--gray-700)` | `var(--dark-450)` |
| `badge-dark-hover` | Dark badge hover background | `var(--gray-600)` | `var(--dark-400)` |
| `badge-dark-text` | Dark badge text color | `var(--base-white)` | `var(--base-white)` |
| `badge-dark-text-hover` | Dark badge hover text color | `var(--base-white)` | `var(--base-white)` |
| `badge-dark-border` | Dark badge border color | `var(--gray-700)` | `var(--dark-450)` |
| `badge-dark-border-hover` | Dark badge hover border color | `var(--gray-500)` | `var(--dark-400)` |

### Ghost Badge

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `badge-ghost` | Ghost badge background | `var(--body-bg)` | `var(--dark-550)` |
| `badge-ghost-hover` | Ghost badge hover background | `var(--gray-50)` | `var(--dark-450)` |
| `badge-ghost-text` | Ghost badge text color | `var(--gray-300)` | `var(--dark-400)` |
| `badge-ghost-text-hover` | Ghost badge hover text color | `var(--gray-300)` | `var(--dark-450)` |
| `badge-ghost-border` | Ghost badge border color | `var(--gray-200)` | `var(--dark-450)` |
| `badge-ghost-border-hover` | Ghost badge hover border color | `var(--gray-300)` | `var(--dark-450)` |

### Contrast Badge

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `badge-contrast` | Contrast badge background | `var(--gray-900)` | `var(--base-white)` |
| `badge-contrast-hover` | Contrast badge hover background | `var(--gray-600)` | `var(--dark-200)` |
| `badge-contrast-text` | Contrast badge text color | `var(--base-white)` | `var(--dark-850)` |
| `badge-contrast-text-hover` | Contrast badge hover text color | `var(--base-white)` | `var(--dark-850)` |
| `badge-contrast-border` | Contrast badge border color | `var(--gray-900)` | `var(--base-white)` |
| `badge-contrast-border-hover` | Contrast badge hover border color | `var(--gray-800)` | `var(--base-white)` |

## Button Component

Variables for customizing button components across all variants.

### Base Button

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `button-base` | Base button background | `var(--base-500)` | `var(--base-500)` |
| `button-base-hover` | Base button hover background | `var(--base-700)` | `var(--base-700)` |
| `button-base-text` | Base button text color | `var(--base-50)` | `var(--base-50)` |

### Primary Button

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `button-primary` | Primary button background | `var(--primary-500)` | `var(--primary-500)` |
| `button-primary-hover` | Primary button hover background | `var(--primary-700)` | `var(--primary-700)` |
| `button-primary-text` | Primary button text color | `var(--primary-50)` | `var(--primary-50)` |

### Secondary Button

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `button-secondary` | Secondary button background | `var(--gray-500)` | `var(--gray-500)` |
| `button-secondary-hover` | Secondary button hover background | `var(--gray-700)` | `var(--dark-450)` |
| `button-secondary-text` | Secondary button text color | `var(--gray-50)` | `var(--gray-50)` |

### Success Button

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `button-success` | Success button background | `var(--success-500)` | `var(--success-500)` |
| `button-success-hover` | Success button hover background | `var(--success-700)` | `var(--success-700)` |
| `button-success-text` | Success button text color | `var(--success-50)` | `var(--success-50)` |

### Danger Button

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `button-danger` | Danger button background | `var(--danger-500)` | `var(--danger-500)` |
| `button-danger-hover` | Danger button hover background | `var(--danger-700)` | `var(--danger-700)` |
| `button-danger-text` | Danger button text color | `var(--danger-50)` | `var(--danger-50)` |

### Warning Button

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `button-warning` | Warning button background | `var(--warning-500)` | `var(--warning-500)` |
| `button-warning-hover` | Warning button hover background | `var(--warning-600)` | `var(--warning-600)` |
| `button-warning-text` | Warning button text color | `var(--warning-900)` | `var(--warning-900)` |

### Info Button

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `button-info` | Info button background | `var(--transparent)` | `var(--transparent)` |
| `button-info-hover` | Info button hover background | `var(--transparent)` | `var(--transparent)` |
| `button-info-text` | Info button text color | `var(--base-500)` | `var(--base-500)` |
| `button-info-text-hover` | Info button hover text color | `var(--base-300)` | `var(--base-300)` |
| `button-info-border` | Info button border color | `var(--base-500)` | `var(--base-500)` |
| `button-info-border-hover` | Info button hover border color | `var(--base-300)` | `var(--base-300)` |

### Light Button

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `button-light` | Light button background | `var(--gray-200)` | `var(--dark-250)` |
| `button-light-hover` | Light button hover background | `var(--gray-300)` | `var(--dark-350)` |
| `button-light-text` | Light button text color | `var(--gray-900)` | `var(--base-black)` |

### Dark Button

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `button-dark` | Dark button background | `var(--gray-700)` | `var(--dark-550)` |
| `button-dark-hover` | Dark button hover background | `var(--gray-600)` | `var(--dark-450)` |
| `button-dark-text` | Dark button text color | `var(--gray-50)` | `var(--dark-350)` |

### Ghost Button

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `button-ghost` | Ghost button background | `var(--gray-100)` | `var(--dark-600)` |
| `button-ghost-hover` | Ghost button hover background | `var(--gray-150)` | `var(--dark-450)` |
| `button-ghost-text` | Ghost button text color | `var(--gray-300)` | `var(--dark-400)` |

### Contrast Button

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `button-contrast` | Contrast button background | `var(--gray-900)` | `var(--base-white)` |
| `button-contrast-hover` | Contrast button hover background | `var(--gray-700)` | `var(--dark-300)` |
| `button-contrast-text` | Contrast button text color | `var(--gray-50)` | `var(--base-black)` |

## Callout Component

Variables for customizing callout components.

### Base Callout

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `callout-base-bg` | Base callout background | `var(--base-white)` | `var(--dark-800)` |
| `callout-base-border` | Base callout border | `var(--base-border)` | `var(--base-border)` |
| `callout-base` | Base callout accent color | `var(--base-500)` | `var(--base-500)` |

### Callout Accent Colors

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `callout-primary` | Primary callout accent color | `var(--primary-500)` | `var(--primary-500)` |
| `callout-secondary` | Secondary callout accent color | `var(--gray-500)` | `var(--gray-500)` |
| `callout-success` | Success callout accent color | `var(--success-500)` | `var(--success-500)` |
| `callout-tip` | Tip callout accent color | `var(--success-400)` | `var(--success-400)` |
| `callout-danger` | Danger callout accent color | `var(--danger-500)` | `var(--danger-500)` |
| `callout-warning` | Warning callout accent color | `var(--warning-500)` | `var(--warning-500)` |
| `callout-info` | Info callout accent color | `var(--base-300)` | `var(--base-300)` |
| `callout-question` | Question callout accent color | `var(--royal-500)` | `var(--royal-500)` |
| `callout-light` | Light callout accent color | `var(--gray-300)` | `var(--gray-300)` |
| `callout-dark` | Dark callout accent color | `var(--gray-900)` | `var(--gray-900)` |
| `callout-ghost` | Ghost callout accent color | `var(--gray-100)` | `var(--gray-100)` |
| `callout-contrast` | Contrast callout accent color | `var(--gray-600)` | `var(--gray-600)` |
| `callout-contrast-bg` | Contrast callout background | `var(--gray-900)` | `var(--base-white)` |
| `callout-contrast-text` | Contrast callout text color | `var(--gray-300)` | `var(--dark-800)` |
| `callout-contrast-border` | Contrast callout border color | `var(--gray-900)` | `var(--dark-700)` |

## Image Component

Variables for customizing image appearance.

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `image-rounded` | Image border radius | `0px` | `0px` |
| `image-border` | Image border color | `var(--base-border)` | `var(--base-border)` |
| `image-border-width` | Image border width | `0` | `0` |

## List Component

Variables for customizing list appearance.

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `list-checked` | Checked list item color | `var(--base-500)` | `var(--base-500)` |
| `list-unchecked` | Unchecked list item color | `var(--gray-300)` | `var(--dark-400)` |

## Tab Component

Variables for customizing tab appearance.

| Variable | Description | Default `base`  | Default `dark`  |
| --- | --- | --- | --- |
| `tab-text` | Tab text color | `var(--gray-500)` | `var(--dark-350)` |
| `tab-text-hover` | Tab hover text color | `var(--base-500)` | `var(--base-500)` |
| `tab-text-active` | Active tab text color | `var(--base-500)` | `var(--base-500)` |
| `tab-border` | Tab border color | `var(--transparent)` | `var(--transparent)` |
| `tab-border-hover` | Tab hover border color | `var(--gray-300)` | `var(--dark-450)` |
| `tab-border-active` | Active tab border color | `var(--base-500)` | `var(--base-500)` |

## Base Color Palette

System elements within a Retype generated website are derived from the `base-color` using the `base` color palette.

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

| Variable | Value | Description |
| --- | --- | --- |
| `gray-50` | `#f8f9fc` | Lightest gray |
| `gray-100` | `#f4f6fc` | Very light gray |
| `gray-150` | `#edf0f6` | Light gray variant |
| `gray-200` | `#e4e8f1` | Light gray |
| `gray-250` | `#d2d9e3` | Medium-light gray variant |
| `gray-300` | `#bdc8da` | Medium-light gray |
| `gray-350` | `#a4b1c6` | Medium gray variant |
| `gray-400` | `#8693a9` | Medium gray |
| `gray-450` | `#65718c` | Medium-dark gray variant |
| `gray-500` | `#525e78` | Medium-dark gray |
| `gray-550` | `#46536d` | Dark gray variant |
| `gray-600` | `#3f4a64` | Dark gray |
| `gray-650` | `#313c56` | Very dark gray variant |
| `gray-700` | `#2c3047` | Very dark gray |
| `gray-750` | `#1f2236` | Darkest gray variant |
| `gray-800` | `#181d2d` | Near black gray |
| `gray-850` | `#101523` | Almost black gray |
| `gray-900` | `#090d1c` | Darkest gray |

### Dark

Specialized dark mode color variations:

| Variable | Value | Description |
| --- | --- | --- |
| `dark-50` | `#fafafa` | Lightest dark mode color |
| `dark-100` | `#f7f7f7` | Very light dark mode color |
| `dark-150` | `#f2f2f2` | Light dark mode variant |
| `dark-200` | `#eeeeee` | Light dark mode color |
| `dark-250` | `#e0e0e0` | Medium-light dark mode variant |
| `dark-300` | `#c4c4c4` | Medium-light dark mode color |
| `dark-350` | `#9e9e9e` | Medium dark mode variant |
| `dark-400` | `#616161` | Medium dark mode color |
| `dark-450` | `#424242` | Medium-dark dark mode variant |
| `dark-500` | `#353535` | Medium-dark dark mode color |
| `dark-550` | `#323232` | Dark mode variant |
| `dark-600` | `#2d2d2d` | Dark mode color |
| `dark-650` | `#2c2c2c` | Very dark mode variant |
| `dark-700` | `#272727` | Very dark mode color |
| `dark-750` | `#252525` | Darkest mode variant |
| `dark-800` | `#222222` | Near black dark mode |
| `dark-850` | `#1e1e1e` | Almost black dark mode |
| `dark-900` | `#121212` | Darkest dark mode color |
