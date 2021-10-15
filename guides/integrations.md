---
icon: cpu
---

# Integrations

Retype features integrations to third party services and tools to enhance the authoring experience, allowing for detailed website statistics, dynamic content, and advanced typesetting capabilities.

## Google Analytics

Retype can be set up with Google Analytics just by adding your google analytics ID to the project settings. Google analytics support and resources are only and only generated if an ID value is set in Retype project settings.

### Available configuration settings

- [`integrations.googleAnalytics.id`](../configuration/project.md#googleanalytics)

---

## Gravatar

Retype pulls [page author's](../configuration/page.md#author) profile pictures from [Gravatar](https://gravatar.com) where the specified e-mail address matches an existing profile in the service.

Gravatar integration is enabled by default and can be disabled with [the `integrations.gravatar.enabled: false` project config](../configuration/project.md#gravatarenabled). Once disabled, the default avatar figure is reverted to a default "person shade" icon used by Retype before the integration was implemented.

Retype will not fetch from Gravatar in case a profile picture is chosen via [the page author's `avatar` config](../configuration/page.md#author), even if the link for the image is not valid.

### Available configuration settings

- [`integrations.gravatar.default`](../configuration/project.md#gravatardefault)
- [`integrations.gravatar.enabled`](../configuration/project.md#gravatarenabled)

---

## KaTeX

The [KaTeX](https://katex.org) integration allows for math formulas to be drawn seamlessly in Retype documents. See [Math Formulas documentation](../components/math-formulas.md) for details.

There are no project-level settings for the KaTeX integration. Its resources (JavaScript, style sheets, etc) are only output if one or more documents in the project uses it; these resources will only be included to a page if KaTeX blocks are actually used in it.

---

## Mermaid

[Mermaid](https://mermaid-js.github.io/mermaid) integration enables easy building of flowcharts with Retype. See [the Mermaid component documentation](../components/mermaid.md) for details.

There are no project-level settings for the Mermaid integration. Its resources (JavaScript, style sheets, etc) are only output if one or more documents in the project uses it; these resources will only be included to a page if Mermaid blocks are actually used in it.

---

## Mojee

The [Mojee.io](https://mojee.io) project is used with Retype to enable emoji handling. Mojee employs efficient conversion of shortcode into their respective characters, and has been used with Retype since the early stages of the project. See [the Emoji documentation](../components/emoji.md) for details.

The Mojee integration has no project-level setting. It is always enabled with Retype.

---

## Octicons

Retype uses [the Octicons icon library](https://github.com/primer/octicons) to enhance Retype experience with descriptive and rich icons. These icons can be used both as [`icon-` prefixed shortcodes in pages](../components/icon.md) and as left navigation bar's caption icons, specified with [the page's `icon` config](../configuration/page.md#icon).

The Octicons integration has no project-level setting. It is always enabled with Retype.

!!!
Document titles can have octicons shortcodes like `:icon-home:`, and the icon will display in the page. However, icons are suppressed from the left and right navigadtion bars.
!!!