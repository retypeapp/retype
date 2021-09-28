---
tags: [component]
---
# Code block

Blocks of code or any preformatted text can be displayed by wrapping with triple backticks characters before and after.

||| Demo
```
A basic code block
```
||| Source
~~~
```
A basic code block
```
~~~
|||

---

## Syntax highlighting

Optional syntax highlighting of the code within the code block can be configured by adding a language identifier immediately after the opening triple backticks.

In the following sample, we configure JavaScript syntax highlighting for the code block by adding the `js` language identifier.

||| Demo
```js
const msg = "hello, world";
```
||| Source
~~~
```js
const msg = "hello, world";
```
~~~
|||

---

## Title

Retype includes the functionality to set a title on your markdown code blocks.

+++ Demo
``` Code block title
const msg = "Set a code block title";
```
+++ Source
~~~
``` Code block title
const msg = "Set a code block title";
```
~~~
+++

The title can be used in conjunction with the code reference type.

+++ Demo
```js Code block title
const msg = "Set a code block title";
```
+++ Source
~~~
```js Code block title
const msg = "Set a code block title";
```
~~~
+++

The `title` should be separated from the opening fence by one space, for example the pattern `` ``` Code block title`` is recommended.

If a code language is used, separate the `title` from the `lang` by one space. The pattern `` ```js Code block title`` will work as expected.

---

## Line numbers

Adding or removing line numbering for your code blocks can be configured by adding the `#` specifier character to the first line after the reference language.

||| Demo
```js #
const msg = "hello, world";
```
||| Source
~~~
```js #
const msg = "hello, world";
```
~~~
|||

You can also add a title after the `#`:

+++ Demo
```js # Your title here
const msg = "hello, world";
```
+++ Source
~~~
```js # Your title here
const msg = "hello, world";
```
~~~
+++

The `#` should be separated from the opening `` ``` `` by one space, for example the pattern  `` ``` #`` is recommended.

If a title is added, the title must also be separated from the `#` by one space. For instance, the pattern `` ``` # Your title here`` would work as expected and the pattern `` ``` #Your title here`` would not.

Line numbering can also be configured at the project level using the [`snippets`](../configuration/project.md#snippets) config on your projects `retype.yml` file. For instance, instructing Retype to add line numbering to all `js` and `json` code blocks across the website would require the following config:

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

If you configure a site wide [`snippets`](http://localhost:5000/configuration/project/#snippets) for a language and would like to explicitly remove the line numbering for a code block instance of that language, please add the [`!#`](#disable-line-numbers) specifier to the code block instance.

||| Demo
```js !#
const msg = "Hello, world";
```
||| Source
~~~
```js !#
const msg = "Hello, world";
```
~~~
|||
