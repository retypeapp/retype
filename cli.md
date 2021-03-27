---
order: -100
icon: terminal
---
# Retype CLI

The Retype CLI is clean and simple. There are basically just three options, `retype init`, `retype build`, and `retype run`.

!!!

Be sure to review the [configuration options](project_configuration.md) available within the `retype.json`  as it does unlock a lot more power, flexibility, and customization.

!!!

Let's go through each of the `retype` CLI commands, or be sure to check out the [Getting Started](getting_started.md) guide for step by instructions on using each of these commands.

## Commands

### `retype watch`

The `retype watch` command is equivalent to running the following three commands in sequence:

```
retype init
retype build
retype run
```

`retype watch` will also watch for file changes and will automatically update the website in the browser with the updated page.

```
watch:
  Serve a static website and watch for file changes.

Usage:
  retype watch [options] [<path>]

Arguments:
  <path>    Path to the project root or retype.json [Optional]

Options:
  -c, --code        Watch for code changes
  -v, --verbose     Verbose logging
  -?, -h, --help    Show help and usage information
```

---

### `retype init`

Create a new `retype.json` configuration file if one is not already present.

```
init:
  Initialize a new Retype project

Usage:
  retype init [options] [<path>]

Arguments:
  <path>    Path to the project root [Optional]

Options:
  --override <override>    JSON configuration overriding retype.json values
  -v, --verbose            Verbose logging
  -?, -h, --help           Show help and usage information
```

---

### `retype build`

Build a new website based upon the `.md` files available.

```
build:
  Generate a static website

Usage:
  retype build [options] [<path>]

Arguments:
  <path>    Path to the project root or retype.json [Optional]

Options:
  --output <output>        Custom path to the output directory
  --license <license>      Retype license key
  --override <override>    JSON configuration overriding retype.json values
  -v, --verbose            Verbose logging
  -?, -h, --help           Show help and usage information
```

---

### `retype run`

Starts up your new Retype website and opens in a web browser.

```
run:
  Serve a static website

Usage:
  retype run [options] [<path>]

Arguments:
  <path>    Path to the project root or retype.json [Optional]

Options:
  -v, --verbose     Verbose logging
  -?, -h, --help    Show help and usage information
```