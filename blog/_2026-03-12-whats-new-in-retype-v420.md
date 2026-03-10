---
authors:
  - name: "@geoffreymcgill"
    email: geoff@retype.com
    link: https://github.com/retypeapp
category:
  - release
layout: page
lastUpdated: 2026-03-07T16:31
---
# What's New in Retype v4.2

Retype `v4.2` continues the recent push toward practical, high-impact improvements. This release is shaping up around the kinds of details that make a site feel more polished in production: better control over your blog feed, cleaner ways to tune built-in UI labels, and more quality-of-life improvements that keep configuration in your project instead of in custom patches.

See the full [[Changelog]] and [[Feature Log]] for the growing list of updates in the `v4.2` release.

## New `blog.rss` feed settings

`v4.2` gives you more control over generated RSS metadata directly from `retype.yml`.

You can keep your blog landing page optimized for readers while tuning the feed for subscribers and aggregators.

### `blog.rss` metadata and limits

The new `blog.rss` settings give you direct control over how many posts the feed includes and how the feed identifies itself:

```yaml retype.yml
blog:
  title: Engineering Blog
  rss:
    maxResults: 25
    title: Retype Release Notes
    description: Product announcements, release notes, and shipping updates
    copyright: "© Copyright {{ year }}. Retype. All rights reserved."
    imageUrl: https://retype.com/static/retype-feed.png
```

This is useful when your blog archive stays long and scrollable, but your feed should stay focused on the latest `25` posts.

Just as importantly, `blog.rss.maxResults` only affects the feed. It does not change the `blog.maxResults` setting used by your paginated blog summary pages.

### RSS defaults from existing config

If you skip explicit RSS settings, Retype now derives better defaults from the config you already have:

```yaml retype.yml
branding:
  title: Retype

meta:
  siteName: Retype
  description: A documentation tool focused on beautiful output and fast publishing

favicon: /static/favicon.png

blog:
  title: News & Updates
```

With a setup like this, Retype can derive a stronger RSS title, reuse your project description, and use a supported favicon as the RSS image when `blog.rss.imageUrl` is not set.

The result is a more polished feed with less config.

### RSS feed discovery metadata

`v4.2` also improves RSS discovery metadata in the page HTML, so feed readers and browser tools see a clearer feed title instead of the older generic naming pattern.

It is a small change, but useful when your site is consumed in more places than just the browser tab.

## New `created` and `lastUpdated` page settings

`v4.2` adds `created` and `lastUpdated` page front matter settings.

This is useful when a page should show both when it first went live and when it was last refreshed.

For a long-lived guide or migration page, the front matter can stay simple:

```yaml
---
created: 2024-05-14
lastUpdated: 2026-03-01
---
```

That preserves when the page first went live while still surfacing a recent update.

The same pattern works nicely for release notes and other pages that continue to evolve after launch:

```yaml
---
created: 2026-03-12
lastUpdated: 2026-03-18
---
```

In practice, this helps with a few common publishing workflows:

- Evergreen guides can keep the date they first shipped while still making it obvious the content was reviewed and refreshed.
- Release notes can keep the original launch date even after you add a follow-up clarification, known issue, or post-release note.
- Migration pages can stay anchored to when the change first mattered while still showing readers that the guidance has been updated for the latest release.

It is a small addition, but it gives readers a more honest timeline.

## New `labels` project setting

`v4.2` also adds a project-level `labels` setting.

It lets you override built-in UI strings from `retype.yml` to match product terminology, brand voice, or locale needs without maintaining custom theme code.

For many teams, that is the sweet spot: small wording control without turning a docs project into a theme-maintenance project.

```yaml retype.yml
labels:
  default:
    search_input_placeholder: Search the docs
    toc_contents_label: On this page
    text_system: Follow system

  fr:
    search_input_placeholder: Rechercher dans la documentation
    toc_contents_label: Sur cette page
    text_system: Suivre le système
```

Use `labels.default` for the shared wording you want across the site, then add a locale bucket such as `fr` only where phrasing needs to diverge.

That keeps the feature practical. You can preserve Retype's built-in labels almost everywhere, then step in only for the strings that carry more product voice, such as the search prompt, the table of contents label, or the system-theme option.

A few real-world examples:

- Use `toc_contents_label` to match the wording your product or docs team already uses, such as “On this page,” while leaving the rest of the interface on Retype defaults.
- Give `search_input_placeholder` a more helpful voice for a docs portal, customer help center, or internal handbook without touching templates.
- Keep shared copy in `labels.default`, then add a small `fr` override when one locale needs a more natural phrase for something like `text_system` or the search prompt.

For many teams, this is exactly the kind of customization that used to tempt a theme override. Now it can stay in `retype.yml`, where it is easier to review and version.

### Custom `locale` IDs for practical wording

`v4.2` also makes this more flexible by letting `locale` point at your own label buckets, not just built-in language codes.

```yaml retype.yml
locale: partner

labels:
  default:
    search_input_placeholder: Search docs

  partner:
    search_input_placeholder: Search partner docs
    text_next: Next step
```

That is handy when the audience is still reading English, but the product voice is not quite the same. A partner portal, white-label site, or internal handbook can keep one shared baseline in `labels.default`, then switch to a small `labels.partner` bucket when the wording should feel more specific.

```yaml retype.yml
locale: en-support

labels:
  default:
    search_input_placeholder: Search docs
    toc_contents_label: On this page

  en-support:
    search_input_placeholder: Search support articles
    toc_contents_label: In this article
```

