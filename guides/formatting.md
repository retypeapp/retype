---
icon: note
tags: [guide]
---
# Formatting

Markdown **.md** pages are plain text documents with a simple human readable syntax that aims to make writing for the internet easier.

No special software is required to create a **.md** file. Any basic text editor will do. Just save the file with a **.md** file extension.

Please see [markdownguide.org](https://www.markdownguide.org/cheat-sheet/) for a full demonstration of the formatting possibilities and best practices.

!!!
View the actual [`formatting.md`](https://github.com/retypeapp/retype/blob/main/guides/formatting.md) file used to create this page.
!!!

---

## Quick start

The following sample demonstrates a very basic `sample.md` page sample with a page title and one paragraph.

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

---

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

1. Make a `readme.md` file
2. Add a `# title`
3. Start writing

### Home page

Your project should include a default file (`index.md`, `default.md`, `readme.md`, or `welcome.md`) within the root of the project. If there is a default file within the root folder, Retype will use that page as your home page. Clicking on the top-left logo or title will navigate to the home page.

Outside of the root of your project, adding a file with the exact same name as folder, will also act as a default page for that folder. For instance, adding `/guides/guides.md` is equivalent to `/guides/index.md`.

The default files can be used inside any folder of the project. Given the following folder and file structure, where `Guides` is a folder...

```
|-- Guides
    |-- index.md
    |-- getting-started.md
|-- readme.md
```

...Retype will create three pages in your website and the pages will be available at the following locations:

1. `/`
2. `/guides/`
3. `/guides/getting-started/`

!!!
If your home page is the Retype generated **Welcome** page, add a default page to the root of your project. The home page file can be named `index.md`, `default.md`, `readme.md`, or `welcome.md`.
!!!

---

## Components

In addition to the standard Markdown options, Retype includes many custom [components](/components/components.md) so you can easily add extra [!badge :gem: flair :gem:] to your document.

The most commonly used Retype components include [Alert](/components/alert.md) and [Tab](/components/tab.md):

### Alert

!!!
This is an Alert
!!!

~~~ Sample [Alert](/components/alert.md) component
!!!
This is an Alert
!!!
~~~

### Tab

+++ Tab 1
This is Tab 1
+++ Tab 2
This is another Tab
+++

~~~ Sample [Tab](/components/tab.md) component
+++ Tab 1
This is Tab 1
+++ Tab 2
This is another Tab
+++
~~~

[!ref See all components](/components/components.md)
