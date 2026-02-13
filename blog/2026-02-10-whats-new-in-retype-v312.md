---
authors:
  - name: "@geoffreymcgill"
    email: geoff@retype.com
    link: https://github.com/retypeapp
category:
  - release
templating: false
visibility: hidden
---
# What's New in Retype v3.12

![](images/2026-02-10-whats-new-in-retype-v312.png)

Retype `v3.12` brings powerful new features for content discovery, visual design, and theme customization. This release introduces the Backlinks component for Retype Pro, automatic dark mode image switching, color preview chips, enhanced page descriptions, and comprehensive theming improvements.

See the full [[Changelog]] and [[Feature Log]] for a detailed list of updates in the `v3.12` release.

## New Backlinks Component

!!!
The Backlinks component is a Retype [!badge PRO](/pro/pro.md) component and requires a key.
!!!

Discover how your content connects with the new [[Backlinks]] component. This powerful feature automatically displays all inbound links to a page from other pages within your project, helping users discover related content and understand page relationships.

### Automatic Discovery

Backlinks appear automatically at the end of pages that have inbound links. No configuration needed. Retype leverages its existing dependency tracking infrastructure to build a web of interconnected content.

```markdown
# API Reference

Your documentation content here...

<!-- Backlinks automatically appear here -->
## Referenced by
- [Getting Started Guide](getting-started.md)
- [Advanced Configuration](advanced-config.md)
- [Troubleshooting](troubleshooting.md)
```

### Flexible Configuration

Control backlinks at project, folder, or page level:

```yaml
# Project-wide configuration (retype.yml)
backlinks:
  enabled: true
  title: "Referenced by"
  showCount: true
  maxItems: 10
```

```yaml
# Page-level override (frontmatter)
---
backlinks:
  enabled: true
  title: "See also"
---
```

### Manual Placement

Place backlinks anywhere in your content using the component syntax:

```markdown
# My Page Content

Main content here...

[!backlinks]

Additional content after backlinks...
```

The Backlinks component creates natural pathways between related topics, improves content discovery, and helps authors see which pages reference their content.

## Automatic Dark Mode Image Switching

Retype now automatically detects and switches between light and dark image variants based on the active theme. Simply add a `-dark` suffix to your dark mode images and Retype handles the rest.

### Universal Detection

Works across all image contexts:

```markdown
<!-- Markdown images -->
![Logo](logo.png)
<!-- Automatically uses logo-dark.png in dark mode -->

<!-- Branding configuration -->
branding:
  logo: logo.svg
  <!-- Automatically detects logo-dark.svg -->
```

### Supported Formats

All standard image formats are supported: AVIF, BMP, GIF, HEIF, JPEG, JPG, PNG, SVG, and WebP.

### Zero Configuration

Drop your dark variant files alongside the originals with a `-dark` suffix. No manual configuration required. If no dark variant exists, Retype uses the original image for both themes.

This feature extends to favicons too. Place a `favicon-dark.ico` or `favicon-dark.svg` alongside your standard favicon and Retype automatically switches based on the user's theme preference.

## Color Preview Chips

Hexadecimal color codes now display with automatic visual previews. When you reference a color in inline code, Retype adds a small circular preview showing the actual color.

Color: `#5495f1`

### Automatic Detection

Works with both 3-digit and 6-digit hex codes:

```markdown
The primary brand color is `#5495f1` and the accent is `#ff6b35`.

Short format also works: `#abc` or `#F00`.
```

The primary brand color is `#5495f1` and the accent is `#ff6b35`.

Short format also works: `#abc` or `#F00`.

### Themeable Design

Customize the appearance using CSS variables:

```css
--color-preview-border: 1px solid var(--border-color);
--color-preview-width: 8px;
--color-preview-height: 8px;
--color-preview-margin-left: 0.25rem;
--color-preview-visible: visible; /* or hidden */
```

Perfect for design system documentation, style guides, and theme configuration references.

## Enhanced Page Descriptions

Define page descriptions using the new triple-star (`***`) syntax immediately following H1 headings. Descriptions render visually below the title and populate meta tags for SEO.

```markdown
# Page Title
***
This description with **bold** and *italic* text appears below the title and populates meta tags.
***

Regular content starts here.
```

### Dual-Source Support

Use frontmatter for metadata and `***` for visual display:

```yaml
---
description: "SEO-optimized description for meta tags"
---
# Page Title
***
A more detailed, visually formatted description with **emphasis** for readers.
***
```

### Content Restrictions

Descriptions support single paragraphs with limited inline formatting: bold, italic, inline code, strikethrough, and emojis. Links, images, and HTML tags are prohibited to ensure clean metadata.

## Expanded Heading Theme Variables

Comprehensive theme customization for headings H1 through H6. Control border, margin, padding, color, weight, casing, and font size individually for each heading level.

```css
/* Individual heading customization */
--heading-h1-font-size: 2.5rem;
--heading-h1-margin-bottom: 2rem;
--heading-h1-border-top: var(--transparent);
--heading-h1: var(--heading-text);
--heading-h1-weight: var(--heading-weight);
--heading-h1-case: var(--heading-case);
```

Each heading level (H1-H6) has its own set of variables for precise control over typography and spacing.

---

## Write On!

Retype `v3.12` delivers powerful new capabilities for content discovery, visual design, and customization. The Backlinks component helps users navigate interconnected documentation. Automatic dark mode image switching ensures your visuals look great in any theme. Color preview chips bring design documentation to life. Enhanced page descriptions provide better SEO and visual appeal.

These features combine with comprehensive theming improvements and deployment reliability enhancements to make Retype more powerful and flexible than ever.

Try out the latest Retype release and experience these new features. Share your feedback with us on [X](https://x.com/retypeapp) or open a GitHub [Issue](https://github.com/retypeapp/retype/issues). Your input continues to shape the future of Retype.

