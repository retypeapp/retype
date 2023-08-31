---
label: Folder
icon: file-directory
tags: [config]
---
# Folder configuration

Using the same **.yml** technique and options as [Page configuration](/configuration/page.md), a folder can be configured using a separate **index.yml** file placed inside the folder.

!!!
Folders support the same properties as [pages](/configuration/page.md), although a few properties that are not applicable in the context of a folder configuration would be ignored, such as [`description`](/configuration/page.md#description).
!!!

## Samples

### icon

Set a custom [icon](/configuration/page.md#icon) for the folder.

```yml index.yml
icon: gear
```

### expanded

Expand the folder node in the tree navigation with the [expanded](/configuration/page.md#expanded) config.

```yml index.yml
expanded: true
```

### order

Move a folder up to the top of the navigation by setting the [order](/configuration/page.md#order). The higher the number, the higher in the stack the folder will be placed.

```yml index.yml
order: 1000
```

Move a folder to the bottom of the navigation. The lower the number, the lower in the stack it will be placed.

```yml index.yml
order: -1000
```

### label

Change the folder [label](/configuration/page.md#label) used for the left navigation tree node label.

```yml index.yml
label: Custom label
```

### visibility

Hide a folder by setting the [visibility](/configuration/page.md#visibility) configuration.

```yml index.yml
visibility: hidden
```

Another option to completely ignore a folder or a file would be to prefix the folder name or file name with an underscore `_`. For instance, naming a folder `_guides` would instruct Retype to ignore the folder.

Password protect an entire folder by setting the `visibility` to either [`protected`](page.md#protected) or [`private`](page.md#private).

```yml index.yml
visibility: protected
```
