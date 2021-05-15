# Reference link

A special type of reference link can be configured by using the `!ref` specifier in a link.

```md
[!ref](../guides/getting_started.md)
```

[!ref](../guides/getting_started.md)

By default, the text of the link is not required if the `.md` page you are linking to is within the project. Retype will automatically use the `label` of the `.md` page as the link text.

---

## Custom text

The text of the link can be explicitly set by passing as the first part of the component config. In the following sample, we explicitly set the reference link text to `Getting Started`.

```md
[!ref Getting Started](../guides/getting_started.md)
```

[!ref Getting Started](../guides/getting_started.md)

Clicking anywhere within the reference link component will navigate to that new page.

From a functionality perspective, there is no difference betwen a `!ref` component and a regular hyperlink. The difference between the two is just how they are presented, with a Reference link component being more prominent than a regular hyperlink.
