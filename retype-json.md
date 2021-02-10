---
label: retype.json
---

# retype.json

Configuration options for `retype.json`.

## Options

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
