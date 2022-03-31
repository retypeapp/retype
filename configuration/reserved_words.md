---
icon: info
---
![](/static/headers/configuration_reserved-words.png)

# Reserved words

There are several [input](/configuration/project.md#input) folder names and files within a Retype project that incorporate special behaviour. All paths for folders or files within Retype are relative to your project [input](/configuration/project.md#input) directory.

---

## Folders

### /blog

The `/blog` directory is intended to host a Blog for your website.

By default, `.md` pages created within the `/blog` folder are assigned the `layout: blog` layout, plus some additional features:

- A summary page of the blog posts is automatically created at `/blog`.
- An RSS feed of the recent blog posts is created.
- Blog pages get `Newer` and `Older` buttons at the bottom of each page.
- All blog pages are set with the [`layout: blog`](/configuration/page.md#layout) layout, unless otherwise specified in the page metadata.

!!!
Be sure to review the [`author`](/configuration/page.md#author) and [`date`](/configuration/page.md#date) Page configs if you are writing blog posts.
!!!

### /categories

The default index page of the `/categories` directory is reserved for a summary of any [category](/configuration/page.md#category) configs. Every category configured within an `.md` page of your Retype project will have a corresponding entry here.

Similar to [`/tags`](#tags), you can also add content to the `/categories` page by creating your own `/categories/index.md` page. Retype will create your page as normal and then add the list of Categories below your custom content.

### /resources

Any files placed within this directory will be copied to the [output](/configuration/project.md#output) directory. Please see the [`include`](/configuration/project.md#include) and [`exclude`](/configuration/project.md#exclude) configs for fine-grained control over including or excluding files or folders.

### /tags

The `/tags` directory is reserved for [tags](/configuration/page.md#tags). Every tag name configured within an `.md` page will have a corresponding entry here.

Similar to [`/categories`](#categories), you can also add content to the `/tags` page by creating your own `/tags/index.md` page. Retype will create your page as normal and then add the list of Tags below your custom content.

---

## Files

### CNAME

A `CNAME` file will be automatically created if the [`url`](/configuration/project.md#url) is configured with a domain or sub-domain.

For instance, including `url: docs.example.com` within your `retype.yml` project config file also instructs Retype to create a `CNAME` file with the value `docs.example.com`. That `CNAME` file is used by [GitHub Pages](/guides/github-actions.md) and possibly other website hosting services as the way to configure custom domain name hosting.

If you manually create a `CNAME` file within the root of the [input](/configuration/project.md#input) folder of your project, Retype will not automatically create the `CNAME` file, even if the [`url`](/configuration/project.md#url) or [`cname`](/configuration/project.md#cname) is configured or conflicts.

### Default pages

Folder default pages are custom `.md` files that will be treated as the index page of the folder.

Retype will search using the following case insensitive priority:

1. `index.md`
2. `readme.md`
3. `default.md`

For instance, creating a the file `docs/index.md` will create a custom page accessible from the path `https://example.com/docs/`. The `index.md` page instructs Retype to create an `index.html` file within the `docs/` folder.

### Project config

By default, if you do not pass an explicit project configuration file name in the [`<path>`](/guides/cli.md#retype-watch) command line argument, Retype will search for your project config using the following case insensitive priority:

1. `retype.yml`
2. `retype.yaml`
3. `retype.json`

For instance, if you run the [CLI](/guides/cli.md) command `retype watch docs`, Retype will first try to find the project configuration file  `docs/retype.yml`. If not found, then `docs/retype.yaml` will be tested and so on.

If you run the command `retype watch docs/retype.json`, even if a `retype.yml` is present, Retype will only read the `retype.json` file as you are explicitly passing the project configuration file path.

!!!
Custom project config file names are also possible by explicitly passing a file name, such as `retype watch docs.yml`. Where `docs.yml` is used instead of `retype.yml`, even if `retype.yml` is present.
!!!

Once a file is found, it is used. If the other files are found, they are ignored. Retype will not merge or override different configs or conflicting configs between two or more project files.
