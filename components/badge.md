# Badge

Similar to [Button](button.md) components, a Badge uses the same syntax as a hyperlink, but is prefixed with a `!badge` type.

```md
[New](https://example.com/)        <-- a link

[!badge New](https://example.com/) <-- a badge
```

## Basic

[!badge text="New" margin="0 8 0 0" variant="danger"]
[!badge text="Internal link" margin="0 8 0 0"](../configuration/project.md)
[!badge text="External link" margin="0 8 0 0"](https://retype.com/)

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

## Icon and Emoji

### Octicons

```md
[!badge variant="info" icon="person" text="User"]
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
