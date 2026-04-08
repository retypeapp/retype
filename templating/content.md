# Content

Use `content` to query and access any page in your project from within a template expression. You can look up pages by key, search across all pages, and iterate over collections such as tags, categories, authors, blog posts, and navigation items.

For page-level metadata, see [Page properties](page-properties.md). For project configuration values, see [Project properties](project-properties.md).

---

## Page lookup

### By key

Retrieve any page using `content["key"]`, where the key is the page's filename (without extension), its title, or a relative path.

```md
{{ content["getting-started"] }}
```

All of the following forms resolve the same page:

```md
{{ content["getting-started"] }}
{{ content["Getting Started"] }}
{{ content["guides/getting-started"] }}
```

---

### Page properties

Once you have a page reference, you can access all the [page](/configuration/page.md) settings, including:

Property | Description
--- | ---
`.description` | The page description or excerpt
`.filePath` | The file system path to the source file
`.path` | The root-relative path to the page
`.title` | The page title
`.url` | The full URL of the page

```md
title: {{ content["getting-started"].title }}
description: {{ content["getting-started"].description }}
url: {{ content["getting-started"].url }}
path: {{ content["getting-started"].path }}
filePath: {{ content["getting-started"].filePath }}
```

#### Output

```
title: Getting Started
description: This guide will have you up and running generating your own Retype website in just a few minutes.
url: https://retype.com/guides/getting-started/
path: /guides/getting-started/
filePath: /guides/getting-started.md
```

---

### Render as a card

Pass a page `filePath` to the [`[!card]`](/components/card.md) component to render a linked card for that page.

```md
[!card]({{ content["getting-started"].filePath }})
```

[!card](/guides/getting-started.md)

Or use vertical cards:

```md
[!card vert]({{ content["getting-started"].filePath }})
```

[!card vert](/guides/getting-started.md)

---

### Conditional display

Check whether a page exists before linking to it. This is useful for optional or tier-specific content.

```md
{{ if content["premium-features"] }}
  Check out our [Premium Features]({{ content["premium-features"].filePath }}).
{{ end }}
```

---

## Search

Use `content.search("term")` to find pages whose title contains the search term. Results are returned as an array of page objects.

### Basic search

```md
{{ for item in content.search("obsidian") ~}}
- [{{ item.title }}]({{ item.filePath }})
{{ end }}
```

- [Self-hosting Obsidian Vault with Retype](/blog/2026-02-25-self-hosting-obsidian-vault-with-retype.md)

### Access a specific result

```md
title: {{ content.search("getting started")[0].title }}
description: {{ content.search("getting started")[0].description }}
```

**title:** Getting Started\
**description:** This guide will have you up and running generating your own Retype website in just a few minutes.

### Limit search results

Combine with the `array.limit` filter to cap the number of results. The following sample then outputs each of the results into a `compact` card component:

```md
{{ for item in content.search("retype") | array.limit 5 ~}}
[!card compact]({{ item.filePath }})
{{ end }}
```

[!card compact](/blog/2025-05-04-whats-new-in-retype-v38.md)
[!card compact](/blog/2025-05-28-whats-new-in-retype-v39.md)
[!card compact](/blog/2025-06-09-whats-new-in-retype-v310.md)
[!card compact](/blog/2025-07-02-whats-new-in-retype-v311.md)
[!card compact](/blog/2026-02-10-whats-new-in-retype-v312.md)

---

## Tags

### List all tags

`content.tags` returns all tags defined across the project. Each tag has a `title` and a `pages` array.

```md
Tag | Page count
--- | ---
{{ for tag in content.tags | array.sort "title" ~}}
[!badge {{ tag.title }}|info](/tags/{{ tag.title }}) | {{ tag.pages | array.size }}
{{ end }}
```

Tag | Page count {.compact}
--- | ---
[!badge community|info](/tags/community) | 2
[!badge component|info](/tags/component) | 26
[!badge config|info](/tags/config) | 6
[!badge ftp|info](/tags/ftp) | 1
[!badge github|info](/tags/github) | 4
[!badge guide|info](/tags/guide) | 14
[!badge hosting|info](/tags/hosting) | 6
[!badge icon|info](/tags/icon) | 1
[!badge pro|info](/tags/pro) | 3
[!badge templating|info](/tags/templating) | 6
[!badge theme|info](/tags/theme) | 1

### Pages for a specific tag

The following sample demonstrates how to get all the Pages based on a specific tag:

```md
{{ for page in content.tags["guide"].pages ~}}
- [{{ page.title }}]({{ page.filePath }})
{{ end }}
```

- [Blogging](/guides/blogging.md)
- [Retype CLI](/guides/cli.md)
- [Getting Started](/guides/getting-started.md)
- [GitHub Actions](/guides/github-actions.md)
- [Markdown](/guides/markdown.md)
- [Themes](/guides/themes.md)
- [Troubleshooting](/guides/troubleshooting.md)
- [Cloudflare Pages](/hosting/cloudflare.md)
- [Docker](/hosting/docker.md)
- [Publish using FTP](/hosting/ftp.md)
- [GitHub Pages](/hosting/github-pages.md)
- [GitLab Pages](/hosting/gitlab-pages.md)
- [Heroku](/hosting/heroku.md)
- [Netlify](/hosting/netlify.md)

