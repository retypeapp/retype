---
label: Folder config
icon: file-directory
tags: [config]
---
![](/static/headers/configuration_folder.png)

# Folder configuration

Using the same `.yml` technique and options as [Page configuration](/configuration/page.md), a folder can be configured using a separate `index.yml` file placed inside the folder.

!!!
Folders support the same properties a [pages](/configuration/page.md), although properties such as [`description`](/configuration/page.md#description) and [`layout`](/configuration/page.md#layout) would not be applicable in the context of a folder configuration and will be ignored.
!!!

## Samples

Set a custom [icon](/configuration/page.md#icon) for the folder.

```yml index.yml
icon: gear
```

Expand the folder node in the tree navigation with the [expanded](/configuration/page.md#expanded) config.

```yml index.yml
expanded: true
```

Move a folder up to the top of the navigation by setting the [order](/configuration/page.md#order). The larger the number, the higher in the stack it will be placed.

```yml index.yml
order: 1000
```

Move a folder to the bottom of the navigation. The lower the number, the lower in the stack it will be placed.

```yml index.yml
order: -1000
```

Change the folder [label](/configuration/page.md#label) used for the navigation node label.

```yml index.yml
label: Custom label
```

Hide a folder by setting the [visibility](/configuration/page.md#visibility) configuration.

```yml index.yml
visibility: hidden
```

Another option to completely ignore a folder or a file would be to prefix the folder name or file name with an underscore `_`. For instance, naming a folder `_guides` would instruct Retype to ignore the folder.
