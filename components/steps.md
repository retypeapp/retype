---
icon: workflow
tags: [component]
nav:
  badge: NEW|info
---
# Steps

A Steps component is created by surrounding a block of content with `>>>` and including a title for each step.

```md
>>> Step 1
This is the first step.
>>>
```

>>> Step 1
This is the first step.
>>>

The step `title` must be separated from the opening `>>>` by one space. The pattern `>>> Step 1` will work as expected, and `>>>Step 1` will not.

---

## Multiple steps

Multiple steps can be configured by stacking multiple `>>>` blocks and adding a title for each step.

```md
>>> Create the project
Initialize a new project in your workspace.

>>> Install dependencies
Run the install command to fetch all required packages.

>>> Start the server
Launch the development server and verify it is running.
>>>
```

>>> Create the project
Initialize a new project in your workspace.

>>> Install dependencies
Run the install command to fetch all required packages.

>>> Start the server
Launch the development server and verify it is running.
>>>

---

## Custom start number

Start the steps at a custom number using the `>>> 12. Title` syntax. The number followed by a `.` and a space sets the starting step number. Following steps will auto-increment from the custom start number.

```md
>>> 12. Configure the server
Server configuration instructions here.

>>> Update DNS settings
DNS update steps here.

>>> Verify connectivity
Verification steps here.
>>>
```

>>> 12. Configure the server
Server configuration instructions here.

>>> Update DNS settings
DNS update steps here.

>>> Verify connectivity
Verification steps here.
>>>

The `12. ` prefix is stripped from the rendered title, and the following steps are sequentially numbered 12, 13, 14.

---

## Inner content

Any content can be added inside a Step, including other components such as [[Code Block]]s, [[Tab]]s, and [[Callout]]s.

~~~md
>>> Install the package

  +++ npm
  ```
  npm install retypeapp --global
  ```
  +++ yarn
  ```
  yarn global add retypeapp
  ```
  +++ dotnet
  ```
  dotnet tool install retypeapp --global
  ```
  +++

>>> Start Retype

  ```bash
  retype start
  ```

>>>
~~~

>>> Install the package

  +++ npm
  ```
  npm install retypeapp --global
  ```
  +++ yarn
  ```
  yarn global add retypeapp
  ```
  +++ dotnet
  ```
  dotnet tool install retypeapp --global
  ```
  +++

>>> Start Retype

  ```bash
  retype start
  ```

>>>

---

## Anchors

Each Step is an anchor that allows for linking directly to the step by passing the anchor in a URL.

If the step anchor is passed in the URL, when the page loads, the page will be automatically scrolled to that step position.

To get the step URL with the anchor, right-click on the step title and select `Copy Link Address`.

```md
[Go to Step 2](#install-dependencies)
```

[Go to Step 2](#install-dependencies)