---

## Categories

### List all categories

`content.categories` returns all categories defined across the project. Each category has a `title` and a `pages` array.

```md
{{ for cat in content.categories ~}}
- [{{ cat.title }}](/categories/{{ cat.title }}) ({{ cat.pages | array.size }} pages)
{{ end }}
```

- [release](/categories/release) (10 pages)
- [news](/categories/news) (1 pages)
- [blog](/categories/blog) (1 pages)

---

## Authors

### List all authors

`content.authors` returns all authors across the project. Each author entry has a `name` and a `pages` array.

```md
{{ for author in content.authors ~}}
- {{ author.name }} ({{ author.pages | array.size }} pages)
{{ end }}
```

### Pages by a specific author

```md
{{ for page in content.authors["Jane Smith"].pages ~}}
- [{{ page.title }}]({{ page.filePath }})
{{ end }}
```

---

## Blog Posts

`content.blog.posts` returns all blog posts in the project, ordered by date descending.

### Latest as a Card

```md
[!card]({{ content.blog.posts[0].filePath }})
```

[!card](/blog/2026-03-23-whats-new-in-retype-v440.md)

### List all blog posts

```md
{{ for post in content.blog.posts ~}}
1. [{{ post.title }}]({{ post.filePath }})
{{ end }}
```

1. [What's New in Retype v4.4](/blog/2026-03-23-whats-new-in-retype-v440.md)
1. [What's New in Retype v4.3](/blog/2026-03-17-whats-new-in-retype-v430.md)
1. [What's New in Retype v4.2](/blog/2026-03-10-whats-new-in-retype-v420.md)
1. [What's New in Retype v4.1](/blog/2026-03-02-whats-new-in-retype-v410.md)
1. [Self-hosting Obsidian Vault with Retype](/blog/2026-02-25-self-hosting-obsidian-vault-with-retype.md)
1. [What's New in Retype v4.0](/blog/2026-02-23-whats-new-in-retype-v400.md)
1. [What's New in Retype v3.12](/blog/2026-02-10-whats-new-in-retype-v312.md)
1. [What's New in Retype v3.11](/blog/2025-07-02-whats-new-in-retype-v311.md)
1. [What's New in Retype v3.10](/blog/2025-06-09-whats-new-in-retype-v310.md)
1. [New GitHub Pages Community Key](/blog/2025-06-06-new-gitHub-pages-community-key.md)
1. [What's New in Retype v3.9](/blog/2025-05-28-whats-new-in-retype-v39.md)
1. [What's New in Retype v3.8](/blog/2025-05-04-whats-new-in-retype-v38.md)

### Most recent as Cards

```md
{{ for post in content.blog.posts | array.limit 3 ~}}
[!card vert]({{ post.filePath }})
{{ end }}
```

[!card vert](/blog/2026-03-23-whats-new-in-retype-v440.md)
[!card vert](/blog/2026-03-17-whats-new-in-retype-v430.md)
[!card vert](/blog/2026-03-10-whats-new-in-retype-v420.md)

---

## Navigation

`content.nav` exposes the project's navigation tree. Use `.children` to access the top-level items.

### List top-level navigation items

```md
{{ for item in content.nav.children ~}}
- {{ item.label }} ({{ item.children | array.size }} children)
{{ end }}
```

- LICENSE (0 children)
- About (0 children)
- Changelog (0 children)
- Community (0 children)
- Faq (0 children)
- Feature log (0 children)
- Features (0 children)
- Pro (1 children)
- Templating (5 children)
- Components (30 children)
- Samples (7 children)
- Blog (12 children)
- Configuration (7 children)
- Guides (9 children)
- Hosting (8 children)
- Not Found (0 children)

---

## All pages

`content.pages` is an array of all pages in the project. Use standard array filters to slice and query the list.

### Access a page by index

```md
title: {{ content.pages[0].title }}
description: {{ content.pages[0].description }}
```

### Build a related pages section

Combine `content.pages` with array filters for curated page grids.

```md
{{ for page in content.pages | array.limit 3 ~}}
[!card vert]({{ page.filePath }})
{{ end }}
```

---

## Escaping template syntax

### Inline escaping

To display literal `{{ }}` syntax without the template engine processing it, wrap the content in opening `{%{` and closing `}%}` escape tags:

```js
{%{ {{ content["getting-started"].title }} }%}
```

### Page-level escaping

To disable templating for an entire page, set `templating: false` in the page frontmatter:

```yml
---
templating: false
---
```

### Project-level escaping

To disable templating project-wide, update your `retype.yml` with the following:

```yml
templating:
  enabled: false
```
