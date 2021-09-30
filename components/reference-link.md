---
tags: [component]
---
# Reference link

A special type of reference link can be configured by using the `!ref` specifier in a link.

```md
[!ref](../guides/getting-started.md)
```

[!ref](../guides/getting-started.md)

By default, the text of the link is not required if the `.md` page you are linking to is within the project. Retype will automatically use the `label` of the `.md` page as the link text.

---

## Custom text

The text of the link can be explicitly set by passing as the first part of the component config. In the following sample, we explicitly set the reference link text to `Getting Started`.

```md
[!ref Getting Started](../guides/getting-started.md)
```

[!ref Getting Started](../guides/getting-started.md)

Clicking anywhere within the reference link component will navigate to that new page.

From a functionality perspective, there is no difference betwen a `!ref` component and a regular hyperlink. The difference between the two is just how they are presented, with a Reference link component being more prominent than a regular hyperlink.


## Tilde base URL token

This component supports the tilde base URL token (`~`). This URL token prepends Retype's configured base address to the provided address, which should be a path to the same website (no `https://website.com/`).

### Examples

#### Links to a page in the same folder

```md
[!ref alert.md](alert.md)
[!ref alert](alert)

[!ref ~/components/alert.md (invalid)](~/components/alert.md)
[!ref ~/components/alert (valid)](~/components/alert)
```

[!ref alert.md](alert.md)
[!ref alert](alert)

[!ref ~/components/alert.md (invalid)](~/components/alert.md)
[!ref ~/components/alert (valid)](~/components/alert)

!!! Link resolution
Links with tilde expansion won't resolve against `.md` files. Simply omitting the file extension should make it so the link works.
!!!

#### Links to website root

```md
[!ref /about](/about)
[!ref ../about](../about)

[!ref ~/about](~/about)
```

[!ref /about](/about)
[!ref ../about](../about)

[!ref ~/about](~/about)

#### Links to a page in another folder

```md
[!ref /guides/getting-started](/guides/getting-started)
[!ref ../guides/getting-started](../guides/getting-started.md)

[!ref ~/guides/getting-started](~/guides/getting-started)
```

[!ref /guides/getting-started](/guides/getting-started)
[!ref ../guides/getting-started](../guides/getting-started.md)

[!ref ~/guides/getting-started](~/guides/getting-started)
