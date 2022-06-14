---
icon: star
order: 2000
---
![](/static/headers/pro.png)

# Retype Pro

## Pro Features

Features | Retype | Retype Pro
--- | --- | ---
Pricing | Free | $149
Free upgrades | Unlimited | One year
Renewal | Free | $99/year ([optional](#if-i-do-not-renew-does-my-website-stop-working))
Authors or Developers | Unlimited | Unlimited
Max pages per project | 100 | 1000
Max projects per license | -- | 3
Commercial use | :white_check_mark: | :white_check_mark:
Remove [`Powered by Retype`](/configuration/project.md#poweredbyretype) branding | :no_entry_sign: | :white_check_mark:
| | [!button text="Install" variant="ghost"](/guides/getting-started.md) | [!button text="Buy Pro $149" icon="star-fill"](https://buy.stripe.com/8wM2a25fpf502jKbII)<br />[Need more?](https://buy.stripe.com/28og0S37h5uqaQg9AE){class="text-sm"} |

## Questions & Answers

### Can I get a trial license key?

{{ include "snippets/faq-trial-key-request" }}

### If I do not renew, does my website stop working?

If you do not renew your license, your website will continue to work as it has always worked. Everything will continue to function as normal. Even adding more pages to your project (up to 1000) would continue to work.

The only thing that changes is that you would not be able to upgrade your Retype Pro built website to the next Retype release.

Once your website is built it will continue to work, even if your Retype Pro license expires.

If your Retype Pro license expires, you can [purchase](/pro) a new license at any point in the future.

### Is Retype Pro a separate product?

No. A **Retype Pro** license key will unlock functionality within the same `retypeapp` that you have already installed. A separate installer or product installation is required.

Adding the key to your [wallet](/guides/cli.md#retype-wallet) will automatically unlock all Pro features.

### What is considered a project?

One project is one website with a unique URL.

Sub-domains each count as one unique URL.

Each Retype Pro license key will unlock up to `3` unique URLs.

As an example, with a valid key, projects with the following URLs will be possible to build as **Retype Pro**:

URL | Included? { class="compact" }
--- | ---
`docs.example.com` | :white_check_mark:
`staging.example.com` | :white_check_mark:
`docs.projectx.com` | :white_check_mark:
`my-next-project.io`<br />*Another Retype Pro 3-pack would be required | :no_entry_sign:

The URL is encoded right into the key. You can have any number of projects running on any number of developer machines using the same key, but the key will be limited to building only those **Retype Pro** projects with a `retype.yml` file where the `url` is set with one of your defined website URLs.

One key can include up to `3` separate URLs, or you can have three separate keys each with one URL, or any combination thereof.

Any `github.io` or `gitlab.io` projects count as one URL. You can therefore have an unlimited number of `github.io` or `gitlab.io` hosted projects running off one single key. In the following table, the first three projects would be unlocked with one key assigned to the `example.github.io` URL, and the other two URLs would complete the Retype Pro set of three.

URL | Included? { class="compact" }
--- | ---
`example.github.io`      | :white_check_mark:
`example.github.io/docs` | :white_check_mark:
`example.github.io/wiki` | :white_check_mark:
`docs.example.com`       | :white_check_mark:
`wiki.example.com`       | :white_check_mark:
`my-next-project.io`<br />*Another Retype Pro 3-pack would be required | :no_entry_sign:

The additional `github.io` and `gitlab.io` functionality enables hosting more than three unique Retype Pro website projects with just one Retype Pro 3-pack.

### Can we purchase a multi-year key and is a discount available?

Purchase for one year, or for as long as you want. Buy [here](https://buy.stripe.com/8wM2a25fpf502jKbII).

A 10% discount is applied if two or more Retype Pro licenses are purchased.

### What if I have more than three Pro projects?

Purchase another Retype Pro pack of three. We'll add three more Pro projects to your license.

You can purchase as many Retype Pro licenses as you require.

### We have 5 people on our team writing content and using Retype. Do we require 5 licenses?

No. Retype is licensed per website, not per person. One **Retype Pro** instance will cover an unlimited number of content authors or developers using Retype.

### What happens when the key expires?

If you do not renew for another term, your project stays on the last release available as of your expiry date. You will not be able to upgrade your project to the next release of Retype.

Let's run through two scenarios based on purchasing **Retype Pro** today using the following details:

- You purchase today
- Current release is Retype `v2.1.0`
- Key expires in one year from today
- On the key expiry date, let's say Retype `v2.9.0` is the current release

#### Scenario 1: Renew

You like Retype. It is bringing you value and happiness. :smiling_face_with_3_hearts:  You want to renew. After purchasing a renewal, you will get another key with a new expiry date. Add that new key to your project and you are unlocked until that key expires. All upgrades are included while the key is valid.

#### Scenario 2: No renew

You decide NOT to renew your Retype key. No worries. Your project will continue to build forever, except you cannot upgrade to the next Retype release. You would stay on the current release.

You would be able to upgrade Retype up until `v2.9.0`.

Once `v2.10.0` is released, your project would fail to build if you upgraded. You would have to downgrade back to the `v2.9.0` release.

You would still be able to build up to 1000 pages and remove the **Powered by Retype** branding, but only if using the release at the time your key expired. Again, you just would not be able to upgrade to any future releases.

If at some point you would like to upgrade to the latest release, just purchase a new **Retype Pro** key at that time.

### We have a project with more than 1000 pages, how can we license?

We have a **Retype Enterprise** license option available. Please send an email to hello@retype.com

### I have another question, who can I contact?

Send us a message using any of the following:

- [x] Email hello@retype.com, or
- [x] Start a new [Discussion](https://github.com/retypeapp/retype/discussions/), or
- [x] Start a chat, see bottom-right :icon-comment: on this page