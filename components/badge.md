---
icon: tag
tags: [component]
---
# Badge

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

With the Badge component, the destination is optional and can be omitted.

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
[!badge variant="primary" text="Primary"]
```

| Variant | Example |
| --- | --- |
| `primary` (default) | [!badge variant="primary" text="Primary"] |
| `secondary` | [!badge variant="secondary" text="Secondary"] |
| `success` | [!badge variant="success" text="Success"] |
| `danger` | [!badge variant="danger" text="Danger"] |
| `warning` | [!badge variant="warning" text="Warning"] |
| `info` | [!badge variant="info" text="Info"] |
| `light` | [!badge variant="light" text="Light"] |
| `dark` | [!badge variant="dark" text="Dark"] |
| `ghost` | [!badge variant="ghost" text="Ghost"] |
| `contrast` | [!badge variant="contrast" text="Contrast"] |

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