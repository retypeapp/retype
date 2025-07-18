---
authors:
  - name: "@geoffreymcgill"
    email: geoff@retype.com
    link: https://github.com/retypeapp
category:
  - release
---
# What's New in Retype v3.8

![](images/2025-05-04.png)

Retype v3.8 introduces powerful new linking capabilities, enhanced search functionality, and improved content management features. This release focuses on making documentation more interconnected and discoverable while adding modern conveniences for content creators.

## Stack navigation mode

New navigation mode that transforms your top-level folders into visually distinct stacked blocks. This feature is perfect for complex documentation sites that need better organization and visual hierarchy.

!!!
This feature is a [!badge Pro|info] only feature and a Retype [key](/pro/pro.md) is required to enable.
!!!

### Project configuration

Enable stack mode for all top-level folders in your project by adding the following setting to your project `retype.yml` file. See [docs](/configuration/project.md#nav-mode).

```yaml retype.yml
nav:
  mode: stack
```

This transforms your entire navigation structure, making top-level sections more prominent and easier to distinguish.

### Page configuration

You can also enable stack mode for specific folders by adding the same setting into a `index.yml` file within your folder. See [docs](/configuration/page.md#nav-mode).

```yaml index.yml
---
nav:
  mode: stack
---
```

### How It Works

Stack mode only applies to top-level folders that contain child pages. When enabled:

- Top-level folders are rendered as distinct visual blocks
- Each stack block contains the folder's child pages
- The layout provides better visual separation between major sections
- Navigation becomes more scannable for large documentation sites

### Requirements

- Stack mode requires a Retype [[Pro]] key
- Only works on top-level folders (not nested subfolders)
- Folders must contain child pages to be rendered as stacks

This feature is particularly useful for documentation sites with multiple product lines, different user types, or distinct content categories that benefit from clear visual separation.

## WikiLinks Support

Another big new feature in v3.8 is comprehensive WikiLink syntax support, bringing wiki-style linking to Retype. This makes it easier to create interconnected documentation with flexible, forgiving link resolution.

### Basic WikiLinks

Create links using double square brackets:

```markdown
Check out the Retype [[Getting Started]] guide.

The same link using Markdown would be [Getting Started](/guides/getting-started.md).
```

Check out the Retype [[Getting Started]] guide.

Retype automatically resolves these links even if the exact filename does not match. Retype intelligently handles variations in naming, making your links more resilient to file renames and reorganization.

### WikiLinks with Custom Labels

Provide custom link text using the pipe syntax:

```markdown
Read our [[installation-guide|Installation Guide]] to get started.
```

### Image WikiLinks

Embed images using the same syntax:

```markdown
![[sample.jpg]]
![[sample.jpg|Sample image]]
```

![[sample.jpg|Sample image]]

### Anchor Links

Link to specific sections within pages:

```markdown
[[troubleshooting#common-issues]]
[[#local-section]]  <!-- Same page anchor -->
```

WikiLinks use intelligent resolution that can find pages even when the link doesn't exactly match the filename, making your documentation more maintainable.

## YouTube Auto-Embedding

Retype now automatically converts YouTube URLs into embedded video players. Simply paste a YouTube URL on its own line. See [docs](/components/youtube.md).

```markdown
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

https://www.youtube.com/watch?v=dQw4w9WgXcQ

This becomes a fully responsive, embedded video player with proper styling and controls.

### Supported YouTube Formats

Retype recognises all common YouTube URL formats:

- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`
- URLs with timestamps: `https://www.youtube.com/watch?v=VIDEO_ID&t=120s`
- Playlist URLs with additional parameters

## Home.md Support

You can now use `home.md` as your project's home page, providing another option alongside the existing `readme.md`, `index.md`, `default.md`, and `welcome.md` files.

```md home.md
# Welcome Home

This is your project's home page using home.md.
```

This gives you more flexibility in organising your content and aligns with common documentation conventions.

## Automatic Search Language Detection

Retype now automatically detects the languages used in your content and optimises search accordingly. This happens behind the scenes without any configuration needed.

### How It Works

The language detection system:
- Analyses your content to identify languages used
- Automatically includes appropriate search language packs
- Supports over 25 languages including English, Spanish, French, German, Japanese, Chinese, Arabic, and many more
- Improves search accuracy for multilingual documentation

### Manual Configuration

You can still manually configure search languages if needed:

```yaml
search:
  languages:
    - en
    - es
    - fr
    - "*"  # Enable auto-detection alongside manual languages
```

The `"*"` token enables auto-detection while keeping your manually specified languages.

## Enhanced Include Functionality

The `include` feature now supports accessing files outside of your project directory, giving you more flexibility in content organization:

{%{
```md /docs/readme.md
{{ include "../readme.md" }}
```
}%}

This is particularly useful for grabbing the `readme.md` outside of your documentation directory.

## Greek and Hebrew Language Support

Retype now includes full support for Greek and Hebrew languages, including:
- Proper text rendering and direction
- Search functionality optimised for these languages
- UI translations where applicable

---

## Write On!

All existing Retype features continue to work exactly as before. The new WikiLinks feature works alongside traditional Markdown links, so you can adopt it gradually or use both approaches as needed.

Try out `v3.8` and experiment with the new features, then let us know what you think on [X](https://x.com/retypeapp) or by opening a GitHub [Issue](https://github.com/retypeapp/retype/issues). Your input helps shape the future of Retype.
