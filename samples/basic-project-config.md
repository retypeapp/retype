---
order: 1000
---
# Basic project config

The following is a basic `retype.yml` [project configuration](/configuration/project.md) file.

```yml retype.yml
input: .
output: .retype
url: example.com # Add your website address here
branding:
  title: Project Name
  label: Docs
poweredByRetype: true # Set to false to remove the Powered by Retype branding.
                      # A Retype Pro license is required.
                      # See: https://retype.com/pro
links:
  - text: Getting Started
    link: https://retype.com/guides/getting-started/
footer:
  copyright: "&copy; Copyright . All rights reserved."
```

!!!
All configurations are optional. If a config is not set, Retype will use default values.
!!!