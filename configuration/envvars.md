---
icon: broadcast
order: -100
tags: [config]
---
# Environment variables

## RETYPE_SECRET

A Retype license key can be configured as a secret Environment variable and the key is NOT stored in the [wallet](/guides/cli.md#retype-wallet).

Configuring the `RETYPE_SECRET` secret is the prefered technique for configuring a license key with a GitHub Pages project that is built and deployed using a [GitHub Action](/guides/github-actions.md).

The [RETYPE_SECRET](../guides/github-actions.md#retype_secret) configuration must also be added to your **.github/workflows/retype.yml** file.

You can add a new repository secret to your GitHub repository following the `/settings/secrets/actions` path. The URL should be:

```
https://github.com/<your-organization>/<your-project>/settings/secrets/actions
```

![](/static/add-retype-secret.png)

Once the `RETYPE_SECRET` secret is added, you should see the following and your Retype project will now build using your license key:

![](/static/retype-repository-secret.png)

!!!
See [configuring](../guides/github-actions.md/#retype_secret) a GitHub Workflow to use your Retype license key.
!!!

## RETYPE_PASSWORD

Set and environment variable for the [`protected`](page.md/#protected) and [`private`](page.md/#private) pages.

## RETYPE_DEFAULT_HOST

Default [`host`](project.md/#host) to be used by the Retype server instead of `localhost`.
