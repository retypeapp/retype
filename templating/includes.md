---
icon: code
tags: [templating]
nav:
  badge: NEW|info
templating: false
---
# Includes

The `include` function pulls content from another file into your page. Write a block of content once, then include in multiple locations across your site.

---

## Basic usage

```markdown
{{ include "snippets/support" }}
```

Retype resolves the file, processes any templating within it, and renders the content inline.

---

## File resolution

Retype searches for the included file using the following order:

1. **Current directory** of the calling page
2. **`_includes`-prefixed path** from the current directory
3. **Walk up parent directories**, repeating steps 1 and 2 at each level until reaching the project root

The `.md` extension is optional. If omitted, Retype automatically tries appending `.md`.

If the path starts with `..`, Retype resolves it as an external file relative to the calling page's directory.

```markdown
{{ include "setup" }}
{{ include "snippets/support" }}
{{ include "../external/readme.md" }}
```

---

## File types

Both `.md` and `.html` files can be included.

Markdown files are processed and rendered as part of the page. HTML files in the `_includes` folder support full templating syntax and are useful for injecting custom markup.

```markdown
{{ include "snippets/support" }}
{{ include "components/button" }}
```

---

## Site-wide includes

Retype automatically includes the following files on every page if they exist in your `_includes` folder:

File | Description
--- | ---
`_includes/head.html` | Injected into the `<head>` element
`_includes/head-top.html` | Injected at the top of the `<head>` element
`_includes/body.html` | Injected into the `<body>` element
`_includes/body-top.html` | Injected at the top of the `<body>` element
`_includes/top.md` | Content rendered at the top of every page
`_includes/bottom.md` | Content rendered at the bottom of every page

---

## Passing parameters

Pass data to an included template using named arguments:

```markdown
{{ include "components/octicons" list: octicons_new }}
```

Inside the included template, each named argument is available as a local variable:

```markdown
| Icon | Shortcode |
| :---: | --- |
{{~ for $i in $.list ~}}
| :icon-{{ $i }}: | {{ $i }} |
{{~ end ~}}
```

---

## Nested includes

Included files can include other files. Retype resolves each nested include using the same resolution rules.

```markdown
{{# page.md }}
{{ include "snippets/header" }}

# Page content

{{ include "snippets/footer" }}
```

```markdown
{{# _includes/snippets/header.md }}
{{ include "snippets/logo" }}
Welcome to the site.
```

---

## Organizing includes

A typical `_includes` folder structure:

```
_includes/
├── head.html
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

Files in `_includes` are excluded from the generated site output and the sitemap. They exist only to be included by other pages.

---

## Error handling

If an included file cannot be found, Retype logs an unresolved partial warning during the build. The include is replaced with an `[UNRESOLVED PARTIAL]` marker in the output.

Template syntax errors within an included file stop processing at the error and display the file and line number in the build output.

---

## Tips

- Enable `templating: true` in the frontmatter of any page that uses `{{ include }}`.
- Keep include files focused on a single block of content.
- Use descriptive folder and file names like `snippets/support.md`.
- Avoid circular includes where file A includes file B and file B includes file A.

