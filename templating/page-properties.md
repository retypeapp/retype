---
icon: code
tags: [templating]
---
# Page properties

Use `page.*` to access metadata from the current page's frontmatter. These properties let you dynamically reference page values without hardcoding them.

For project-level configuration, see [Project properties](project-properties.md). For shared values defined once in `retype.yml`, see the [Data object section](project-properties.md#data-object).

---

## Basic usage

{%{
```yml
---
author: Jane Smith
---
This guide was written by {{ page.author }}.
```
}%}

**Output:**

```
This guide was written by Jane Smith.
```

---

## Common properties

Property | Description
--- | ---
`page.author` | Author name or object
`page.categories` | Categories assigned to the page
`page.created` | The original publish date
`page.description` | The page description or excerpt
`page.filePath` | The file system path to the source file
`page.icon` | The page icon
`page.label` | The navigation label
`page.md` | The full URL of the generated sanitized Markdown file
`page.lastUpdated` | The most recent update date
`page.layout` | The page layout type
`page.order` | The navigation order value
`page.path` | The root-relative path to the page
`page.tags` | Tags assigned to the page
`page.title` | The page title
`page.url` | The full URL of the page

---

## Date properties

Use `page.created` and `page.lastUpdated` when you want to show when a page was first created and when it was last updated.

{%{
```yml
---
created: 2024-05-14
lastUpdated: 2026-03-01
---
Published: {{ page.created }}
Updated: {{ page.lastUpdated }}
```
}%}

**Output:**

```
Published: 2024-05-14
Updated: 2026-03-01
```

---

## Working with arrays

Access individual items using bracket notation:

{%{
```yml
---
tags: [guide, tutorial, beginner]
authors: [Alice, Bob, Charlie]
---
First tag: {{ page.tags[0] }}
Second author: {{ page.authors[1] }}
```
}%}

**Output:**

```
First tag: guide
Second author: Bob
```

---

## Nested properties

Access nested objects using dot notation:

{%{
```yml
---
author:
  name: Jane Smith
  email: jane@example.com
meta:
  title: Custom SEO Title
---
Author: {{ page.author.name }}
Email: {{ page.author.email }}
Meta title: {{ page.meta.title }}
```
}%}

**Output:**

```
Author: Jane Smith
Email: jane@example.com
Meta title: Custom SEO Title
```

---

## Data object

Use `data` in a page's frontmatter to define custom values for that page only.

{%{
```yml
---
title: Release notes
data:
  version: v5.1
  owner:
    name: Jane Smith
  links:
    feedback: https://example.com/feedback
  features:
    - Faster search
    - New includes support
---
```
}%}

Access these values through `page.data`:

{%{
```md
{{ page.data.version }}
{{ page.data.owner.name }}
{{ page.data.links.feedback }}
```
}%}

Page `data` keys are also exposed as top-level template variables, so these are equivalent:

{%{
```md
{{ page.data.version }}
{{ page.data["version"] }}
{{ version }}
```
}%}

### Samples

Show page-specific release information:

{%{
```md
This page covers release **{{ page.data.version }}**.
```
}%}

Render page-specific contact details:

{%{
```md
Maintained by {{ page.data.owner.name }}.
```
}%}

Generate links stored with the page content:

{%{
```md
- [Send feedback]({{ page.data.links.feedback }})
```
}%}

Loop through page-specific lists:

{%{
```md
{{ for feature in page.data.features }}
- {{ feature }}
{{ end }}
```
}%}

If the same key exists in both places, page `data` overrides project `data` for the current page. Use `page.data.*` for page-specific values and [project.data.*](project-properties.md#data-object) for shared values from `retype.yml`.

---

## Escaping template syntax

### Inline escaping

To display literal {%{`{{ }}`}%} syntax without the template engine processing it, wrap the content in opening {%{`{%{`}%} and closing `}%}` escape tags:

{%{
```js
{%{ {{ page.title }} }%}}%}
```

This is useful when documenting template syntax or showing code samples that include double curly braces.

### Page-level escaping

To disable templating for an entire page, set `templating: false` in the page settings:

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
