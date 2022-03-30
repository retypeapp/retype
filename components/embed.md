---
tags: [component]
icon: dot
---
# Embed

The `embed` component helps with content embedding.

The embed component syntax is similar to many other Retype components. The `!embed` keyword is used to specify the component and a link to the resource is included.

```md
[!embed](link)
```

The link is the full URL to the embedded resource. For instance, embeding a YouTube or Vimeo video would require the following component syntax:

```md
[!embed](https://www.youtube.com/embed/C0DPdy98e4c)
```

The above Retype component would render as follows:

[!embed](https://www.youtube.com/embed/C0DPdy98e4c)

The following options allow for customization of the embed component.

---

## AllowFullScreen

Typically, this attribute is used by embeded videos, such as a YouTube or Vimeo, to enable the **Full screen** button.

The default value of `allowFullScreen` is `true`. Setting to `false` will remove or disable the full screen button.

You do not need to explicitly enable the full screen option for videos. By default, the button will be enabled when a Retype `[!embed]` component is used.

```md
[!embed](https://www.youtube.com/embed/C0DPdy98e4c)
```

[!embed](https://www.youtube.com/embed/C0DPdy98e4c)

To explicitly remove or disable the full screen option, include `allowFullScreen="false"` in your `[!embed]` component configuration.

```md
[!embed allowFullScreen="false"](https://www.youtube.com/embed/C0DPdy98e4c)
```

[!embed allowFullScreen="false"](https://www.youtube.com/embed/C0DPdy98e4c)

---

## Aspect

Specifies the video's pixel aspect ratio.

```md
[!embed aspect="4:3"](https://www.youtube.com/embed/C0DPdy98e4c)
```

[!embed aspect="4:3"](https://www.youtube.com/embed/C0DPdy98e4c)

The setting accepts a number of keyword values according to the list below, each reflecting the embedded area's aspect ratio:

| Accepted values |
| --- |
| `1:1` |
| `4:3` |
| `16:9` (default) |
| `21:9` |

---

## El

Specifies which HTML element should be used to wrap the embedded content.

```md
[!embed el="embed"](https://www.youtube.com/embed/C0DPdy98e4c)
```

[!embed el="embed"](https://www.youtube.com/embed/C0DPdy98e4c)

The setting accepts a number of keyword values according to the list below, each resembling its respective HTML tag in the rendered page:

| Accepted values |
| --- |
| `embed` |
| `iframe` (default) |
| `video` |
| `object` |

---

## Height

Specifies a height for the embedded content's area.

```md
[!embed height="120"](https://www.youtube.com/embed/C0DPdy98e4c)
```

[!embed height="120"](https://www.youtube.com/embed/C0DPdy98e4c)

## Text

Adds a caption to the embedded content.

```md
[!embed text="Test Video"](https://www.youtube.com/embed/C0DPdy98e4c)
```

[!embed text="Test Video"](https://www.youtube.com/embed/C0DPdy98e4c)

---

## Width

Specifies a width for the embedded content's area.

```md
[!embed width="300"](https://www.youtube.com/embed/C0DPdy98e4c)
```

[!embed width="300"](https://www.youtube.com/embed/C0DPdy98e4c)
