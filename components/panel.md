---
tags: [component]
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

---

## Collapsed

By default, Panels are collapsible and will initially render in their expanded state. You can configure Panels to initially render in their collapsed state by using `++-` specifier.

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

Any content can be added inside a Panel, include other components such as a code block and tables.

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