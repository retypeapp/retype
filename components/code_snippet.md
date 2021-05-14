# Code snippet

A code snippet allow you to include the content of another text file or a portion of that file into a code block on another page.

A common scenario for using the code snippet component is to include a portion of a source code file located elsewhere within the project.

The syntax for a code snippet component is:

```
:::code source="<path-to-file>" :::
```

## Sample

In the following sample, we reference a local [`sample.js`](static/sample.js) file and get the first two lines of the file.

Here is the `:::code` component we use, and the actual results below:

```
:::code source="static/sample.js" range="1-2" :::
```

:::code source="static/sample.js" range="1-2" :::

## Options

### source

The `source` is the local path to a file.

```
:::code source="<path-to-file>" :::
```

Typically, the `source` file must be located within the same repository. At least the file needs to be accessible whenever the project is built by Retype. If building locally, the `source` can be located anywhere accessible in the local file system, but if you are using the Retype [GitHub Action](../guides/github_actions.md), the file must be within the same repo.

---

### range

A `range` of lines to include from the `source` file can configured, instead of including the entire contents of the file. If no `range` is configured, the entire contents of the file will be included.

```
:::code source="<path-to-file>" range="<range>" :::
```

The `range` accepts a comma separated list of individual line numbers or a dash separated range, such as `2-24` to include only lines #2 to #24 of the file.

```
range="2"           // A single line
range="2-24"        // A range of lines
range="2,12-24,26"  // A combination of ranges
```

---

### title

An optional `title` can be specified.

```
:::code language="<lang-ref>" title="<title>" :::
```

Let's add a `title` to our `sample.js` code snippet. Within the `.md` file, the configuration would look like...

```
:::code source="static/sample.js" range="1-2" title="sample.js" :::
```

...and the final result would be:

:::code source="static/sample.js" range="1-2" title="sample.js" :::

---

### language

The final code blocks allow for a language type to be configured which enables code syntax highlighting within the code block.

The `language` property can be set with any reference language value supported by the Markdown [code blocks](code_block.md) in Retype.

```
:::code source="<path-to-file>" language="<language>" :::
```

By default, Reytpe will try to intelligently determine the `language` based on the file extension of the `source` and the automatically set the `language` property. For instance, if the `source` file is a JavaScript `.js` file, Retype will set the `language` of the code snippet to `js`.

If the `language` property is explicitly set, Retype will use that value. If the `language` cannot be determined by Retype, no language reference is set and the code block is rendered without syntax highlighting.

---

### region

For C# files with a `.cs` file extension, an optional `region` name can be configured instead of a [`range`](#range) which will make a copy of all lines between the named `#region` and `#endregion` directives. The lines containing the `#region` and `#endregion` directives should not be included in the new code block.

```
:::code source="<path-to-file>" region="<region-name>" :::
```

If the copied code block from the `region` is indented, the left indentation will be removed from the file output so that the code block is normalized with a left-aligned positioning.