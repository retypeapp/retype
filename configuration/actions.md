# Actions

Actions add reusable behavior for navigation [links](/configuration/project.md#links) and page [action](/configuration/project.md#actions) menus. An action can copy the current page link, print the page, open the Markdown source, or build a custom URL from the current page context.

Retype includes several built-in actions and also discovers custom action definitions from the **_components/actions/** folder in your project.

## Page action button

The `actions.items` configuration controls the menu options on the page action menu button added to the right of the page title.

![](/blog/images/2026-04-07-action-button.png)

```yml retype.yml
actions:
  items:
    - text: Copy page
      action: copy-page-markdown
      icon: copy
    - text: Copy link
      action: copy-page-link
      icon: link
    - type: separator
    - text: View as Markdown
      action: view-page-markdown
      icon: markdown
    - text: Print page
      action: print-page
      icon: brand-printer
```

Menu item separators are configured using `type: separator`.

```yml
actions:
  items:
    - text: Copy page
      action: copy-page-markdown
      icon: copy
    - type: separator
    - text: Print page
      action: print-page
      icon: brand-printer
```

Each item supports the same common link properties as top-bar [links](/configuration/project.md#links), including `text`, `link`, `action`, `icon`, `iconAlign`, `target`, `title`, and `description`.

Use `actions.items` for the page action menu. To run actions from top-bar links, footer links, or nested header menu links, use the `action` property on those link items instead of `link`.

```yml retype.yml
links:
  - text: Copy link
    icon: link
    action: copy-page-link

footer:
  links:
    - text: Print
      icon: brand-printer
      action: print-page
```

See [`actions`](project.md#actions) and [`links.action`](project.md#links-action) in the project configuration reference.

## Built-in actions

Retype ships with the following built-in actions.

Action {.whitespace-nowrap} | Description
--- | ---
`copy-page-markdown` | Fetches the generated Markdown export for the current page and copies the Markdown content to the clipboard.
`copy-page-link` | Copies the current browser URL to the clipboard.
`copy-to-clipboard` | Copies the current browser URL to the clipboard. In custom action definitions, use the `clipboard` handler when you need to copy a specific value.
`print-page` | Opens the browser print dialog.
`scroll-to-top` | Smoothly scrolls to the top of the page.
`view-page-markdown` | Opens the generated Markdown export for the current page in a new tab.

### copy-page-markdown

The `copy-page-markdown` action fetches the current page Markdown export and copies the content to the clipboard.

```yml retype.yml
actions:
  items:
    - text: Copy page
      action: copy-page-markdown
      icon: copy
```

### copy-page-link

The `copy-page-link` action copies the current page URL to the clipboard.

```yml retype.yml
actions:
  items:
    - text: Copy link
      action: copy-page-link
      icon: link
```

### copy-to-clipboard

The `copy-to-clipboard` built-in action copies the current page URL. For custom values, create an action that calls the [`clipboard`](#clipboard) handler.

```yml _components/actions/copy-page-title.yml
steps:
  - handler: clipboard
    with:
      value: "{{ page.title }}"
```

```yml retype.yml
actions:
  items:
    - text: Copy title
      action: copy-page-title
      icon: copy
```

### print-page

The `print-page` action opens the browser print dialog.

```yml retype.yml
actions:
  items:
    - text: Print page
      action: print-page
      icon: brand-printer
```

### scroll-to-top

The `scroll-to-top` action smoothly scrolls to the top of the page.

```yml retype.yml
actions:
  items:
    - text: Scroll to top
      action: scroll-to-top
      icon: arrow-up
```

### view-page-markdown

The `view-page-markdown` action opens the generated Markdown export for the current page in a new tab.

```yml retype.yml
actions:
  items:
    - text: View as Markdown
      action: view-page-markdown
      icon: markdown
```

## Custom actions

Custom actions are defined in **_components/actions/**. Retype reads **.yml** and Markdown files with YAML frontmatter from that folder.

The action id is taken from the optional `id` field. If no `id` is provided, Retype uses the filename without the extension.

```yml _components/actions/open-in-chatgpt.yml
data:
  prompt: Read and summarize the content of this page on {{ project.meta.siteName }}. Then help answer follow-up questions about it.

steps:
  - with:
      link: https://chatgpt.com/?q={{ prompt | html.url_encode }}%0A%0A{{ page.url | html.url_encode }}
```

```yml retype.yml
actions:
  items:
    - text: Open in ChatGPT
      icon: brand-openai
      action: open-in-chatgpt
      target: blank
```

The action above does not use a browser handler. Retype resolves it during build and uses the final `link` output as the menu item link.

Markdown files can also be used when frontmatter is preferred:

```md _components/actions/edit-on-github.md
---
steps:
  - with:
      link: https://github.com/retypeapp/retype/edit/main{{ page.filePath }}
---
```

```yml retype.yml
actions:
  items:
    - text: Edit on GitHub
      icon: mark-github
      action: edit-on-github
      target: blank
```

## Action definitions

An action definition can include metadata, inputs, outputs, data, and steps.

```yml _components/actions/copy-page-markdown.yml
name: Copy page Markdown
description: Gets the page Markdown and copies it to the clipboard.

steps:
  - id: get-page-markdown
    handler: fetch
    with:
      url: "{{ page.markdown }}"

  - id: write-to-clipboard
    handler: clipboard
```

Property | Description
--- | ---
`id` | Optional action id. If omitted, the filename is used.
`name` | Display name or authoring label for the action.
`description` | Longer description of what the action does.
`inputs` | Named inputs that can be passed into the action.
`outputs` | Named outputs the action returns.
`data` | Shared values resolved before steps run. Data values are available as root template variables.
`steps` | One or more action steps.

### steps

Each step can call a built-in handler, call another action, or return a `with` object.

```yml
steps:
  - id: get-page-markdown
    handler: fetch
    with:
      url: "{{ page.markdown }}"

  - id: write-to-clipboard
    handler: clipboard
```

Property | Description
--- | ---
`id` | Optional id for the step. When set, the step output is available to later steps as `steps.<id>.outputs`.
`handler` | Built-in client handler to run in the browser.
`action` | Another action to run as a nested action.
`description` | Authoring note for the step.
`with` | Inputs passed into the step.

If a step does not include `with`, Retype passes the previous step output into the next step. This makes simple chains concise.

## Template context

Action templates can use page, project, content, inputs, and previous step data.

Variable | Description
--- | ---
`page.title` | Current page title.
`page.url` | Current browser URL at runtime, or the generated page URL during build.
`page.md` | Generated Markdown export path.
`page.markdown` | Alias of `page.md`.
`page.filePath` | Generated Markdown export path.
`project.meta.siteName` | Site name when available.
`inputs` | Inputs passed into the action.
`steps.<id>.outputs` | Outputs from a previous named step.
`context.page` | The page context.
`context.project` | The project context.
`context.content` | The content context.
`context.component` | Reserved for component context. If unavailable, the value is `null`.

## handlers

Handlers are predefined browser-side functions that can be called from an action step. They provide common client-side behavior without allowing arbitrary JavaScript execution.

Handler | Description
--- | ---
`clipboard` | Copy a value to the clipboard.
`fetch` | Fetch text content from a URL.
`print` | Open the browser print dialog.
`scroll` | Scroll to the top of the page or to a page target.

### clipboard

The `clipboard` handler copies a string value to the clipboard. The input can be named `value`, `content`, `text`, `url`, `href`, `link`, or `target`.

```yml _components/actions/copy-page-title.yml
steps:
  - handler: clipboard
    with:
      value: "{{ page.title }}"
```

The handler returns an object with `success` and `value`.

### fetch

The `fetch` handler gets text content from a URL. The input can be named `url`, `href`, `link`, `target`, or `value`.

```yml _components/actions/copy-page-markdown.yml
steps:
  - id: get-page-markdown
    handler: fetch
    with:
      url: "{{ page.markdown }}"

  - handler: clipboard
```

The handler returns an object with `success`, `content`, and `url`.

### print

The `print` handler opens the browser print dialog.

```yml _components/actions/print-current-page.yml
steps:
  - handler: print
```

The handler returns an object with `success`.

### scroll

The `scroll` handler scrolls to a target. The target input can be named `target`, `href`, `url`, `link`, or `value`.

```yml _components/actions/scroll-to-introduction.yml
steps:
  - handler: scroll
    with:
      target: "#introduction"
      behavior: smooth
```

The handler returns an object with `success` and `target`.
