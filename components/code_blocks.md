# Code blocks

~~~ Sample code block
```
A basic code block
```
~~~

```
A basic code block
```

## Options

### Title

Retype includes the functionality to set a title on your markdown code blocks.

~~~
``` Code block title
var msg = "Set a code block title";
```
~~~

``` Code block title
var msg = "Set a code block title";
```

The title can be used in conjunction with the code reference type.

~~~
```js Code block title
var msg = "Set a code block title";
```
~~~

```js Code block title
var msg = "Set a code block title";
```

### Line numbers

Adding or removing line numbering to your code blocks can be configured by adding the `#` specifier character to the first line after the reference language.

~~~
```js #
var msg = "hello, world";
```
~~~

```js #
var msg = "hello, world";
```

You can also add a title after the `#`:

~~~
```js # Your title here
var msg = "hello, world";
```
~~~

```js # Your title here
var msg = "hello, world";
```

### Disable line numbers

Explicitly disabling the line numbering within code blocks is possible by using the `!#` specifier instead of `#`:

~~~
```js !#
var msg = "";
```
~~~

```js !#
var msg = "";
```