New `content` template property that allows authors to access various content-related data about their project.

---

## Design Principles

- **Public pages only** - All `content.*` properties return only visible/public pages. Hidden and draft pages are excluded.
- **Inclusive collections** - `content.pages` includes all page types (regular pages, blog posts, etc.). Users can filter as needed.
- **Wikilinks consistency** - `content[key]` uses the same resolution logic as `[[key]]` wikilinks.
- **Performance** - Content data is populated during normal page processing. No additional passes through pages required.
- **Unified page object** - Page objects returned by `content.*` are the same `page` object used in templates. Any property available on `page` is available on pages returned from `content.pages`, `content.tags["tag"].pages`, etc.

---

## Page Lookup by Key

### `content[key]`

Get a specific page using the same key resolution as wikilinks. This provides consistency between `[[key]]` wikilink syntax and template access.

####  Get a specific page by wikilinks key

{{ content["getting-started"] }}

{{ content["installation"] }}

{{ content["about"] }}

####  Access page properties

title: {{ content["getting-started"].title }}\
description: {{ content["getting-started"].description }}\
url: {{ content["getting-started"].url }}

####  Render as a card

[!card]({{ content["getting-started"].filePath }})

####  Use in conditionals

{{ if content["premium-features"] }}
  Check out our [Premium Features]({{ content["premium-features"].url }})
{{ end }}

The key resolution follows the same rules as wikilinks:

| Key Type | Example |
|----------|--------|
| Filename (without extension) | `content["getting-started"]` |
| Page title | `content["Getting Started"]` |
| Relative path | `content["guides/installation"]` |
| Page ID (if configured) | `content["my-custom-id"]` |

---

## Page Collections

### `content.pages`

Get all pages in the project. Includes all page types (regular pages, blog posts, API pages, etc.).

####  List all pages

{{ for page in content.pages ~}}
  - {{ page.title }} - `{{ page.filePath }}`
{{ end }}

####  Get 10 most recent pages by date

{{ for page in content.pages | array.limit 10 ~}}
  - {{ page.title }} - `{{ page.filePath }}`
{{ end }}

### `content.blog.posts`

Get all blog posts sorted by date (newest first).

####  Render the latest blog post as a Card

[!card]({{ content.blog.posts[0].filePath ~}})

####  Render the 5 most recent posts

{{ for post in content.blog.posts | array.limit 5 ~}}
[!card vert]({{ post.filePath }})
{{ end }}

---

## Path-based Filtering

### `content.path("folder")`

Get all pages within a specific folder path.

####  Get all pages in the /guides folder

{{ for page in content.path("guides") ~}}
  - {{ page.title }} : `{{ page.filePath }}`
{{ end }}

<!-- ####  Get pages in a nested folder

{{ for page in content.path("docs/api") | array.limit 5 ~}}
  - {{ page.title }}
{{ end }} -->

####  Combine with other filters

{{ for page in content.path("components") | array.limit 5 ~}}
[!card vert]({{ page.filePath }})
{{ end }}

---

## Full-text Search

### `content.search("query")`

Search page content and return matching pages. Uses intelligent search to find relevant results.

#### Search for pages containing "git"

{{ for page in content.search("git") ~}}
  - {{ page.title }} : `{{ page.filePath }}`
{{ end }}

#### Search and limit results

{{ for page in content.search("get") | array.limit 5 ~}}
  - {{ page.title }} : `{{ page.filePath }}`
{{ end }}

Search covers:
- Page title (highest priority)
- Page label (navigation/sidebar label)
- Page description
- Tags
- Categories
- Page headings
- Page paragraph text (from search index)

---

## Taxonomy Collections

### `content.tags`

Get all unique tags used across the project, each with their associated pages.

#### List all tags

{{ for tag in content.tags ~}}
  - {{ tag.title }} `({{ tag.pages | array.size }} pages)`
{{ end }}

#### Get pages for a specific tag

{{ for page in content.tags["config"].pages ~}}
  - {{ page.title }} : `{{ page.filePath }}`
{{ end }}

### `content.categories`

Get all unique categories used across the project, each with their associated pages.

#### List all categories

{{ for category in content.categories ~}}
  - {{ category.title }} ({{ category.pages | array.size }} pages)
{{ end }}

#### Get pages in a specific category

{{ for page in content.categories["release"].pages ~}}
  - {{ page.title }}
{{ end }}


### `content.authors`

Get all unique authors across the project, each with their associated pages.

#### List all authors

{{ for author in content.authors ~}}
  - {{ author.name }} ({{ author.pages | array.size }} posts)
{{ end }}

#### Get pages by a specific author

{{ for page in content.authors["@geoffreymcgill"].pages ~}}
  - {{ page.title }}
{{ end }}

---

## Navigation Structure

### `content.nav`

Access the navigation tree structure.

####  List top-level navigation items

