---
tags: [component]
icon: dot
---
# Container

A Container component can be used to wrap any content in a `<div>` container.

A Container component is created by adding `:::` above and below any content.

In of itself, there should be no visible difference between content inside a Container vs not inside a Container. Visually, the final rendered content should look the same. For example:

:::
This text is inside a Container component.
:::

The syntax used to create the above line is as follows:

```md
:::
This text is inside a Container component.
:::
```

The difference is in the generated HTML. The above line of text is now created within a new `<div>` element:

```html
<div>
    <p>This text is inside a Container component.</p>
</div>
```

---

## Custom CSS class

The power of the Container component is how custom styling can be applied to the `<div>` container.

<style>
    .sample {
        text-align: center;
        color: #1956AF;
        border-radius: 10px;
        background-color: #E1EDFF;
        border: 1px solid #1956AF;
        padding-top: 20px;
        margin-bottom: 20px;
    }
</style>
:::sample
This text is wrapped in a Container component and has a custom css `class` applied.
:::

The above Container is configured by assigning the `:::sample` class to the opening of Container, and then defining an inline CSS class.

```md
<style>
    .sample {
        text-align: center;
        color: #1956AF;
        border-radius: 10px;
        background-color: #E1EDFF;
        border: 1px solid #1956AF;
        padding-top: 20px;
        margin-bottom: 20px;
    }
</style>
:::sample
This text is wrapped in a Container component and has a custom css `class` applied.
:::
```

---

## Generic attributes

The Container component also supports applying generic attributes.

:::sample { #container1 }
This Container has a custom `id` attribute.
:::

The following sample is used to configure the above Container:

```md
:::sample { #container1 }
This Container has a custom `id` attribute.
:::
```

The generated HTML would be:

```html
<div id="container1" class="sample">
    <p>This Container has a custom <code>id</code> attribute.</p>
</div>
```

---

## Custom global css

It is also possible to include a global styles by adding to a new `/_includes/head.html` file.

The contents of `_includes/head.html` are added to all pages of the generated website.

For example, the inline `<style>` block above could be moved out of the page and then included automatically into all pages.

Create a new `head.html` file and place the file within a `/_includes/` folder in the root of your project.

```css _includes/head.html
<style>
    .sample {
        text-align: center;
        color: #1956AF;
        border-radius: 10px;
        background-color: #E1EDFF;
        border: 1px solid #1956AF;
        padding-top: 20px;
        margin-bottom: 20px;
    }
</style>
```

Moving the `<style>` block into the `_includes/head.html` is all you need to do. Save the file and your new `.sample` css class is now available on all pages your website.

:::sample
This Container uses the `sample` class.
:::

```
:::sample
This Container uses the `sample` class.
:::
```

### Global .css file

Since the `_includes/head.html` can contain any custom HTML, you could also move your CSS into a separate `.css` file that is included on all pages of your generated website.

```html /_includes/head.html
<link href="/static/custom.css" rel="stylesheet" />
```

```css /static/custom.css
.sample {
    text-align: center;
    color: #1956AF;
    border-radius: 10px;
    background-color: #E1EDFF;
    border: 1px solid #1956AF;
    padding-top: 20px;
    margin-bottom: 20px;
}
```

Being a separate `.css` file, web browsers will automatically cache the file, so re-downloading of the file with each page request is not required. This will improve the performance of your website.

!!!danger
Retype does not validate any of the custom HTML added to the `_includes/head.html`. It's up to you to ensure this HTML is correct and does not interfere or break anything in the website.
!!!
