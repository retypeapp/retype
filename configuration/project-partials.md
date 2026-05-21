# Project partials

Retype can compose a project configuration from multiple **.yml** files. This helps keep your main **retype.yml** file small while sharing common settings across several projects or separating local development settings from production build settings.

Project partials support three layering techniques, each applied at a different point in the merge order:

1. Build and start files such as **retype.build.yml** and **retype.start.yml**
2. Explicit [`extends`](project.md#extends) references from a config file
3. Automatic project fragments such as **retype.theme.yml**

All partial files can contain only the settings they need to change. A shared theme file, for example, does not need to include required project settings such as [`input`](project.md#input), [`output`](project.md#output), or [`url`](project.md#url).

In general, later files override earlier files. The main **retype.yml** file is merged first, then files referenced by `extends`, automatic fragments, and build or start files are merged over it.

---

## Build and start files

Retype automatically detects **retype.start.yml** and **retype.build.yml** when they are placed beside the main **retype.yml** project configuration file.

These files are applied only for the matching command and are merged after the main project configuration, explicit [`extends`](#extends), and automatic [fragments](#automatic-fragments). This makes them useful for keeping local preview settings and production build settings separate.

### retype.start.yml

The **retype.start.yml** file is applied only when running [`retype start`](/guides/cli.md#retype-start).

Use this file for local development settings, such as whether Retype should open a browser, how the local server should watch files, or preview-only options that should not be part of production builds.

```yml retype.start.yml
branding:
  label: DRAFT
```

When `retype start` runs, Retype automatically detects **retype.start.yml** beside **retype.yml** and applies it last for that start process.

### retype.build.yml

The **retype.build.yml** file is applied only when running [`retype build`](/guides/cli.md#retype-build).

Use this file for production build settings, such as the final output folder, published URL, or other settings that should only apply to generated build artifacts.

```yml retype.build.yml
lastUpdated:
  date:
    enabled: true
```

When `retype build` runs, Retype automatically detects **retype.build.yml** beside **retype.yml** and applies it last for that build process.

---

## extends

Use [`extends`](project.md#extends) in **retype.yml** to merge one or more additional config files into your project configuration.

```yml retype.yml
extends:
  - ./config/retype.base.yml
  - ./config/theme.company.yml

url: docs.example.com
branding:
  label: Product Docs
```

A single extended file can also be configured as a string:

```yml retype.yml
extends: ./config/theme.yml

url: docs.example.com
```

Extended files are resolved relative to the config file that declares them. Remote extension paths are not supported.

The current config file is merged first, then each extended file is merged over it. This means the files listed in `extends` can override values from the local **retype.yml** file:

```yml config/base.yml
branding:
  title: Shared Docs
  logo: ./logo.svg

search:
  hotkeys:
    - /
```

```yml retype.yml
extends: ./config/base.yml

branding:
  title: API Docs
  label: Product Docs
```

The final configuration is equivalent to:

```yml
branding:
  title: Shared Docs
  label: Product Docs
  logo: ./logo.svg

search:
  hotkeys:
    - /
```

---

## Automatic fragments

Retype automatically discovers project fragments placed beside the main project config file. Automatic fragments use the following file name pattern:

```txt
retype.<id>.yml
```

For example:

```txt
retype.yml
retype.theme.yml
retype.theme.blue.yml
retype.company.yml
```

Automatic fragments are useful for shared themes, branding, links, search settings, labels, or other reusable project-level configuration blocks.

```yml retype.theme.yml
theme:
  base:
    primary: "#1e66f5"
    success: "#40a02b"

branding:
  label: Docs
```

### Fragment naming rules

The `<id>` part must be non-empty and may contain letters, digits, `.`, `-`, and `_`.

The following file names are valid automatic fragments:

```txt
retype.theme.yml
retype.theme.blue.yml
retype.theme.company-brand.yml
retype.theme.company_brand.yml
retype.companyx.yml
```

The following file names are not treated as automatic fragments:

```txt
retype.yml
retype.start.yml
retype.build.yml
retype._theme.yml
_retype.theme.yml
```

Automatic fragments are sorted by their `<id>`, with parent ids before child ids. For example, **retype.theme.yml** is applied before **retype.theme.blue.yml**.

Only one automatic fragment can use a given `<id>`.

### Fragments with extends

Automatic fragments can also use `extends`:

```yml retype.theme.yml
extends: ./config/theme.base.yml

theme:
  base:
    primary: "#1e66f5"
```

The fragment is merged first, then its extended file is merged over it. The resolved fragment is then merged after the main **retype.yml** file, so automatic fragments can override values from the main project configuration.

---

## Merge order

Retype applies project configuration files in the following order:

1. The main **retype.yml** file
2. Files referenced by `extends` from **retype.yml**
3. Automatic project fragments, such as **retype.theme.yml**
4. Build or start files, such as **retype.build.yml** or **retype.start.yml**
5. CLI overrides, such as [`--override`](/guides/cli.md#retype---override)

Later files win over earlier files.

If an automatic fragment or build/start file also uses `extends`, that fragment or build/start file is merged first, then the files it extends are merged over it. The resolved fragment or build/start file is then merged at its normal position in the order above.

### Merge behavior

All layers use the same merge behavior:

| Type | Behavior |
| ---- | -------- |
| Objects | Deep merge |
| Arrays | Replace |
| Strings, Numbers, Boolean, etc | Replace |
| `null` | Explicitly clears or replaces where supported |

For example, arrays are replaced instead of appended:

```yml config/base.yml
links:
  - text: Base
    link: /base
```

```yml retype.yml
extends: ./config/base.yml

links:
  - text: Home
    link: /
```

The final `links` value contains only the `Base` link.
