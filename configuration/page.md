---
label: Page config
order: 100
icon: file
---
# Page configuration

Individual `.md` pages can be configured using the Front Matter section added to the top of the page.

```md sample.md
---
label: Sample
layout: page
order: 100
---
# Sample page

This is a sample page demonstrating Front Matter configs.
```

## Separate `.yml` configuration

If you would prefer to keep the configuration separate and out of the `.md` content page, the options can be moved into a paired `.yml` file. 

For instance, `sample.md` would need a matching `sample.yml` file. The separate `.yml` file must have the exact same filename as the matching `.md` page.

Both `.yml` and `.yaml` extensions are supported.

Adding your configs into the top Front Matter section of a `.md` page, or into a separate `.yml` file is just a matter of preference. Both techniques produce the same result. 

```md sample.md
# Sample page

This is a sample page demonstrating Front Matter configs.
```

```yml sample.yml
label: Sample
layout: page
order: 100
```

!!!
If you add a config to both locations, the Front Matter of a `.md` page take precedence.
!!!

See [Folder configuration](folder.md) for details on how to configure a folder. 

## Options

### description

+++ description : `string`

A custom description of the current page.

```yml
description: This is a custom description for this page
```
+++

### expanded

+++ expanded : `boolean`

Determines whether this [folder](foulder.md) should be expanded in the tree navigation on initial page load. Default is `false`.

Set to `true` to expand the folder node in the navigation.

```yml
expanded: true
```

The `expanded` option only applies to [folders](folder.md) when configured within an `index.yml` folder configuration file.

Setting `expanded: true` within the page Front Matter or paired `.yml` file will have not effect. 
+++

### hidden

+++ hidden : `boolean`

Hides the current page in the navigation and from the search results. Default is `false`.

Set to `true` to hide.

```yml
hidden: true
```
+++

### icon

+++ icon : `string`

Custom icon for the navigation node of the current page. Default is `null`.

Options include using an [Octicon](https://octicons-primer.vercel.app/octicons/) name, [Emoji](https://mojee.io/emojis/) shortcode, or `<svg>` element.

```yml Octicon
icon: rocket
```

```yml Emoji shortcode
icon: ":rocket:"
```

```yml SVG element
icon: "<svg>...</svg>
```
+++

### label

+++ label : `string`

Custom label for the navigation node for the current page. Default is `null`.

```yml
title: Custom label
```
+++

### layout

+++ layout : `string`

The layout for the page. Default is `default`.

Supported values: `default`, `central`, `page`.

Layout | Description
--- | ---
`default` | The default layout for all `.md` pages. The page is added to the main navigation.
`page` | Similar to `default` layout, but is not added to the main navigation.
`central` | A page with no left or right columns.

```yml
layout: page
```
+++

### order

+++ order : `string`

A custom stack order within the navigation.

Options can include:

- [x] A number such as `100` or `-100`
- [x] Any string value that will be slotted into the `A -> Z` alpha ordering of all navigation nodes
- [x] A [SemVer](https://semver.org/) value such as `v2.0`

In order of precedence, the `order` would be applied by:

```
number (high)
alpha (a)
neutral (by alpha)
alpha (z)
vSemver (newest)
vSemver (oldest)
number (low)
```

#### Order by number

Larger number = order higher in the stack. 

No order number or `0` = order by alpha

Smaller number = order lower in the stack.

If multiple pages have the same `order` number, secondary ordering in that cluster is by alpha.

```
+
0
-
```

#### Order by alpha

Order values by alpha. 

`a` = higher
`z` = lower

```
Alpha
Bravo
Charlie
Zulu
```

#### Order by `v{semver}`

Order by [semver](https://semver.org/) with latest release at the top

```
v5.0.1
v5
v4.0
v3.1
v3.0
v2.0
v1.0
```

Items prefixed with `v` and mixed with other alpha values would be grouped at the end of 
```
alpha
bravo
yankee
zulu
v3.0
v2.1-beta
v2.0
v1.0
v1.0-beta
v1.0-alpha
```

```yml
layout: 100
```
+++
