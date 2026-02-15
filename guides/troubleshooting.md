---
icon: alert
tags: [guide, pro]
---
# Troubleshooting

If you encounter issues while using Retype, this guide will help you identify and resolve common problems quickly. Follow the steps below to troubleshoot and get your project back on track.

!!!danger
Please ensure your Retype Pro key is licensed for your project [`url`](/configuration/project.md#url).
!!!

## Website Configuration Error

If you encounter the **Website Configuration Error** message, please ensure your [Retype Pro](/pro/pro.md) key is valid for the same [`url`](/configuration/project.md#url) that is set in your project `retype.yml` configuration file. 

![](/static/website-configuration-error.png)

Common scenarios that would trigger this error:

1. You are hosting a website built with a Retype Pro key but do not have the project [`url`](/configuration/project.md#url) set 
1. You are hosting a website built with a Retype Pro key but the project [`url`](/configuration/project.md#url) is set to a url that is not supported by the Pro key
1. The `config.js` file has been modified
1. The `retype.css` file has been modified

If you see this error and are confident your Pro key and `url` are correctly configured, please send an email to hello@retype.com and we will investigate immediately.

## Secret is not valid

The error below is also likely triggered by the same configuration issue as the error above. If you see the following **secret is not valid** error, the project [`url`](/configuration/project.md#url) is set to a value that is not valid for the Retype Pro key the project is using.

```
ERROR: The specified secret is not valid for the "url" config host: "example.com".
```

If you see this error and are confident your Pro key and `url` are correctly configured, please send an email to hello@retype.com and we will investigate immediately.