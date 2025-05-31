---
icon: code-review
tags: [component]
---
# Comments

Retype supports adding hidden comments to your Markdown files that are not rendered in the final generated HTML. Comments are useful for adding notes, reminders, or explanations that should only be visible in the source Markdown files.

## Basic Syntax

Comments can be added wrapping `%%` around the comment to be hidden. There are two types of comments:

1. Inline comments
2. Block comments

### Inline Comments

Inline comments can be added anywhere within a line:

```md
This is a %%inline %%comment.

This is an inline comment%at the end of a line%.

%%This is an %Inline comment at the beginning of a line.
```

The above will be created as:

```
This is a comment.

This is an inline comment.

Inline comment at the beginning of a line.
```

### Block Comments

Block comments can span multiple lines by using opening `%%` and closing `%%` at the start and end of the comment block. Everything between the opening and closing `%%` will be removed.

```md
%%
This is a block comment.

Block comments can span multiple lines.
%%
```

## Examples

### Adding Notes to Code Blocks

Comments are particularly useful for adding notes about code blocks that should not be visible in the rendered documentation:

~~~md
%%
This code block demonstrates a complex algorithm.
The implementation details are explained in the comments.
%%
```js
function complexAlgorithm() {
    // Implementation details
}
```
~~~

### Documenting Changes

Comments can be used to document changes or TODOs that should be addressed later:

```md
%%
TODO: Update this section when the new API is released.
%%
```

### Hiding Draft Content

Comments can be used to hide draft content that isn't ready for publication:

```md
%%
Draft content - Not ready for publication
This section needs more examples and better explanations.
%%
```

## Best Practices

1. Use comments to add context that is only relevant to content authors
2. Keep comments concise and clear
3. Use block comments for longer explanations
4. Use inline comments for quick notes or clarifications
5. Consider using comments to document the reasoning behind certain content decisions

## Limitations

- Comments are completely removed from the final HTML output
- Comments cannot be nested
- Comments should not be used for content that needs to be visible to end users 