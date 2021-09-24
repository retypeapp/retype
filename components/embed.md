---
tags: [component]
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
