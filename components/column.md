---
tags: [component]
icon: dot
---
# Column

The column component is used to create multiple equal width columns with a title for each column.

The column component is configured by wrapping any block of content in an opening and closing `|||` and setting a title for each column.

A column can contain any other content, such as text, paragraphs, links, tables, images, and other Retype [components](readme.md).

```md
||| Column 1
This is a paragraph inside a **column**.
|||
```

||| Column 1
This is a paragraph inside a **column**.
|||

!!!
A title is required for each column. The title is separated by one space from the opening `|||`, such as `||| Column 1`.
!!!

---

## Multiple columns

One or more columns can be configured by _stacking_ multiple column blocks.

```md
||| Column 1
Content 1
||| Column 2
Content 2
||| Column 3
Content 3
|||
```

||| Column 1
Content 1
||| Column 2
Content 2
||| Column 3
Content 3
|||

An unlimited number of columns is possible, although the practical limit will be determined by the width of the page conent area.

All columns will be the same width and there are no configuration option to make variable width columns.

---

## Code column

A special Code Column is created when a code block is configured inside a column and the only content of the column is a code block. The following sample demonstrates a 2-column layout with a code block in the second column position.

~~~
||| Demo
[!button Button](button.md)
||| Source
```md
[!button Button](button.md)
```
|||
~~~

||| Demo
[!button Button](button.md)
||| Source
```md
[!button Button](button.md)
```
|||

If any other content is directly inside the column, the column and code block will be rendered as normal. For example, let's add some text to the second column and see difference:

~~~
||| Demo
[!button Button](button.md)
||| Source
This is a Button component inside a column.
```md
[!button Button](button.md)
```
|||
~~~

||| Demo
[!button Button](button.md)
||| Source
This is a Button component inside a column.
```md
[!button Button](button.md)
```
|||

---

## Custom title

The column titles support configuring with Markdown, so links, [emojis](emoji.md), or [icons](icon.md) could also be added.

~~~
||| Title with emoji :thumbsup:

A column title with the [emoji](emoji.md) `:thumbsup:`.

||| Title with icon :icon-check-circle:

A column title with the [icon](icon.md) `:icon-check-circle:`.

|||
~~~

||| Title with emoji :thumbsup:

A column title with the [emoji](emoji.md) `:thumbsup:`.

||| Title with icon :icon-check-circle:

A column title with the [icon](icon.md) `:icon-check-circle:`.

|||
