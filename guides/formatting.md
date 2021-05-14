---
icon: note
---
# Formatting

Markdown `.md` pages are plain text documents with a simple human readable syntax that aims to make writing for the internet easier.

No special software is required to create an `.md` file. Any basic text editor will do. Just save the file with a `.md` file extension.

Please see [markdownguide.org](https://www.markdownguide.org/cheat-sheet/) for a full demonstration of the formatting possibilities and best practices.

!!!
View the actual [`formatting.md`](https://github.com/retypeapp/retype/blob/main/guides/formatting.md) file used to create this page.
!!!

## Quick start

The following sample demonstrates a very basic `.md` page sample with page title and one paragraph.

```md
# Page title here

This is a paragraph.
```

We can build on the above sample by adding more content and formatting, such as **bold** text, images, and lists.

```md
# Page title here

This is a paragraph.

Both [internal](README.md) and [external](https://example.com) links work.

![Your logo](logo.png)

Another paragraph with **bold**, _italic_, ~~strikethrough~~, and `code` samples.

## Lists

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

1. Make a new `sample.md` file
2. Add a `# title`
3. Start writing

## Components

In addition to the standard Markdown options, Retype includes many custom [components](../components) so you can easily add extra [!badge :gem: flair :gem:] to your document.

The most commonly used Retype components include [Alert](../components/alert.md) and [Tab](../components/tab.md):

### Alert

!!!
This is an Alert
!!!

~~~ Sample [Alert](../components/alert.md) component
!!!
This is an Alert
!!!
~~~

### Tab

||| Tab 1
This is Tab 1
||| Tab 2
This is another Tab
|||

~~~ Sample [Tab](../components/tab.md) component
||| Tab 1
This is Tab 1
||| Tab 2
This is another Tab
|||
~~~

[!ref See all components](../components)