This is where `locale` and `labels.<id>` work especially well together: `locale` chooses the active voice for the project, while `labels.default` holds the shared wording. You only override the few strings that need to change, whether that means brand-specific copy, support-team phrasing, regional wording, or even a custom ID such as `tlh` for a community-driven experience.

In practice, that keeps the config small and the intent clear. You are not building a full translation system just to rename a few interface labels. You are picking the right bucket for this site, then letting Retype fall back to the shared and built-in strings everywhere else.

## New `search.include` and `search.exclude`

`v4.2` also adds `search.exclude` and `search.include` so you can control what lands in the search index without changing what gets published.

That is useful when a section should stay on the site but not compete in search results.

If you want to keep a section such as `/blog` out of search, the config stays simple:

```yaml retype.yml
search:
  exclude:
    - "/blog"
```

That works well when the blog should remain fully browsable, but search should stay centered on guides, API docs, or product content.

And if you want to start from the opposite direction, `search.include` can opt a path back in after a broader exclude:

```yaml retype.yml
search:
  exclude:
    - "*"
  include:
    - "/blog"
```

That pattern is handy when only one section should be searchable. You can exclude everything by default, then re-include the part you want indexed.

It makes search easier to tune for mixed-content sites while keeping the full site online for readers.

## New debounce control for `retype start`

`v4.2` also adds a configurable debounce for `retype start`.

This is a small feature, but it makes local preview workflows much calmer when one edit turns into a burst of file changes.

If you want a little breathing room before Retype reacts, pass a debounce value for the current session:

```bash
retype start --debounce 400
```

That works well when you want to smooth out a noisy preview session without changing project config.

And if this is how a project normally behaves, you can keep the setting in `retype.yml` instead:

```yaml retype.yml
start:
  debounce: 400
```

This is especially helpful in a few very real workflows:

- Save storms from editors that trigger multiple writes in quick succession.
- Formatter or tool chains that touch the same file more than once.
- Multi-file edits, renames, or content moves that land as a burst.
- Local preview setups where background tools make file watching feel a little too eager.

The result is simple: Retype waits briefly for the change burst to settle, then rebuilds once instead of bouncing through every intermediate update.

## New `retype stop` command

`v4.2` also adds the `retype stop` command.

It solves a very real local-workflow problem: after starting a few previews across different projects, it is easy to forget what is still running or which server belongs to which repo.

Run `retype stop` from a project, and Retype focuses on stopping Retype-owned servers for that project instead of broadly killing whatever happens to be listening on a familiar port. That makes restarts and cleanup much safer.

It is exactly the kind of command you reach for after changing `retype.yml` and wanting a clean restart without hunting for the right terminal tab first.

And when you want the bigger picture, `retype stop --list` gives you a quick view of the Retype servers Retype can see.

That broader view is also useful when it surfaces an older listener that Retype can discover but not safely control. Seeing `stop unavailable` is still valuable because it tells you something is active without pretending every visible Retype process is fair game for a blind shutdown.

The real value here is confidence. Retype can stop the servers it owns without taking down unrelated local processes.

## Reference-style links for more components

`v4.2` also makes reference-style Markdown links much more useful across Retype components such as buttons, badges, refs, files, cards, and embeds.

This is one of those small features that becomes very practical once a page starts growing. You can keep the actual target in one place, keep the source easier to scan, and reuse the same destination across body copy and richer UI-style components without repeating the same URL over and over.

If a page points readers to the same guide from several places, the Markdown stays clean:

```md
Start with the [setup guide][setup].

[!button Get Started][setup]
[!badge Setup][setup]
[!ref Installation Guide][setup]

[setup]: /guides/getting-started/
```

That is especially helpful in real-world content such as release notes, onboarding pages, migration guides, and product announcements, where the same destination often appears in prose, a call-to-action button, and a quick reference link.

It also helps when the target changes later. Update one reference definition, and every matching component stays in sync:

```md
[!button Read the migration guide][migration]
[!file Download the checklist][checklist]

[migration]: /guides/migration/v4-2/
[checklist]: /static/files/v4-2-checklist.pdf
```

And it is not just for docs pages. Blog posts and launch notes can keep richer content readable too:

```md
[!card Release notes][release-notes]
[!embed Watch the walkthrough][walkthrough]

[release-notes]: /blog/2026-03-12-whats-new-in-retype-v420/
[walkthrough]: https://www.youtube.com/watch?v=VIDEO_ID
```

In practice, this is most useful when you want cleaner source files, repeated links that stay consistent, and examples that still read like normal Markdown instead of a wall of inline URLs.

## More Practical Polish Across v4.2

What stands out in `v4.2` so far is not one giant headline feature. It is the steady accumulation of improvements that help Retype fit more naturally into real publishing workflows.

- Blog feeds are more configurable and presentation-ready.
- Feed metadata and discovery behave more like you would expect on a production site.
- Built-in interface labels become easier to adapt to your terminology and locale needs.

That is a good direction for a release. It keeps the default experience simple, while giving advanced teams more control when they need it.

As more `v4.2` items are finalized, this post can grow with additional highlights, screenshots, and a few more concrete before-and-after examples.

---

## Write On!

Retype `v4.2` is shaping up to be a practical release focused on better defaults, better customization, and smoother publishing details. If you run a blog with Retype, the RSS improvements alone make this release worth a look. And if you care about brand voice or multilingual polish, the new `labels` configuration opens another useful door.

[Install or upgrade](/guides/installation.md) Retype to try the latest improvements, and keep the feedback coming on [X](https://x.com/retypeapp) or in GitHub [Issues](https://github.com/retypeapp/retype/issues).