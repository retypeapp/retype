---
icon: link
---

# Linking

When Retype builds your pages it transforms the address for the input markdown files into HTML pages as follows:

`articles/my_article.md` => `articles/my_article/index.html`

At the same time, it also analyzes markdown links and transform them accordingly. This article will explain how linking works in different scenarios and components.

## Markdown links

Linking using markdown is basically via the simple link syntax (`[]()`) but there are also the [**reference link** component](/components/reference-link.md), the [file download component](/components/file-download.md), and the [image component](/components/image.md).

### Usual markdown links

```md
[home](/readme.md)
```

- supports .md
- supports .html
- supports no extension at all
- tries its best to guess

## URL Tokens

### Circumflex URL Token

### Tilde URL Token

## Raw HTML links

- does not change links
- understand how retype transform paths
- still replaces tokens

## Examples

All links working for the retype.com website