{{ for item in content.nav.children ~}}
  - {{ item.label }} (`{{ item.children | array.size }} children)
{{ end }}
```

---

## Page Object

Page objects returned from `content.*` properties are **the same `page` object** used in templates. This means:

1. **All existing `page` properties are available** - Any property you can access via `page.title`, `page.description`, etc. is also available on pages returned from `content.pages`, `content.tags["tag"].pages`, and other content collections.

2. **Future additions are automatic** - When new properties are added to the `page` template variable, they automatically become available on all pages returned by `content.*` with no additional work.

3. **Consistent behavior** - The same ScriptObject that powers `page` in a page's own template context is what gets returned in content collections.

### Available Properties

All properties from the `page` template variable:

**Core Properties:**

| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Page identifier |
| `route` | string | Page route/URL path |
| `redirect` | string | Redirect target (if set) |
| `slug` | string | URL slug (alias of route) |
| `title` | string | Page title |
| `label` | string | Navigation label |
| `sidebar_label` | string | Sidebar label (alias of label) |
| `icon` | string | Page icon |
| `image` | string | Featured image |
| `description` | string | Page description |
| `hidden` | boolean | Whether page is hidden |
| `expanded` | boolean | Whether nav item is expanded |
| `breadcrumb` | boolean | Whether to show breadcrumb |
| `layout` | string | Page layout (page, blog, central) |
| `order` | string | Navigation order |
| `visibility` | string | Page visibility |
| `date` | string | Page date |
| `templating` | boolean | Whether templating is enabled |

**Arrays:**

| Property | Type | Description |
|----------|------|-------------|
| `tag` | string/array | Single tag or first tag |
| `tags` | array | All tags |
| `category` | string/array | Single category or first category |
| `categories` | array | All categories |
| `author` | string/object | Single author |
| `authors` | array | All authors |

**Nested Objects:**

| Property | Description |
|----------|-------------|
| `page.meta.title` | Meta title override |
| `page.meta.description` | Meta description override |
| `page.nav.mode` | Navigation mode |
| `page.nav.badge` | Navigation badge |
| `page.toc.label` | Table of contents label |
| `page.toc.depth` | Table of contents depth |
| `page.nextprev.mode` | Next/prev navigation mode |
| `page.backlinks.enabled` | Whether backlinks are enabled |
| `page.backlinks.autoInclude` | Auto-include backlinks |
| `page.backlinks.title` | Backlinks section title |
| `page.backlinks.maxResults` | Max backlinks to show |
| `page.data.*` | Custom data dictionary |

---

## Tag/Category Object Properties

| Property | Type | Description |
|----------|------|-------------|
| `title` | string | Tag/category name |
| `url` | string | URL to the tag/category index page |
| `pages` | array | All pages with this tag/category (returns `page` objects) |

---

## Author Object Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | Author name |
| `email` | string | Author email |
| `avatar` | string | Avatar URL |
| `link` | string | Author link/profile URL |
| `pages` | array | All pages by this author (returns `page` objects) |

---

## Examples

### Recent posts by a specific author

{{ for post in content.authors["@geoffreymcgill"].pages ~}}
[!card vert]({{ post.filePath }})
{{ end }}

### Pages with a specific tag

```
{{ for page in content.tags["guide"].pages | array.limit 5 ~}}
  - [{{ page.title }}]({{ page.url }}) - {{ page.date | date.to_string "%Y-%m-%d" }}
{{ end }}
```

### Access nested page properties

{{ for page in content.pages | array.limit 5 ~}}
  - {{ page.title }}
    {{ if page.meta.description }}({{ page.meta.description }}){{ end }}
    {{ if page.nav.badge }}[{{ page.nav.badge }}]{{ end }}
{{ end }}

### Related posts (same tags as current page)

```
{{ for tag in page.tags }}
  {{ for related in content.tags[tag].pages | array.limit 3 }}
    {{ if related.url != page.url }}
      - [{{ related.title }}]({{ related.url }})
    {{ end }}
  {{ end }}
{{ end }}
```

### Site statistics

```
**Site Stats:**
- {{ content.pages | array.size }} total pages
- {{ content.blog.posts | array.size }} blog posts
- {{ content.tags | array.size }} tags
- {{ content.authors | array.size }} authors
```

### Dynamic "See Also" section

```
####  Build from frontmatter see_also array

{{ for page in page.backlinks }}
- {{ page.title }}
  <!-- {{ related = content[key] }}
  {{ if related }}
    - [{{ related.title }}]({{ related.url }})
  {{ end }} -->
{{ end }}
```

### Featured content from a folder

```
## Featured Guides

{{ for page in content.path("guides/featured") | array.limit 4 }}
[!card]({{ page }})
{{ end }}
```

### Search results page

```
## Pages about authentication

{{ for page in content.search("authentication oauth login") }}
  - [{{ page.title }}]({{ page.url }})
    {{ if page.description }}{{ page.description | string.truncate 100 }}{{ end }}
{{ end }}
```

### Using custom page data

```
####  Access custom data from frontmatter

{{ for page in content.pages ~}}
  {{ if page.data.featured }}
    - {{ page.title }} (Featured!)
  {{ end }}
{{ end }}
```

---

## Implementation Notes

### Performance

Content data should be populated during normal page processing as pages are built. Avoid requiring a separate pass through all pages if possible. If a second pass is unavoidable, that's acceptable.

### Search Implementation

The `content.search()` function requires an intelligent search library for relevance ranking. Consider:
- Fuzzy matching
- Term frequency weighting
- Title/description boost over body content

### Page Object Implementation

Use the existing `TemplateVariableHelper.BuildPageScriptObject()` method to create page objects for `content.*` collections. This ensures consistency with the `page` template variable and eliminates duplicate code.

### Open Items

- [ ] Finalize path-based filtering syntax (`content.path()` vs alternatives)
- [ ] Determine search library for `content.search()`
- [ ] Consider additional sort options for collections