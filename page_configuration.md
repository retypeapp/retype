---
order: 200
label: Page config
---
# Page configuration

## YAML Front Matter parameters

| Option          | Type      | Description                                                                         |
| --------------- | --------- | ----------------------------------------------------------------------------------- |
| `title`         | `string`  | Custom title for the current page                                                   |
| `label`         | `string`  | Sidebar nav item custom label for the current page                                  |
| `description`   | `string`  | Custom description of the current page                                              |
| `icon`          | `string`  | Sidebar nav item custom icon for the current page. Could be one from the following: |
|                 |           | - Octicons icon name, e.g. `home` (see more: https://primer.style/octicons/)        |
|                 |           | - Emoji shortcode, e.g. `:smile:` (see more: https://mojee.io/emojis/)              |
|                 |           | - Svg element (`<svg>..</svg>`)                                                     |
| `hide`          | `boolean` | Set to `true` to hide this page from the navigation menu and search results.        |