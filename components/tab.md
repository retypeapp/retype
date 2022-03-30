---
tags: [component]
icon: dot
---
# Tab

With Retype, a Tab component is super simple to configure by surrounding a block of text with `+++` and including a title for the tab.

```md
+++ Tab 1
This is a Tab
+++
```

+++ Tab 1
This is a Tab
+++

The tab `title` must be separated from the opening `+++` by one space. The pattern `+++ Tab ` will work as expected, and `+++Tab 1` will not.

---

## Multiple tabs

Multiple Tabs can be configured by stacking multiple `+++` blocks and adding a title for each tab.

```md
+++ Tab 1
This is a Tab
+++ Tab 2
This is another Tab
+++ Tab 3
Wow! Yet another tab :+1:
+++
```

+++ Tab 1
This is a Tab
+++ Tab 2
This is another Tab
+++ Tab 3
Wow! Yet another tab :+1:
+++

---

## Empty lines

Extra empty lines at the start or end of the Tab are allowable, although ignored. Tabs can contain any number of leading or trailing empty lines.

```md
+++ Tab 1

This is a Tab

+++ Tab 2
This is another Tab
+++ Tab 3

Wow! Yet another tab :+1:

+++
```

+++ Tab 1

This is a Tab

+++ Tab 2
This is another Tab
+++ Tab 3

Wow! Yet another tab :+1:

+++

---

## Anchors

Each Tab is an anchor that allows for linking directly to the tab by passing the anchor in a URL.

If the tab anchor is passed in the URL, when the page loads, the page will be automatically scrolled to that tab position and the tab will be selected.

To get the tab URL with the anchor, right-click on the tab and select `Copy Link Address`.

```md
[Tab anchor link](#tab-3)
```

[Tab anchor link](#tab-3)
