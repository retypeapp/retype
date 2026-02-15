---
icon: paintbrush
tags: [component]
nav:
  badge: NEW|info
---
# Color Chip

Retype automatically detects hex color codes written in inline code and displays them with a visual color preview chip.

When you write a valid hex color code using backticks, Retype renders the color value alongside a small circular preview of that color.

||| Demo
The primary color is `#5495f1` and the background is `#ffffff`.
||| Source
```md
The primary color is `#5495f1` and the background is `#ffffff`.
```
|||

Color chips work anywhere inline code is supported, including paragraph text, headings, tables, lists, [Callouts](callout.md), and more.

---

## Supported formats

Color chips support standard hex color formats:

||| Demo
Six-digit:\
`#ff0000` `#00ff00` `#0000ff`

Three-digit:\
`#f00` `#0f0` `#00f`

Uppercase:\
`#FF5733` `#C70039` `#900C3F`

Lowercase:\
`#daa520` `#2e8b57` `#4682b4`
||| Source
```md
Six-digit: `#ff0000` `#00ff00` `#0000ff`

Three-digit: `#f00` `#0f0` `#00f`

Uppercase: `#FF5733` `#C70039` `#900C3F`

Lowercase: `#daa520` `#2e8b57` `#4682b4`
```
|||

### Valid hex colors

A valid hex color code must:
- Start with a `#` character
- Be followed by exactly 3 or 6 hexadecimal digits (0-9, A-F, a-f)
- Be wrapped in backticks for inline code

## Usage in tables

Color chips work great in tables for documenting color palettes:

||| Demo
| Color Name | Hex Code | Usage |
| --- | --- | --- |
| Primary | `#5495f1` | Main brand color |
| Success | `#28a745` | Success states |
| Warning | `#ffc107` | Warning messages |
| Danger | `#dc3545` | Error states |
||| Source
```md
| Color Name | Hex Code | Usage |
| --- | --- | --- |
| Primary | `#5495f1` | Main brand color |
| Success | `#28a745` | Success states |
| Warning | `#ffc107` | Warning messages |
| Danger | `#dc3545` | Error states |
```
|||

Only valid hex color codes trigger the color chip preview. Invalid formats like `#gggggg` or `#12` will render as regular inline code.

