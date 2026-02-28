---
icon: pencil
tags: [guide]
nav:
  badge: NEW|info
---
# Blogging

Adding a blog to your Retype website is as quick as adding a new `.md` file to your project.

>>> Add a `/blog/` folder

Create a `/blog/` folder in your project.

>>> Add a `.md` file

Create a new `.md` file using the format `YYYY-MM-DD-title.md` with that specific date format as the filename prefix:

```
/blog/2025-11-15-hello-world.md
```

>>> Write your post:

```md
# Hello World

This is my first blog post built with Retype.
```

>>> Run Retype

Run `retype start` and your blog is live at `/blog/`.

>>>

Retype automatically handles the rest:

1. A summary page is generated at `/blog/`
1. An RSS feed is created
1. Each post gets `Newer` and `Older` navigation buttons
1. Posts are sorted by date, newest first

!!!
The date in the filename sets the publish date. You can also set or override the date using the [`date`](/configuration/page.md#date) frontmatter property.
!!!

---

## Latest Post

Use the Retype templating engine to dynamically render a [Card](/components/card.md) linking to your most recent blog post:

{%{
```md
[!card]({{ content.blog.posts[0].filePath }})
```
}%}

[!card]({{ content.blog.posts[0].filePath }})

### Three Posts

Combine a `for` loop with vertical cards to display your three most recent posts:

{%{
```md
{{ for post in content.blog.posts | array.limit 3 ~}}
[!card vert]({{ post.filePath }})
{{ end }}
```
}%}

{{ for post in content.blog.posts | array.limit 3 ~}}
[!card vert]({{ post.filePath }})
{{ end }}

---

## Blog summary page

The `/blog/` folder can include a `index.md` (or `default.md` or `readme.md`) file to customize the blog summary page heading or add introductory content above the post listing.

```md /blog/index.md
# Company Blog

This is our company blog.
```

---

## Frontmatter

Blog posts support all standard [page configuration](/configuration/page.md) options. A few are especially useful for blog posts:

```yml
---
author: Jane Smith
category: [announcements]
tags: [release, update]
---
```

### author

Set one or more authors for the post. Accepts a simple name, email, or a full author object with `name`, `email`, `link`, and `avatar` properties.

```yml
---
author: Jane Smith
---
```

```yml
---
authors:
  - name: Jane Smith
    email: jane@example.com
    link: https://github.com/janesmith
  - Bob Wilson
---
```

See the full [`author`](/configuration/page.md#author) documentation for all options.

### date

A custom publish date in `YYYY-MM-DD` format. If set, Retype displays the date at the top of the post and uses it for ordering.

```yml
---
date: 2025-11-15
---
```

If no `date` frontmatter is set, Retype uses the date from the filename.

### category

Assign one or more categories. Retype automatically generates category summary pages at `/categories/`.

```yml
---
category: [announcements, engineering]
---
```

---

## Project configuration

The [`blog`](/configuration/project.md#blog) settings in your `retype.yml` file control the behavior of the blog summary pages.

```yml retype.yml
blog:
  pageSize: 5
  maxResults: 100
  title: News
  base: news
```

### pageSize

The number of posts displayed per summary page. Default is `10`.

```yml
blog:
  pageSize: 5
```

If the total number of posts exceeds the `pageSize`, Retype automatically generates paginated summary pages.

### maxResults

The maximum total number of posts included across all paginated summary pages. Default is unlimited.

```yml
blog:
  maxResults: 100
```

Posts beyond the limit are excluded from the summary but remain accessible by direct URL.

### title

A custom heading for the blog summary page. Default uses the locale translation.

```yml
blog:
  title: News & Updates
```

### base

The URL path segment for the blog. Default is `"blog"`.

```yml
blog:
  base: news
```

Setting `base: news` generates the blog summary at `/news/` instead of `/blog/`. Your blog post files still live in the `/blog/` folder in your project source.
