---
title: Home
---
# Retype CLI

## Commands

### `retype`

```
Usage:
  retype [options] [command]

Options:
  --version         Show version information
  -h, --help        Show help and usage information

Commands:
  init <path>               Initializes a new Retype project
  build <input> <output>    Generate a static documentation Website
```

### `retype init`

```
init:
  Initializes a new Retype project

Usage:
  retype init [options] [<path>]

Arguments:
  <path>    Project directory path

Options:
  -v, --verbose     Verbose logging
  -h, --help        Show help and usage information
```

### `retype build`

```
build:
  Generate a static documentation Website

Usage:
  retype build [options] [<input> [<output>]]

Arguments:
  <input>     Input directory
  <output>    Output directory

Options:
  -c, --config <config>    Path to a configuration json file
  -v, --verbose            Verbose logging
  -h, --help               Show help and usage information
```

### `retype run`

```
run:
  Serves a static documentation Website

Usage:
  retype run [options] [<input>]

Arguments:
  <input>    Input directory

Options:
  -c, --config <config>    Path to a configuration json file
  -v, --verbose            Verbose logging
  -h, --help               Show help and usage information
```

## `docs.json` options

| Option               | Type     | Default value | Description                                                              |
| -------------------- | -------- | ------------- | ------------------------------------------------------------------------ |
| `input`              | `string` | `./`          | Custom path to the input directory                                       |
| `output`             | `string` | `./docs`      | Custom path to the output directory                                      |
|                      |          |               |                                                                          |
| `siteLogo`           |          |               | Logo config                                                              |
| `siteLogo.text`      | `string` | `Retype`      | Logo Text (displayed when no logo images)                                |
| `siteLogo.img`       | `string` |               | Name of Logo file (light theme) located under `$(input)/_resources/img/` |
| `siteLogo.imgDark`   | `string` |               | Name of Logo file (dark theme) located under `$(input)/_resources/img/`  |
| `siteLogo.showLabel` | `string` | `true`        | Specifies if Logo label should be rendered                               |
| `siteLogo.labelText` | `string` | `docs`        | Logo label text                                                          |

## Template arguments

| Option            | Type     | Description                                                     |
| ----------------- | -------- | --------------------------------------------------------------- |
| `{{ content }}`   | `string` | Content of the MD file being processed                          |
| `{{ root }}`      | `string` | Root directory path relative to the MD file. Ends with `/`      |
| `{{ resources }}` | `string` | Resources directory path relative to the MD file. Ends with `/` |
