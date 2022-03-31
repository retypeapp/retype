---
tags: [component]
icon: dot
---
# Code snippet

A code snippet allow you to include the content of another text file or a portion of that file into a code block on another page.

A common scenario for using the code snippet component is to include a portion of a source code file located elsewhere within your repository, but not explicitly within the documentation. For instance, you could include code samples directly from the source code of the project you are documenting, or import code being used within a working demo.

The syntax for a code snippet component is:

```
:::code source="<path-to-file>" :::
```

In the following sample, we reference a local `../static/sample.js` file and get the first two lines of the file.

+++ Demo
:::code source="../static/sample.js" range="1-2" :::
+++ Source
```
:::code source="../static/sample.js" range="1-2" :::
```
+++

---

## Source

The `source` is the local path to a file.

```
:::code source="<path-to-file>" :::
```

Typically, the `source` file must be located within the same repository. At least the file needs to be accessible whenever the project is built by Retype. If building locally, the `source` can be located anywhere accessible in the local file system, although if you are using the Retype [GitHub Action](/guides/github-actions.md), the file must be within the same repo or accessible by the Action.

In the following demo, we link to the `sample.js` file and include the entire contents of that file into the code block:

+++ Demo
:::code source="../static/sample.js" :::
+++ Source
```
:::code source="../static/sample.js" :::
```
+++

---

## Range

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

In the following demo, we link to the `sample.js` file and include the first two lines of that file into the code block.

+++ Demo
:::code source="../static/sample.js" range="1-2" :::
+++ Source
```
:::code source="../static/sample.js" range="1-2" :::
```
+++

If the copied code block from the `range` is indented, the left indentation will be removed from the file output so that the code block is normalized with a left-aligned positioning.

---

## Title

An optional `title` can be specified.

```
:::code language="<lang-ref>" title="<title>" :::
```

Let's add a `title` to our `../static/sample.js` code snippet. Within the `.md` file, the configuration would look like...

+++ Demo
:::code source="../static/sample.js" range="1-2" title="../static/sample.js" :::
+++ Source
```
:::code source="../static/sample.js" range="1-2" title="../static/sample.js" :::
```
+++

---

## Language

The final code blocks allow for a language type to be configured which enables code syntax highlighting within the code block.

The `language` property can be set with any reference language value supported by the Markdown [code blocks](code-block.md) in Retype.

```
:::code source="<path-to-file>" language="<language>" :::
```

By default, Retype will try to intelligently determine the `language` based on the file extension of the `source` and the automatically set the `language` property. For instance, if the `source` file is a JavaScript `.js` file, Retype will set the `language` of the code snippet to `js`.

If the `language` property is explicitly set, Retype will use that value. If the `language` cannot be determined by Retype, no language reference is set and the code block is rendered without syntax highlighting.

---

## Region

For C# files with a `.cs` file extension, an optional `region` name can be configured instead of a [`range`](#range) which will make a copy of all lines between the named `#region` and `#endregion` directives. The lines containing the `#region` and `#endregion` directives should not be included in the new code block.

```
:::code source="<path-to-file>" region="<region-name>" :::
```

If the copied code block from the `region` is indented, the left indentation will be removed from the file output so that the code block is normalized with a left-aligned positioning.