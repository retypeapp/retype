# Button

A Button uses the same syntax as a hyperlink, but is prefixed with a `!button` type.

```md
[Click me](https://example.com/)         <-- a link

[!button Click me](https://example.com/) <-- a button
```

## Basic

[!button text="No link" margin="0 8 0 0"]
[!button text="Internal link" margin="0 8 0 0"](../configuration/project.md)
[!button text="External link" margin="0 8 0 0"](https://retype.com/)

## Variants

```md
[!button variant="primary" text="Primary"]
```

| Variant | Example |
| --- | --- |
| `primary` (default) | [!button variant="primary" text="Primary"] |
| `secondary` | [!button variant="secondary" text="Secondary"] |
| `success` | [!button variant="success" text="Success"] |
| `danger` | [!button variant="danger" text="Danger"] |
| `warning` | [!button variant="warning" text="Warning"] |
| `info` | [!button variant="info" text="Info"] |
| `light` | [!button variant="light" text="Light"] |
| `dark` | [!button variant="dark" text="Dark"] |
| `contrast` | [!button variant="contrast" text="Contrast"] |

## Corners

```md
[!button text="Default"]
[!button corners="square" text="Square"]
[!button corners="pill" text="Button Pill"]
```

| Size | Example |
| --- | --- |
| Default | [!button text="Default"] |
| `square` | [!button corners="square" text="Square"] |
| `pill` | [!button corners="pill" text="Button Pill"] |

## Size

```md
[!button size="m" text="Medium"]
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

## Icon and Emoji

### Octicons

```md
[!button variant="info" icon="person" text="User"]
[!button variant="primary" icon="paper-airplane" iconAlign="right" text="Send"]
```

[!button variant="info" icon="person" text="User" margin="0 8 0 0"]
[!button variant="primary" icon="paper-airplane" iconAlign="right" text="Send"]

### Emoji

```md
[!button variant="light" icon=":heart:" text="Like"]
[!button variant="info" icon=":rocket:" iconAlign="right" text="Rocket"]
```

[!button variant="light" icon=":heart:" text="Like" margin="0 8 0 0"]
[!button variant="info" icon=":rocket:" iconAlign="right" text="Rocket"]


### Image

```md
[!button icon="/static/retype-logo.svg"]
```

[!button icon="/static/retype-logo.svg"]

[!button icon="<svg width=&quot;24&quot; height=&quot;24&quot;><path fill-rule=&quot;evenodd&quot; d=&quot;M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 1.5a6 6 0 100-12 6 6 0 000 12z&quot;></path></svg>" text="Visit website"](https://retype.com/)

## Inline

This is a paragraph with a [!button size="xs" text="Button" margin="0 4"].

## Block

```md
[!button Button 1]

[!button Button 2]
```

[!button Button 1]

[!button Button 2]