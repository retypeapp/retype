---
authors:
  - name: "@geoffreymcgill"
    email: geoff@retype.com
    link: https://github.com/retypeapp
category:
  - release
---
# What's New in Retype v3.10

![](images/2025-06-09.png)

We're excited to share the latest release of [Retype](https://retype.com/), packed with features that make documentation more flexible and powerful. This release focuses on improving content authoring, navigation control, and extending markdown capabilities.

See the full [[CHANGELOG#v3100|changelog]] for the `v3.10` release.

## Next/Previous Navigation Control

![Previous and Next page sequencing navigation](images/2025-06-09-nextprev.png)

Take control of your documentation's navigation flow with the new `nextprev` configuration. This feature lets you customize the visibility and sequencing of the Next/Previous navigation at the bottom of each page and can be configured at the `project`, `page`, and `folder` levels.

!!!
This feature is a [!badge Pro|info] only feature and a Retype [key](/pro/pro.md) is required to enable.
!!!

### Modes

Option | Description
--- | ---
`show` | Show Next and Previous buttons and include page in sequence (Default)
`hide` | Hide buttons but keep page in sequential order
`exclude` | Hide buttons and exclude page from sequential order

### Project-Level

Configure project wide by adding the setting to your `retype.yml` file. See [docs](/configuration/project.md#nextprev).

```yaml
nextprev:
  mode: show
```

### Page-Level

Configure on individual pages. See [docs](/configuration/page.md#nextprev).

```yaml
---
nextprev:
  mode: exclude
---
```

!!!tip
Configuring with `exclude` is especially useful for landing pages or standalone content pages that shouldn't be part of your main documentation flow.
!!!

### Folder-Level

Configure an entire folder by adding the setting to a `index.yml` file within the folder, or any of the default folder pages, such as `readme.md`, `index.md`, or `default.md`. See [docs](/configuration/folder.md#nextprev).

```yaml
nextprev:
  mode: hide
```

## Hidden Comments

You can now add hidden [[comments]] to your markdown that won't appear in the final website, making it easier to leave notes for yourself or your team. See [docs](/components/comments.md).

### Inline Comments

Add comments anywhere in your text using the `%%comment%%` syntax:

```markdown
The comment disappears completely%%from the rendered page%%.
```

The comment disappears completely%%from the rendered page%%.

### Block Comments

For longer notes or multi-line comments, use the comment block syntax:

```markdown
%%
This entire block is a comment.
You can write multiple lines here.
None of this will appear in the final output.
%%
```

This is particularly useful for:
- Leaving editing notes for team members
- Temporarily hiding content without deleting it
- Adding context that shouldn't be public

## New `tip` Callout Variant

A new [[callout]] type has been added specifically for helpful tips, complete with a lightbulb icon.

```markdown
!!!tip Pro Tip
Here's a helpful suggestion that will save you time.
!!!
```

!!!tip Pro Tip
Here's a helpful suggestion that will save you time.
!!!

The tip callout uses a friendly green color scheme and stands out nicely from other callout types like warnings or notes. It's perfect for sharing best practices or helpful hints.

## Generic Attributes for List Items

You can now apply CSS classes, IDs, and other custom attributes directly to individual [list items](/components/list.md#generic-attributes) using the generic attribute syntax. See [docs](/components/list.md#generic-attributes).

```markdown
- Regular list item
- Important item {.highlight}
- Item with ID {#special-item}
- Item with multiple attributes {#my-id .class-name data-value="test"}
```

The above Markdown sample creates the following HTML with the added attributes:

```html
<ul>
  <li>Regular list item</li>
  <li class="highlight">Important item</li>
  <li id="special-item">Item with ID</li>
  <li id="my-id" class="class-name" data-value="test">Item with multiple attributes</li>
</ul>
```

---

## Write On!

This release represents significant improvements to content authoring and navigation control. We're continuing to refine these features based on your feedback.

Try out `v3.10` and experiment with the new features, then let us know what you think on [X](https://x.com/retypeapp) or by opening a GitHub [Issue](https://github.com/retypeapp/retype/issues). Your input helps shape the future of Retype.

