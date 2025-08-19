---
icon: link
---

# Linking

When Retype builds your pages, it transforms input paths into website links like this:

`articles/my_article.md` => `articles/my_article/index.html`

Which can be accessed simply by `articles/my_article/` as part of the website address.

Because of this, Retype also transforms links to `.md` files within the project when they are composed using the link markdown `[text](link)`.

## Markdown linking

The examples below illustrate how markdown links are transformed during Retype Build

!!!
For the examples below, suppose the edited file is the source of this page itself, that is, `guides/linking.md` in the project's input directory.
!!!

=== Examples

**Markdown:** `[Home](/README.md)` \
**Output:** [Home](/README.md) \
**Link:** `/`

**Markdown:** `[FAQ](/FAQ.md)` \
**Output:** [FAQ](/FAQ.md) \
**Link:** `/faq/`

**Markdown:** `[Formatting](formatting.md)` \
**Output:** [Formatting](formatting.md) \
**Link:** `../formatting/`

**Markdown:** `[Here](linking.md)` \
**Output:** [Here](linking.md) \
**Link:** (empty)

**Markdown:** `[../guides/Here](../guides/linking.md)` \
**Output:** [../guides/Here](../guides/linking.md) \
**Link:** (empty)

**Markdown:** `[/guides/Here](/guides/linking.md)` \
**Output:** [/guides/Here](/guides/linking.md) \
**Link:** `/guides/linking/`

