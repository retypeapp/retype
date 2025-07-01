---
icon: code
tags: [reference, pro]
nav:
  badge: NEW|info
---
# Theme settings

This reference documents all available customizable [`theme`](/configuration/project.md#theme) settings that can be added to your `retype.yml` file.

---

## Base

Core settings that define the fundamental appearance of your site.

| Setting | Description | `base` default | `dark` default |
| --- | --- | --- | --- |
| `base-color` | Primary brand colour | `#5495f1` | `#5495f1` |
| `base-bg` | Main background colour | `var(--base-white)` | `var(--dark-900)` |
| `base-text` | Primary text colour | `var(--gray-700)` | `var(--dark-300)` |
| `base-text-muted` | Muted text colour | `var(--gray-400)` | `var(--gray-400)` |
| `base-text-strong` | Strong/bold text colour | `var(--gray-900)` | `var(--base-white)` |
| `base-border` | Default border colour | `var(--gray-200)` | `var(--dark-650)` |
| `base-border-hover` | Border colour on hover | `var(--gray-300)` | `var(--gray-550)` |
| `base-border-strong` | Strong border colour | `var(--gray-400)` | `var(--gray-450)` |
| `base-link` | Link colour | `var(--base-500)` | `var(--base-500)` |
| `base-link-hover` | Link hover colour | `var(--base-800)` | `var(--base-300)` |
| `base-link-weight` | Link font weight | `400` | `400` |

---

## Layout

Settings controlling the layout and structure of your site.

### Header
| Setting | Description |
| --- | --- |
| `header-bg` | Header background colour |
| `header-border` | Header border colour |
| `header-text` | Header text colour |
| `header-text-weight` | Header text font weight |
| `header-text-hover` | Header text hover colour |

### Sidebars
| Setting | Description |
| --- | --- |
| `sidebar-left-bg` | Left sidebar background |
| `sidebar-left-border` | Left sidebar border |
| `sidebar-right-bg` | Right sidebar background |
| `sidebar-right-border` | Right sidebar border |

### Body
| Setting | Description |
| --- | --- |
| `body-bg` | Main content background |
| `body-text` | Main content text colour |
| `body-link` | Body link colour |
| `body-link-hover` | Body link hover colour |
| `body-link-weight` | Body link font weight |

### Footer
| Setting | Description |
| --- | --- |
| `footer-text` | Footer text colour |
| `footer-link` | Footer link colour |
| `footer-link-hover` | Footer link hover colour |
| `footer-link-weight` | Footer link font weight |

---

## Navigation

Settings for customizing navigation appearance and behaviour.

| Setting | Description |
| --- | --- |
| `nav-bg` | Navigation background |
| `nav-item-bg-hover` | Navigation item hover background |
| `nav-item-bg-active` | Active navigation item background |
| `nav-item-bg-active-hover` | Active navigation item hover background |
| `nav-item-text` | Navigation item text colour |
| `nav-item-text-hover` | Navigation item hover text colour |
| `nav-item-text-active` | Active navigation item text colour |
| `nav-item-text-active-hover` | Active navigation item hover text colour |
| `nav-item-text-active-weight` | Active navigation item font weight |
| `nav-item-button` | Navigation button colour |
| `nav-item-button-active-hover` | Navigation button active hover colour |
| `nav-item-border-active` | Active navigation item border colour |
| `nav-item-text-stack` | Stack navigation text colour |
| `nav-item-text-stack-case` | Stack navigation text transform |
| `nav-item-text-stack-weight` | Stack navigation text font weight |
| `nav-badge-margin-left` | Navigation badge left margin |
| `nav-badge-margin-left-alt` | Alternative navigation badge left margin |

---

## Typography

Settings controlling text appearance throughout your site.

| Setting | Description |
| --- | --- |
| `heading-text` | Heading text colour |
| `toc-heading` | Table of contents heading colour |
| `toc-text` | Table of contents text colour |
| `toc-text-hover` | Table of contents hover text colour |
| `toc-text-active` | Table of contents active text colour |
| `toc-border-active` | Table of contents active border colour |
| `toc-heading-case` | Table of contents heading text transform |
| `toc-heading-weight` | Table of contents heading font weight |

---

## Search

Settings for customizing search functionality appearance.

| Setting | Description |
| --- | --- |
| `search-text` | Search input text colour |
| `search-placeholder` | Search placeholder text colour |
| `search-bg` | Search input background |
| `search-border` | Search input border colour |
| `search-border-hover` | Search input hover border colour |
| `search-border-focus` | Search input focus border colour |
| `search-hint-text` | Search hint text colour |
| `search-hint-bg` | Search hint background |
| `search-hint-border` | Search hint border colour |

---

## Filter

Settings for customizing filter functionality.

| Setting | Description |
| --- | --- |
| `filter-text` | Filter input text colour |
| `filter-placeholder` | Filter placeholder text colour |
| `filter-bg` | Filter input background |
| `filter-border` | Filter input border colour |
| `filter-border-hover` | Filter input hover border colour |
| `filter-border-focus` | Filter input focus border colour |

---

## Component

### Badge

| Setting | Description |
| --- | --- |
| `badge-base` | Base badge background |
| `badge-base-hover` | Base badge hover background |
| `badge-base-text` | Base badge text colour |
| `badge-base-text-hover` | Base badge hover text colour |
| `badge-base-border` | Base badge border colour |
| `badge-base-border-hover` | Base badge hover border colour |

Similar patterns exist for: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`, `ghost`, `contrast`

### Button

| Setting | Description |
| --- | --- |
| `button-base` | Base button background |
| `button-base-hover` | Base button hover background |
| `button-base-text` | Base button text colour |

Similar patterns exist for: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`, `ghost`, `contrast`

### Callout

| Setting | Description |
| --- | --- |
| `callout-base-bg` | Base callout background |
| `callout-base-border` | Base callout border |
| `callout-base` | Base callout accent colour |

Similar patterns exist for: `primary`, `secondary`, `success`, `tip`, `danger`, `warning`, `info`, `question`, `light`, `dark`, `ghost`, `contrast`

### Image

| Setting | Description |
| --- | --- |
| `image-rounded` | Image border radius |
| `image-border` | Image border colour |
| `image-border-width` | Image border width |

### List

| Setting | Description |
| --- | --- |
| `list-checked` | Checked list item colour |
| `list-unchecked` | Unchecked list item colour |

### Tab

| Setting | Description |
| --- | --- |
| `tab-text` | Tab text colour |
| `tab-text-hover` | Tab hover text colour |
| `tab-text-active` | Active tab text colour |
| `tab-border` | Tab border colour |
| `tab-border-hover` | Tab hover border colour |
| `tab-border-active` | Active tab border colour |

---

## Branding

Settings for customizing branding elements.

| Setting | Description |
| --- | --- |
| `branding-label-text` | Branding label text colour |
| `branding-label-bg` | Branding label background |
| `branding-label-border` | Branding label border colour |

---

## Scheme

Settings for the theme switcher component.

| Setting | Description |
| --- | --- |
| `scheme-menu-item-bg` | Theme switcher item background |
| `scheme-menu-item-bg-hover` | Theme switcher item hover background |
| `scheme-menu-item-bg-active` | Theme switcher active item background |
| `scheme-menu-item-text` | Theme switcher item text colour |
| `scheme-menu-item-text-active` | Theme switcher active item text colour |

---

## Color Palette

Retype includes several predefined colour palettes that you can reference:

### Base Color Shades

- `base-50` through `base-900` (auto-generated from `base-color`)

### Gray Palette

- `gray-50` through `gray-900`

### Dark Palette

- `dark-50` through `dark-900`

### Semantic Colors

- `primary`, `primary-50` through `primary-900`
- `success`, `success-50` through `success-900`
- `danger`, `danger-50` through `danger-900`
- `warning`, `warning-50` through `warning-900`
- `royal`, `royal-50` through `royal-900`

---

## Usage Examples

### Basic
```yml
theme:
  base:
    base-color: "#8839ef"
```

### Advanced
```yml
theme:
  base:
    # Navigation
    nav-item-text-active-weight: 700
    nav-item-bg-hover: "#f1f5f9"
    
    # Components
    badge-primary: "#10b981"
    button-primary-hover: "#059669"
    
    # Layout
    image-rounded: 1rem
```

### Dark Mode Overrides
```yml
theme:
  dark:
    base-bg: "#0f172a"
    sidebar-left-bg: "#1e293b"
    nav-item-bg-hover: "#334155"
```
