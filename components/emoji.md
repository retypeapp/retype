---
{{ include "data/emojis" }}
icon: ":grinning:"
tags: [component, icon]
---
# Emoji

Retype uses [Mojee](https://mojeeio.github.io/Mojee/) to find emoji `:shortcodes:` within your document and replace with actual emoji characters. :+1:

You can place emoji `:shortcodes:` anywhere within your document, such as `:smile:` :smile: or `:unicorn_face:` :unicorn_face:.

Below you’ll find all available emojis, their shortcodes, aliases, descriptions, and related tags.

Emoji count: **{{ emojis.size }}**

{.clean .striped}
| Emoji | Shortcode | Description | Tags |
| :---: | --- | --- | --- |
{{~ for $i in emojis ~}}
| :{{ $i.shortcode }}: | `:{{ $i.shortcode }}:` {{ if $i.aliases && $i.aliases.size > 0 }}{{ for $alias in $i.aliases }}<br>`:{{ $alias }}:`{{ if for.last == false }}, {{ end }}{{ end }}{{ end }} | {{ $i.description }} | {{ $i.tags | array.join ", " }}
{{~ end ~}}
