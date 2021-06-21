---
icon: note
tags: [guide]
---
# Commands

## help

```
$ retype --help                                                                                                                                                                                                                    master ✔ 
Usage:                                                                                                                                                                                                                                       
  retype [options] [command]

Options:
  --version         Show version information
  -?, -h, --help    Show help and usage information

Commands:
  init <path>     Initialize a new Retype project
  build <path>    Generate a static website
  run <path>      Serve a static website
  watch <path>    Serve a static website, watch for file changes
```

## init

> Initialize a new Retype project

```
$ retype init --help                                                                                                                                                                                                               master ✔ 
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

## build

> Generate / build a static website

```
$ retype build --help                                                                                                                                                                                                              master ✔ 
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

## run

> Serve a static website

```
$ retype run --help                                                                                                                                                                                                                master ✔ 
run:                                                                                                                                                                                                                                         
  Serve a static website

Usage:
  retype run [options] [<path>]

Arguments:
  <path>    Path to the project root or retype.json [Optional]

Options:
  --port <port>     Custom TCP port
  -v, --verbose     Verbose logging
  -?, -h, --help    Show help and usage information
```

## watch

> Serve a static website, watch for file changes (live reload)

```
$ retype watch --help                                                                                                                                                                                                              master ✔ 
watch:                                                                                                                                                                                                                                       
  Serve a static website, watch for file changes

Usage:
  retype watch [options] [<path>]

Arguments:
  <path>    Path to the project root or retype.json [Optional]

Options:
  -a, --api              Watch for API changes
  --license <license>    Retype license key
  --port <port>          Custom TCP port
  -v, --verbose          Verbose logging
  -?, -h, --help         Show help and usage information
```
