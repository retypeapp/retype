---
icon: cpu
---

# Integrations

Retype features integrations to third party services and tools to enhance the authoring experience, allowing for detailed website statistics, dynamic content, and advanced typesetting capabilities.

## Google Analytics

Retype can be set up with Google Analytics just by adding your google analytics ID to the project settings.

!!!
Google analytics support and resources are only and only enabled if an ID value is assigned to its configuration setting (see below).
!!!

### Available configuration settings

- [`integrations.googleAnalytics.id`](../configuration/project.md#googleanalytics)

---

## Gravatar

Retype will pull [page author's](../configuration/page.md#author) profile pictures from Gravatar where the specified e-mail address matches a gravatar profile.

Gravatar integration is enabled by default and can be disabled with [the `integrations.gravatar.enabled: false` project config](../configuration/project.md#gravatarenabled). Once disabled, no query for gravatar is made while accessing the built website and the default avatar figure is reverted to a default "person shade" used by retype before the integration was implemented.

!!!
Retype won't fetch gravatars in case a profile picture is chosen via [the page author's `avatar` config](../configuration/page.md#author), even if the link for the image is invalid.
!!!

!!!
Retype can only fetch Gravatar for the profile picture if an e-mail address is assigned to [the page's `author` config](../configuration/page.md#author).
!!!

### Available configuration settings

- [`integrations.gravatar.default`](../configuration/project.md#gravatardefault)
- [`integrations.gravatar.enabled`](../configuration/project.md#gravatarenabled)

---

## KaTeX

KaTeX integration allows for math formulas to be drawn seamlessly within Retype documents via dedicated markdown blocks and LaTeX-like syntax. See [Math Formulas documentation](../components/math-formulas.md) for details.

!!!
The KaTeX integration has no project-level setting. Its resources are only and only included to Retype built pages if there is one or more math block markdown in the document.
!!!

---

## Mermaid

Mermaid integration enables easy, markdown-friendly, flowcharts to be included in any Retype document. See [Mermaid component documentation](../components/mermaid.md) for details.

!!!
The Mermaid integration has no project-level setting. Its resources are only and only included to Retype built pages if there is one or more flowchart block markdown in the document.
!!!

---

## Mojee

The [Mojee.io](https://mojee.io) project is included in Retype to allow fast and seamless emoji shortcode expansion. It is used to replace text in titles, body, and icons with the respective emoji representation in Retype documents. See [the Emoji documentation](../components/emoji.md) for details.

!!!
The Mojee integration has no project-level setting. It is always enabled with Retype.
!!!

---

## Octicons

Retype uses [the Octicons icon library](https://github.com/primer/octicons) enhance your authored documents. They can be used both as [icon shortcodes pages](../components/icon.md) and as left navigation bar's icons next to page titles via [the page's `icon` config](../configuration/page.md#icon).

!!!
The Octicons integration has no project-level setting. It is always enabled with Retype.
!!!