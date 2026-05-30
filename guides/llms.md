---
icon: agent
tags: [guide]
label: llms.txt
nav:
  badge: NEW|info
---
# llms.txt

Retype automatically generates an `llms.txt` file for your project when you build your site.

[!button icon="agent" text="View the llms.txt for retype.com" corners="pill" variant="contrast"](/llms.txt)

The generated file is published to the root of your site, such as `/llms.txt`, and gives AI tools a clean map of the important documentation pages in your project. Instead of asking a tool to crawl the visual HTML site, `llms.txt` points directly to Markdown-friendly page URLs that are easier to read, summarize, index, and reference.

---

## Why use llms.txt?

An `llms.txt` file helps AI systems discover and understand your documentation more efficiently.

It can be useful for projects that want to:

- Make installation, configuration, API, component, hosting, and support pages easier for AI tools to find
- Point assistants toward clean Markdown versions of pages instead of rendered HTML
- Give downstream tools a concise project overview before they fetch individual pages
- Improve the quality of AI-assisted answers by exposing the canonical docs structure
- Keep AI discovery current without maintaining a separate index by hand

The file works especially well with Retype's generated Markdown output. Each listed page links to a `.md` version of the page, so tools can fetch a source-like representation of the content directly.

---

## Generated file

When Retype generates `llms.txt`, it creates a Markdown-formatted index for the site.

The generated file can include:

- A site title, using your configured metadata when available
- A site description, if configured
- Links to public documentation pages using Markdown-friendly `.md` URLs
- Page descriptions from the page `description` frontmatter, when available
- Section headings that follow the documentation structure
- Blog posts, respecting the configured blog result limit

Pages that should not be generally discoverable are excluded automatically. This includes hidden pages, private pages, protected pages, redirect pages, and generated pagination pages.

For example, a generated `llms.txt` can include entries such as:

```md
# My Project

> Project documentation for users and contributors.

## Guides

- [Installation](https://example.com/guides/installation.md): Install the project using npm, Yarn, or dotnet.
- [Project Configuration](https://example.com/configuration/project.md): Site-wide settings in retype.yml.
- [Components](https://example.com/components/components.md): Full index of built-in authoring components.
```

Open `/llms.txt` on your published site to view the generated file.

---

## Custom file

If Retype finds an `llms.txt` file in the [input](/configuration/project.md#input) root of your project, Retype uses that file instead of generating a file automatically.

This makes customization straightforward:

1. Build your site and open the generated `/llms.txt`
1. Copy the generated content as a starting point
1. Create a new `llms.txt` file in the root of your project
1. Edit the file to highlight the pages, sections, or instructions that matter most for your project

On the next build, Retype will copy your custom `llms.txt` into the output and skip automatic generation for that file.

Use a custom file when you want more control over the content, ordering, descriptions, or instructions presented to AI tools. Delete the custom root `llms.txt` if you want Retype to resume automatic generation.
