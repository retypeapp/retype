---
icon: info
tags: [component]
---
# Callout

Callout components help to highlight important messages for the reader.

To create an Callout, just surround a block of text or any markdown content with `!!!`.

```md
!!!
This is an Callout.
!!!
```

!!!
This is an Callout.
!!!

---

## Title

Callouts can also have titles. Add a space, then add your title, such as `!!! My title`.

```md
!!! My title
This is an Callout.
!!!
```

!!! My title
This is an Callout.
!!!

Some basic Markdown syntax and emoji `:shortcodes:` are supported in the titles.

```md
!!! :zap: [Getting Started](/guides/getting-started.md) :zap:
Get up to speed with Retype quickly by checking out the Getting Started guide.
!!!
```

!!! :zap: [Getting Started](/guides/getting-started.md) :zap:
Get up to speed with Retype quickly by checking out the Getting Started guide.
!!!

---

## Variant

Callouts come in nine different flavors which can be specified by passing a `variant` immediately after the `!!!`, such as `!!!danger`.

| Variant | Color |
| --- | --- |
| `base` | Uses `base-color` |
| `primary` (default) | `blue` |
| `secondary` | `gray` |
| `success` | `green` |
| `question` | `purple` |
| `tip` | `green` |
| `danger` | `red` |
| `warning` | `yellow` |
| `info` | `light-blue` |
| `light` | `light` |
| `dark` | `dark` |
| `ghost` | `light` or `dark` depending on time of day |
| `contrast` | `dark` or `light` depending on time of day |

---

## Samples

```
!!!base Base
This is a `base` Callout.
!!!

!!!primary Primary
This is a `primary` Callout.
!!!

!!!secondary Secondary
This is a `secondary` Callout.
!!!

!!!success Success
This is a `success` Callout.
!!!

!!!question Question
This is a `question` Callout.
!!!

!!!tip Tip
This is a `tip` Callout.
!!!

!!!danger Danger
This is a `danger` Callout.
!!!

!!!warning Warning
This is a `warning` Callout.
!!!

!!!info Info
This is a `info` Callout.
!!!

!!!light Light
This is a `light` Callout.
!!!

!!!dark Dark
This is a `dark` Callout.
!!!

!!!ghost Ghost
This is a `ghost` Callout.
!!!

!!!contrast Contrast
This is a `contrast` Callout.
!!!
```

!!!base Base
This is a `base` Callout.
!!!

!!!primary Primary
This is a `primary` Callout.
!!!

!!!secondary Secondary
This is a `secondary` Callout.
!!!

!!!success Success
This is a `success` Callout.
!!!

!!!question Question
This is a `question` Callout.
!!!

!!!tip Tip
This is a `tip` Callout.
!!!

!!!danger Danger
This is a `danger` Callout.
!!!

!!!warning Warning
This is a `warning` Callout.
!!!

!!!info Info
This is a `info` Callout.
!!!

!!!light Light
This is a `light` Callout.
!!!

!!!dark Dark
This is a `dark` Callout.
!!!

!!!ghost Ghost
This is a `ghost` Callout.
!!!

!!!contrast Contrast
This is a `contrast` Callout.
!!!

## GitHub Alerts

In addition to the Retype Callout component syntax options above, Retype also supports fully the GitHub [Alert](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) extension which is an adaptation of the Markdown blockquote syntax.

```md
> [!NOTE]
> Useful information that users should know.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
```

Here are the rendered GitHub Alerts:

> [!NOTE]
> Useful information that users should know.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

### Custom title

Retype also supports setting a custom title value on the GitHub Alerts using the following syntax:

```md
> [!NOTE] Custom Title
> Useful information that users should know.
```

> [!NOTE] Custom Title
> Useful information that users should know.

---

## Theme variables

Retype gives you full control over the look and feel of your callout components through customizable [[theme variables]].

You can override any of theme variable in your `retype.yml` configuration file using the `theme.base` and `theme.dark` settings. 

For example, to change the `primary` callout color for all instances of the `primary` callout within your project, add the following to your project's `retype.yml` file:

```yaml
theme:
  base:
    # Revise the primary variant base color
    # across all components within the project
    # primary: "#209fb5" 

    # Or, adjust callout only theme variables
    callout-primary: "#209fb5"
```

To learn more about theme variables and how they work across Retype, check out the [Themes Guide](/guides/themes.md), the [[Theme Variables]] documentation, and [`theme`](/configuration/project.md#theme) Project settings.

!!!
All callout theme variables can be customized in this way. The full list of available variables is shown below, and you can always refer to the [Callout Component](/configuration/theme-variables.md#callout-component) theme variables for the latest options.
!!!