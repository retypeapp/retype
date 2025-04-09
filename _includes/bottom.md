<!-- Add content to _includes/bottom.md to include here -->

<!-- Project wide abbreviations, _includes/bottom.md -->
{{~ for item in abbreviations ~}}
*[{{ item.key }}]: {{ item.value }}
{{~ end ~}}