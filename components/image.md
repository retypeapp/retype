# Image

```
![Optional caption here](../path/to/image.jpg)
```

## Alignment options

Retype includes extra functionality for the custom alignment of images on the page.

For instance, you can specify for an image to align to the left or right and have the text flow around the image.

Another `plus` option for Blog pages or pages with `layout: central` help to position the image slightly overlapping the left or right content margins.

Position | Markdown | Description
--- | --- | ---
`center`     | `![Caption](photo.jpg)`   | Center aligned in its container (default)
`left`       | `-![Caption](photo.jpg)`  | Float left aligned
`leftplus`   | `--![Caption](photo.jpg)` | Float left aligned with some negative left offset
`right`      | `![Caption](photo.jpg)-`  | Float right aligned
`rightplus`  | `![Caption](photo.jpg)--` | Float right aligned with some negative right offset
`centerplus` | `-![Caption](photo.jpg)-` | Center aligned plus negative offset both sides

Here's a sample page demonstrating all the image alignment scenarios, see...

[!ref Image alignment demo](image_alignment_demo.md)

The `plus` alignment options only apply when the page is `layout: central` or `layout: blog`.

For default page layouts with a left navigation and/or the right table of contents, the `plus` positions will fallback to their non-plus equivalents. For instance, `rightplus` will fallback to `right` and the `centerplus` will fallback to `center`.
