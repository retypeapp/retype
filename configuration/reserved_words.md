# Keyword Paths

Retype has some directory names with special behavior both in the [input directory](project.md#input). This document shall give a brief explanation of each case.

All paths for files are relative to Retype's input root directory, as set in the [input directory config](project.md#input).

## Directories

### /blog

The `/blog` directory is meant to serve `.md` files as usual, although by default any pages within the `/blog` folder are assigned the `blog` layout, plus some additional features:

- A summary page of the blog posts is automatically created at `/blog`.
- An RSS feed of the recent blog posts is created.
- All blog pages are given the [`blog`](page.md#layout) layout.
- Blog pages get `Newer` and `Older` buttons at the bottom of each page.

## /categories

This directory is reserved for [categories](page.md#category). Every category assigned to documents in Retype will have an entry here.

## /resources

Files within this directory will all be deployed to the [output](project.md#output) directory

## /tags

This directory is reserved for [tags](page.md#tags). Every tag name assigned to documents in Retype will have an entry here.

## CNAME

This file, if present, will be simply copied over to [output](project.md#output). With the presence of the file, [the `cname` config](project.md#cname) is ignored.

## Configuration

These are possible configuration file names sought by Retype when no explicit config file is passed to the command line. They are searched for in this order, case insensitive:

1. `retype.yml`
2. `retype.yaml`
3. `retype.json`

The first two are in [YAML format](https://yaml.org/). The last is in [JSON format](https://www.json.org/json-en.html).

Once one file is found, it is used; if the others are present, they are ignored, so there's no "merging" or "overriding" of settings present in more than one files.

## Index pages

These are `.md` files that will be treated as the folder's (or Retype's) index (initial/default) page if the path URL to the end website provided ends in its directory.

The files are sought in this sequence, and are case insensitive:

1. `index.md`
2. `README.md`
3. `default.md`
