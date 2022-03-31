---
tags: [component]
icon: dot
---
# Image

The image component embeds an image in your document. You can point to image files stored within the project, or an external URL.

Checkout the [Markdown Guide](https://www.markdownguide.org/basic-syntax/#images-1) for more details on configuring images.

---

## Basic syntax

To add an image to your document, a similar syntax to links is used but prefixed with an exclamation mark `!`.

```md
![](/static/sample.jpg)
```

![](/static/sample.jpg)

---

## Optional caption

An optional caption below the image can be set by adding your caption text between the `[]` brackets. The following sample demonstrates adding a caption:

```md
![This is an optional caption](/static/sample.jpg)
```

![This is an optional caption](/static/sample.jpg)

---

## Optional title

An optional `title` attribute for the resulting HTML `<img>` element can be set by adding the title text after the link. The title can be used differently within different browsers, but is typically shown as a tooltip when mouse pointer is held over the image. The following sample demonstrates adding a title:

```md
![This is an optional caption](/static/sample.jpg "This is an optional title")
```

Hold your mouse pointer over the image to see the title.

![This is an optional caption](/static/sample.jpg "This is an optional title")

---

## Links

By default, images are not links, but it's easy to make your image into a link by just wrapping the image in a link.

```md
[![](/static/sample.jpg)](https://retype.com)
```

[![](/static/sample.jpg)](https://retype.com)

---

## Alignment options

If an image is configured on a separate line, Retype includes extra functionality for the custom alignment of images on the page. For instance, you can specify the left or right alignment of an image and have the text flow around the image. Check out the [Image alignment :icon-image:](image-alignment-demo.md) demo.

!!!
If an image is defined inline with other text on the same line, the image will be treated as an inline image and Retype alignment options will be ignored.
!!!

An additional `plus` option for Blog pages or pages with `layout: central` will help to position the image slightly overlapping the left or right content margins.

Position | Markdown | Description
--- | --- | ---
`center`     | `![Caption](photo.jpg)`   | Center aligned in its container (default)
`left`       | `-![Caption](photo.jpg)`  | Float left aligned
`leftplus`   | `--![Caption](photo.jpg)` | Float left aligned with some negative left offset
`right`      | `![Caption](photo.jpg)-`  | Float right aligned
`rightplus`  | `![Caption](photo.jpg)--` | Float right aligned with some negative right offset
`centerplus` | `--![Caption](photo.jpg)--` | Center aligned plus negative offset both sides

Here's a sample page demonstrating all the image alignment scenarios, including `plus` options:

[!ref Image alignment demo](image-alignment-demo.md)

The `plus` alignment options only apply when the page is `layout: central` or `layout: blog`.

For default page layouts with a left navigation and/or the right table of contents, the `plus` positions will fallback to their non-plus equivalents. For instance, `rightplus` will fallback to `right` and the `centerplus` will fallback to `center`.

Photo by [carlos aranda](https://unsplash.com/@carlosaranda) on [Unsplash](https://unsplash.com/).