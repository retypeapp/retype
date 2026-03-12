---
icon: history
tags: [component]
nav:
  badge: NEW|info
---
# Last Updated

The "Last updated" label shows readers when a page was last refreshed.

You do not add this component with markdown syntax. Retype renders it automatically in the page footer when [`lastUpdated`](/configuration/project.md#lastupdated) is configured.

This component is Retype [!badge PRO](/pro/pro.md) only.

Retype can get the date automatically from the Git commit metadata, or you can set the values manually in page metadata.

---

## Automatic Git-backed footer

By default, Retype tries to add the last updated **date** to every page by using the latest **committer** metadata from Git, as long as the build has full Git history. The `by` value is available too, but it is not enabled by default.

```yml retype.yml
lastUpdated:
  date:
    enabled: true
    source: committer
  by:
    enabled: true
    source: committer
```

Use `source: author` or `source: committer` depending on whether you want the original author or the person who last committed a change.

---

## Manual page values

If one page needs a fixed footer value, set it directly in the page metadata:

```yml
---
lastUpdated:
  date: 2026-03-12
  by: Documentation Team
---
```

You can also use the shortform `lastUpdatedBy` and `lastUpdatedBy` syntax:

```yml
---
lastUpdated: 2026-03-12
lastUpdatedBy: Documentation Team
---
```

---

## Full Git history required

Automatic values are only available when Retype can read the Git history for the page. If your project is not part of a Git repository, or only a shallow clone, Retype will not output the "Last updated" label. 

For GitHub Actions, be sure to fetch the full history by including `fetch-depth: 0` in the checkout action:

```yml
- uses: actions/checkout@v6
  with:
    fetch-depth: 0
```

See also the [GitHub Actions guide](/guides/github-actions.md).

!!!
Manual page values and generated Git values are both supported, but they are not mixed on the same page.

If you manually set either `lastUpdated` or `lastUpdatedBy`, Retype uses those manual values for that page instead of filling in the missing value from Git.

See [Project](/configuration/project.md#lastupdated) configuration and [Page](/configuration/page.md#lastupdated) configuration for all available options.
!!!

---