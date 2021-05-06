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

## Alerts

Alert components help to highlight important messages for the reader.

To create an alert, just surround a block of text or any markdown content with `!!!`.

```md
!!!
This is an alert.
!!!
```

!!!
This is an alert.
!!!

### Alert title

Alerts can also have titles. Add a space, then add your title, such as `!!! My title`.

```md
!!! My title
This is an alert.
!!!
```

!!! My title
This is an alert.
!!!

### Alert variants

Alerts come in 6 different flavors which can be specified by passing a `variant` immediately after the `!!!`, such as `!!!danger`.

| Variant | Color |
| --- | --- |
| `primary` (default) | `blue` |
| `secondary` | `gray` |
| `success` | `green` |
| `danger` | `red` |
| `warning` | `yellow` |
| `info` | `light-blue` |
| `light` | `light` |
| `dark` | `dark` |
| `contrast` | `light` or `dark` depending on time of day |

### Alert demo

```
!!!primary Primary
This is a `primary` alert.
!!!

!!!secondary Secondary
This is a `secondary` alert.
!!!

!!!success Success
This is a `success` alert.
!!!

!!!danger Danger
This is a `danger` alert.
!!!

!!!warning Warning
This is a `warning` alert.
!!!

!!!info Info
This is a `info` alert.
!!!

!!!light Light
This is a `light` alert.
!!!

!!!dark Dark
This is a `dark` alert.
!!!

!!!contrast Contrast
This is a `contrast` alert.
!!!
```

!!!primary Primary
This is a `primary` alert.
!!!

!!!secondary Secondary
This is a `secondary` alert.
!!!

!!!success Success
This is a `success` alert.
!!!

!!!danger Danger
This is a `danger` alert.
!!!

!!!warning Warning
This is a `warning` alert.
!!!

!!!info Info
This is a `info` alert.
!!!

!!!light Light
This is a `light` alert.
!!!

!!!dark Dark
This is a `dark` alert.
!!!

!!!contrast Contrast
This is a `contrast` alert.
!!!

## Tabs

Tabs are super simple to configure by just surrounding a block of text with `|||` and including a `title`.

```md
||| Tab 1
This is a Tab
|||
```

||| Tab 1
This is a Tab
|||

### Multiple tabs

Multiple Tabs can be configured by stacking `|||` blocks.

```md
||| Tab 1
This is a Tab
||| Tab 2
This is another Tab
||| Tab 3
Wow! Yet another tab :+1:
|||
```

||| Tab 1
This is a Tab
||| Tab 2
This is another Tab
||| Tab 3
Wow! Yet another tab :+1:
|||

## Panels

A Panel is created by surrounding a block of content with `+++` and including a `title`.

```
+++ My Panel
This is a Panel. Expanded by default.
+++
```

+++ My Panel
This is a Panel. Expanded by default.
+++

### Collapsed panel

By default, Panels are collapsible and will be in there expanded state. You can configure Panels to initially render in their collapsed state by using `++-`.

```
++- My Panel
This is a collapsed Panel. :+1:
+++
```

++- My Panel
This is a collapsed Panel. :+1:
+++

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

## Buttons

A Button uses the same syntax as a hyperlink, but is prefixed with a `!button` type.

```md
[Click me](https://example.com/)         <-- a link

[!button Click me](https://example.com/) <-- a button
```

### Basic

[!button text="No link" margin="0 8 0 0"]
[!button text="Internal link" margin="0 8 0 0"](../configuration/project.md)
[!button text="External link" margin="0 8 0 0"](https://retype.com/)

### Variants

```md
[!button variant="primary" text="Primary"]
```

| Variant | Example |
| --- | --- |
| `primary` (default) | [!button variant="primary" text="Primary"] |
| `secondary` | [!button variant="secondary" text="Secondary"] |
| `success` | [!button variant="success" text="Success"] |
| `danger` | [!button variant="danger" text="Danger"] |
| `warning` | [!button variant="warning" text="Warning"] |
| `info` | [!button variant="info" text="Info"] |
| `light` | [!button variant="light" text="Light"] |
| `dark` | [!button variant="dark" text="Dark"] |
| `contrast` | [!button variant="contrast" text="Contrast"] |

### Corners

```md
[!button text="Default"]
[!button corners="square" text="Square"]
[!button corners="pill" text="Button Pill"]
```

| Size | Example |
| --- | --- |
| Default | [!button text="Default"] |
| `square` | [!button corners="square" text="Square"] |
| `pill` | [!button corners="pill" text="Button Pill"] |

### Size

```md
[!button size="m" text="Medium"]
```

| Size | Example |
| --- | --- |
| `xs` | [!button size="xs" text="XSmall"] |
| `s` | [!button size="s" text="Small"] |
| `m` (default) | [!button size="m" text="Medium"] |
| `l` | [!button size="l" text="Large"] |
| `xl` | [!button size="xl" text="XLarge"] |
| `2xl` | [!button size="2xl" text="2XLarge"] |
| `3xl` | [!button size="3xl" text="3XLarge"] |

### Icon and Emoji

#### Octicons

```md
[!button variant="info" icon="person" text="User"]
[!button variant="primary" icon="paper-airplane" iconAlign="right" text="Send"]
```

[!button variant="info" icon="person" text="User" margin="0 8 0 0"]
[!button variant="primary" icon="paper-airplane" iconAlign="right" text="Send"]

#### Emoji

```md
[!button variant="light" icon=":heart:" text="Like"]
[!button variant="info" icon=":rocket:" iconAlign="right" text="Rocket"]
```

[!button variant="light" icon=":heart:" text="Like" margin="0 8 0 0"]
[!button variant="info" icon=":rocket:" iconAlign="right" text="Rocket"]


#### Image

```md
[!button icon="/static/retype-logo.svg"]
```

[!button icon="/static/retype-logo.svg"]

[!button icon="<svg width=&quot;24&quot; height=&quot;24&quot;><path fill-rule=&quot;evenodd&quot; d=&quot;M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 1.5a6 6 0 100-12 6 6 0 000 12z&quot;></path></svg>" text="Visit website"](https://retype.com/)

### Inline

This is a paragraph with a [!button size="xs" text="Button" margin="0 4"].

### Block

```md
[!button Button 1]

[!button Button 2]
```

[!button Button 1]

[!button Button 2]

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

## File download

A static file download component can be configured by using the `!file` specifier in a link.

```md File download component
[!file Sample](../static/sample.txt)
```

[!file Sample](../static/sample.txt)

Clicking anywhere within the file download component will trigger the web browser to download the static file.

## Reference link

A special type of reference link can be configured by using the `!ref` specifier in a link.

```md Reference link component
[!ref Getting Started](../guides/getting_started.md)
```

[!ref Getting Started](../guides/getting_started.md)

Clicking anywhere within the reference link component will navigate to that new page.

From a functionality perspective, there is no difference betwen a `!ref` component and a regular hyperlink. The difference between the two is just how they are presented.

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
