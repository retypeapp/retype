---
tags: [component]
icon: dot
---
# Alert

Alert components help to highlight important messages for the reader.

To create an alert, just surround a block of text or any markdown content with `!!!`.

```md
!!!
This is an alert.
!!!
```

!!!
This is an alert.
!!!

---

## Title

Alerts can also have titles. Add a space, then add your title, such as `!!! My title`.

```md
!!! My title
This is an alert.
!!!
```

!!! My title
This is an alert.
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

## Variants

Alerts come in nine different flavors which can be specified by passing a `variant` immediately after the `!!!`, such as `!!!danger`.

| Variant | Color |
| --- | --- |
| `primary` (default) | `blue` |
| `secondary` | `gray` |
| `success` | `green` |
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
!!!primary Primary
This is a `primary` alert.
!!!

!!!secondary Secondary
This is a `secondary` alert.
!!!

!!!success Success
This is a `success` alert.
!!!

!!!danger Danger
This is a `danger` alert.
!!!

!!!warning Warning
This is a `warning` alert.
!!!

!!!info Info
This is a `info` alert.
!!!

!!!light Light
This is a `light` alert.
!!!

!!!dark Dark
This is a `dark` alert.
!!!

!!!ghost Ghost
This is a `ghost` alert.
!!!

!!!contrast Contrast
This is a `contrast` alert.
!!!
```

!!!primary Primary
This is a `primary` alert.
!!!

!!!secondary Secondary
This is a `secondary` alert.
!!!

!!!success Success
This is a `success` alert.
!!!

!!!danger Danger
This is a `danger` alert.
!!!

!!!warning Warning
This is a `warning` alert.
!!!

!!!info Info
This is a `info` alert.
!!!

!!!light Light
This is a `light` alert.
!!!

!!!dark Dark
This is a `dark` alert.
!!!

!!!ghost Ghost
This is a `ghost` alert.
!!!

!!!contrast Contrast
This is a `contrast` alert.
!!!
