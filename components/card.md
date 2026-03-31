# Card

The Card component renders a linked preview for another page or URL. For local pages, Retype can build the card from page metadata. You can also override individual values directly on the Card.

```md
[!card](/blog/2026-03-23-whats-new-in-retype-v440.md)
```

[!card](/blog/2026-03-23-whats-new-in-retype-v440.md)

---

## Syntax

Use the destination in parentheses for the link target. Add an optional layout shorthand or attribute list inside `[!card ...]`.

```md
[!card](path/to/page.md)
[!card vert](path/to/page.md)
[!card compact](path/to/page.md)
[!card layout="compact"](path/to/page.md)
[!card title="Custom title" text="Custom text"](https://retype.com/)
```

For local pages, Retype can automatically resolve:

- `title` from the page title
- `text` from the excerpt or description
- `image` from the page image
- `kicker` from categories or parent navigation labels
- `footer` from `date` or `created`

If you override only one field, the remaining fields still fall back to page metadata when available.

The link target always comes from the destination in parentheses. There is no separate `link` Card attribute.

Use shorthand labels such as `vert` only when no other Card properties are set. If you combine a layout with custom properties, set it with the `layout` attribute, such as `layout="vert"`, `layout="vertical"`, or `layout="compact"`.

---

## Layouts

Cards support three layout modes: horizontal, vertical, and compact.

### Horizontal (default)

The default layout shows the image beside the content and works well for a single prominent card.

```md
[!card](/blog/2026-03-23-whats-new-in-retype-v440.md)
```

[!card](/blog/2026-03-23-whats-new-in-retype-v440.md)

### Vertical

Use `vertical` or `vert` for stacked cards with the image above the content. Consecutive vertical cards form a responsive group automatically.

```md
[!card vert](/blog/2026-03-23-whats-new-in-retype-v440.md)
[!card layout="vertical"](/blog/2026-03-17-whats-new-in-retype-v430.md)
```

[!card vert](/blog/2026-03-23-whats-new-in-retype-v440.md)
[!card layout="vertical"](/blog/2026-03-17-whats-new-in-retype-v430.md)

### Compact

Use `compact` for a smaller card that flows inline with other compact cards. Compact cards do not render an `image`, `kicker`, or `footer`. When `text` is overridden, it is rendered as plain text, whereas the default and `vert` cards will render basic markdown syntax.

```md
[!card compact](/guides/getting-started.md)
[!card layout="compact"](/guides/installation.md)
[!card title="Retype website" text="Visit retype.com." icon=":smile:" layout="compact"](https://retype.com/)
```

