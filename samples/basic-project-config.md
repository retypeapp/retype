---
icon: file
order: 1000
---
# Basic project config

The following is a basic **retype.yml** [project configuration](/configuration/project.md) file.
{%{
```yml retype.yml
input: .
output: .retype

url: docs.example.com # Use your website address here

start:
  # Uncomment the next line to try Retype Pro features
  # pro: true

branding:
  title: Project Name
  label: Docs

links:
  - text: Getting Started
    link: https://retype.com/guides/getting-started/

footer:
  copyright: "&copy; Copyright {{ year }}. All rights reserved."
```
}%}
!!!
All settings are optional. If a setting is not set, Retype will use default values.
!!!