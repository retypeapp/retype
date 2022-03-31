---
tags: [component]
icon: dot
---
# Code block

Blocks of code or any preformatted text can be displayed by wrapping with triple backticks characters before and after.

||| :icon-code: Source
~~~
```
A basic code block
```
~~~
||| :icon-play: Demo
```
A basic code block
```
|||

---

## Syntax highlighting

Optional syntax highlighting of the code within the code block can be configured by adding a language identifier immediately after the opening triple backticks.

In the following sample, we configure JavaScript syntax highlighting for the code block by adding the `js` language identifier.

||| :icon-code: Source
~~~
```js
const msg = "hello, world";
```
~~~
||| :icon-play: Demo
```js
const msg = "hello, world";
```
|||

---

## Title

Retype includes the functionality to set a title on your markdown code blocks.

+++ :icon-code: Source
~~~
``` Code block title
const msg = "Set a code block title";
```
~~~
+++ :icon-play: Demo
``` Code block title
const msg = "Set a code block title";
```
+++

The title can be used in conjunction with the code reference type.

+++ :icon-code: Source
~~~
```js Code block title
const msg = "Set a code block title";
```
~~~
+++ :icon-play: Demo
```js Code block title
const msg = "Set a code block title";
```
+++

The `title` should be separated from the opening fence by one space, for example the pattern `` ``` Code block title`` is recommended.

If a code language is used, separate the `title` from the `lang` by one space. The pattern `` ```js Code block title`` will work as expected.

---

## Line highlighting

Highlight a specific line or range of lines in a code block component using the line highlighting syntax.

After the opening `` ``` `` of a code block component, add a space and then start your line highlighting configuration with a `#` character. For instance, to highlight the first line, use `` ``` #1 ``.

Here are a few other common scenarios with additional samples below:

Scenario | Sample | Description
--- | --- | ---
Single line | `#2`    | Highlight line #2
Line range  | `#2-5` | Highlight lines #2 to #5
Single line and a range | `#2,4-8` | Highlight line #2 and lines #4 to #8
Multiple line ranges | `#1-2,4-8` | Highlight lines #1 to #2 and lines #4 to #8.
Remove line numbering | `!#4-8` | Remove line numbering and highlight lines #4 to #8

### Single line

Highlight a single line number.

+++ :icon-code: Source

~~~
```js #2

```
~~~

+++ :icon-play: Demo

```js #2
{{ include "snippets/simple-code-sample" }}
```

+++

### Line range

Highlight a range of lines by separating the start and end line number with a `-` dash.

+++ :icon-code: Source

~~~md
```js #2-5

```
~~~

+++ :icon-play: Demo

```js #2-5
{{ include "snippets/simple-code-sample" }}
```

+++

### Multiple ranges

Configure multiple line ranges by separating each block with a `,` comma.

+++ :icon-code: Source

~~~md
```js #1-2,4-8

```
~~~

+++ :icon-play: Demo

```js #1-2,4-8
{{ include "snippets/simple-code-sample" }}
```

+++

### With no line numbers

Disable the default line numbering but still highlight a line or range of lines.

+++ :icon-code: Source

~~~md
```js !#2,4-8

```
~~~

+++ :icon-play: Demo

```js !#2,4-8
{{ include "snippets/simple-code-sample" }}
```

+++

### Using attribute syntax

Configuring line highlighting using the `highlight` attribute syntax is also supported by Retype.

+++ :icon-code: Source

~~~md
```js:highlight="1-2,4-8"

```
~~~

+++ :icon-play: Demo

```js:highlight="1-2,4-8"
{{ include "snippets/simple-code-sample" }}
```

+++

---

## Line numbers

Adding or removing line numbering for your code blocks can be configured by adding the `#` specifier character to the first line after the reference language.

||| :icon-code: Source
~~~
```js #
const msg = "hello, world";
```
~~~
||| :icon-play: Demo
```js #
const msg = "hello, world";
```
|||

You can also add a title after the `#`:

+++ :icon-code: Source

~~~
```js # Your title here
const msg = "hello, world";
```
~~~

+++ :icon-play: Demo

```js # Your title here
const msg = "hello, world";
```

+++

The `#` should be separated from the opening `` ``` `` by one space, for example the pattern  `` ``` #`` is recommended.

If a title is added, the title must also be separated from the `#` by one space. For instance, the pattern `` ``` # Your title here`` would work as expected and the pattern `` ``` #Your title here`` would not.

Line numbering can also be configured at the project level using the [`snippets`](/configuration/project.md#snippets) config on your projects `retype.yml` file. For instance, instructing Retype to add line numbering to all `js` and `json` code blocks across the website would require the following config:

```json Enable line numbering for js and json code blocks site wide
{
  "snippets": {
    "lineNumbers": [ "js", "json" ]
  }
}
```

With the above `snippets` config, then you would not have to add the `#` specifier to each code block. All `js` and `json` code blocks would automatically get line numbers.

||| Without `snippets` config
```js #
const msg = "Hello, world";
```
||| With `snippets` config
```js
const msg = "Hello, world";
```
|||

---

## Disable line numbers

If you configure a site wide [`snippets`](/configuration/project.md#snippets) for a language and would like to explicitly remove the line numbering for a code block instance of that language, please add the [`!#`](#disable-line-numbers) specifier to the code block instance.

||| :icon-code: Source
~~~
```js !#
const msg = "Hello, world";
```
~~~
||| :icon-play: Demo
```js !#
const msg = "Hello, world";
```
|||