**Markdown:** `[Back to top](#linking)` \
**Output:** [Back to top](#linking) \
**Link:** `#linking`

**Markdown:** `[Alert Component (relative)](../components/alert.md)` \
**Output:** [Alert Component (relative)](../components/alert.md) \
**Link:** `../../components/alert/`

**Markdown:** `[Alert Component (absolute)](/components/alert.md)` \
**Output:** [Alert Component (absolute)](/components/alert.md) \
**Link:** `/components/alert/`

**Markdown:** `[Alert variants (anchor)](../components/alert.md#variants)` \
**Output:** [Alert variants (anchor)](../components/alert.md#variants) \
**Link:** `../../components/alert/#variants`

**Markdown:** ``[No `.md` extension](formatting)`` \
**Output:** [No `.md` extension](formatting) \
**Link:** `../formatting/`

**Markdown:** `[Link to HTML output](../formatting/index.html)` \
**Output:** [Link to HTML output](../formatting/index.html) \
**Link:** `../formatting/` \
**Notes:** Retype is able to tell the link refers to `/guides/formatting.md`, but displays a warning saying "consider revising URL to a proper input path".

===

### Invalid links

If a link points within the Retype website -and- no .md file matches it, no transformation will be made.

=== Examples

**Markdown:** `[Broken link](no-page-here.md)` \
**Output:** [Broken link](no-page-here.md) \
**Link:** `no-page-here.md`

**Markdown:** `[Relative Broken link](../components/no-page-here.md)` \
**Output:** [Relative Broken link](../components/no-page-here.md) \
**Link:** `../components/no-page-here.md`\
**Notes:** The link to an upper level folder will still point within `guides/`.

**Markdown:** `[Broken link to .html](not-exiting-page.html)` \
**Output:** [Broken link to .html](not-exiting-page.html) \
**Link:** `not-existing-page.html`

**Markdown:** `[Alert (broken anchor)](../components/alert.md#invalid-anchor)` \
**Output:** [Alert (broken anchor)](../components/alert.md#invalid-anchor) \
**Link:** `../../components/alert/#invalid-anchor` \
**Notes:** An invalid anchor still allows the page itself to be resolved, but the anchor will be kept.

===

---
## URL Tokens

To help linking around Retype documents, two different token characters can be used to prefix addresses. They are particularly useful for websites deployed inside a domain's directory or virtual path, like `http://example.com/docs`.

### Circumflex URL Token

The circumflex token (`^`), often called "root token" or "caret token", allows the reference to a path outside Retype's deploy file structure. Using the `http://example.com/docs` site as example, the token helps making links outside the `/docs` path space, as a means to ensure links pointing to resources outside of Retype's root, yet in the same website. Avoiding then unintended transformations in the final URL.

One side effect of using rooted links is, the address will not be checked or replaced by Retype at build time like ordinary links are. This means, linking to `.md` files will not be subject to the usual transformation showcased in the examples above.

!!!
For the examples below, suppose Retype is being deployed to `http://example.com/docs`.
!!!

=== Examples

**Markdown:** `[Home](^/)` \
**Link:** `/`

**Markdown:** `[Pricing](^/pricing)` \
**Link:** `/pricing`

**Markdown:** `[Pricing](^/docs/FAQ.md)` \
**Link:** `/docs/faq.md` \
**Notes:** Even if `FAQ.md` exists, Retype will not transform or check the link.

===

### Tilde URL Token

The tilde token (`~`), or "base path token", prefixes the base directory to the specified link. Again, it is useful in scenarios where Retype is hosted in a subdirectory of a website (like `http://example.com/docs`), but it is also particularly useful when the same Retype installation may be deployed to different bases (staging/development releases to temporary hosting, for instance) or simply if the project may be deployed to different websites and root directories.

In other words, it would allow a Retype project to be deployed to different hosts and different root directories, changing just [the `url` config](~/configuration/project/#url) in project settings.

Like **root tokens**, the **base path tokens** prevent the address from being replaced by Retype e.g. if a `.md` file in input is pointed by the link.

!!!
For the examples below, suppose Retype is being deployed to `http://example.com/docs`.
!!!

=== Examples

**Markdown:** `[Docs home](~/)` \
**Link:** `/docs`

**Markdown:** `[A Text file](~/static/sample.txt)` \
**Link:** `/docs/static/sample.txt`

**Markdown:** `[A broken link](~/FAQ.md)` \
**Link:** `/docs/faq.md` \
**Notes:** Like with root tokens, base path tokens prevent Retype from resolving links by itself, so linking `.md` files likely would bring unexpected results.

===

---

## Other Markdown components

The same rules portrayed above also apply to other markdown components involving links. Likewise, the following Retype-flavored, exclusive components, are also affected:

- [Button](../components/button.md)
- [File download](../components/file-download.md)
- [Image](../components/image.md)
- [Reference link](../components/reference-link.md)

---

## Raw HTML anchor links

If Retype markdown is not letting your link the way you need it, linking via HTML Anchor tags (`<a href="url">text</a>`) should help. Retype will not touch raw HTML links unless they begin with any of the URL tokens above.

!!!
For the examples below, suppose the edited file is the source of this page itself, that is, `guides/linking.md` in the project's input directory.
!!!

=== Examples

**HTML:** `<a href="/">Website Root</a>` \
**Output:** <a href="/">Website Root</a> \
**Link:** `/`

**HTML:** `<a href="../formatting/">Formatting guide</a>` \
**Output:** <a href="../formatting/">formatting.md</a> \
**Link:** `/`
**Notes:** For a document in the same level directory we would pass the link as one level above, for the `.md` file becomes a directory in the built website.

**HTML:** `<a href="../../configuration/project/">Project configs</a>` \
**Output:** <a href="../../configuration/project/">../configuration/project.md</a> \
**Link:** `../../configuration/project/`

===

### URL Tokens in raw links

The only transformation that actually takes place in raw HTML links is token substitution.

!!!
For the examples below, suppose Retype is being deployed to `http://example.com/docs`.
!!!

=== Examples

**HTML:** `<a href="~/">Docs home</a>`\
**Link:** `/docs`

**HTML:** `(<a href="~/static/sample.txt">A Text file</a>` \
**Link:** `/docs/static/sample.txt`

**HTML:** `<a href="~/faq/>FAQ</a>` \
**Link:** `/docs/faq/`

**HTML:** `<a href="~/faq/>FAQ</a>` \
**Link:** `/docs/faq/`

**HTML:** `<a href="^/">Website root</a>` \
**Link:** `/`

**HTML:** `<a href="^/pricing">Pricing</a>` \
**Link:** `/pricing`

===

---

## Outside world

Links to other websites are not manipulated by Retype, and URL tokens in the middle of URLs are not replaced by Retype.

=== Examples

**Markdown:** `[Google search](https://www.google.com/)` \
**Output:** [Google search](https://www.google.com/) \
**Link:** `https://www.google.com/`

**Markdown:** `[PuTTY home](https://www.chiark.greenend.org.uk/~sgtatham/putty/)` \
**Output:** [PuTTY home](https://www.chiark.greenend.org.uk/~sgtatham/putty/) \
**Link:** `https://www.chiark.greenend.org.uk/~sgtatham/putty/`

**HTML:** `<a href="https://www.google.com/">Google search</a>` \
**Output:** <a href="https://www.google.com/">Google search</a> \
**Link:** `https://www.google.com/`

**HTML:** `<a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/">PuTTY home</a>` \
**Output:** <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/">PuTTY home</a> \
**Link:** `https://www.chiark.greenend.org.uk/~sgtatham/putty/`

===