[!card compact](/guides/getting-started.md)
[!card layout="compact"](/guides/installation.md)
[!card title="Retype website" text="Visit retype.com." icon=":smile:" layout="compact"](https://retype.com/)

---

## Property overrides

You can override any combination of supported Card fields.

| Property | Description | Notes |
| --- | --- | --- |
| `layout` | Sets the Card layout. | Use `vert`, `vertical`, or `compact`. The default is horizontal. |
| `title` | Overrides the title. | Works with all layouts. |
| `text` | Overrides the description or excerpt. | Horizontal and vertical cards render formatted text. Compact cards render plain text. |
| `icon` | Overrides the icon. | Compact cards render the icon. |
| `image` | Overrides the image. | Used by horizontal and vertical cards. Compact cards ignore it. |
| `kicker` | Overrides the kicker above the title. | Used by horizontal and vertical cards. Compact cards ignore it. |
| `footer` | Overrides the footer below the content. | Used by horizontal and vertical cards. Compact cards ignore it. |

See the layout examples above for `layout`. The following samples focus on the content properties.

### Title and text

Override one field and let the remaining values fall back to the target page.

```md
[!card layout="vert" title="Start with v4.2"](/blog/2026-03-23-whats-new-in-retype-v440.md)
[!card layout="vert" text="Read the `v4.1` release summary."](/blog/2026-03-17-whats-new-in-retype-v430.md)
```

[!card layout="vert" title="Start with v4.2"](/blog/2026-03-23-whats-new-in-retype-v440.md)
[!card layout="vert" text="Read the `v4.1` release summary."](/blog/2026-03-17-whats-new-in-retype-v430.md)

---

### Image, kicker, and footer

These properties let you replace the metadata-style parts of a horizontal or vertical card.

```md
[!card layout="vert" image="/static/community-hero.png"](/guides/blogging.md)
[!card layout="vert" kicker="Release note"](/blog/2026-03-23-whats-new-in-retype-v440.md)
[!card layout="vert" footer="Custom footer"](/blog/2026-03-23-whats-new-in-retype-v440.md)
```

[!card layout="vert" image="/static/community-hero.png"](/guides/blogging.md)
[!card layout="vert" kicker="Release note"](/blog/2026-03-23-whats-new-in-retype-v440.md)
[!card layout="vert" footer="Custom footer"](/blog/2026-03-23-whats-new-in-retype-v440.md)

---

### Icon

The `icon` override is rendered by compact cards.

```md
[!card title="Retype website" text="Visit retype.com" icon="home" layout="compact"](https://retype.com/)
[!card icon=":rocket:" layout="compact"](/guides/getting-started.md)
```

[!card title="Retype website" text="Visit retype.com" icon="home" layout="compact"](https://retype.com/)
[!card icon=":rocket:" layout="compact"](/guides/getting-started.md)

---

### Automatic and manual versions of the same vertical card

The first card uses page metadata. The second manually configures the same values to provide a side-by-side comparison.

```md
[!card vert](/blog/2026-03-02-whats-new-in-retype-v410.md)
[!card kicker="Release" footer="2026-03-02" image="/blog/images/2026-03-02-whats-new-in-retype-v410.png" title="What's NEW in Retype v4.1" layout="vert" text="Retype `v4.1` has been primarily a community-driven release shaped by suggestions and feedback from Retype users. A huge thank you to the Retype community for your contributions and ideas that made it into this release."](/blog/2026-03-02-whats-new-in-retype-v410.md)
```

[!card vert](/blog/2026-03-02-whats-new-in-retype-v410.md)
[!card kicker="Release" footer="2026-03-02" image="/blog/images/2026-03-02-whats-new-in-retype-v410.png" title="What's NEW in Retype v4.1" layout="vert" text="Retype `v4.1` has been primarily a community-driven release shaped by suggestions and feedback from Retype users. A huge thank you to the Retype community for your contributions and ideas that made it into this release."](/blog/2026-03-02-whats-new-in-retype-v410.md)

---

### Compact cards with manual values

Compact cards are useful when you want a smaller inline set of links, including cards for external URLs.

```md
[!card compact](/guides/getting-started.md)
[!card title="Install Retype" text="Install the Retype CLI." layout="compact"](/guides/installation.md)
[!card title="Retype website" text="Visit retype.com." icon=":smile:" layout="compact"](https://retype.com/)
```

[!card compact](/guides/getting-started.md)
[!card title="Install Retype" text="Install the Retype CLI." layout="compact"](/guides/installation.md)
[!card title="Retype website" text="Visit retype.com." icon=":smile:" layout="compact"](https://retype.com/)

---

## List pair cards

You can create an array of cards from list pairs by using a wikilink as the top-level list item and a nested list item for the description.

The link must be a wikilink to a local page in your project. The nested text is always configured manually and is not pulled from the linked page.

```md
- [[Blogging]]
  - Create blog posts and let Retype generate the rss feed and pages automatically.
- [[Installation]]
  - Install the Retype CLI with npm, yarn, or dotnet, and you'll be up and running in minutes.
- [[Community]]
  - Get a free Retype Pro key for use in GitHub Pages projects.
```

- [[Blogging]]
  - Create blog posts and let Retype generate the rss feed and pages automatically.
- [[Installation]]
  - Install the Retype CLI with npm, yarn, or dotnet, and you'll be up and running in minutes.
- [[Community]]
  - Get a free Retype Pro key for use in GitHub Pages projects.

---

## Template-driven cards

The Retype [templating](/templating/index.md) engine can read from content collections, which makes it easy to generate Cards dynamically instead of hardcoding paths.

The following sample demonstrates how to display the latest blog post by passing its `filePath` to the Card component.

```md
[!card]({{ content.blog.posts[0].filePath }})
```

[!card](/blog/2026-03-23-whats-new-in-retype-v440.md)

The [`content.blog.posts`](/templating/content.md#blog-posts) array contains all blog posts in your project sorted by date, newest first.
