---
icon: paintbrush
nav:
  badge: NEW|info
tags: [guide, pro]
---
# Themes

Retype's [`theme`](/configuration/project.md#theme) system allows you to customize the visual appearance of your website by overriding [[theme variables]]. With themes, you can adjust colors, spacing, typography, and other design elements to match your brand or project preferences.

!!!base Pro Feature
The theme functionality requires a [Retype Pro](/pro/pro.md) key or adding the following [`pro`](/configuration/project.md#pro) trial mode setting into your project `retype.yml` configuration file:

```yaml
start
  pro: true
```
!!!

## Quick Start

The quickest way to customize your site's appearance is by adding a `theme` configuration to your `retype.yml` file and setting a custom [`base-color`](/configuration/theme-variables.md#base-variables) theme variable.

```yml
theme:
  base:
    base-color: "#8839ef"
```

## Configuration Structure

The theme configuration supports two main sections:

### `base` theme

The [`base`](/configuration/project.md#theme-base) theme controls the light mode appearance and serves as the foundation for your project's visual style:

```yaml
theme:
  base:
    base-color: "#8839ef"
    base-bg: "#eff1f5"
    base-link-weight: 500
    image-rounded: 0.75rem
```

### `dark` theme

The [`dark`](/configuration/project.md#theme-dark) theme specifically targets dark mode appearance. When the website is switched to dark mode, the dark theme variables override the [[#theme-base]] variables. The following demonstrates how to configure the `dark` theme variables:

```yaml
theme:
  dark:
    base-color: "#ca9ee6"
    base-bg: "#303446"
```

## Examples

### Brand Color Customization

To match your brand colors:

```yml
theme:
  base:
    base-color: "#ff6b35"  # Orange brand color
```

### Typography Adjustments

To better match your project style and user-experience requirements:

```yml
theme:
  base:
    base-link-weight: 500            # Slightly bolder links
    nav-item-text-active-weight: 700 # Bold active navigation
    heading-text: "#1a202c"          # Darker headings
```

### Dark Mode Optimization

To adjust the dark mode:

```yml
theme:
  dark:
    base-bg: "#0a0e1a"              # Very dark blue background
    sidebar-left-bg: "#1a1f2e"      # Slightly lighter sidebar
    base-text: "#e2e8f0"            # Light grey text
    heading-text: "#ffffff"         # Pure white headings
    base-border: "#2d3748"          # Subtle borders
```

### Component Styling

To customize component colors and other elements:

```yml
theme:
  base:
    # Rounded images
    image-rounded: 0.75rem
    
    # Custom variant colors
    primary: "#8caaee" # Blue
    success: "#a6d189" # Green
    danger: "#e78284"  # Red
    warning: "#e5c890" # Yellow    
```

## Best Practices

When customizing your Retype [theme](/configuration/project.md#theme), it’s best to start with small changes and gradually build up. Here are some guidelines to help you maintain a clean, accessible, and consistent design.

### 1. Start with the `base-color`

Begin by tweaking a few brand colors before diving into full theme customization. This keeps things manageable and easier to approve before moving on to further theme refinements. 

```yml
theme:
  base:
    base-color: "#8839ef" #your-brand-color
```

### 2. Prioritize readability and contrast

Contrast between text and background is important for readability and accessibility. Avoid color combinations that are too similar and do not provide enough contrast.

```yml
theme:
  base:
    base-text: "#4c4f69"     # A strong neutral text color
    base-bg: "#ffffff"       # Clean light background
```

!!!tip
Use online contrast checkers to validate your color palette against WCAG standards.
!!!

### 3. Check light and dark modes

If you are customizing both the `base` and `dark` themes, be sure to test your changes in each mode. A color that works well in light mode might look washed out or harsh in dark mode, and require further refinement. 

```yml
theme:
  base:
    base-color: "#8839ef"
  dark:
    base-color: "#ca9ee6"
```

### 4. Use Semantic variables where possible

Instead of hardcoding colors everywhere, use the built-in semantic [[theme variables]]. It keeps your theme consistent and easier to maintain.

```yml
theme:
  base:
    nav-item-text-active: "var(--base-500)"  # Uses a consistent brand tone
```

Following these practices helps ensure your site looks good, stays accessible, and is easy to maintain as it grows.

## Troubleshooting

### Theme Not Applied

- [x] Ensure you have a valid Retype Pro license or add [`start.pro: true`](/configuration/project.md#pro)
- [x] Check that the syntax is correct in your `retype.yml` file
- [x] Verify [theme variable](/configuration/theme-variables.md) names match exactly

### Dark Mode Issues

- [x] Remember that `dark` theme variables only apply in dark mode
- [x] Test with the theme switcher on your website
- [x] Some variables may need both `base` and `dark` configured to provide proper contrast

### Variable Names

- [x] All variable names use `kebab-case` (hyphens, not underscores)
- [x] Variables are case-sensitive
- [x] Don't include the `--` prefix in your configuration
