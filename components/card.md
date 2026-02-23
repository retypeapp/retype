---
icon: note
tags: [component]
nav:
  badge: NEW|info
---
# Card

The Card component creates a styled preview card linking to another page in your project. Cards automatically display the target page's title, category, description, date, and image.

```md
[!card](/blog/2026-02-10-whats-new-in-retype-v312.md)
```

[!card](/blog/2026-02-10-whats-new-in-retype-v312.md)

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
[!card](/blog/2025-07-02-whats-new-in-retype-v311.md)
```

[!card](/blog/2025-07-02-whats-new-in-retype-v311.md)

### Vertical

Use the `vertical` or `vert` layout for a stacked card design with the image on top and content below. Vertical cards are perfect for grid layouts with multiple cards.

```md
[!card vert](/blog/2026-02-10-whats-new-in-retype-v312.md)
```

[!card vert](/blog/2026-02-10-whats-new-in-retype-v312.md)

You can also use the attribute syntax:

```md
[!card layout="vertical"](/blog/2026-02-10-whats-new-in-retype-v312.md)
```

---

## Single card

A single card displays at full width in horizontal layout or constrained width in vertical layout.

### Horizontal

```md
[!card](/blog/2025-06-09-whats-new-in-retype-v310.md)
```

[!card](/blog/2025-06-09-whats-new-in-retype-v310.md)

### Vertical

```md
[!card vert](/blog/2025-06-10-self-hosting-obsidian-vault-with-retype.md)
```

[!card vert](/blog/2025-06-10-self-hosting-obsidian-vault-with-retype.md)

---

## Two cards

Place multiple vertical cards together to create a responsive grid. With two cards, they display side by side on wider screens.

```md
[!card vert](/blog/2026-02-10-whats-new-in-retype-v312.md)
[!card vert](/blog/2025-07-02-whats-new-in-retype-v311.md)
```

[!card vert](/blog/2026-02-10-whats-new-in-retype-v312.md)
[!card vert](/blog/2025-07-02-whats-new-in-retype-v311.md)

---

## Three cards

Three vertical cards create a balanced row on desktop screens.

```md
[!card vert](/blog/2025-06-10-self-hosting-obsidian-vault-with-retype.md)
[!card vert](/blog/2025-06-09-whats-new-in-retype-v310.md)
[!card vert](/blog/2025-06-06-new-gitHub-pages-community-key.md)
```

[!card vert](/blog/2025-06-10-self-hosting-obsidian-vault-with-retype.md)
[!card vert](/blog/2025-06-09-whats-new-in-retype-v310.md)
[!card vert](/blog/2025-06-06-new-gitHub-pages-community-key.md)

---

## Five cards

When displaying five cards, they automatically wrap into rows. On wider screens, you'll see three cards on the first row and two on the second. The cards in partial rows expand to fill the available space.

```md
[!card vert](/blog/2026-02-10-whats-new-in-retype-v312.md)
[!card vert](/blog/2025-07-02-whats-new-in-retype-v311.md)
[!card vert](/blog/2025-06-10-self-hosting-obsidian-vault-with-retype.md)
[!card vert](/blog/2025-06-09-whats-new-in-retype-v310.md)
[!card vert](/blog/2025-06-06-new-gitHub-pages-community-key.md)
```

[!card vert](/blog/2026-02-10-whats-new-in-retype-v312.md)
[!card vert](/blog/2025-07-02-whats-new-in-retype-v311.md)
[!card vert](/blog/2025-06-10-self-hosting-obsidian-vault-with-retype.md)
[!card vert](/blog/2025-06-09-whats-new-in-retype-v310.md)
[!card vert](/blog/2025-06-06-new-gitHub-pages-community-key.md)

---

## Mixed layouts

You can mix horizontal and vertical cards on the same page. Horizontal cards display individually while consecutive vertical cards group into a flex container.

```md
[!card vert](/blog/2025-06-10-self-hosting-obsidian-vault-with-retype.md)
[!card vert](/blog/2025-06-06-new-gitHub-pages-community-key.md)
[!card vert](/blog/2025-06-09-whats-new-in-retype-v310.md)
[!card](/blog/2025-07-02-whats-new-in-retype-v311.md)
```

[!card vert](/blog/2025-06-10-self-hosting-obsidian-vault-with-retype.md)
[!card vert](/blog/2025-06-06-new-gitHub-pages-community-key.md)
[!card vert](/blog/2025-06-09-whats-new-in-retype-v310.md)
[!card](/blog/2025-07-02-whats-new-in-retype-v311.md)

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
