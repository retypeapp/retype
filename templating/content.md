---
icon: code
tags: [templating]
---
# Content

Use `content` to query and access any page in your project from within a template expression. You can look up pages by key, search across all pages, and iterate over collections such as tags, categories, authors, blog posts, and navigation items.

For page-level metadata, see [Page properties](page-properties.md). For project configuration values, see [Project properties](project-properties.md).

---

## Page lookup

### By key

Retrieve any page using `content["key"]`, where the key is the page's filename (without extension), its title, or a relative path.

{%{
```md
{{ content["getting-started"] }}
```
}%}

All of the following forms resolve the same page:

{%{
```md
{{ content["getting-started"] }}
{{ content["Getting Started"] }}
{{ content["guides/getting-started"] }}
```
}%}

---

### Page properties

Once you have a page reference, you can access all the [[page]] settings, including:

Property | Description
--- | ---
`.title` | The page title
`.description` | The page description or excerpt
`.url` | The full URL of the page
`.path` | The root-relative path to the page
`.filePath` | The file system path to the source file

{%{
```md
title: {{ content["getting-started"].title }}
description: {{ content["getting-started"].description }}
url: {{ content["getting-started"].url }}
path: {{ content["getting-started"].path }}
```
}%}

#### Output

```
title: {{ content["getting-started"].title }}
description: {{ content["getting-started"].description }}
url: {{ content["getting-started"].url }}
path: {{ content["getting-started"].path }}
filePath: {{ content["getting-started"].filePath }}
```

---

### Render as a card

Pass a page [filePath](/configuration/page.md#filepath) to the [`[!card]`](/components/card.md) component to render a linked card for that page.

{%{
```md
[!card]({{ content["getting-started"].filePath }})
```
}%}

[!card]({{ content["getting-started"].filePath }})

Or use vertical cards:

{%{
```md
[!card vert]({{ content["getting-started"].filePath }})
```
}%}

[!card vert]({{ content["getting-started"].filePath }})

---

### Conditional display

Check whether a page exists before linking to it. This is useful for optional or tier-specific content.

{%{
```md
{{ if content["premium-features"] }}
  Check out our [Premium Features]({{ content["premium-features"].path }}).
{{ end }}
```
}%}

---

## Search

Use `content.search("term")` to find pages whose title contains the search term. Results are returned as an array of page objects.

### Basic search

{%{
```md
{{ for item in content.search("obsidian") ~}}
- [{{ item.title }}]({{ item.path }})
{{ end }}
```
}%}

{{ for item in content.search("obsidian") ~}}
- [{{ item.title }}]({{ item.path }})
{{ end }}

### Access a specific result

{%{
```md
title: {{ content.search("getting started")[0].title }}
description: {{ content.search("getting started")[0].description }}
```
}%}

**title:** {{ content.search("getting started")[0].title }}\
**description:** {{ content.search("getting started")[0].description }}

### Limit search results

Combine with the `array.limit` filter to cap the number of results.

{%{
```md
{{ for item in content.search("retype") | array.limit 5 ~}}
[!card vert]({{ item.path }})
{{ end }}
```
}%}

{{ for item in content.search("retype") | array.limit 5 ~}}
[!card vert]({{ item.path }})
{{ end }}

---

## Tags

### List all tags

`content.tags` returns all tags defined across the project. Each tag has a `title` and a `pages` array.

{%{
```md
{{ for tag in content.tags ~}}
- [{{ tag.title }}](/tags/{{ tag.title }}) ({{ tag.pages | array.size }} pages)
{{ end }}
```
}%}

{{ for tag in content.tags ~}}
- [{{ tag.title }}](/tags/{{ tag.title }}) ({{ tag.pages | array.size }} pages)
{{ end }}

### Pages for a specific tag

{%{
```md
{{ for page in content.tags["guide"].pages ~}}
- [{{ page.title }}]({{ page.path }})
{{ end }}
```
}%}

{{ for page in content.tags["guide"].pages ~}}
- [{{ page.title }}]({{ page.path }})
{{ end }}

---

## Categories

### List all categories

`content.categories` returns all categories defined across the project. Each category has a `title` and a `pages` array.

{%{
```md
{{ for cat in content.categories ~}}
- [{{ cat.title }}](/categories/{{ cat.title }}) ({{ cat.pages | array.size }} pages)
{{ end }}
```
}%}

{{ for cat in content.categories ~}}
- [{{ cat.title }}](/categories/{{ cat.title }}) ({{ cat.pages | array.size }} pages)
{{ end }}

---

## Authors

### List all authors

`content.authors` returns all authors across the project. Each author entry has a `name` and a `pages` array.

{%{
```md
{{ for author in content.authors ~}}
- {{ author.name }} ({{ author.pages | array.size }} pages)
{{ end }}
```
}%}

### Pages by a specific author

{%{
```md
{{ for page in content.authors["Jane Smith"].pages ~}}
- [{{ page.title }}]({{ page.path }})
{{ end }}
```
}%}

---

## Blog Posts

`content.blog.posts` returns all blog posts in the project, ordered by date descending.

### Latest as a Card

{%{
```md
[!card]({{ content.blog.posts[0].path }})
```
}%}

[!card]({{ content.blog.posts[0].path }})

### List all blog posts

{%{
```md
{{ for post in content.blog.posts ~}}
1. [{{ post.title }}]({{ post.path }})
{{ end }}
```
}%}

{{ for post in content.blog.posts ~}}
1. [{{ post.title }}]({{ post.path }})
{{ end }}

### Most recent as Cards

{%{
```md
{{ for post in content.blog.posts | array.limit 3 ~}}
[!card vert]({{ post.path }})
{{ end }}
```
}%}

{{ for post in content.blog.posts | array.limit 3 ~}}
[!card vert]({{ post.path }})
{{ end }}

---

## Navigation

`content.nav` exposes the project's navigation tree. Use `.children` to access the top-level items.

### List top-level navigation items

{%{
```md
{{ for item in content.nav.children ~}}
- {{ item.label }} ({{ item.children | array.size }} children)
{{ end }}
```
}%}

{{ for item in content.nav.children ~}}
- {{ item.label }} ({{ item.children | array.size }} children)
{{ end }}

---

## All pages

`content.pages` is an array of all pages in the project. Use standard array filters to slice and query the list.

### Access a page by index

{%{
```md
title: {{ content.pages[0].title }}
description: {{ content.pages[0].description }}
```
}%}

### Build a related pages section

Combine `content.pages` with array filters for curated page grids.

{%{
```md
{{ for page in content.pages | array.limit 3 ~}}
[!card vert]({{ page.path }})
{{ end }}
```
}%}

---

## Escaping template syntax

### Inline escaping

To display literal {%{`{{ }}`}%} syntax without the template engine processing it, wrap the content in opening {%{`{%{`}%} and closing `}%}` escape tags:

{%{
```js
{%{ {{ content["getting-started"].title }} }%}}%}
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
