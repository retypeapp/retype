---
icon: id-badge
tags: [component]
---
# Badge

## Updates

The following recent updates have been made to this page:

[!badge NEW|info] `base`
: New `base` variant

---

Similar to a [Button](button.md), the Badge component uses the same syntax as a hyperlink, but is prefixed with a `!badge` identifier.

||| Demo
[!badge Badge](badge.md)

[Normal link](badge.md)
||| Source
```md
[!badge Badge](badge.md)

[Normal link](badge.md)
```
|||

With the Badge component, the link is optional and can be omitted.

||| Demo
[!badge Badge]
||| Source
```md
[!badge Badge]
```
|||

---

## Variant

```md
// Text only (default Primary variant)
[!badge My Badge]

// Text with variant
[!badge variant="base" text="My Badge"]

// With link and variant
[!badge variant="primary" text="My Badge"](https://retype.com/)
```

| Variant | Text only | With link | 
| --- | --- | --- |
| `base` | [!badge variant="base" text="Base"] | [!badge variant="base" text="Base"](#variant) |
| `primary` (default) | [!badge variant="primary" text="Primary"] | [!badge variant="primary" text="Primary"](#variant) |
| `secondary` | [!badge variant="secondary" text="Secondary"] | [!badge variant="secondary" text="Secondary"](#variant) |
| `success` | [!badge variant="success" text="Success"] | [!badge variant="success" text="Success"](#variant) |
| `danger` | [!badge variant="danger" text="Danger"] | [!badge variant="danger" text="Danger"](#variant) |
| `warning` | [!badge variant="warning" text="Warning"] | [!badge variant="warning" text="Warning"](#variant) |
| `info` | [!badge variant="info" text="Info"] | [!badge variant="info" text="Info"](#variant) |
| `light` | [!badge variant="light" text="Light"] | [!badge variant="light" text="Light"](#variant) |
| `dark` | [!badge variant="dark" text="Dark"] | [!badge variant="dark" text="Dark"](#variant) |
| `ghost` | [!badge variant="ghost" text="Ghost"] | [!badge variant="ghost" text="Ghost"](#variant) |
| `contrast` | [!badge variant="contrast" text="Contrast"] | [!badge variant="contrast" text="Contrast"](#variant) |

---

## Corners

```md
[!badge text="Default"]
[!badge corners="square" text="Square"]
[!badge corners="pill" text="Button Pill"]
```

| Size | Example |
| --- | --- |
| `round` (default) | [!badge text="Default"] |
| `square` | [!badge corners="square" text="Square"] |
| `pill` | [!badge corners="pill" text="Button Pill"] |

---

## Size

```md
[!badge size="m" text="Medium"]
```

| Size | Example |
| --- | --- |
| `xs` | [!badge size="xs" text="XSmall"] |
| `s` | [!badge size="s" text="Small"] |
| `m` (default) | [!badge size="m" text="Medium"] |
| `l` | [!badge size="l" text="Large"] |
| `xl` | [!badge size="xl" text="XLarge"] |
| `2xl` | [!badge size="2xl" text="2XLarge"] |
| `3xl` | [!badge size="3xl" text="3XLarge"] |

---

## Target

Sets the `target` attribute of the badge and specifies which window or tab to open the link into.

[!badge target="blank" text="Retype"](https://retype.com/)

```md
[!badge target="blank" text="Retype"](https://retype.com/)
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
[!badge variant="info" icon="person" text="User" margin="0 8 0 0"]
[!badge variant="primary" icon="paper-airplane" iconAlign="right" text="Send"]
```

[!badge variant="info" icon="person" text="User" margin="0 8 0 0"]
[!badge variant="primary" icon="paper-airplane" iconAlign="right" text="Send"]

### Emoji

Emoji `:shortcodes:` can be used for the icon. Please see [Mojee](https://mojee.io/emojis) for a full list of supported Emoji shortcodes.

```md
[!badge variant="light" icon=":heart:" text="Like"]
[!badge variant="info" icon=":rocket:" iconAlign="right" text="Rocket"]
```

[!badge variant="light" icon=":heart:" text="Like" margin="0 8 0 0"]
[!badge variant="info" icon=":rocket:" iconAlign="right" text="Rocket"]

### Image file

Any image file can be used as the `icon`.

```md
[!badge icon="../static/retype-icon.svg"]
```

[!badge icon="../static/retype-icon.svg"]

### SVG image

The `icon` can also be set with an inline `<svg>` element.

```
[!badge icon="<svg width=&quot;24&quot; height=&quot;24&quot;><path fill-rule=&quot;evenodd&quot; d=&quot;M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 1.5a6 6 0 100-12 6 6 0 000 12z&quot;></path></svg>" text="Visit website"](badge.md)
```

[!badge icon="<svg width=&quot;24&quot; height=&quot;24&quot;><path fill-rule=&quot;evenodd&quot; d=&quot;M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 1.5a6 6 0 100-12 6 6 0 000 12z&quot;></path></svg>" text="Visit website"](badge.md)

---

## Theme variables

Retype gives you full control over the look and feel of your badge components through customizable [[theme variables]].

You can override any of theme variable in your `retype.yml` configuration file using the `theme.base` and `theme.dark` settings. 

For example, to change the `primary` badge color and text color for all instances of the `primary` badge within your project, add the following to your project's `retype.yml` file:

```yaml
theme:
  base:
    # Revise the primary variant base color
    # across all components within the project
    # primary: "#209fb5" 

    # Or, adjust badge only theme variables
    badge-primary: "#209fb5"
    badge-primary-text: "#eff1f5"
```

To learn more about theme variables and how they work across Retype, check out the [Themes Guide](/guides/themes.md), the [[Theme Variables]] documentation, and [`theme`](/configuration/project.md#theme) Project settings.

!!!
All badge theme variables can be customized in this way. The full list of available variables is shown below, and you can always refer to the [Badge Component](/configuration/theme-variables.md#badge-component) theme variables for the latest options.
!!!
