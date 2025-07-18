---
icon: play
tags: [component]
---
# Button

Similar to a [Badge](badge.md), the Button component uses the same syntax as a hyperlink, but is prefixed with a `!button` identifier.

||| Demo
[!button Button](button.md)

[Normal link](button.md)
||| Source
```md
[!button Button](button.md)

[Normal link](button.md)
```
|||

---

## Variant

```md
// Text only (default Primary variant)
[!button My Button]

// Text with variant
[!button variant="base" text="My Button"]

// With link and variant
[!button variant="primary" text="My Button"](https://retype.com/)
```

| Variant | Example |
| --- | --- |
| `base` | [!button variant="base" text="Base"] |
| `primary` (default) | [!button variant="primary" text="Primary"] |
| `secondary` | [!button variant="secondary" text="Secondary"] |
| `success` | [!button variant="success" text="Success"] |
| `danger` | [!button variant="danger" text="Danger"] |
| `warning` | [!button variant="warning" text="Warning"] |
| `info` | [!button variant="info" text="Info"] |
| `light` | [!button variant="light" text="Light"] |
| `dark` | [!button variant="dark" text="Dark"] |
| `ghost` | [!button variant="ghost" text="Ghost"] |
| `contrast` | [!button variant="contrast" text="Contrast"] |

---

## Corners

```md
[!button text="Default"](button.md)
[!button corners="square" text="Square"](button.md)
[!button corners="pill" text="Button Pill"](button.md)
```

| Size | Example |
| --- | --- |
| `round` (default) | [!button text="Default"] |
| `square` | [!button corners="square" text="Square"] |
| `pill` | [!button corners="pill" text="Button Pill"] |

---

## Size

```md
[!button size="m" text="Medium"](button.md)
```

| Size | Example |
| --- | --- |
| `xs` | [!button size="xs" text="XSmall"] |
| `s` | [!button size="s" text="Small"] |
| `m` (default) | [!button size="m" text="Medium"] |
| `l` | [!button size="l" text="Large"] |
| `xl` | [!button size="xl" text="XLarge"] |
| `2xl` | [!button size="2xl" text="2XLarge"] |
| `3xl` | [!button size="3xl" text="3XLarge"] |

---

## Target

Sets the `target` attribute of the button and specifies which window or tab to open the link into.

[!button target="blank" text="Retype"](https://retype.com/)

```md
[!button target="blank" text="Retype"](https://retype.com/)
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

---

## Icon and Emoji

### Octicons

[Octicons](/components/octicons.md) can be used as an icon by settiing the `icon` property with the name of the Octicon.

```md
[!button variant="info" icon="person" text="User"](button.md)
[!button variant="primary" icon="paper-airplane" iconAlign="right" text="Send"](button.md)
```

[!button variant="info" icon="person" text="User" margin="0 8 0 0"]
[!button variant="primary" icon="paper-airplane" iconAlign="right" text="Send"]

### Emoji

Emoji `:shortcodes:` can be used for the icon. Please see [Mojee](https://mojeeio.github.io/Mojee//emojis) for a full list of supported Emoji shortcodes.

```md
[!button variant="light" icon=":heart:" text="Like"](button.md)
[!button variant="info" icon=":rocket:" iconAlign="right" text="Rocket"](button.md)
```

[!button variant="light" icon=":heart:" text="Like" margin="0 8 0 0"]
[!button variant="info" icon=":rocket:" iconAlign="right" text="Rocket"]

### Image file

Any image file can be used as the `icon`.

```md
[!button icon="../static/retype-icon.svg"](button.md)
```

[!button icon="../static/retype-icon.svg"]

### SVG image

The `icon` can also be set with an inline `<svg>` element.

```
[!button icon="<svg width=&quot;24&quot; height=&quot;24&quot;><path fill-rule=&quot;evenodd&quot; d=&quot;M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 1.5a6 6 0 100-12 6 6 0 000 12z&quot;></path></svg>" text="Visit website"](button.md)
```

[!button icon="<svg width=&quot;24&quot; height=&quot;24&quot;><path fill-rule=&quot;evenodd&quot; d=&quot;M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 1.5a6 6 0 100-12 6 6 0 000 12z&quot;></path></svg>" text="Visit website"]

---

## Theme variables

Retype gives you full control over the look and feel of your button components through customizable [[theme variables]].

You can override any of theme variable in your `retype.yml` configuration file using the `theme.base` and `theme.dark` settings. 

For example, to change the `primary` button color and text color for all instances of the `primary` button within your project, add the following to your project's `retype.yml` file:

```yaml
theme:
  base:
    # Revise the primary variant base color
    # across all components within the project
    # primary: "#209fb5" 

    # Or, adjust button only theme variables
    button-primary: "#209fb5"
    button-primary-text: "#eff1f5"
```

To learn more about theme variables and how they work across Retype, check out the [Themes Guide](/guides/themes.md), the [[Theme Variables]] documentation, and [`theme`](/configuration/project.md#theme) Project settings.

!!!
All button theme variables can be customized in this way. Please refer to the [Button Component](/configuration/theme-variables.md#button-component) theme variables for the latest options.
!!!