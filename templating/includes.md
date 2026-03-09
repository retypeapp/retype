---
icon: code
tags: [templating]
templating: false
---
# Includes

The `include` function pulls content from another file into your page. Write a block of content once and reuse it across as many pages as you like.

---

## Basic usage

```md
{{ include "contact-us" }}
```

By default, Retype looks for the included file within the `_includes` folder at the project root. Retype resolves the file, processes any templating within it, and renders the output inline at the point of the `include` call.

---

## File resolution

Retype searches for the included file using the following order:

1. **Current directory** of the calling page
2. **`_includes` subfolder** of the current directory
3. **Walk up parent directories**, repeating steps 1 and 2 at each level until the project root is reached

The `.md` extension is optional. If omitted, Retype automatically tries appending `.md`.

All three of the following calls use the same resolution rules:

```md
{{ include "setup" }}
{{ include "snippets/support" }}
{{ include "../shared/notice.md" }}
```

If the path starts with `..`, Retype resolves it relative to the calling page's directory.

---

## File types

Both `.md` and `.html` files can be included.

Markdown files are processed as Markdown and rendered as part of the page. HTML files support full templating syntax and are useful for injecting custom markup, such as `<script>` tags or analytics snippets.

```md
{{ include "snippets/support" }}
{{ include "components/alert.html" }}
```

---

## Site-wide includes

Retype automatically processes the following files on every page if they exist in the `_includes` folder at your project root:

File | Location injected
--- | ---
`_includes/head-top.html` | Beginning of the `<head>` element
`_includes/head.html` | End of the `<head>` element
`_includes/body-top.html` | Beginning of the `<body>` element
`_includes/body.html` | End of the `<body>` element
`_includes/top.md` | Top of every page, before the page content
`_includes/bottom.md` | Bottom of every page, after the page content

These files are automatically applied without any `include` call in your pages. For example, adding a `<link>` tag to `_includes/head.html` injects a stylesheet on every page:

```html
<link href="/static/styles.css?v={{ nonce }}" rel="stylesheet">
```

---

## Passing parameters

Pass named arguments to an included template by listing them after the file path:

```md
{{ include "components/octicons" list: octicons_new }}
```

Inside the included file, access passed arguments using the `$.` prefix:

```md
| Icon | Shortcode | Sample |
| :---: | --- | --- |
{{~ for $i in $.list ~}}
| :icon-{{ $i }}: | {{ $i }} | `:icon-{{ $i }}:` |
{{~ end ~}}
```

The `$.list` expression accesses the `list` argument passed from the caller. The `$i` loop variable uses the `$` prefix to avoid shadowing outer variables.

Multiple named arguments can be passed in the same call:

```md
{{ include "components/alert" type: "warning" message: "This feature is in beta." }}
```

---

## Nested includes

Included files can themselves include other files. Retype resolves each nested include using the same resolution rules, starting from the included file's own directory.

**`page.md`**

```md
{{ include "snippets/header" }}

# Page content

{{ include "snippets/footer" }}
```

**`_includes/snippets/header.md`**

```md
{{ include "snippets/logo" }}
Welcome to the site.
```

Circular includes — where file A includes file B and file B includes file A — are detected and reported as build errors.

---

## Organizing includes

A typical `_includes` folder structure:

```
_includes/
├── head-top.html
├── head.html
├── body-top.html
├── body.html
├── top.md
├── bottom.md
├── components/
│   └── octicons.md
└── snippets/
    ├── support.md
    ├── contact-us.md
    └── default-pages.md
```

Files inside `_includes` are excluded from the generated site output and the sitemap. They serve only as reusable content fragments for other pages.

---

## Error handling

If an included file cannot be found, Retype logs an unresolved include warning during the build and replaces the include call with an `[UNRESOLVED PARTIAL]` marker in the output.

Template syntax errors within an included file stop processing at the error point. The build output reports the included file's name and the line number of the error.
