---
tags: [component]
icon: dot
---
# Table

Tables are configured using a combination of `|` pipe characters to separate columns and at least three `---` dashes to separate the header row from the table body.

The following sample demonstrates a basic table configuration:

```md
Name   | Value
---    | ---
Item 1 | Blue
Item 2 | Green
```

The above configuration creates the following table in the final generated website:

Name   | Value
---    | ---
Item 1 | Blue
Item 2 | Green

The `|` pipe character column separators are not required to vertically align. Extra whitespace within the column widths is ignored and the result will look the same.

```md
Name | Value
--- | ---
Item 1 | Blue
Item 2 | Green
```

---

## Alignment

The alignment of text within a column can be configured by using the `:` colon character within the header separator row.

By default, text is left aligned. To center align text, use `:---:` with colons at both ends of the header separator. To right align text, use `---:` with a colon on the right end of the header separator.

```md
Name   | Value | Description
:---   | :---: | ---:
Item 1 | Blue  | This is `Item 1`.
Item 2 | Green | This is `Item 2`.
```

Name   | Value | Description
:---   | :---: | ---:
Item 1 | Blue  | This is `Item 1`.
Item 2 | Green | This is `Item 2`.

!!!
Column widths are calculated dynamically by the web browser and will vary depending on the content of the cells.
!!!

---

## Compact

A table compact style is possible by applying the `compact` class.

The compact style reduces the cell padding and text size across the entire table.

```md
Name   | Value { class="compact" }
---    | ---
Item 1 | Blue
Item 2 | Green
```

Name   | Value { class="compact" }
---    | ---
Item 1 | Blue
Item 2 | Green
