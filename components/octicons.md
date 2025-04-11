---
icon: mark-github
---
# Octicons

[Octicons](https://primer.github.io/octicons/) can be used with the [Icon](icon.md) component and several other components, including the [Badge](badge.md) and [Button](button.md).

## Samples

### Component

For the [Icon](icon.md) component, the icon is specified using the syntax `:icon-shortcode:`, where `shortcode` is the name of the icon (found in the table below).

For example, use the code `:icon-rocket:` for a :icon-rocket: icon.

When an icon is used in other components, the icon is referred to by only the `shortcode`.

For example, the following demonstrates using the icon in a [Badge](badge.md#icon-and-emoji) and a [Button](button.md#icon-and-emoji).

Component | Sample
--- | ---
[!badge icon="rocket" text="rocket"] | `[!badge icon="rocket" text="rocket"]`
[!button icon="rocket" text="rocket"] | `[!button icon="rocket" text="rocket"]`

### Metadata

When an icon is specified within the [Page](../configuration/page.md) or [Project](../configuration/project.md) metadata, the icon can be referred to by only its `shortcode`.

The following sample demonstrates setting a Page [icon](../configuration/page.md/#icon) to a :icon-rocket:.

```
---
icon: rocket
---
# Sample

This is a sample page with a :icon-rocket: icon.
```

## New icons

New icons in Retype v{{ version }}:

| Icon | Shortcode | Sample |
| :---: | --- | --- |
| :icon-ai-model: | ai-model | `:icon-ai-model:` |
| :icon-repo-delete: | repo-delete | `:icon-repo-delete:` |
| :icon-sparkles-fill: | sparkles-fill | `:icon-sparkled-fill:` |
| :icon-square-circle: | square-circle | `:icon-square-circle:` |

## All icons

{{ include "snippets/octicons-data" }}

As of v{{ version }}, there are {{ icons.size }} [Octicons](https://primer.github.io/octicons/) supported and more being added with each new release.

| Icon | Shortcode | Sample |
| :---: | --- | --- |
{{~ for $i in icons ~}}
| :icon-{{ $i }}: | {{ $i }} | `:icon-{{ $i }}:` |
{{~ end ~}}