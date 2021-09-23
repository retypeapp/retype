---
tags: [component]
---
# Embed

The `embed` component helps with content embedding.

In Retype's markdown, the syntax is similar to linking, using the `!embed` keyword as the link text:

```md
[!embed](link)
```

Where the link is the full URL for the embedded resource. For instance, for an youtube video, it would be:

```md
[!embed](https://www.youtube.com/embed/C0DPdy98e4c)
```

The markdown above results in:

[!embed](https://www.youtube.com/embed/C0DPdy98e4c)

The component also accepts some options to customize how the embedded content is set up in the page, as detailed in below.

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


## Samples

```md
[!embed](https://www.teachertube.com/embed/videos/507196)
```

[!embed](https://www.teachertube.com/embed/videos/507196)

---

```md
[!embed text="The Nomadic Civilization"](https://www.teachertube.com/embed/videos/503142)
```

[!embed text="The Nomadic Civilization"](https://www.teachertube.com/embed/videos/503142)

---

```md
[!embed aspect="4:3"](https://www.youtube.com/embed/T18NCobS43c)
```

[!embed aspect="4:3"](https://www.youtube.com/embed/T18NCobS43c)

Retype is also capable of handling normal youtube URLs as embedded content.

```md
[!embed](https://www.youtube.com/watch?v=C0DPdy98e4c)
```

[!embed](https://www.youtube.com/watch?v=C0DPdy98e4c)