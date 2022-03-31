---
tags: [component]
icon: dot
---
# Reference link

A special type of reference link can be configured by using the `!ref` specifier in a link.

```md
[!ref](/guides/getting-started.md)
```

[!ref](/guides/getting-started.md)

By default, the text of the link is not required if the `.md` page you are linking to is within the project. Retype will automatically use the `label` of the `.md` page as the link text.

---

## Custom text

The text of the link can be explicitly set by passing as the first part of the component config. In the following sample, we explicitly set the reference link text to `Getting Started`.

```md
[!ref Getting Started](/guides/getting-started.md)
```

[!ref Getting Started](/guides/getting-started.md)

Clicking anywhere within the reference link component will navigate to that new page.

From a functionality perspective, there is no difference betwen a `!ref` component and a regular hyperlink. The difference between the two is just how they are presented, with a Reference link component being more prominent than a regular hyperlink.

---

## Custom icon

The `icon` used for the reference link component can be customized using a name/value pair syntax for the `text` and `icon` attributes. This allows for setting a custom `icon` and `text` value at the same time. The `icon` attribute can be initialize with one of the following:
- [Octicon](https://octicons-primer.vercel.app/octicons/) name
- Emoji `:shortcode:` (please see [Mojee](https://mojee.io/emojis) for a full list of supported Emoji shortcodes)
- Image file URL

The following samples demonstrate setting a custom `icon`:

```
[!ref icon="rocket"](/guides/getting-started.md)
[!ref icon=":rocket:"](/guides/getting-started.md)
[!ref icon="../static/retype-icon.svg"](/guides/getting-started.md)
```

[!ref icon="rocket"](/guides/getting-started.md)
[!ref icon=":rocket:"](/guides/getting-started.md)
[!ref icon="../static/retype-icon.svg"](/guides/getting-started.md)

By default, the referred page title is used as the component text value and the text can be customized by explicitly passing a separate `text` value.

```
[!ref icon="rocket" text="To the moon"](/guides/getting-started.md)
```

[!ref icon="rocket" text="To the moon"](/guides/getting-started.md)

---

## Target

Sets the `target` attribute of the reference link and specifies which window or tab to open the link into.

[!ref target="blank" text="Retype"](https://retype.com/)

```md
[!ref target="blank" text="Retype"](https://retype.com/)
```

If no `target` is configured, the link will open in the current tab.

The `target` can be set to any value, although `blank` is common and will open the link in a new tab. Retype will automatically transform the value `blank` into `_blank` which is the actual value required by the browser to indicate that a hyperlink should be opened in a new tab.

There are several other values that may be prefixed with an `_` character, including `self`, `parent`, and `top`. The following table demonstrates some common scenarios and naming convention used by Retype to normalize the `target` values.

Config `target` value | Runtime `target` value
--- | ---
`blank` | `_blank`
`parent` | `_parent`
`top` | `_top`
`self` | `_self`
`news1` | `news1`
`nEWs2` | `news2`
`recent NEWS` | `recent-news`

See also the [`links.target`](/configuration/project.md#target) configuration.