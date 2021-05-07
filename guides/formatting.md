---
icon: note
---
# Formatting

Markdown `.md` pages are plain text documents with a simple human readable syntax that aims to make writing for the internet easier.

No special software is required to create an `.md` file. Any basic text editor will do.

Please see [markdownguide.org](https://www.markdownguide.org/cheat-sheet/) for a full demonstration of the formatting possibilities and best practices.

!!!
View the actual [`formatting.md`](https://github.com/retypeapp/retype/blob/main/guides/formatting.md) file used to create this page.
!!!

## Quick start

The following sample demonstrates a very basic `.md` page sample with page title and one paragraph.


```md
# Page title here

This is just a paragraph.
```

We can build on the above by more formatting options such as **bold** text, images, and lists.

```md
# Page title here

This is just a paragraph.

The page can contain both [internal](/README.md) and [external](https://example.com) links.

![Your logo](logo.png)

Another paragraph with **bold**, _italic_, ~~strikethrough~~, and `code` samples.

#### Lists

- First item
- Second item
- Third item

1. First item
2. Second item
3. Third item

> "Cool! This is a quotation."

!!!
Need to draw attention to something? Use an alert.
!!!
```

At a very basic level, to create a new page for your Retype project, do the following:

1. Create an `.md` file
2. Add a `# title`
3. Start writing

In addition to the standard Markdown options (see [cheat sheet](https://www.markdownguide.org/cheat-sheet/)), Retype includes some nice extras...

---

## Emojis :heart_eyes_cat:

Retype uses [Mojee.io](https://mojee.io) to find emoji `:shortcodes:` within your document and replace with actual emoji characters. :+1:

You can place emoji `:shortcodes:` anywhere within your document, such as `:smile:` :smile: or `:unicorn_face:` :unicorn_face:.

Use Mojee to [search](https://mojee.io/emojis/) for your favorite emojis and paste the `:shortcode:` into your `.md` document.

:grinning: | :smiley: | :smile: | :grin: | :satisfied: | :sweat_smile: | :joy: | :wink: | :blush: | :innocent:
 -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
:heart_eyes: | :kissing_heart: | :relaxed: | :kissing_closed_eyes: | :yum: | :stuck_out_tongue: | :stuck_out_tongue_winking_eye: | :stuck_out_tongue_closed_eyes: | :neutral_face: | :expressionless:
:no_mouth: | :smirk: | :unamused: | :grimacing: | :relieved: | :pensive: | :sleepy: | :sleeping: | :mask: | :sunglasses:
:confused: | :flushed: | :disappointed_relieved: | :cry: | :sob: | :scream: | :confounded: | :persevere: | :disappointed: | :sweat:
:weary: | :tired_face: | :triumph: | :rage: | :angry: | :smiling_imp: | :skull: | :heart_eyes_cat: | :see_no_evil: | :speak_no_evil:
:kiss: | :cupid: | :sparkling_heart: | :heartpulse: | :heartbeat: | :revolving_hearts: | :two_hearts: | :broken_heart: | :heart: | :yellow_heart:
:green_heart: | :blue_heart: | :purple_heart: | :100: | :collision: | :wave: | :raised_hand: | :ok_hand: | :v: | :point_left:
:point_right: | :point_down: | :thumbsup: | :punch: | :clap: | :raised_hands: | :pray: | :muscle: | :eyes: | :information_desk_person:
:cherry_blossom: | :rose: | :new_moon_with_face: | :sunny: | :star: | :zap: | :fire: | :sparkles: | :tada: | :hearts:
:crown: | :notes: | :camera: | :arrow_right: | :arrow_left: | :arrow_forward: | :recycle: | :white_check_mark: | :heavy_check_mark: | :red_circle:

---

## Lists

### Checklist

```md
- [x] Item 1
- [x] Item 2
- [ ] Item 3
```

- [x] Item 1
- [x] Item 2
- [ ] Item 3

### Bullet list

```md
- Item 4
- Item 5
- Item 6
```

- Item 4
- Item 5
- Item 6

### Numbered list

```
1. Item 7
2. Item 8
3. Item 9
```

1. Item 7
2. Item 8
3. Item 9

---

## Code blocks

### Title

Retype includes the functionality to set a title on your markdown code blocks.

~~~
``` Code block title
var msg = "Set a code block title";
```
~~~

``` Code block title
var msg = "Set a code block title";
```

The title can be used in conjunction with the code reference type.

~~~
```js Code block title
var msg = "Set a code block title";
```
~~~

```js Code block title
var msg = "Set a code block title";
```

### Line numbers

Adding or removing line numbering to your code blocks can be configured by adding the `#` specifier character to the first line after the reference language.

~~~
```js #
var msg = "hello, world";
```
~~~

```js #
var msg = "hello, world";
```

You can also add a title after the `#`:

~~~
```js # Your title here
var msg = "hello, world";
```
~~~

```js # Your title here
var msg = "hello, world";
```

### Disable line numbers

Explicitly disabling the line numbering within code blocks is possible by using the `!#` specifier instead of `#`:

~~~
```js !#
var msg = "";
```
~~~

```js !#
var msg = "";
```

---

## Image alignment

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

[!ref Image alignment options](image_alignment.md)

The `plus` alignment options only apply when the page is `layout: central` or `layout: blog`.

For default page layouts with a left navigation and/or the right table of contents, the `plus` positions will fallback to their non-plus equivalents. For instance, `rightplus` will fallback to `right` and the `centerplus` will fallback to `center`.
