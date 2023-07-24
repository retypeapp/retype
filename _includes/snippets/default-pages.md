Folder default pages are **.md** files that will be treated as the index (default) page of the folder.

Retype will search using the following case insensitive priority:

1. `index.md`
2. `readme.md`
3. `default.md`
4. `welcome.md` *only in the project root

Within a sub-folder, if you add a Markdown **.md** file with the exact same name as the folder name, Retype will also treat that `.md` as a default page. For instance, given the following basic project structure, the **/sample/sample.md** file will function as a default page for the folder. The result will be the same as though you named it **/sample/index.md**:

```
sample
  |-- sample.md
readme.md
retype.yml
```