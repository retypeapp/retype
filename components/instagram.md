---
icon: brand-instagram
tags: [component]
nav:
  badge: NEW|info
---
# Instagram

Retype can automatically embed Instagram posts and Reels by placing a standalone Instagram URL on its own line in Markdown.

---

## Basic usage

Paste an Instagram URL on its own line and Retype converts it into an embedded post.

```md
https://www.instagram.com/reel/DSu-vbYDDlf/
```

https://www.instagram.com/reel/DSu-vbYDDlf/

---

## Supported URL formats

Both post (`/p/`) and Reel (`/reel/`) URL formats are supported, with or without the `www.` prefix.

| Format | Example |
|---|---|
| Post | `https://www.instagram.com/p/C08-b3uM0U9/` |
| Reel | `https://www.instagram.com/reel/DSu-vbYDDlf/` |
| No `www.` prefix | `https://instagram.com/reel/DWowsEjjQlE/` |

---

## Multiple embeds

Place multiple Instagram URLs on consecutive lines to render each as its own embed block.

```md
https://www.instagram.com/reel/DSu-vbYDDlf/
https://instagram.com/reel/DWowsEjjQlE/
https://www.instagram.com/p/C08-b3uM0U9/
```

https://www.instagram.com/reel/DSu-vbYDDlf/
https://instagram.com/reel/DWowsEjjQlE/
https://www.instagram.com/p/C08-b3uM0U9/
