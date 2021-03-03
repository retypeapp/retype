# Retype CLI

The Retype CLI is clean and simple. There are basically just three options, `retype init`, `retype build`, and `retype run`.

!!!

Be sure to review the [configuration options](project_configuration.md) available within the `retype.json`  as it does unlock a lot more power, flexibility, and customization.

!!!

Let's go through each of the `retype` CLI commands, or be sure to check out the [Getting Started](getting_started.md) guide for step by instructions on using each of these commands.

## Commands

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
  -v, --verbose     Verbose logging
  -?, -h, --help    Show help and usage information
```

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
  -v, --verbose     Verbose logging
  -?, -h, --help    Show help and usage information
```

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