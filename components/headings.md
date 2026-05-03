# Headings

Headings define the structure of a page and create anchor targets for direct links.

```md
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

---

## Sizes

Each Markdown heading level maps to a matching HTML heading from `H1` through `H6`.

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

The first `H1` on a page is treated as the page title. Additional heading levels are useful for creating sections, subsections, and smaller labels inside longer pages.

---

## Anchors

Headings automatically become anchors when they have an `id`. Hover over a heading to reveal the permalink button, then click it to copy the direct link.

```md
### Installation {#installation-example}

[Link to Installation](#installation-example)
```

### Installation {#installation-example}

[Link to Installation](#installation-example)

---

## Custom id

A custom `id` can be added to a heading with generic attribute syntax.

```md
## Custom anchor {#custom-heading-anchor}

[Link to custom anchor](#custom-heading-anchor)
```

## Custom anchor {#custom-heading-anchor}

[Link to custom anchor](#custom-heading-anchor)

---

## Inline content

Headings can include inline Markdown, links, icons, badges, and other inline content.

```md
### Heading with **strong** text

### Heading with [a link](https://retype.com/)

### Heading with :icon-star: icon

### Heading with [!badge NEW|info]
```

### Heading with **strong** text

### Heading with [a link](https://retype.com/)
### Heading with :icon-star: icon
### Heading with [!badge NEW|info]

---

## Theme variables

Heading colors, weights, casing, font sizes, spacing, and borders can be customized with theme variables.

```yml
branding:
  colors:
    label:
      text: "#2563eb"

theme:
  base:
    heading-text: "#111827"
    heading-weight: 700
    heading-case: normal-case
    heading-h1-font-size: 2.5rem
    heading-h2-font-size: 2rem
    heading-h3-font-size: 1.5rem
    heading-h4-font-size: 1.125rem
    heading-h5-font-size: 1rem
    heading-h6-font-size: 0.875rem
```

See the [theme variables](/configuration/theme-variables.md#heading) configuration for the full list of heading options.
