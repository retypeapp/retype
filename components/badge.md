# Badge

Similar to a [Button](button.md) component, a Badge uses the same syntax as a hyperlink, but is prefixed with a `!badge` type.

```md
[Badge](https://example.com/)        <-- a normal link

[!badge Badge]                       <-- Badge with no link

[!badge Badge](https://example.com/) <-- Badge with a link
```

[!badge Badge]

---

## Variants

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
| Default | [!badge text="Default"] |
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

## Icon and Emoji

### Octicons

```md
[!badge variant="info" icon="person" text="User" margin="0 8 0 0"]
[!badge variant="primary" icon="paper-airplane" iconAlign="right" text="Send"]
```

[!badge variant="info" icon="person" text="User" margin="0 8 0 0"]
[!badge variant="primary" icon="paper-airplane" iconAlign="right" text="Send"]

### Emoji

```md
[!badge variant="light" icon=":heart:" text="Like"]
[!badge variant="info" icon=":rocket:" iconAlign="right" text="Rocket"]
```

[!badge variant="light" icon=":heart:" text="Like" margin="0 8 0 0"]
[!badge variant="info" icon=":rocket:" iconAlign="right" text="Rocket"]

### Image

```md
[!badge icon="../static/retype-logo.svg"]
```

[!badge icon="../static/retype-logo.svg"]

[!badge icon="<svg width=&quot;24&quot; height=&quot;24&quot;><path fill-rule=&quot;evenodd&quot; d=&quot;M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 1.5a6 6 0 100-12 6 6 0 000 12z&quot;></path></svg>" text="Visit website"](https://retype.com/)