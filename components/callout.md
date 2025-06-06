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
| `primary` (default) | `blue` |
| `secondary` | `gray` |
| `success` | `green` |
| `tip` | `green` |
| `danger` | `red` |
| `warning` | `yellow` |
| `info` | `light-blue` |
| `question` | `purple` |
| `light` | `light` |
| `dark` | `dark` |
| `ghost` | `light` or `dark` depending on time of day |
| `contrast` | `dark` or `light` depending on time of day |

---

## Samples

```
!!!primary Primary
This is a `primary` Callout.
!!!

!!!secondary Secondary
This is a `secondary` Callout.
!!!

!!!success Success
This is a `success` Callout.
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

!!!question Question
This is a `question` Callout.
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

!!!primary Primary
This is a `primary` Callout.
!!!

!!!secondary Secondary
This is a `secondary` Callout.
!!!

!!!success Success
This is a `success` Callout.
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

!!!question Question
This is a `question` Callout.
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