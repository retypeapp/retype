| Icon | Shortcode | Sample |
| :---: | --- | --- |
{{~ for $i in $.list ~}}
| :icon-{{ $i }}: | {{ $i }} | `:icon-{{ $i }}:` |
{{~ end ~}}