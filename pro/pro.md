---
icon: heart
order: 2000
---
# Retype Pro

:::content-center
Take your projects to the next level with Retype Pro.

Build more pages and unlock powerful Retype Pro only features.
:::

&nbsp; | Retype | Retype Pro
--- | --- | ---
[!badge text="NEW" variant="info"] Pricing | Free | $50
Max pages per project [:icon-question:](#what-is-a-project) | 100 | 1000
Projects per License [:icon-question:](#what-if-i-have-more-than-one-pro-project) | -- | 1
Authors, Users, or Developers [:icon-question:](#we-have-5-people-on-our-team-do-we-require-5-licenses) | Unlimited | Unlimited
[!badge text="NEW" variant="info"] Free upgrades | :white_check_mark: | :white_check_mark: (3 years)
Commercial and open source use | :white_check_mark: | :white_check_mark:
Remove [Powered by Retype](/configuration/project.md#poweredbyretype) branding | :no_entry_sign: | :white_check_mark:
[!badge text="NEW" variant="info"] [Private](/configuration/page.md#private) and [Protected](/configuration/page.md#protected) pages and folders | :no_entry_sign: | :white_check_mark:
[!badge text="NEW" variant="info"] [Outbound](/configuration/project.md#outbound) link configuration | :no_entry_sign: | :white_check_mark:
Supports our friendly and hard working team :icon-people: | :white_check_mark: | :white_check_mark:
| | [!button text="Install" variant="ghost"](/guides/getting-started.md#install) | [!button text="Buy&nbsp;Pro" size="l" corners="pill"](https://buy.stripe.com/dR6dSKfU38GC4rSbIQ)

## :icon-question: Questions & Answers

1. [How long is the license key valid?](#how-long-is-the-license-key-valid)
1. [If I do not renew, does my website stop working?](#if-i-do-not-renew-does-my-website-stop-working)
1. [Is Retype Pro a separate product?](#is-retype-pro-a-separate-product)
1. [What is a project?](#what-is-a-project)
1. [What if I have more than one Pro project?](#what-if-i-have-more-than-one-pro-project)
1. [What if I need to change the location and URL of my project?](#what-if-i-need-to-change-the-location-and-url-of-my-project)
1. [We have 5 people on our team, do we require 5 licenses?](#we-have-5-people-on-our-team-do-we-require-5-licenses)
1. [What happens when the key expires?](#what-happens-when-the-key-expires)
1. [Can I purchase two licenses and stack them for a six year term?](#can-i-purchase-two-licenses-and-stack-them-for-a-six-year-term)
1. [Can I purchase two licenses and save one for future use?](#can-i-purchase-two-licenses-and-save-one-for-future-use)
1. [We have requirements not covered by Retype Pro, are there other options?](#we-have-requirements-not-covered-by-retype-pro-are-there-other-options)
1. [Contact us](#contact-us)

## How long is the license key valid?

Free upgrades are included for three years (36 months).

As the end of three years approaches, we will send you a reminder email with discounted options to renew. Renewal is completely optional and your project will continue to work even after the license key expires. See [more](#what-happens-when-the-key-expires).

## If I do not renew, does my website stop working?

At the end of three years, if you do not renew your Retype Pro license, your website will continue to work as it has always worked. Everything will continue to function as normal. Even adding more pages to your project (up to 1000) would continue to work.

The only thing that changes is that you would not be able to upgrade your Retype Pro project to the next Retype release.

Once your website is built it will continue to work, even if your Retype Pro license expires.

If your Retype Pro license expires, you can [purchase](/pro/pro.md) a new license at any point in the future.

## Is Retype Pro a separate product?

No. A Retype Pro license key will unlock functionality within the same `retypeapp` that you have already [installed](/guides/getting-started.md). A separate installer or product installation is not required.

Adding the license key to your [wallet](/guides/cli.md#retype-wallet) will automatically unlock all Pro features.

## What is a project?

Each **retype.yml** file used by Retype to generate a website is considered a project.

Each Retype Pro project requires the [`url`](/configuration/project.md#url) config be set in your project **retype.yml** file.

With your purchase of a Retype Pro license, a license key is generated and will be registered to your `url`. The `url` can be a domain name or subdomain name. For example, a license key can be registered to `example.com` or `docs.example.com`.

One Retype Pro license key will unlock one project.

!!!
A [Retype Enterprise](#we-have-requirements-not-covered-by-retype-pro-are-there-other-options) license can unlock both domain names and subdomain names within the same key.
!!!

Each subdomain name counts as one unique URL, except the `www` subdomain. Both `example.com` and `www.example.com` are treated as one URL by Retype.

The `url` is included inside the license key. You can have any number of instances of the project running on any number of developer machines or servers using the same key, but the key will be limited to building only those Retype Pro projects with a **retype.yml** file where the [`url`](/configuration/project.md#url) is set with the same URL defined in your license key.

## What if I have more than one Pro project?

Please purchase one license for each Retype Pro project you require.

Retype Pro licenses can be purchased in any quantity. You can purchase one now and additional licenses at a future time.

Each license is created and managed separately.

## What if I need to change the location and URL of my project?

No problem. Within the first 90 days, one change to a different extension or subdomain can be made. Just send a quick email to hello@retype.com with the request.

For example, changing from `example.org` to `example.com` or `example.org` to `docs.example.com` are permitted. Changing from `example.com` to `sample.com` would not be permitted.

This flexibiity gives you lots of time to create your project then decide what domain name or subdomain name you want to go live with.

After 90 days, we cannot change the URL associated to your license key and purchasing a new key would be required.

We are currently building a dashboard system to allow self management of license keys and will let you know once available.

!!!
The Retype license keys are non-revokable, meaning once they are created, there is no way for us or anyone to cancel or revoke the key.
!!!

## We have 5 people on our team, do we require 5 licenses?

No. Retype is licensed per [project](#what-is-a-project) (website), not per person or per server. One Retype Pro instance will cover an unlimited number of content authors or developers using Retype.

## What happens when the key expires?

If you do not renew for another term, your project stays on the last release available as of your expiry date. You would not be able to upgrade your project to the next release of Retype.

Let's run through two scenarios based on purchasing Retype Pro today using the following details:

- You purchase today
- Current release is Retype `v3.1`
- Key expires three years from today
- On the key expiry date, let's say Retype `v5.0` is the current release

###  Scenario 1: Renew

You like Retype, it is bringing you value and happiness :smiling_face_with_3_hearts:, and you want to renew. After purchasing a renewal, you will get another unique license key with a new expiry date. Add that new key to your project and your project is now unlocked until that key expires. All upgrades are included while the key is valid.

###  Scenario 2: No renew

You decide NOT to renew your Retype key :cry:. No worries. Your project will continue to build forever, except you cannot upgrade the project to the next Retype release. You would stay on the current release.

You would be able to upgrade Retype up until `v5.0`.

Installing Retype `v5.1` would be possible, but your project would fail to build. You would have to downgrade back to `v5.0` or renew your Retype Pro license.

You would still be able to build up to 1000 pages and remove the **Powered by Retype** branding, but only if using the release at the time your key expired. Again, you just would not be able to upgrade to any future releases.

If at some point you would like to upgrade to the latest release, just [purchase](/pro/pro.md) a new Retype Pro key at that time.

## Can I purchase two licenses and stack them for a six year term?

Absolutely. Just let us know in the license key creation form and we will adjust the license expiry date accordingly.

## Can I purchase two licenses and save one for future use?

Yes. The license key expiry will be 3 years (36 months) from the date the license key is created.

You could use one key now and save the other for a future project or to renew the original project.

## We have requirements not covered by Retype Pro, are there other options?

Yes, **Retype Enterprise** license options are available. Please send an email to hello@retype.com with the request.

{{ include "snippets/contact-us" }}