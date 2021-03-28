---
label: Folder config
icon: file-directory
---
# Folder configuration

Using the same `.yml` technique and options as [Page configuration](page.md), a folder can be configured using a separate `index.yml` file placed inside the folder.

!!!
Folders support the same properties a pages, although a such as `description` and `layout` would not be applicable.
!!!

### Samples

Set a custom [icon](page.md#icon) for the folder.

```yml index.yml
icon: gear
```

Move a folder up to the top of the navigation by setting the [order](page.md#order). The larger the number, the higher in the stack it will be placed. 

```yml index.yml
order: 1000
```

Move a folder to the bottom of the navigation. The lower the number, the lower in the stack it will be placed.

```yml index.yml
order: -1000
```

Change the folder [label](page.md#label) used for the navigation node label.

```yml index.yml
label: Custom label
```

Hide a folder by setting the [hidden](page.md#hidden) configuration.

```yml index.yml
hidden: true
```

Another option to completely ignore a folder (or a file) would be to prefix the folder name (or file name) with an underscore (`_`). For example `_Guides` would instruct Retype to ignore the folder.
