---
icon: smiley
tags: [component, icon]
---
# Icon

Retype supports icons using the `:icon-shortcode:` syntax.

By default, Retype includes the built-in [Octicons](/components/octicons.md) icon set. Starting with Retype `v4.4`, you can also add your own custom SVG icon packs to your project.

Icons can be used inline in page content, in headings, in tables, in [Panel](panel.md) titles, in [Callout](callout.md) titles, and in components such as [Button](button.md) and [Badge](badge.md).

---

## Built-in Octicons

To add a built-in Octicon, use the `:icon-shortcode:` syntax where `shortcode` is the Octicon name.

For example, use `:icon-star:` to render :icon-star:.

```md
:icon-star:
```

Some icon names include multiple words separated with hyphens. For example, the :icon-git-branch: `git-branch` icon is written as `:icon-git-branch:`.

For the full built-in icon list, see [Octicons](/components/octicons.md).

---

## Custom icon packs

Retype can automatically discover custom SVG icons from the `_components/icon/` folder in your project.

Each subfolder inside `_components/icon/` becomes an icon pack, and each `.svg` file inside that folder becomes an icon.

For example, the following folder structure adds a custom `lucide` icon pack:

```text
_components/
  icon/
    lucide/
```

Then add `.svg` files into the pack folder:

```text
_components/
  icon/
    lucide/
      rocket.svg
```

That file immediately becomes available as the `lucide-rocket` icon.

!!!
Only `.svg` files are supported for custom icon packs.
!!!

---

## Custom icon shortcode syntax

Custom icons use the same `:icon-shortcode:` syntax as built-in icons, but include the pack name as a prefix.

For example, if you save a Lucide `rocket.svg` file to `_components/icon/lucide/rocket.svg`, use the icon as:

```md
:icon-lucide-rocket:
```

The shortcode above renders as :icon-lucide-rocket:.

![](/blog/images/2026-03-23-lucide-icon.png)

---

## Add a custom icon pack

The following example demonstrates adding a Lucide `rocket` icon.

### 1. Create the icon pack folder

```text
_components/
  icon/
    lucide/
```

### 2. Download the SVG file

Download [`rocket.svg`](https://lucide.dev/icons/rocket) from Lucide and save it to:

```text
_components/icon/lucide/rocket.svg
```

Your folder structure should look like this:

```text
_components/
  icon/
    lucide/
      rocket.svg
```

### 3. Use the icon

```md
:icon-lucide-rocket:
```

No additional configuration is required.

---

## Use custom icons in page metadata

Custom icons can be used anywhere a normal Retype `icon` value is accepted.

For example, set a page icon using the pack name plus icon name:

```md
---
icon: lucide-rocket
---
# Sample page

This is a sample page.
```

The same pattern also works anywhere an `icon` value is supported in Retype configuration.

---

## Use custom icons in components

Custom icons can be used in components such as [Button](button.md) and [Badge](badge.md) by setting the `icon` property.

For example:

```md
[!button icon="lucide-rocket" text="Button"]
```

[!button icon="lucide-rocket" text="Button"]

Custom icons can also be used inline within content:

```md
Launch with :icon-lucide-rocket:
```

Launch with :icon-lucide-rocket:

---

## How Retype maps icon names

Retype derives the icon name from the folder name and file name:

- pack name → folder name under `_components/icon/`
- icon name → `.svg` file name without the extension

Examples:

| File path | Icon name | Shortcode |
| --- | --- | --- |
| `_components/icon/lucide/rocket.svg` | `lucide-rocket` | `:icon-lucide-rocket:` |
| `_components/icon/brand/logo.svg` | `brand-logo` | `:icon-brand-logo:` |
| `_components/icon/custom/help-circle.svg` | `custom-help-circle` | `:icon-custom-help-circle:` |

The folder name does not need to match a public icon library name. You can choose any pack name that makes sense for your project.

---

## Popular icon pack examples

Here are a few common packs you can add using the same folder-based approach:

Icons | Count (March 2026) | Shortcode | Sample
--- | --- | --- | ---
[Octicons](/components/octicons.md) (default) | 371 | `:icon-rocket:` | :icon-rocket:
[Bootstrap](https://icons.getbootstrap.com/) | >2000 | `:icon-boot-rocket:` | :icon-boot-rocket:
[Font Awesome](https://fontawesome.com/) | >2000 | `:icon-fa-rocket:` | :icon-fa-rocket:
[Hero](https://heroicons.com/) | 316 | `:icon-hero-rocket:` | :icon-hero-rocket:
[Lucide](https://lucide.dev/) | 1685 | `:icon-lucide-rocket:` | :icon-lucide-rocket:
[Phosphor](https://phosphoricons.com/) | 9072 | `:icon-pho-rocket:` | :icon-pho-rocket:
[Remix](https://remixicon.com/) | 3229 | `:icon-remix-rocket:` | :icon-remix-rocket:
[Simple](https://simpleicons.org/) | 3414 | `:icon-simple-rocket:` | :icon-simple-rocket:
[Tabler](https://tabler.io/icons) | 6074 | `:icon-tabler-rocket:` | :icon-tabler-rocket:

For the `rocket` examples above, the SVG files are organised like this:

![](/blog/images/2026-03-23-rocket-icons.png)

---

## Organise icons your way

You are not limited to public icon libraries.

You can:

- create a project-specific icon pack
- store your company or product icons in a custom folder
- mix SVG files from multiple sources into one pack
- use whatever file names make sense for your team

For example:

```text
_components/
  icon/
    brand/
      logo.svg
      product.svg
      docs.svg
```

Those files become:

- `:icon-brand-logo:`
- `:icon-brand-product:`
- `:icon-brand-docs:`

---

## When to use which format

Use the built-in Octicons when:

- you want the default Retype icon set
- you need common UI-style icons quickly
- you want the broadest compatibility with existing Retype samples

Use custom icon packs when:

- you need icons from another library such as Lucide or Tabler
- you want brand-specific icons
- you want full control over the icons available in your project

---

## See also

- [Octicons](/components/octicons.md)
- [Button](/components/button.md#icon-and-emoji)
- [Badge](/components/badge.md#icon-and-emoji)
- [Page configuration](/configuration/page.md#icon)
