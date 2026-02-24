---
icon: code
tags: [templating]
nav:
  badge: NEW|info
---
# Project properties

Use `project.*` to access configuration values from your `retype.yml` file. This keeps your content in sync with project settings and avoids hardcoding values that might change.

For page-level metadata, see [Page properties](page-properties.md).

---

## Basic usage

{%{
```md
Welcome to {{ project.branding.title }}!
```
}%}

If your `retype.yml` contains:

```yml
branding:
  title: My Documentation
```

**Output:**

```
Welcome to My Documentation!
```

---

## Common properties

Property | Description
--- | ---
`project.branding.title` | The project title
`project.branding.label` | The project label
`project.branding.logo` | Path to the logo
`project.url` | The project URL
`project.links` | Custom links in the top navigation bar

---

## Accessing links

The `links` property is an array. Loop through all links:

{%{
```md
{{ for link in project.links }}
1. {{ link.text }}
{{ end }}
```
}%}

**Output:**

{{ for link in project.links }}1. {{ link.text }}
{{ end }}

Or access individual links by index:

{%{
```md
First link: {{ project.links[0].text }}
Third link: {{ project.links[2].text }}
```
}%}

**Output:**

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
