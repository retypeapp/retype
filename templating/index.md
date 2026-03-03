---
icon: code
tags: [templating]
nav:
  badge: NEW|info
templating: false
---
# Templating

Retype's templating system lets you embed dynamic content directly in your Markdown pages. Think of it as _"programmable content"_. 

Templating is powered by [Scriban](https://scriban.github.io/) and requires no separate build step or configuration. Write a template expression anywhere in your content and Retype evaluates it when the page is built.

---

## Syntax

A template expression is wrapped in double curly braces. Retype evaluates the expression and replaces it with the result.

```md
{{ page.title }}
```

Statements such as conditionals and loops use `{{` and `}}` as well, with keywords like `if`, `for`, and `end`:

```md
{{ if page.tags | array.size > 0 }}
Tags: {{ page.tags | array.join ", " }}
{{ end }}
```

To suppress a newline at the start or end of a statement block, add a tilde (`~`):

```md
{{~ for item in items ~}}
- {{ item }}
{{~ end ~}}
```

Use `{{# ... }}` for comments that are stripped from output and never rendered:

```md
{{# This comment will not appear in the output }}
```

---

## Page properties

Access metadata from the current page's frontmatter using `page.*`:

```md
## {{ page.title }}

{{ page.description }}

_Last updated: {{ page.date }}_
```

See [Page properties](page-properties.md) for the full property reference.

---

## Project properties

Access values from your `retype.yml` configuration using `project.*`:

```md
© {{ date.now.year }} {{ project.branding.title }}. All rights reserved.
```

See [Project properties](project-properties.md) for the full property reference.

---

## Includes

Pull reusable content from another file using `include`. By default, Retype looks inside the `_includes` folder at the project root:

```md
{{ include "contact-us" }}
```

Includes support parameters, nested includes, and both `.md` and `.html` file types. See [Includes](includes.md) for details.

---

## Most recent blog post

Use `content.blog.posts` to access the blog post collection. Combine `array.first` to get the latest entry:

```md
{{ recent = content.blog.posts | array.first }}
Latest post: [{{ recent.title }}]({{ recent.url }})
```

Render it as a card with a single line:

```md
[!card]({{ (content.blog.posts | array.first).filePath }})
```

See [Content](content.md) for querying pages, tags, categories, authors, and navigation.

---

## Conditional content

Show or hide content based on page properties or project configuration:

```md
{{ if page.tags contains "beta" }}
> [!warning]
> This feature is in beta and subject to change.
{{ end }}
```

Output the current year to keep copyright notices accurate without manual updates:

```md
© {{ date.now.year }} My Company. All rights reserved.
```

---

## Functions and filters

Retype includes built-in functions for strings, arrays, dates, math, HTML, and objects. Functions can be called directly or chained with the pipe operator:

```md
{{ page.title | string.upcase }}
{{ page.tags | array.sort | array.join ", " }}
{{ date.now | date.to_string "%B %d, %Y" }}
```

See [Functions and filters](functions-filters.md) for the full reference.

---

## Reference

Page | Description
--- | ---
[Content](content.md) | Query any page, blog posts, tags, categories, and navigation
[Functions and filters](functions-filters.md) | Built-in Scriban functions for transforming data
[Includes](includes.md) | Reuse content fragments across pages
[Page properties](page-properties.md) | Access frontmatter values from the current page
[Project properties](project-properties.md) | Access values from `retype.yml`
