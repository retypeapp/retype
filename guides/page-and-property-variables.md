---
icon: code
tags: [guide]
label: Page & Project Variables
nav:
  badge: NEW|info
---
# Page and Project variables

Retype exposes `page.*` and `project.*` variables within the templating engine, allowing you to dynamically reference page metadata and project configuration values throughout your content.

These variables make it easy to keep your documentation consistent and avoid hardcoding values that might change.

---

## Page variables

Use `page.*` to access any metadata property from the current page's frontmatter.

### Basic example
{%{
```yml
---
author: Jane Smith
---
This guide was written by {{ page.author }}.
```
}%}

#### Output

```
This guide was written by Jane Smith.
```

### Common Page properties

Property | Description
--- | ---
`page.label` | The navigation label for the page
`page.title` | The page title
`page.author` | Author name or object
`page.date` | The publish date
`page.tags` | List of tags assigned to the page
`page.categories` | List of categories assigned to the page
`page.layout` | The page layout type
`page.icon` | The page icon
`page.order` | The navigation order value

### Working with arrays

Access individual items in arrays using bracket notation:
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

#### Output

```
First tag: guide
Second author: Bob
```

### Nested properties

Page metadata objects can be accessed using dot notation:
{%{
```yml
---
author:
  name: Jane Smith
  email: jane@example.com
meta:
  title: Custom SEO Title
  description: A brief page description
---
Author: {{ page.author.name }}
Email: {{ page.author.email }}
Meta title: {{ page.meta.title }}
```
}%}

#### Output

```
Author: Jane Smith
Email: jane@example.com
Meta title: Custom SEO Title
```

---

## Project variables

Use `project.*` to access any configuration value from your `retype.yml` file.

### Basic example
{%{
```js
Welcome to {{ project.branding.title }}!
```
}%}

If your `retype.yml` contains:

```yml
branding:
  title: My Documentation
```

#### Output

```
Welcome to My Documentation!
```

### Common Project properties

Property | Description
--- | ---
`project.branding.title` | The project title
`project.branding.label` | The project label
`project.branding.logo` | Path to the logo
`project.url` | The project URL
`project.links` | The custom links added to the top navigation bar

### Accessing links

Project `links` property is available as an array:

{%{
```js
{{ for link in project.links }}
1. {{ link.text }}
{{ end }}
```
}%}

#### Output

{{ for link in project.links }}1. {{ link.text }}
{{ end }}

Or, individually by index:

{%{
```js
First link: {{ project.links[0].text }}
Third link: {{ project.links[2].text }}
```
}%}

#### Output

```
First link: {{ project.links[0].text }}
Third link: {{ project.links[2].text }}
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


