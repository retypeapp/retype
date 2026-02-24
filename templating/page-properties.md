---
icon: code
tags: [templating]
nav:
  badge: NEW|info
---
# Page properties

Use `page.*` to access metadata from the current page's frontmatter. These properties let you dynamically reference page values without hardcoding them.

For project-level configuration, see [Project properties](project-properties.md).

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
`page.title` | The page title
`page.label` | The navigation label
`page.author` | Author name or object
`page.date` | The publish date
`page.tags` | Tags assigned to the page
`page.categories` | Categories assigned to the page
`page.layout` | The page layout type
`page.icon` | The page icon
`page.order` | The navigation order value

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
