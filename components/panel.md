---
tags: [component]
icon: dot
---
# Panel

A Panel is created by surrounding a block of content with `===` and including a `title` for the Panel.

```
=== My Panel
This is a Panel. Expanded by default.
===
```

=== My Panel
This is a Panel. Expanded by default.
===

The `title` must be separated from the opening `===` by one space. The pattern `=== My Panel` will work as expected, and `===My Panel` will not.

Multiple Panels can be [stacked](#stacking) by repeating Panel component configurations.

```
=== Panel 1
Content 1
=== Panel 2
Content 2
===
```

=== Panel 1

Content 1

=== Panel 2

Content 2

===

!!!

Currently, Panel components cannot be nested within each other, only stacked. We're hoping to support nesting Panels in a future release. [Let us know](https://github.com/retypeapp/retype/discussions) if you require the functionality.

All other components can be nested within any Panel component.

!!!

---

## Collapsed

By default, Panels are collapsible and will initially render in their expanded state. You can configure Panels to initially render in their collapsed state by using `==-` specifier.

```
==- My Panel
This is a collapsed Panel. :+1:
===
```

==- My Panel

This is a collapsed Panel. :+1:

===

Either just the opening `==-` can be configured, or both opening and closing `==-` can be used.

```
==- My Panel
This is another collapsed Panel.
==-
```

==- My Panel

This is another collapsed Panel.

==-

---

## Inner content

Any content can be added inside a Panel, include other components such as a [code block](code-block.md) and tables.

~~~
=== Code Sample
```js
const msg = "Hello, world";

console.log(msg);
```

Name  | Type  | Value  | Description
---   | ---   | ---    | ---
prop1 | type1 | value1 | A `type1` property
prop2 | type2 | value2 | A `type2` property
===
~~~

=== Code Sample

```js
const msg = "Hello, world";

console.log(msg);
```

Name  | Type  | Value  | Description
---   | ---   | ---    | ---
prop1 | type1 | value1 | A `type1` property
prop2 | type2 | value2 | A `type2` property

===

---

## Stacking

Multiple Panel components can be _stacked_ into a group by repeating Panel component configurations.

A basic scenario is grouping two Panels:

```
=== Panel 1
Content for the **first** panel.
=== Panel 2
Content for the **second** panel.
===
```

=== Panel 1

Content for the **first** panel.

=== Panel 2

Content for the **second** panel.

===

As well, individual Panels within a stack can be configured as collapsed.

The following sample demonstrates a two-panel stack with the second Panel being collapsed.

```
=== Expanded Panel

Panels are expanded by default, but can be configured as collapsed too!

==- Collapsed Panel

Add any content or components inside a Panel.

===
```

=== Expanded Panel

Panels are expanded by default, but can be configured as collapsed too!

==- Collapsed Panel

:partying_face: You found me!

===