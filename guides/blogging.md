---
icon: pencil
---
# Blogging

## Introduction

Retype supports laying your `.md` files out as a cozy blogging website -- without compromise to the actual documentation!

Blog posts are not included to Retype's main navigation, avoiding clutter; yet, they can still be browsed via the [`/blog` summary](#blog-posts-summary). It is possible to go thru newer or older posts by using [navigation handles](#nextprevious-handles). Your readers can subscribe to [its RSS feed](#rss-feed) to receive updates as new posts are made.

There's not much involved to set up the blogging with Retype. The files can either [be placed in `/blog` folder](#blog-dedicated-folder) or [be set up to be served as blog posts](#blog-from-any-folder).

---

## Blog dedicated folder

Pages placed within the `/blog` folder of Retype's [input directory](../configuration/project.md#input) (and its subfolders) will automatically be considered blog posts and will populate [the blog posts' summary](#blog-posts-summary) and be pushed to [the RSS feed](#rss-feed).

Blog posts are sorted by their publish date, newest first. It is also a good idea to assign an author to the post using [the `author` page config](../configuration/page.md#author).

Setting author and publish date using the page's metadata block should look like this:

```markdown
author:
  name: Frank Esposito
  email: frank@example.com
date: 2021-10-13T17:49
```

!!!
The page settings can also be passed via a dedicated file instead of the page metadata block. Read the [Separate `.yml` file](../configuration/page.md#separate-yml-file) for details.
!!!

---

## Blog from any Folder

Any page, in any other folder of Retype's input can also be set as a blog post by giving it [the `layout: blog` page config](../configuration/page.md#layout). For example, a blog post outside of `/blog` should look like this:

```markdown
---
layout: blog
author:
  name: Frank Esposito
  email: frank@example.com
date: 2021-10-13T17:34
---

# New Blog Post

Blog post content goes herre.
```

Blog posts created this way won't have [navigation buttons](#nextprevious-handles) and won't be included to [posts' summary](#blog-posts-summary) or [RSS feed](#rss-feed).

---

## Blog posts summary

The root of the `/blog` path will conveniently host a summary page of all blog posts, [new posts first](#ordering). It can be used to easily browse thru recent posts faster than going through the [navigation buttons](#nextprevious-handles).

The path will always be `/blog` within the documentation site. For instance, if the documentation is to be hosted under `https://example.com/docs`, then the path to blog posts' summary will be `https://example.com/docs/blog/`.

The default location for local runs should be `http://localhost:5000/blog/`.

!!!
If all blog posts in the documentation website are outside the `/blog` folder, no summary page will be available at all.
!!!

---

## RSS feed

When one or more blog pages are added to `/blog`, Retype will output the `/blog/feed.xml` RSS resource which can then be set up as a RSS feed from your preferred reader app! The address to set up in the client would be something like this:

```
https://example.com/blog/feed.xml
```

Every new blog post will add to the top of the feed, up to the most recent 20 posts.

!!!
If all blog posts in the documentation website are outside the `/blog` folder, the RSS feed resource (`/blog/feed.xml`) will not be created at all.
!!!

---

## Specifics

Blog pages have exclusive settings and behavior to best fit the blogging world. There are also some aspects that are shared between normal documentation pages and blog posts.

### Page configs

- [`author`](../configuration/page.md#author): configure the post's author or authors.
- [`date`](../configuration/page.md#date): configura the post's publish date (and time).
- [`layout: blog`](../configuration/page.md#layout): if the post's file is placed outside the `/blog` folder, this can be set to indicate the page is a blog post.

### Ordering

Instead of alpha-numerical sorting as ordinary documentation articles in the navigation bar, blog posts are ordered by their "publish date". The publish date can be assigned to a blog post not only via [the `date` page config](../configuration/page.md#date), but also via the file's name. In other words, giving a blog post:

```yaml
date: 2021-10-13
```

Is equivalent to naming the file, for instance, as `2021-10-13-my-new-post.md`.

Newer blog posts are listed first, that is, ordered by date, descending. So in listings like [the summary page](#blog-posts-summary), newest posts are listed at the top of the page.

!!!
[The `date` page config](../configuration/page.md#date) allows specifying a post's **publish time** in a day. File names, though, only allow dates in the `yyyy-mm-dd` format and no time-of-the day field is parsed at all.
!!!

### Next/previous handles

When browsing documentation articles where the navigation buttons say "next" and "previous" articles, blog posts will use the "older" and "newer" wording instead to better fit the blogging context.

!!!
Blog posts outside `/blog` folder structure won't get the navigation buttons.
!!!

### Exclusive navigation

Blog posts are not included in the left navigation bar. In fact, blog post pages won't display the navigation bar that is usually displayed in documentation articles, leaving more space for reading and less artifacts for distraction, allowing readers to enjoy the content to its best.