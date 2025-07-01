---
icon: paintbrush
nav:
  badge: NEW|info
tags: [guide, pro]
---
# Themes

Retype's [`theme`](/configuration/project.md#theme) system allows you to customize the visual appearance of your website by overriding theme variables. With themes, you can adjust colors, spacing, typography, and other design elements to match your brand or personal preferences.

!!!base Pro Feature
The theme functionality requires a [Retype Pro](/pro/pro.md) key or adding the following [`pro`](/configuration/project.md#pro) trial mode setting into your project `retype.yml` configuration file:

```yaml
start
  pro: true
```
!!!


---

## Quick Start

The simplest way to customize your site's appearance is by adding a `theme` configuration to your `retype.yml` file and setting a custom `base-color` value.

```yml
theme:
  base:
    base-color: "#8839ef"
```

---

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

The `dark` theme specifically targets dark mode appearance. When the website is switched to dark mode, these overrides are applied:

```yaml
theme:
  dark:
    base-color: "#ca9ee6"
    base-bg: "#303446"
```

---

## Examples

### Brand Color Customization

To match your brand colours:

```yml
theme:
  base:
    base-color: "#ff6b35"  # Orange brand colour
    primary: "#ff6b35"     # Ensure consistency
```

### Typography Adjustments

To make your site more readable:

```yml
theme:
  base:
    base-link-weight: 500           # Slightly bolder links
    nav-item-text-active-weight: 700 # Bold active navigation
    heading-text: "#1a202c"         # Darker headings
```

### Dark Mode Optimization

To create a custom dark theme:

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

To customize specific components:

```yml
theme:
  base:
    # Rounded images
    image-rounded: 1rem
    
    # Custom badge colours
    badge-primary: "#10b981"
    badge-primary-text: "#ffffff"
    
    # Button styling
    button-primary: "#3b82f6"
    button-primary-hover: "#2563eb"
```

---

## Best Practices

### 1. Start Small
Begin with basic colour changes before moving to complex customizations:

```yml
theme:
  base:
    base-color: "#your-brand-color"
```

### 2. Maintain Contrast
Ensure sufficient contrast between text and background colours for accessibility:

```yml
theme:
  base:
    base-text: "#374151"      # Dark enough for readability
    base-bg: "#ffffff"        # Light background
```

### 3. Test Both Themes
Always test your customizations in both light and dark modes:

```yml
theme:
  base:
    base-color: "#2563eb"
  dark:
    base-color: "#60a5fa"     # Lighter shade for dark mode
```

### 4. Use Semantic Variables
Prefer semantic variables over direct colour values when possible:

```yml
theme:
  base:
    nav-item-text-active: "var(--base-500)"  # Uses base colour
```

---

## Troubleshooting

### Theme Not Applied

- Ensure you have a valid Retype Pro license or [`start.pro: true`](/configuration/project.md#pro)
- Check that your YAML syntax is correct
- Verify variable names match exactly (case-sensitive)

### Dark Mode Issues

- Remember that dark theme variables only apply in dark mode
- Test with the theme switcher in your site
- Some variables may need both base and dark definitions

### Variable Names

- All variable names use kebab-case (hyphens, not underscores)
- Variables are case-sensitive
- Don't include the `--` prefix in your configuration
