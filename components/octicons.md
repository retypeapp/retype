---
icon: mark-github
---
# Octicons

[Octicons](https://primer.github.io/octicons/) can be used with the [Icon](icon.md) component and several other components, including the [Badge](badge.md) and [Button](button.md).

## Samples

### Component

For the [Icon](icon.md) component, the icon is specified using the syntax `:icon-shortcode:`, where `shortcode` is the name of the icon (found in the table below).

For example, use the code `:icon-rocket:` for a :icon-rocket: icon.

When an icon is used in other components, the icon is referred to by only the `shortcode`.

For example, the following demonstrates using the icon in a [Badge](badge.md#icon-and-emoji) and a [Button](button.md#icon-and-emoji).

Component | Sample
--- | ---
[!badge icon="rocket" text="rocket"] | `[!badge icon="rocket" text="rocket"]`
[!button icon="rocket" text="rocket"] | `[!button icon="rocket" text="rocket"]`

### Metadata

When an icon is specified within the [Page](../configuration/page.md) or [Project](../configuration/project.md) metadata, the icon can be referred to by only its `shortcode`.

The following sample demonstrates setting a Page [icon](../configuration/page.md/#icon) to a :icon-rocket:.

```
---
icon: rocket
---
# Sample

This is a sample page with a :icon-rocket: icon.
```

## Icon list

Currently, there are 325 [Octicons](https://primer.github.io/octicons/) supported, including 16 [!badge variant="info" text="NEW"] icons.

| Icon | Shortcode | Sample |
| :---: | --- | --- |
| :icon-accessibility: | accessibility | `:icon-accessibility:` |
| :icon-accessibility-inset: | accessibility-inset | `:icon-accessibility-inset:` |
| :icon-alert: | alert | `:icon-alert:` |
| :icon-alert-fill: | alert-fill | `:icon-alert-fill:` |
| :icon-apps: | apps | `:icon-apps:` |
| :icon-archive: | archive | `:icon-archive:` |
| :icon-arrow-both: | arrow-both | `:icon-arrow-both:` |
| :icon-arrow-down: | arrow-down | `:icon-arrow-down:` |
| :icon-arrow-down-left: | arrow-down-left | `:icon-arrow-down-left:` |
| :icon-arrow-down-right: | arrow-down-right | `:icon-arrow-down-right:` |
| :icon-arrow-left: | arrow-left | `:icon-arrow-left:` |
| :icon-arrow-right: | arrow-right | `:icon-arrow-right:` |
| :icon-arrow-switch: | arrow-switch | `:icon-arrow-switch:` |
| :icon-arrow-up: | arrow-up | `:icon-arrow-up:` |
| :icon-arrow-up-left: | arrow-up-left | `:icon-arrow-up-left:` |
| :icon-arrow-up-right: | arrow-up-right | `:icon-arrow-up-right:` |
| :icon-beaker: | beaker | `:icon-beaker:` |
| :icon-bell: | bell | `:icon-bell:` |
| :icon-bell-fill: | bell-fill | `:icon-bell-fill:` |
| :icon-bell-slash: | bell-slash | `:icon-bell-slash:` |
| :icon-blocked: | blocked | `:icon-blocked:` |
| :icon-bold: | bold | `:icon-bold:` |
| :icon-book: | book | `:icon-book:` |
| :icon-bookmark: | bookmark | `:icon-bookmark:` |
| :icon-bookmark-fill: | bookmark-fill | `:icon-bookmark-fill:` |
| :icon-bookmark-slash: | bookmark-slash | `:icon-bookmark-slash:` |
| :icon-bookmark-slash-fill: | bookmark-slash-fill | `:icon-bookmark-slash-fill:` |
| :icon-briefcase: | briefcase | `:icon-briefcase:` |
| :icon-broadcast: | broadcast | `:icon-broadcast:` |
| :icon-browser: | browser | `:icon-browser:` |
| :icon-bug: | bug | `:icon-bug:` |
| :icon-cache: | cache | `:icon-cache:` |
| :icon-calendar: | calendar | `:icon-calendar:` |
| :icon-check: | check | `:icon-check:` |
| :icon-check-circle: | check-circle | `:icon-check-circle:` |
| :icon-check-circle-fill: | check-circle-fill | `:icon-check-circle-fill:` |
| :icon-checkbox: | checkbox | `:icon-checkbox:` |
| :icon-checklist: | checklist | `:icon-checklist:` |
| :icon-chevron-down: | chevron-down | `:icon-chevron-down:` |
| :icon-chevron-left: | chevron-left | `:icon-chevron-left:` |
| :icon-chevron-right: | chevron-right | `:icon-chevron-right:` |
| :icon-chevron-up: | chevron-up | `:icon-chevron-up:` |
| :icon-circle: | circle | `:icon-circle:` |
| :icon-circle-slash: | circle-slash | `:icon-circle-slash:` |
| :icon-clock: | clock | `:icon-clock:` |
| :icon-clock-fill: | clock-fill | `:icon-clock-fill:` |
| :icon-cloud: | cloud | `:icon-cloud:` |
| :icon-cloud-offline: | cloud-offline | `:icon-cloud-offline:` |
| :icon-code: | code | `:icon-code:` |
| :icon-code-of-conduct: | code-of-conduct | `:icon-code-of-conduct:` |
| :icon-code-review: | code-review | `:icon-code-review:` |
| :icon-code-square: | code-square | `:icon-code-square:` |
| :icon-codescan: | codescan | `:icon-codescan:` |
| :icon-codescan-checkmark: | codescan-checkmark | `:icon-codescan-checkmark:` |
| :icon-codespaces: | codespaces | `:icon-codespaces:` |
| :icon-columns: | columns | `:icon-columns:` |
| :icon-command-palette: | command-palette | `:icon-command-palette:` |
| :icon-comment: | comment | `:icon-comment:` |
| :icon-comment-discussion: | comment-discussion | `:icon-comment-discussion:` |
| :icon-commit: | commit | `:icon-commit:` |
| :icon-container: | container | `:icon-container:` |
| :icon-copilot: | copilot | `:icon-copilot:` |
| :icon-copilot-error: | copilot-error | `:icon-copilot-error:` |
| :icon-copilot-warning: | copilot-warning | `:icon-copilot-warning:` |
| :icon-copy: | copy | `:icon-copy:` |
| :icon-cpu: | cpu | `:icon-cpu:` |
| :icon-credit-card: | credit-card | `:icon-credit-card:` |
| :icon-cross-reference: | cross-reference | `:icon-cross-reference:` |
| :icon-dash: | dash | `:icon-dash:` |
| :icon-database: | database | `:icon-database:` |
| :icon-dependabot: | dependabot | `:icon-dependabot:` |
| :icon-desktop-download: | desktop-download | `:icon-desktop-download:` |
| :icon-device-camera: | device-camera | `:icon-device-camera:` |
| :icon-device-camera-video: | device-camera-video | `:icon-device-camera-video:` |
| :icon-device-desktop: | device-desktop | `:icon-device-desktop:` |
| :icon-device-mobile: | device-mobile | `:icon-device-mobile:` |
| :icon-devices: [!badge variant="info" text="NEW"] | devices | `:icon-devices:` |
| :icon-diamond: | diamond | `:icon-diamond:` |
| :icon-diff: | diff | `:icon-diff:` |
| :icon-diff-added: | diff-added | `:icon-diff-added:` |
| :icon-diff-ignored: | diff-ignored | `:icon-diff-ignored:` |
| :icon-diff-modified: | diff-modified | `:icon-diff-modified:` |
| :icon-diff-removed: | diff-removed | `:icon-diff-removed:` |
| :icon-diff-renamed: | diff-renamed | `:icon-diff-renamed:` |
| :icon-discussion-closed: | discussion-closed | `:icon-discussion-closed:` |
| :icon-discussion-duplicate: | discussion-duplicate | `:icon-discussion-duplicate:` |
| :icon-discussion-outdated: | discussion-outdated | `:icon-discussion-outdated:` |
| :icon-dot: | dot | `:icon-dot:` |
| :icon-dot-fill: | dot-fill | `:icon-dot-fill:` |
| :icon-download: | download | `:icon-download:` |
| :icon-duplicate: | duplicate | `:icon-duplicate:` |
| :icon-ellipsis: | ellipsis | `:icon-ellipsis:` |
| :icon-eye: | eye | `:icon-eye:` |
| :icon-eye-closed: | eye-closed | `:icon-eye-closed:` |
| :icon-feed-discussion: | feed-discussion | `:icon-feed-discussion:` |
| :icon-feed-forked: | feed-forked | `:icon-feed-forked:` |
| :icon-feed-heart: | feed-heart | `:icon-feed-heart:` |
| :icon-feed-issue-closed: [!badge variant="info" text="NEW"] | feed-issue-closed | `:icon-feed-issue-closed:` |
| :icon-feed-issue-draft: [!badge variant="info" text="NEW"] | feed-issue-draft | `:icon-feed-issue-draft:` |
| :icon-feed-issue-open: [!badge variant="info" text="NEW"] | feed-issue-open | `:icon-feed-issue-open:` |
| :icon-feed-merged: | feed-merged | `:icon-feed-merged:` |
| :icon-feed-person: | feed-person | `:icon-feed-person:` |
| :icon-feed-plus: [!badge variant="info" text="NEW"] | feed-plus | `:icon-feed-plus:` |
| :icon-feed-public: [!badge variant="info" text="NEW"] | feed-public | `:icon-feed-public:` |
| :icon-feed-pull-request-closed: [!badge variant="info" text="NEW"] | feed-pull-request-closed | `:icon-feed-pull-request-closed:` |
| :icon-feed-pull-request-draft: [!badge variant="info" text="NEW"] | feed-pull-request-draft | `:icon-feed-pull-request-draft:` |
| :icon-feed-pull-request-open: [!badge variant="info" text="NEW"] | feed-pull-request-open | `:icon-feed-pull-request-open:` |
| :icon-feed-repo: | feed-repo | `:icon-feed-repo:` |
| :icon-feed-rocket: | feed-rocket | `:icon-feed-rocket:` |
| :icon-feed-star: | feed-star | `:icon-feed-star:` |
| :icon-feed-tag: | feed-tag | `:icon-feed-tag:` |
| :icon-feed-trophy: | feed-trophy | `:icon-feed-trophy:` |
| :icon-file: | file | `:icon-file:` |
| :icon-file-added: | file-added | `:icon-file-added:` |
| :icon-file-badge: | file-badge | `:icon-file-badge:` |
| :icon-file-binary: | file-binary | `:icon-file-binary:` |
| :icon-file-code: | file-code | `:icon-file-code:` |
| :icon-file-diff: | file-diff | `:icon-file-diff:` |
| :icon-file-directory: | file-directory | `:icon-file-directory:` |
| :icon-file-directory-fill: | file-directory-fill | `:icon-file-directory-fill:` |
| :icon-file-directory-open-fill: | file-directory-open-fill | `:icon-file-directory-open-fill:` |
| :icon-file-directory-symlink: [!badge variant="info" text="NEW"] | file-directory-symlink | `:icon-file-directory-symlink:` |
| :icon-file-media: | file-media | `:icon-file-media:` |
| :icon-file-moved: | file-moved | `:icon-file-moved:` |
| :icon-file-removed: | file-removed | `:icon-file-removed:` |
| :icon-file-submodule: | file-submodule | `:icon-file-submodule:` |
| :icon-file-symlink-file: | file-symlink-file | `:icon-file-symlink-file:` |
| :icon-file-zip: | file-zip | `:icon-file-zip:` |
| :icon-filter: | filter | `:icon-filter:` |
| :icon-fiscal-host: | fiscal-host | `:icon-fiscal-host:` |
| :icon-flame: | flame | `:icon-flame:` |
| :icon-fold: | fold | `:icon-fold:` |
| :icon-fold-down: | fold-down | `:icon-fold-down:` |
| :icon-fold-up: | fold-up | `:icon-fold-up:` |
| :icon-gear: | gear | `:icon-gear:` |
| :icon-gift: | gift | `:icon-gift:` |
| :icon-git-branch: | git-branch | `:icon-git-branch:` |
| :icon-git-commit: | git-commit | `:icon-git-commit:` |
| :icon-git-compare: | git-compare | `:icon-git-compare:` |
| :icon-git-merge: | git-merge | `:icon-git-merge:` |
| :icon-git-merge-queue: | git-merge-queue | `:icon-git-merge-queue:` |
| :icon-git-pull-request: | git-pull-request | `:icon-git-pull-request:` |
| :icon-git-pull-request-closed: | git-pull-request-closed | `:icon-git-pull-request-closed:` |
| :icon-git-pull-request-draft: | git-pull-request-draft | `:icon-git-pull-request-draft:` |
| :icon-globe: | globe | `:icon-globe:` |
| :icon-goal: | goal | `:icon-goal:` |
| :icon-grabber: | grabber | `:icon-grabber:` |
| :icon-graph: | graph | `:icon-graph:` |
| :icon-hash: | hash | `:icon-hash:` |
| :icon-heading: | heading | `:icon-heading:` |
| :icon-heart: | heart | `:icon-heart:` |
| :icon-heart-fill: | heart-fill | `:icon-heart-fill:` |
| :icon-history: | history | `:icon-history:` |
| :icon-home: | home | `:icon-home:` |
| :icon-home-fill: | home-fill | `:icon-home-fill:` |
| :icon-horizontal-rule: | horizontal-rule | `:icon-horizontal-rule:` |
| :icon-hourglass: | hourglass | `:icon-hourglass:` |
| :icon-hubot: | hubot | `:icon-hubot:` |
| :icon-id-badge: | id-badge | `:icon-id-badge:` |
| :icon-image: | image | `:icon-image:` |
| :icon-inbox: | inbox | `:icon-inbox:` |
| :icon-infinity: | infinity | `:icon-infinity:` |
| :icon-info: | info | `:icon-info:` |
| :icon-issue-closed: | issue-closed | `:icon-issue-closed:` |
| :icon-issue-draft: | issue-draft | `:icon-issue-draft:` |
| :icon-issue-opened: | issue-opened | `:icon-issue-opened:` |
| :icon-issue-reopened: | issue-reopened | `:icon-issue-reopened:` |
| :icon-issue-tracked-by: | issue-tracked-by | `:icon-issue-tracked-by:` |
| :icon-issue-tracks: | issue-tracks | `:icon-issue-tracks:` |
| :icon-italic: | italic | `:icon-italic:` |
| :icon-iterations: | iterations | `:icon-iterations:` |
| :icon-kebab-horizontal: | kebab-horizontal | `:icon-kebab-horizontal:` |
| :icon-key: | key | `:icon-key:` |
| :icon-key-asterisk: | key-asterisk | `:icon-key-asterisk:` |
| :icon-law: | law | `:icon-law:` |
| :icon-light-bulb: | light-bulb | `:icon-light-bulb:` |
| :icon-link: | link | `:icon-link:` |
| :icon-link-external: | link-external | `:icon-link-external:` |
| :icon-list-ordered: | list-ordered | `:icon-list-ordered:` |
| :icon-list-unordered: | list-unordered | `:icon-list-unordered:` |
| :icon-location: | location | `:icon-location:` |
| :icon-lock: | lock | `:icon-lock:` |
| :icon-log: | log | `:icon-log:` |
| :icon-logo-gist: | logo-gist | `:icon-logo-gist:` |
| :icon-logo-github: | logo-github | `:icon-logo-github:` |
| :icon-mail: | mail | `:icon-mail:` |
| :icon-mark-github: | mark-github | `:icon-mark-github:` |
| :icon-markdown: | markdown | `:icon-markdown:` |
| :icon-megaphone: | megaphone | `:icon-megaphone:` |
| :icon-mention: | mention | `:icon-mention:` |
| :icon-meter: | meter | `:icon-meter:` |
| :icon-milestone: | milestone | `:icon-milestone:` |
| :icon-mirror: | mirror | `:icon-mirror:` |
| :icon-moon: | moon | `:icon-moon:` |
| :icon-mortar-board: | mortar-board | `:icon-mortar-board:` |
| :icon-move-to-bottom: | move-to-bottom | `:icon-move-to-bottom:` |
| :icon-move-to-end: | move-to-end | `:icon-move-to-end:` |
| :icon-move-to-start: | move-to-start | `:icon-move-to-start:` |
| :icon-move-to-top: | move-to-top | `:icon-move-to-top:` |
| :icon-multi-select: | multi-select | `:icon-multi-select:` |
| :icon-mute: | mute | `:icon-mute:` |
| :icon-no-entry: | no-entry | `:icon-no-entry:` |
| :icon-north-star: | north-star | `:icon-north-star:` |
| :icon-note: | note | `:icon-note:` |
| :icon-number: | number | `:icon-number:` |
| :icon-organization: | organization | `:icon-organization:` |
| :icon-package: | package | `:icon-package:` |
| :icon-package-dependencies: | package-dependencies | `:icon-package-dependencies:` |
| :icon-package-dependents: | package-dependents | `:icon-package-dependents:` |
| :icon-paintbrush: | paintbrush | `:icon-paintbrush:` |
| :icon-paper-airplane: | paper-airplane | `:icon-paper-airplane:` |
| :icon-paperclip: | paperclip | `:icon-paperclip:` |
| :icon-passkey-fill: | passkey-fill | `:icon-passkey-fill:` |
| :icon-paste: | paste | `:icon-paste:` |
| :icon-pencil: | pencil | `:icon-pencil:` |
| :icon-people: | people | `:icon-people:` |
| :icon-person: | person | `:icon-person:` |
| :icon-person-add: | person-add | `:icon-person-add:` |
| :icon-person-fill: | person-fill | `:icon-person-fill:` |
| :icon-pin: | pin | `:icon-pin:` |
| :icon-pin-slash: [!badge variant="info" text="NEW"] | pin-slash | `:icon-pin-slash:` |
| :icon-pivot-column: [!badge variant="info" text="NEW"] | pivot-column | `:icon-pivot-column:` |
| :icon-play: | play | `:icon-play:` |
| :icon-plug: | plug | `:icon-plug:` |
| :icon-plus: | plus | `:icon-plus:` |
| :icon-plus-circle: | plus-circle | `:icon-plus-circle:` |
| :icon-project: | project | `:icon-project:` |
| :icon-project-roadmap: | project-roadmap | `:icon-project-roadmap:` |
| :icon-project-symlink: | project-symlink | `:icon-project-symlink:` |
| :icon-project-template: | project-template | `:icon-project-template:` |
| :icon-pulse: | pulse | `:icon-pulse:` |
| :icon-question: | question | `:icon-question:` |
| :icon-quote: | quote | `:icon-quote:` |
| :icon-read: | read | `:icon-read:` |
| :icon-redo: [!badge variant="info" text="NEW"] | redo | `:icon-redo:` |
| :icon-rel-file-path: | rel-file-path | `:icon-rel-file-path:` |
| :icon-reply: | reply | `:icon-reply:` |
| :icon-repo: | repo | `:icon-repo:` |
| :icon-repo-clone: | repo-clone | `:icon-repo-clone:` |
| :icon-repo-deleted: | repo-deleted | `:icon-repo-deleted:` |
| :icon-repo-forked: | repo-forked | `:icon-repo-forked:` |
| :icon-repo-locked: | repo-locked | `:icon-repo-locked:` |
| :icon-repo-pull: | repo-pull | `:icon-repo-pull:` |
| :icon-repo-push: | repo-push | `:icon-repo-push:` |
| :icon-repo-template: | repo-template | `:icon-repo-template:` |
| :icon-report: | report | `:icon-report:` |
| :icon-rocket: | rocket | `:icon-rocket:` |
| :icon-rows: | rows | `:icon-rows:` |
| :icon-rss: | rss | `:icon-rss:` |
| :icon-ruby: | ruby | `:icon-ruby:` |
| :icon-screen-full: | screen-full | `:icon-screen-full:` |
| :icon-screen-normal: | screen-normal | `:icon-screen-normal:` |
| :icon-search: | search | `:icon-search:` |
| :icon-server: | server | `:icon-server:` |
| :icon-share: | share | `:icon-share:` |
| :icon-share-android: | share-android | `:icon-share-android:` |
| :icon-shield: | shield | `:icon-shield:` |
| :icon-shield-check: | shield-check | `:icon-shield-check:` |
| :icon-shield-lock: | shield-lock | `:icon-shield-lock:` |
| :icon-shield-slash: | shield-slash | `:icon-shield-slash:` |
| :icon-shield-x: | shield-x | `:icon-shield-x:` |
| :icon-sidebar-collapse: | sidebar-collapse | `:icon-sidebar-collapse:` |
| :icon-sidebar-expand: | sidebar-expand | `:icon-sidebar-expand:` |
| :icon-sign-in: | sign-in | `:icon-sign-in:` |
| :icon-sign-out: | sign-out | `:icon-sign-out:` |
| :icon-single-select: | single-select | `:icon-single-select:` |
| :icon-skip: | skip | `:icon-skip:` |
| :icon-skip-fill: | skip-fill | `:icon-skip-fill:` |
| :icon-sliders: | sliders | `:icon-sliders:` |
| :icon-smiley: | smiley | `:icon-smiley:` |
| :icon-sort-asc: | sort-asc | `:icon-sort-asc:` |
| :icon-sort-desc: | sort-desc | `:icon-sort-desc:` |
| :icon-sparkle-fill: | sparkle-fill | `:icon-sparkle-fill:` |
| :icon-sponsor-tiers: | sponsor-tiers | `:icon-sponsor-tiers:` |
| :icon-square: | square | `:icon-square:` |
| :icon-square-fill: | square-fill | `:icon-square-fill:` |
| :icon-squirrel: | squirrel | `:icon-squirrel:` |
| :icon-stack: | stack | `:icon-stack:` |
| :icon-star: | star | `:icon-star:` |
| :icon-star-fill: | star-fill | `:icon-star-fill:` |
| :icon-stop: | stop | `:icon-stop:` |
| :icon-stopwatch: | stopwatch | `:icon-stopwatch:` |
| :icon-strikethrough: | strikethrough | `:icon-strikethrough:` |
| :icon-sun: | sun | `:icon-sun:` |
| :icon-sync: | sync | `:icon-sync:` |
| :icon-tab: | tab | `:icon-tab:` |
| :icon-tab-external: | tab-external | `:icon-tab-external:` |
| :icon-table: | table | `:icon-table:` |
| :icon-tag: | tag | `:icon-tag:` |
| :icon-tasklist: | tasklist | `:icon-tasklist:` |
| :icon-telescope: | telescope | `:icon-telescope:` |
| :icon-telescope-fill: | telescope-fill | `:icon-telescope-fill:` |
| :icon-terminal: | terminal | `:icon-terminal:` |
| :icon-three-bars: | three-bars | `:icon-three-bars:` |
| :icon-thumbsdown: | thumbsdown | `:icon-thumbsdown:` |
| :icon-thumbsup: | thumbsup | `:icon-thumbsup:` |
| :icon-tools: | tools | `:icon-tools:` |
| :icon-tracked-by-closed-completed: [!badge variant="info" text="NEW"] | tracked-by-closed-completed | `:icon-tracked-by-closed-completed:` |
| :icon-tracked-by-closed-not-planned: [!badge variant="info" text="NEW"] | tracked-by-closed-not-planned | `:icon-tracked-by-closed-not-planned:` |
| :icon-trash: | trash | `:icon-trash:` |
| :icon-triangle-down: | triangle-down | `:icon-triangle-down:` |
| :icon-triangle-left: | triangle-left | `:icon-triangle-left:` |
| :icon-triangle-right: | triangle-right | `:icon-triangle-right:` |
| :icon-triangle-up: | triangle-up | `:icon-triangle-up:` |
| :icon-trophy: | trophy | `:icon-trophy:` |
| :icon-typography: | typography | `:icon-typography:` |
| :icon-undo: [!badge variant="info" text="NEW"] | undo | `:icon-undo:` |
| :icon-unfold: | unfold | `:icon-unfold:` |
| :icon-unlink: | unlink | `:icon-unlink:` |
| :icon-unlock: | unlock | `:icon-unlock:` |
| :icon-unmute: | unmute | `:icon-unmute:` |
| :icon-unread: | unread | `:icon-unread:` |
| :icon-unverified: | unverified | `:icon-unverified:` |
| :icon-upload: | upload | `:icon-upload:` |
| :icon-verified: | verified | `:icon-verified:` |
| :icon-versions: | versions | `:icon-versions:` |
| :icon-video: | video | `:icon-video:` |
| :icon-webhook: | webhook | `:icon-webhook:` |
| :icon-workflow: | workflow | `:icon-workflow:` |
| :icon-x: | x | `:icon-x:` |
| :icon-x-circle: | x-circle | `:icon-x-circle:` |
| :icon-x-circle-fill: | x-circle-fill | `:icon-x-circle-fill:` |
| :icon-zap: | zap | `:icon-zap:` |
| :icon-zoom-in: | zoom-in | `:icon-zoom-in:` |
| :icon-zoom-out: | zoom-out | `:icon-zoom-out:` |