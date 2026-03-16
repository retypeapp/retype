---
authors:
  - name: "@geoffreymcgill"
    email: geoff@retype.com
    link: https://github.com/retypeapp
category:
  - release
---
# What's New in Retype v4.2

![](images/2026-03-10-whats-new-in-retype-v420.png)

Retype `v4.2` adds new RSS controls, customizable labels, new search indexing controls, Card component upgrades, and a few CLI updates that make publishing easier to fine tune.

See the full [[Changelog]] and [[Feature Log]] for a detailed list of updates in the `v4.2` release.

---

## New RSS settings

Retype `v4.2` introduces more control over the generated RSS feed for your blog via the new `blog.rss` project settings.

### Metadata and limits

The new `rss` settings give you direct control over how many posts the rss feed includes, the title, description, and a custom copyright statement:

{%{
```yaml retype.yml
blog:
  title: Retype Blog
  rss:
    maxResults: 25
    title: Release Notes
    description: Product announcements, release notes, and shipping updates
    copyright: © Copyright {{ date.now.year }}. All rights reserved.
    imageUrl: /static/retype-feed.png
```
}%}

Configuring the `maxResults` is useful when you have a deep blog archive, but your feed should stay focused on the latest posts.

If you have blog, Retype now includes the rss meta tag on all pages to help readers discover the feed faster.

---

## New `labels` project setting

`v4.2` adds a project-level [`labels`](/configuration/project.md#labels) setting so you can customize all labels and messages for your project.

```yaml retype.yml
labels:
  default:
    search_input_placeholder: Search the docs
    toc_contents_label: On this page

  fr:
    search_input_placeholder: Rechercher dans la documentation
    toc_contents_label: Sur cette page
```

Use `labels.default` for shared wording, then add a specific [locale](/configuration/project.md#locale) group, such as `fr`, when you need to customize for a specific language.

All label keys are available in the [[translations]] configuration reference.

### Custom `locale` IDs for practical wording

`locale` can also point at your own label collections, not just built-in language collections.

```yaml retype.yml
locale: partner

labels:
  default:
    search_input_placeholder: Search docs

  partner:
    search_input_placeholder: Search partner docs
    text_next: Next step
```

That makes it easy to give a partner portal, support site, or internal handbook its own voice while keeping most labels shared.

---

## New `search.include` and `search.exclude`

`v4.2` adds `search.exclude` and `search.include` so you can control what lands in the search index without changing what gets published.

If you want to keep a section such as `/blog` out of search, the config stays simple:

```yaml retype.yml
search:
  exclude:
    - "/blog"
```

And if you want to start from the opposite direction, `search.include` can opt a path back in after a broader exclude:

```yaml retype.yml
search:
  exclude:
    - "*"
  include:
    - "/blog"
```

This is useful when only part of a mixed-content site should be searchable.

---

## New `created` and `lastUpdated` page settings

`v4.2` adds `created` and `lastUpdated` page front matter settings.

Use `created` when you want to preserve when a page first went live, and use `lastUpdated` when readers should see that the page was reviewed or refreshed later.

For a long-lived guide or migration page, the front matter can stay simple:

```yaml
---
created: 2024-05-14
lastUpdated: 2026-03-01
---
```

That preserves when the page first went live while still surfacing a recent update.

`lastUpdated` can also be filled automatically from Git commit metadata and rendered in the page footer. By default, Retype will try to add the last updated **date** using the latest **committer** metadata when full Git history is available. The `by` value is available too, but it is off by default.

```yaml retype.yml
lastUpdated:
  date:
    enabled: true
    source: committer
  by:
    enabled: true
    source: author
```

This is useful when you want the footer to show both the most recent commit date and who made the change, without maintaining those values by hand.

!!! Full Git history required
Automatic `lastUpdated` values depend on Git history. If your build runs from a shallow clone, Retype will skip the generated footer values.

For GitHub Actions, the following `fetch-depth: 0` configuration fetches the full history:

```yml
- uses: actions/checkout@v6
  with:
    fetch-depth: 0
```
!!!

Manual page values and generated Git values are both supported, but they are not mixed on the same page. If you manually set `lastUpdated` or `lastUpdatedBy`, Retype uses those manual values for that page instead of filling in the missing pieces from Git.

It works well for long-lived guides, release notes, and migration pages that continue to evolve after launch.

---

## Card component upgrade

`v4.2` adds a new [`compact`](/components/card.md#compact) Card layout and new customizable [properties](/components/card.md#property-overrides) such as `title`, `text`, `icon`, `image`, `kicker`, and `footer`.

Use the `compact` layout when you want a smaller card without an image.

```md
[!card title="Start here" text="Create your first Retype project." icon=":rocket:" layout="compact"](/guides/getting-started.md)
[!card compact](/guides/installation.md)
```

The default Card component layout shows an image on the left, `vertical` places the image above, and `compact` removes the image to tighten up the footprint.

[!card title="Start here..." text="Create your first Retype project." icon=":rocket:" layout="compact"](/guides/getting-started.md)
[!card compact](/guides/installation.md)

### List pair cards

You can also create an array of cards from list pairs by using a wikilink as the top-level list item and a nested list item for the description.

The top-level link must be a wikilink to a local page in your project. The nested text is always configured manually and is not pulled from the linked page.

```md
- [[Changelog]]
  - Review the full list of changes included in the latest Retype release.
- [[Feature Log]]
  - Explore the headline features and improvements added across recent releases.
- [[Community]]
  - Learn about the free community key and other community resources.
```

- [[Changelog]]
  - Review the full list of changes included in the latest Retype release.
- [[Feature Log]]
  - Explore the headline features and improvements added across recent releases.
- [[Community]]
  - Learn about the free community key and other community resources.

---

## New debounce control for `retype start`

A new debounce option for [`retype start`](/guides/cli.md#retype-start) has been added to help reduce rebuild churn when one edit turns into a burst of file changes. Some markdown editors can be rapidly auto-saving the file you're working on, which can trigger multiple rebuilds in quick succession.

With `debounce`, Retype waits briefly for the change burst to settle, then rebuilds once instead of reacting to every intermediate update. 

To delay rebuilds, add a `--debounce` flag and value on the command line. The following sample demonstrates how to add a 400 millisecond debounce to the `retype start` command:

```bash
retype start --debounce 400
```

If you would like to configure a `debounce` value as the default for the project without having to pass the `--debounce` flag every time, you can add the setting to your `retype.yml` file. The following sample demonstrates how to configure a 400 ms debounce to be added when running `retype start`:

```yaml retype.yml
start:
  debounce: 400
```

!!!
If you want Retype to react faster to changes, reduce the `debounce` value. The default value is `100` ms.
!!!

---

## New `retype stop` command

Retype `v4.2` adds the [`retype stop`](/guides/cli.md#retype-stop) CLI command to make it easier to stop a local server that was started using `retype start`.

Run `retype stop` from the same command line location that your started the project from, and Retype will stop the server for that project.

When you want the bigger picture, `retype stop --list` returns a list of all the currently running Retype servers.

That makes restarts and cleanup safer when you have multiple preview servers running locally.

---

## Write On!

Retype `v4.2` brings better feed controls, more flexible UI labeling, tighter search indexing controls, and smoother local preview workflows. If you run a blog with Retype or maintain docs across different audiences, this release gives you more control without pushing that complexity into custom code.

[Install or upgrade](/guides/installation.md) Retype to try the latest improvements, and keep the feedback coming on [X](https://x.com/retypeapp) or in GitHub [Issues](https://github.com/retypeapp/retype/issues).

---