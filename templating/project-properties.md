# Project properties

Use `project.*` to access configuration values from your `retype.yml` file. This keeps your content in sync with project settings and avoids hardcoding values that might change.

For page-level metadata, see [Page properties](page-properties.md).

---

## Basic usage

```md
Welcome to {{ project.branding.title }}!
```

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

```md
{{ for link in project.links }}
1. {{ link.text }}
{{ end }}
```

**Output:**

1. What&#x27;s New
1. Pro Pricing
1. Support
1. Social

Or access individual links by index:

```md
First link: {{ project.links[0].text }}
Third link: {{ project.links[2].text }}
```

**Output:**

```
First link: What&#x27;s New
Third link: Support
```

---

## Data object

Use the `data` object in `retype.yml` to define custom values that are available in templates across your project.

```yml
data:
  productName: Widget Suite
  productVersion: v5.1
  company:
    name: Company X
    foundedAt: 2020
  links:
    github: https://github.com/companyx/widget-suite
    status: https://status.companyx.com
```

These values can be accessed directly or through the `project.data` template property:

```md
{{ project.data.productName }}
{{ project.data.company.name }}
{{ project.data.links.github }}
```

Project `data` keys are also exposed as top-level template variables, so these are equivalent:

```md
{{ project.data.productVersion }}
{{ project.data["productVersion"] }}
{{ productVersion }}
```

### Samples

Display a version banner from one central config value:

```md
You are reading the docs for **{{ productName }} {{ productVersion }}**.
```

Output:

```
You are reading the docs for Widget Suite v5.1.
```

Reuse company details across multiple pages:

```md
{{ project.data.company.name }} was founded in {{ project.data.company.foundedAt }}.
```

Generate shared project links:

```md
- [GitHub]({{ project.data.links.github }})
- [Status page]({{ project.data.links.status }})
```

Store arrays or nested objects for looping:

```yml
data:
  features:
    - Fast search
    - Markdown authoring
    - Reusable templates
```

```md
{{ for feature in project.data.features }}
- {{ feature }}
{{ end }}
```

If a page also defines `data` in its frontmatter, page-level values override project-level values with the same key on that page. For page-specific values, see the [Data object section](page-properties.md#data-object) in [Page properties](page-properties.md).

---

## Escaping template syntax

### Inline escaping

To display literal `{{ }}` syntax without the template engine processing it, wrap the content in opening `{%{` and closing `}%}` escape tags:

```js
{%{ {{ page.title }} }%}
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

*[CSS]: Cascading Style Sheet
*[HTML]: Hyper Text Markup Language
