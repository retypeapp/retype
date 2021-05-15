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
