---
icon: note
tags: [component]
nav:
  badge: NEW|info
data:
{{ for post in content.blog.posts | array.limit 5 ~}}
  blog{{ for.index }}: {{ post.filePath }}
{{ end }}
---
# Card

The Card component creates a styled preview card linking to another page in your project. Cards automatically display the target page's title, category, description, date, and image.

```md
[!card]({{ blog0 }})
```

[!card]({{ blog0 }})

---

## Syntax

The basic syntax uses the `[!card]` identifier followed by a path to any page in your project.

```md
[!card](path/to/page.md)
```

Cards automatically extract and display metadata from the target page, including:

- Page title
- Category (if configured)
- Description
- Date (if configured)
- Image (if configured)

---

## Layout

Cards support two layout modes: horizontal (default) and vertical.

### Horizontal (default)

The default horizontal layout displays the image on the left and content on the right. This layout is ideal for single cards or when you want each card to take the full content width.

```md
[!card]({{ blog1 }})
```

[!card]({{ blog1 }})

### Vertical

Use the `vertical` or `vert` layout for a stacked card design with the image on top and content below. Vertical cards are perfect for grid layouts with multiple cards.

```md
[!card vert]({{ blog0 }})
```

[!card vert]({{ blog0 }})

You can also use the attribute syntax:

```md
[!card layout="vertical"]({{ blog0 }})
```

---

## Single card

A single card displays at full width in horizontal layout or constrained width in vertical layout.

### Horizontal

```md
[!card]({{ blog0 }})
```

[!card]({{ blog0 }})

### Vertical

```md
[!card vert]({{ blog0 }})
```

[!card vert]({{ blog0 }})

---

## Two cards

Place multiple vertical cards together to create a responsive grid. With two cards, they display side by side on wider screens.

```md
[!card vert]({{ blog0 }})
[!card vert]({{ blog1 }})
```

[!card vert]({{ blog0 }})
[!card vert]({{ blog1 }})

---

## Three cards

Three vertical cards create a balanced row on desktop screens.

```md
[!card vert]({{ blog0 }})
[!card vert]({{ blog1 }})
[!card vert]({{ blog2 }})
```

[!card vert]({{ blog0 }})
[!card vert]({{ blog1 }})
[!card vert]({{ blog2 }})

---

## Five cards

When displaying five cards, they automatically wrap into rows. On wider screens, you'll see three cards on the first row and two on the second. The cards in partial rows expand to fill the available space.

```md
[!card vert]({{ blog0 }})
[!card vert]({{ blog1 }})
[!card vert]({{ blog2 }})
[!card vert]({{ blog3 }})
[!card vert]({{ blog4 }})
```

[!card vert]({{ blog0 }})
[!card vert]({{ blog1 }})
[!card vert]({{ blog2 }})
[!card vert]({{ blog3 }})
[!card vert]({{ blog4 }})

---

## Mixed layouts

You can mix horizontal and vertical cards on the same page. Horizontal cards display individually while consecutive vertical cards group into a flex container.

```md
[!card vert]({{ blog0 }})
[!card vert]({{ blog1 }})
[!card vert]({{ blog2 }})
[!card]({{ blog3 }})
```

[!card vert]({{ blog0 }})
[!card vert]({{ blog1 }})
[!card vert]({{ blog2 }})
[!card]({{ blog3 }})

---

## Latest blog post

Render the latest blog post as a Card using templating syntax to dynamically reference the most recent post.

{%{
```md
[!card]({{ content.blog.posts[0].filePath }})
```
}%}

[!card]({{ content.blog.posts[0].filePath }})

The `content.blog.posts` array contains all blog posts sorted by date (newest first). Use `posts[0]` to get the latest post and access its `filePath` property for the Card component.
