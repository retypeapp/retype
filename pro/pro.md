---
icon: heart
order: 2000
---
# Retype Pro

:::content-center
Take your projects to the next level with Retype Pro and Enterprise licensing.

Build more pages and unlock powerful Retype Pro only features.
:::

&nbsp; | Free | Pro | Enterprise
--- | :---: | :---: | :---:
| | [!button text="Install" variant="ghost"](/guides/getting-started.md#install) | [!button text="Buy" size="l"](https://buy.stripe.com/5kAbKC23daOK3nObIS) | [!button text="Buy" size="l"](https://buy.stripe.com/7sI15Y7nx2iebUk5kv)
Pricing | Free | $99 | $499
License duration [:icon-question:](#please-summarize-how-the-licensing-works) | :icon-infinity: | 3 Years | 1 Year
Projects [:icon-question:](#what-if-i-have-more-than-one-pro-project) | :icon-infinity: | 1 | :icon-infinity: [:icon-info:](#what-is-a-project)
Max Pages per Project [:icon-question:](#what-is-a-project) | 100 | 1000 | 1000
Users [:icon-question:](#we-have-5-people-on-our-team-do-we-require-5-licenses) | :icon-infinity: | :icon-infinity: | :icon-infinity:
Commercial use | :white_check_mark: | :white_check_mark: | :white_check_mark:
Open Source use | :white_check_mark: | :white_check_mark: | :white_check_mark:
Free upgrades | :white_check_mark: | :white_check_mark: | :white_check_mark: |
Remove [Powered by Retype](/configuration/project.md#poweredbyretype) branding | :icon-circle-slash: | :white_check_mark: | :white_check_mark:
[!badge text="NEW" variant="info"] [Private](/configuration/page.md#private) and [Protected](/configuration/page.md#protected) pages and folders | :icon-circle-slash: | :white_check_mark: | :white_check_mark:
[!badge text="NEW" variant="info"] [Outbound](/configuration/project.md#outbound) link configuration | :icon-circle-slash: | :white_check_mark: | :white_check_mark:
[!badge text="NEW" variant="info"] [Breadcrumb](/configuration/project.md#breadcrumb) navigation | :icon-circle-slash: | :white_check_mark: | :white_check_mark:
[!badge text="NEW" variant="info"] [Hub](/configuration/project.md#hub) link | :icon-circle-slash: | :white_check_mark: | :white_check_mark:
[!badge text="NEW" variant="info"] [Table of Contents](/configuration/project.md#toc) configuration | :icon-circle-slash: | :white_check_mark: | :white_check_mark:
Future Retype Pro only features | :icon-circle-slash: | :white_check_mark: | :white_check_mark:

## :icon-question: Questions & Answers

1. [Can I test Retype Pro features?](#can-i-test-retype-pro-features)
1. [Please summarize how the licensing works?](#please-summarize-how-the-licensing-works)
1. [If I do not renew, does my website stop working?](#if-i-do-not-renew-does-my-website-stop-working)
1. [Is Retype Pro a separate product?](#is-retype-pro-a-separate-product)
1. [What is a project?](#what-is-a-project)
1. [What if I have more than one Pro project?](#what-if-i-have-more-than-one-pro-project)
1. [What if I need to change the location and URL of my project?](#what-if-i-need-to-change-the-location-and-url-of-my-project)
1. [We have 5 people on our team, do we require 5 licenses?](#we-have-5-people-on-our-team-do-we-require-5-licenses)
1. [What happens when the key expires?](#what-happens-when-the-key-expires)
1. [Can I purchase two licenses and stack them to extend the term?](#can-i-purchase-two-licenses-and-stack-them-to-extend-the-term)
1. [Can I purchase two licenses and save one for future use?](#can-i-purchase-two-licenses-and-save-one-for-future-use)
1. [We have other license requirements, are there other options?](#we-have-other-license-requirements-are-there-other-options)
1. [Contact us](#contact-us)

## Can I test Retype Pro features?

Yes. Use the command `retype start --pro` to start your project instead of `retype start`.

Or, add the following `pro: true` config to your project `retype.yml` file:

```yml
start:
  pro: true
```

The [`poweredByRetype`](/configuration/project.md#poweredbyretype) branding will still be enabled and the 100 page limit will remain in place, but all other Retype Pro features will be available.

## Please summarize how the licensing works?

- [x] Retype is free to use for both commercial and open-source projects
- [x] Retype Pro and Enterprise include extra  functionality
- [x] Retype Pro and Retype Enterprise require a license key
- [x] All license keys include free version upgrades
- [x] After purchasing, your license key will be emailed to you
- [x] See table below for details:

{.compact}
License | Key required | Free upgrades | Valid for | Max Pages
-- | -- | -- | -- | --
Retype | No | Yes | Any domain name or subdomain name | 100
Retype Pro | Yes | 3 years | One domain name OR one subdomain | 1000
Retype Enterprise | Yes | 1 Year | One domain name AND all subdomains | 1000

!!!
As your license key end date approaches, we will send you a reminder email to renew. Renewal is optional and your project will continue to work even if your license key is not [renewed](#what-happens-when-the-key-expires).
!!!

## If I do not renew, does my website stop working?

If you do not renew your Pro or Enterprise license, your project will continue to work as it has always worked. Everything will continue to function as normal. Even adding more pages to your project would continue to work.

The only thing that changes is that you would not be able to upgrade your project to the next Retype release.

Once your website is built it will continue to work, even if your Pro or Enterprise license is not renewed.

You can [purchase](/pro/pro.md) a new license at any point in the future.

## Is Retype Pro a separate product?

No. A Retype Pro license key will unlock functionality within the same `retypeapp` that you have already [installed](/guides/getting-started.md). A separate installer or product installation is not required.

Adding the license key to your [wallet](/guides/cli.md#retype-wallet) will automatically unlock all Pro features.

## What is a Project?

Each **retype.yml** file used by Retype to generate a website is considered a Project.

Each project requires the [`url`](/configuration/project.md#url) config be set in your project **retype.yml** file.

With your purchase of a Pro or Enterprise license, a license key is generated and will be registered to your `url`.

The `url` can be a domain name or subdomain name.

With Retype Pro, a license key is registered to one domain name or subdomain name, for example, `example.com` or `docs.example.com`.

With Retype Enterprise, a license key is registered to one domain and AND all subdomains of the domain, for example, `example.com` and `*.example.com`.

Each subdomain name counts as one unique URL, except the `www` subdomain. Both `example.com` and `www.example.com` are treated as one URL by Retype.

The `url` is included inside the license key. You can have any number of instances of the project running on any number of developer machines or servers using the same key, but the key will be limited to building only those projects with a **retype.yml** file where the [`url`](/configuration/project.md#url) is set with the same URL defined in your license key.

## What if I have more than one Pro project?

Please purchase one license for each Retype Pro project you require.

Retype Pro licenses can be purchased in any quantity. You can purchase one now and additional licenses at a future time.

Each license is created and managed separately.

Retype Enterprise licenses can be purchased to unlock an entire domain name and all subdomain names. Perfect for an organization that has multiple projects and requires the flexibility to publish to any subdomain.

## What if I need to change the location and URL of my project?

No problem. Within the first 30 days, one change to a different extension or subdomain can be made to a Retype Pro license. Just send a quick email to hello@retype.com with the request.

For example, changing from `example.org` to `example.com` or `example.org` to `docs.example.com` are permitted. Changing from `example.com` to `sample.com` would not be permitted.

This flexibiity gives you lots of time to create your project then decide what domain name or subdomain name you want to go live with.

After 30 days, we cannot change the URL associated to your license key and purchasing a new key would be required.

We are currently building a dashboard system to allow self management of license keys and will let you know once available.

!!!
The Retype license keys are non-revokable, meaning once they are created, there is no way for us or anyone to cancel or revoke the key.
!!!

## We have 5 people on our team, do we require 5 licenses?

No. Retype is licensed per [project](#what-is-a-project) (website), not per person or per server.

One license for your project will cover an unlimited number of users, authors, and developers using Retype on that project.

## What happens when the key expires?

If you do not renew for another term, your project stays on the last release available as of your license key end date. You would not be able to upgrade your project to the next release of Retype.

Let's run through two scenarios based on purchasing Retype Pro today using the following details:

- You purchase today
- Current release is Retype `v3.5`
- Key expires three years from today
- On your license key end date, let's say Retype `v5.0` is the current release

###  Scenario 1: Renew

You like Retype, it is bringing you value and happiness :smiling_face_with_3_hearts:, and you want to renew. After purchasing a renewal, you will get another unique license key with a new expiry date. Add that new key to your project and your project is now unlocked until that key expires. All upgrades are included while the key is valid.

###  Scenario 2: No renew

You decide NOT to renew your Retype key :cry:. No worries. Your project will continue to build forever, except you cannot upgrade the project to the next Retype release. You would stay on the current release.

You would be able to upgrade Retype up until `v5.0`.

Installing Retype `v5.1` would be possible, but your project would fail to build. You would have to downgrade back to `v5.0` or renew your Retype Pro license.

You would still be able to build up to 1000 pages and remove the **Powered by Retype** branding, but only if using the release at the time your key expired. Again, you just would not be able to upgrade to any future releases.

If at some point you would like to upgrade to the latest release, just [purchase](/pro/pro.md) a new Retype Pro key at that time.

## Can I purchase two licenses and stack them to extend the term?

Absolutely. Just let us know in the license key creation form and we will adjust the license end date accordingly.

## Can I purchase two licenses and save one for future use?

Yes. The license key end date will be 3 years (36 months) from the date the license key is created.

You could use one key now and save the other for a future project or to renew the original project.

## We have other license requirements, are there other options?

Yes, the Retype licensing is very flexible and custom licensing is possible. Please send an email to hello@retype.com with your requirements.

## Contact us

{{ include "snippets/contact-us" }}