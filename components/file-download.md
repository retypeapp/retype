---
tags: [component]
---
# File download

A static file download component can be configured by using the `!file` specifier in a link.

```md
[!file](../static/sample.txt)
```

[!file](../static/sample.txt)

---

## Custom text

By default, the text of the file download component is not required. Retype will automatically use the file name as the text.

The text can be explicitly set by passing as the first part of the component config. In the following sample, we explicitly set the text to `Sample`.

```md
[!file Sample](../static/sample.txt)
```

[!file Sample](../static/sample.txt)

Clicking anywhere within the file download component will trigger the web browser to download the static file.

---

## Custom icon

The `icon` used for the file download component can be customized using a name/value pair syntax for the `text` and `icon` attributes. This allows for setting a custom `icon` and `text` value at the same time.

The following sample demonstrates setting a custom `icon`:

```
[!file icon="rocket"](../static/sample.txt)
```

[!file icon="rocket"](../static/sample.txt)

By default, the file name is used as the component text value but the text can be customized by explicityly passing a separate `text` value.

```
[!file icon="rocket" text="To the moon"](../static/sample.txt)
```

[!file icon="rocket" text="To the moon"](../static/sample.txt)

## Tilde base URL token

This component support tilde url tokens. They are especially useful in case retype is deployed as a subdirectory in a domain, e.g. `http://example.com/docs`. Links starting with `~` are prefixed the base directory retype is expected to be running at.

From the examples above, most of them retrieve `/static/sample.txt` by its relative path to this page, `../static/sample.txt`. Using tokens, it is possible to safely use a link that could be copy-pasted to other articles without need to fix paths:

```md
[!file](~/static/sample.txt)
```

[!file](~/static/sample.txt)

!!!
In this case, if the website URL were `http://example.com/docs`, then the resolved link would have been `http://example.com/docs/static/sample.txtr.
!!!