# Formatting

Markdown `.md` pages are plain text documents with a simple readable syntax format that aims at making writing for the internet easier. 

No special software is required to create an `.md` file. Any basic text editor will do.

Please see [markdownguide.org](https://www.markdownguide.org/cheat-sheet/) for a full demonstration of the formatting possibilities and best practices.

:::
View the actual [`formatting.md`](https://github.com/retypeapp/retype/blob/main/formatting.md) file used to create this page.
:::

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

:::
Need to draw attention to something? Use an alert.
:::
```

At a very basic level, to create a new page for your Retype project, do the following:

1. Create a `.md` file
2. Add a `# title`
3. Start writing

In addition to the standard Markdown options (see [cheat sheet](https://www.markdownguide.org/cheat-sheet/)), Retype includes some nice extras...

## Emojis :tada:

Retype uses [Mojee.io](https://mojee.io) to find emoji `:shortcodes:` within your document and replace with actual emoji characters. :+1:

You can place emoji `:shortcodes:` anywhere within your document, such as `:smile:` :smile: or `:unicorn_face:` :unicorn_face:. 

Use Mojee to [search](https://mojee.io/emojis/) for the emojis your love and paste the `:shortcode:` into your `.md` document.

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

To create an alert, just surround a block of text with `:::`.

```md
:::
This is an alert.
:::
```

:::
This is an alert.
:::

Alerts come in 6 different flavors which can be specified by passing a `type` immediately after the `:::`, such as `:::danger`.

Style | Color
--- | ---
`info` or none | Blue
`success` | Green
`caution` | Orange
`danger` | Red
`note` | Dark or Light depending on time of day

Alerts can also have titles. Add a space then add your title, such as `::: Title here` or `:::danger Title here`.

### Alert demo

```
:::info Info
This is a `info` alert.
:::

:::success Success
This is a `success` alert.
:::

:::caution Caution
This is a `caution` alert.
:::

:::danger Danger
This is a `danger` alert.
:::

:::note Note
This is a `note` alert, with dark and light modes.
:::
```

:::info Info
This is a `info` alert.
:::

:::success Success
This is a `success` alert.
:::

:::caution Caution
This is a `caution` alert.
:::

:::danger Danger
This is a `danger` alert.
:::

:::note Note
This is a `note` alert, with dark and light modes.
:::