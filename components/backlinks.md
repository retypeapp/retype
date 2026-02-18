---
icon: iterations
tags: [component]
nav:
  badge: NEW|info
---
# Backlinks

The Backlinks component displays a list of pages that link to the current page. By default, backlinks are automatically included at the end of each page, but you can manually place them anywhere in your content using the `[!backlinks]` markdown component syntax.

This component is Retype [!badge PRO](/pro/pro.md) only.

```md
[!backlinks]
```

Manual placement gives you control over where backlinks appear and disables the automatic placement at the bottom of the page.

---

## Custom title

You can customize the title of the backlinks section by passing a custom title string.

```md
[!backlinks "Related pages"]
```

The custom title overrides the default title configured at the [project](/configuration/project.md#meta-title) or [page](/configuration/page.md#meta-title) level.

---

## Manual placement

By default, backlinks are automatically included at the end of page content. Using the `[!backlinks]` component allows you to place backlinks anywhere within your page.

||| :icon-code: Source
```md
---
title: API Reference
---
# API Reference

Complete documentation for the API endpoints.

[!backlinks]

## Additional Resources

More information and external links...
```
||| :icon-play: Result
The backlinks section would appear above the **Additional Resources** section, rather than at the bottom of the page.
|||

---

## Configuration

The backlinks component can be configured at both Project and Page levels to control visibility, title, and the maximum number of results displayed.

See [Project](/configuration/project.md#backlinks) configuration and [Page](/configuration/page.md#backlinks) configuration for all available settings.

### Project level

Configure backlinks for the entire project in your `retype.yml` file:

```yml
backlinks:
  enabled: true
  title: "Referenced by"
  maxResults: 10
```

### Page level

Override project settings for individual pages using the page metadata:

```yml
---
backlinks:
  enabled: true
  title: "See also"
  maxResults: 5
---
# Sample page

This is a sample page.
```

---

## Behavior

The backlinks component will only render when:

1. The backlinks feature is enabled (project or page level)
2. Other pages in your project link to the current page
3. A valid Retype [Pro](/pro/pro.md) license is active

If there are no pages linking to the current page, the backlinks component will not render, even when the `[!backlinks]` component is manually placed.

