# Keyword Paths

Retype has some directory names with special behavior both in the [input directory](project.md#input). This document shall give a brief explanation of each case.

All paths for files are relative to Retype's input root directory, as set in the [input directory config](project.md#input).

## `blog/` directory

This directory is meant to serve `.md` files as usual, but its special meaning sets the files, by default, as Blog pages, with some different rules. Some rules include:

- the `blog/` directory root URL will serve as an index for all blog posts available,
- there will be a `blog/feed.xml` that will contain a list of recent blog posts, in [XML RSS 2.0 format](https://cyber.harvard.edu/rss/rss.html)
- all pages will be set as [`layout: blog`](page.md#layout) by default
- they have separate sequence and "previous"/"next" navigation handles will read as "newer"/"older", respectively

## `categories/` directory

This directory is reserved for [categories](page.md#category). Every category assigned to documents in retype will have an entry here.

## `CNAME` file

This file, if present, will be simply copied over to [output](project.md#output). With the presence of the file, [the `cname` config](project.md#cname) is ignored.

## configuration files

These are possible configuration file names sought by retype when no explicit config file is passed to the command line. They are searched for in this order, case insensitive:

1. `retype.yml`
2. `retype.yaml`
3. `retype.json`

The first two are in [YAML format](https://yaml.org/). The last is in [JSON format](https://www.json.org/json-en.html).

Once one file is found, it is used; if the others are present, they are ignored, so there's no "merging" or "overriding" of settings present in more than one files.

## index page files

These are `.md` files that will be treated as the folder's (or retype's) index (initial/default) page if the path URL to the end website provided ends in its directory.

The files are sought in this sequence, and are case insensitive:

1. `index.md`
2. `README.md`
3. `default.md`

## `resources/` directory

Files within this directory will all be deployed to the [output directory](project.md#output)

## `tags/` directory

This directory is reserved for [tags](page.md#tags). Every tag name assigned to documents in retype will have an entry here.