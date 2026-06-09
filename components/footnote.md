---
icon: reply
tags: [component]
---
# Footnote

Footnotes use standard Markdown syntax. Add a reference inline, then define the footnote content elsewhere on the page.

```md
This sentence has a footnote.[^1]

[^1]: This is the footnote content.
```

This sentence has a footnote.[^basic]

[^basic]: This is the footnote content.

---

## Inline Markdown

Footnotes can include basic inline Markdown such as emphasis, links, and inline code.

```md
The release notes include extra context.[^release]

[^release]: Footnotes can include **bold text**, [links](https://retype.com/), and `inline code`.
```

The release notes include extra context.[^release]

[^release]: Footnotes can include **bold text**, [links](https://retype.com/), and `inline code`.

---

## Longer Notes

Indent additional lines to add multiple blocks to the same footnote.

```md
This paragraph has a longer footnote.[^details]

[^details]: The first paragraph of the footnote.

    - A nested list item
    - Another list item
```

This paragraph has a longer footnote.[^details]

[^details]: The first paragraph of the footnote.

    - A nested list item
    - Another list item

---

## Return Link

Retype adds a return icon to each rendered footnote. Click the icon to jump back to the matching footnote reference in the content.

```md
The return link is added automatically.[^return]

[^return]: Click the generated return icon to go back to the reference.
```

The return link is added automatically.[^return]

[^return]: Click the generated return icon to go back to the reference.