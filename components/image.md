---
icon: image
tags: [component]
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

You can link to an external (see outbound) location or any page within your project.

The following demonstrates adding an outbound link to an image:

```md
[![](/static/sample.jpg)](https://retype.com)
```

[![](/static/sample.jpg)](https://retype.com)

The following demonstrates adding an outbound link to another page:

```md
[![](/static/sample.jpg)](/guides/getting-started.md)
```

[![](/static/sample.jpg)](/guides/getting-started.md)

---

## Dimensions

You can control the size of your images by specifying custom dimensions using the pipe `|` separator followed by width and/or height values.

### Setting width and height

To set both width and height, use the format `widthxheight` after the pipe separator:

```md
![Sample Image|300x200](/static/sample.jpg)
```

![Sample Image|300x200](/static/sample.jpg)

### Setting width only

To set only the width, specify a single number after the pipe separator. The image will automatically scale its height to maintain the original aspect ratio:

```md
![Sample Image|300](/static/sample.jpg)
```

![Sample Image|300](/static/sample.jpg)

!!!
The dimensions are specified in pixels. For best results, use values that maintain the image's original aspect ratio to prevent distortion.
!!!

---

## Generic Attributes

Retype allows you to add custom HTML attributes to your images using a simple curly brace syntax `{}`. This powerful feature lets you customize the appearance and behavior of your images beyond basic Markdown capabilities.

### Custom `id`

Add a unique identifier to your image for styling or JavaScript targeting. The `id` attribute is prefixed with a `#` symbol.

```md
![](/static/sample.jpg){#custom-id}

// Creates the following HTML
<img src="/static/sample.jpg" id="custom-id">
```

![](/static/sample.jpg){#custom-id}

### Custom CSS class

Apply CSS classes to your image for styling. Class names are prefixed with a `.` dot. You can add multiple classes by separating them with spaces.

```md
![](/static/sample.jpg){.rounded-lg}

// Creates the following HTML
<img src="/static/sample.jpg" class="rounded-lg">
```

![](/static/sample.jpg){.rounded-lg}

### Custom width or height

Set specific dimensions for your image using the `width` and `height` attributes. Values can be specified in pixels (px) or other CSS units.

```md
![](/static/sample.jpg){width="300" height="200"}

// Creates the following HTML
<img src="/static/sample.jpg" width="300" height="200">
```

![](/static/sample.jpg){width="300" height="200"}

### Custom CSS class and width

Combine CSS classes with specific dimensions to create perfectly styled images.

```md
![](/static/sample.jpg){.rounded-lg width="300"}

// Creates the following HTML
<img src="/static/sample.jpg" class="rounded-lg" width="300">
```

![](/static/sample.jpg){.rounded-lg width="300"}

### Custom data attributes

Add custom data attributes to your images for JavaScript functionality or additional metadata. Data attributes are created using the `data-*` naming convention.

```md
![](/static/sample.jpg){data-location="Korea"}

// Creates the following HTML
<img src="/static/sample.jpg" data-location="Korea" />
```

![](/static/sample.jpg){data-location="Korea"}

!!!
You can combine multiple attributes in a single set of curly braces. For example: `![](/static/sample.jpg){.rounded-lg width="300" data-location="Korea"}`.
!!!

---

## Alignment options

If an image is configured on a separate line, Retype includes extra functionality for the custom alignment of images on the page. For instance, you can specify the left or right alignment of an image and have the text flow around the image. Check out the [Image alignment :icon-image:](image-alignment-demo.md) demo.

!!!
If an image is defined inline with other text on the same line, the image will be treated as an inline image and the following Retype alignment options will be ignored.
!!!

An additional **plus** option for Blog pages or pages with `layout: central` will help to position the image slightly overlapping the left or right content margins.

Position | Markdown | Description
--- | --- | ---
`center`     | `![Caption](photo.jpg)`   | Center aligned in its container (default)
`left`       | `-![Caption](photo.jpg)`  | Float left aligned
`leftplus`   | `--![Caption](photo.jpg)` | Float left aligned with some negative left offset
`right`      | `![Caption](photo.jpg)-`  | Float right aligned
`rightplus`  | `![Caption](photo.jpg)--` | Float right aligned with some negative right offset
`centerplus` | `--![Caption](photo.jpg)--` | Center aligned plus negative offset both sides

Check out the following sample page demonstrating all the image alignment scenarios, including **plus** options:

[!ref Image alignment demo](image-alignment-demo.md)

The **plus** alignment options only apply when the page is `layout: central` or `layout: blog`.

For default page layouts with a left navigation and/or the right table of contents, the **plus** positions will fallback to their non-plus equivalents. For instance, `rightplus` will fallback to `right` and the `centerplus` will fallback to `center`.

Photo credits to [carlos aranda](https://unsplash.com/@carlosaranda).