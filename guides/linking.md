---
icon: link
---

# Linking

When Retype builds your pages it transforms input path into website links like this:

`articles/my_article.md` => `articles/my_article/index.html`

Which is accessed by simply `articles/my_article/`.

Because of this, Retype also transforms links to .md files within the project when they are composed using the link markdown `[text](link)`.

!!! Handle the links yourself
If control is needed over the address, using [raw HTML links](#raw-html-links) should be the way to go.
!!!

## Markdown linking

The examples below illustrate how markdown links are transformed during Retype Build

!!!
For effect of the examples below, we assume the edited file is the source of this page itself, that is, `guides/linking.md` in the project's input directory.
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

**Markdown:** `[No `.md` extension](formatting)` \
**Output:** [No `.md` extension](formatting) \
**Link:** `../formatting/`

**Markdown:** `[Link to HTML output](../formatting/index.html)` \
**Output:** [Link to HTML output](../formatting/index.html) \
**Link:** `../formatting/` \
**Notes:** Retype is able to tell the link refers to `/guides/formatting.md`, but displays a warning saying "consider revising URL to a proper input path".

===

### Invalid links

If a link points within the retype website -and- no .md file matches it, retype won't transform it.

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

To help with links, two token characters can be used with links. They are particularly useful for websites deployed inside a domain's directory or virtual path, like `http://www.mysite.com/docs`.

### Circumflex URL Token

The circumflex token (`^`), also called "root token", allows the reference to a path outside Retype's deploy file structure. Using the `http://www.mysite.com/docs` example, this would help define links outside the `/docs` prefix, as a means to ensure links could point to resources outside of retype's root yet in the same website.

One side effect of using rooted links is, the address won't be checked or replaced by Retype at build time like tokenless links are, so linking to `.md` files won't be subject to the usual transformation from the examples above.

!!!
For effect of the examples below, we asume Retype is being deployed to `http://www.mysite.com/docs`.
!!!

=== Examples

**Markdown:** `[Home](^/)` \
**Link:** `/`

**Markdown:** `[Pricing](^/pricing)` \
**Link:** `/pricing`

**Markdown:** `[Pricing](^/docs/FAQ.md)` \
**Link:** `/docs/faq.md`
**Notes:** Even if `FAQ.md` exists, retype won't transform or check the link.

===

### Tilde URL Token

The tilde token (`~`), or "base path token", prefixes retype's base directory to the specified link. Again, it is useful in scenarios where retype is hosted in a subdirectory of a website (like `http://www.myhsite.com/docs`), but it is also particularlyh useful when the same Retype installation may be deployed to different bases (staging/development releases to temporary hosting, for instances) or simply if the project may be deployed to different websites and root directories.

In other words, it would allow a Retype project to be deployed to different hosts and different root directories, changing just [the `url` config](~/configuration/project/#url) in project settings.

Like root tokens, base path tokens prevent the address from being replaced by Retype e.g. if a `.md` file in input is pointed by the link.

!!!
For effect of the examples below, we assume Retype is being deployed to `http://www.mysite.com/docs`.
!!!

=== Examples

**Markdown:** `[Docs home](~/)` \
**Link:** `/docs`

**Markdown:** `[A Text file](~/static/sample.txt)` \
**Link:** `/docs/static/sample.txt`

**Markdown:** `[A broken link](~/FAQ.md)` \
**Link:** `/docs/faq.md`
**Notes:** Like with root tokens, base path tokens prevent Retype from resolving links by itself, so linking `.md` files likely would bring unexpected results.

===

---

## Other Markdown components

Other markdown components like ref, image, etc, follows the same rules

!!!danger TODO
TODO TODO TODO
!!!

## Raw HTML anchor links

If retype markdown is not letting your link the way you need it, linking via HTML Anchor tags should help. Retype won't touch raw HTML links unless they begin with any of the URL tokens above.

!!!
For effect of the examples below, we assume the edited file is the source of this page itself, that is, `guides/linking.md` in the project's input directory.
!!!

=== Examples

**HTML:** `<a href="/">Website Root</a>` \
**Output:** <a href="/">Website Root</a> \
**Link:** `/`

**HTML:** `<a href="../formatting/">Formatting guide</a>` \
**Output:** <a href="../formatting/">formatting.md</a> \
**Link:** `/`
**Notes:** For a document in the same level directory we'd pass the link as one level above, for the `.md` file becomes a directory in the built website.

**HTML:** `<a href="../../configuration/project/">Project configs</a>` \
**Output:** <a href="../../configuration/project/">../configuration/project.md</a> \
**Link:** `../../configuration/project/`

===

### URL Tokens in raw links

The only transformation that actually takes place in raw HTML links is token substitution.

!!!
For effect of the examples below, we assume Retype is being deployed to `http://www.mysite.com/docs`.
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

Links to other websites are not mangled by retype, and URL tokens in the middle of URLs aren't replaced by Retype.

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