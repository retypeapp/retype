# Table

Tables are configured using a combination of `|` pipe characters to separate columns and at least three `---` dashes to separate the header row from the table body.

The following sample demonstrates a basic table configuration and the default style:

```md
Project              | Status                     | Owner
---                  | ---                        | ---
Website Redesign     | [!badge Review]            | Operations
Quarterly Forecast   | [!badge Approved|success]  | Finance
Customer Onboarding  | [!badge Draft|secondary]   | Product
```

The above configuration creates the following table:

Project              | Status                     | Owner
---                  | ---                        | ---
Website Redesign     | [!badge Review]            | Operations
Quarterly Forecast   | [!badge Approved|success]  | Finance
Customer Onboarding  | [!badge Draft|secondary]   | Product

The `|` pipe character column separators are not required to vertically align. Extra whitespace within the column widths is ignored and the result will look the same.

```md
Project | Status | Owner
--- | --- | ---
Website Redesign | [!badge Review] | Operations
Quarterly Forecast | [!badge Approved|success] | Finance
Customer Onboarding | [!badge Draft|secondary] | Product
```

## Clean

Apply the `clean` class to remove the table borders.

```md
{.clean}
Project              | Status                     | Owner
---                  | ---                        | ---
Website Redesign     | [!badge Review]            | Operations
Quarterly Forecast   | [!badge Approved|success]  | Finance
Customer Onboarding  | [!badge Draft|secondary]   | Product
```

{.clean}
Project              | Status                     | Owner
---                  | ---                        | ---
Website Redesign     | [!badge Review]            | Operations
Quarterly Forecast   | [!badge Approved|success]  | Finance
Customer Onboarding  | [!badge Draft|secondary]   | Product

## Striped

Apply the `striped` class to alternate the background color of body rows.

### Default

```md
{.striped}
Project              | Status                     | Owner
---                  | ---                        | ---
Website Redesign     | [!badge Review]            | Operations
Quarterly Forecast   | [!badge Approved|success]  | Finance
Customer Onboarding  | [!badge Draft|secondary]   | Product
```

{.striped}
Project              | Status                     | Owner
---                  | ---                        | ---
Website Redesign     | [!badge Review]            | Operations
Quarterly Forecast   | [!badge Approved|success]  | Finance
Customer Onboarding  | [!badge Draft|secondary]   | Product

### Clean

```md
{.clean .striped}
Project              | Status                     | Owner
---                  | ---                        | ---
Website Redesign     | [!badge Review]            | Operations
Quarterly Forecast   | [!badge Approved|success]  | Finance
Customer Onboarding  | [!badge Draft|secondary]   | Product
```

{.clean .striped}
Project              | Status                     | Owner
---                  | ---                        | ---
Website Redesign     | [!badge Review]            | Operations
Quarterly Forecast   | [!badge Approved|success]  | Finance
Customer Onboarding  | [!badge Draft|secondary]   | Product

## Compact

Apply the `compact` class to reduce the cell padding and text size.

### Default

```md
{.compact}
Project              | Status                     | Owner
---                  | ---                        | ---
Website Redesign     | [!badge Review]            | Operations
Quarterly Forecast   | [!badge Approved|success]  | Finance
Customer Onboarding  | [!badge Draft|secondary]   | Product
```

{.compact}
Project              | Status                     | Owner
---                  | ---                        | ---
Website Redesign     | [!badge Review]            | Operations
Quarterly Forecast   | [!badge Approved|success]  | Finance
Customer Onboarding  | [!badge Draft|secondary]   | Product

### Clean

```md
{.clean .compact}
Project              | Status                     | Owner
---                  | ---                        | ---
Website Redesign     | [!badge Review]            | Operations
Quarterly Forecast   | [!badge Approved|success]  | Finance
Customer Onboarding  | [!badge Draft|secondary]   | Product
```

{.clean .compact}
Project              | Status                     | Owner
---                  | ---                        | ---
Website Redesign     | [!badge Review]            | Operations
Quarterly Forecast   | [!badge Approved|success]  | Finance
Customer Onboarding  | [!badge Draft|secondary]   | Product

## Striped + Compact

The `striped` and `compact` classes can be combined in both default and `clean` table styles.

### Default

```md
{.striped .compact}
Project              | Status                     | Owner
---                  | ---                        | ---
Website Redesign     | [!badge Review]            | Operations
Quarterly Forecast   | [!badge Approved|success]  | Finance
Customer Onboarding  | [!badge Draft|secondary]   | Product
```

{.striped .compact}
Project              | Status                     | Owner
---                  | ---                        | ---
Website Redesign     | [!badge Review]            | Operations
Quarterly Forecast   | [!badge Approved|success]  | Finance
Customer Onboarding  | [!badge Draft|secondary]   | Product

### Clean

```md
{.clean .striped .compact}
Project              | Status                     | Owner
---                  | ---                        | ---
Website Redesign     | [!badge Review]            | Operations
Quarterly Forecast   | [!badge Approved|success]  | Finance
Customer Onboarding  | [!badge Draft|secondary]   | Product
```

{.clean .striped .compact}
Project              | Status                     | Owner
---                  | ---                        | ---
Website Redesign     | [!badge Review]            | Operations
Quarterly Forecast   | [!badge Approved|success]  | Finance
Customer Onboarding  | [!badge Draft|secondary]   | Product

## Alignment

The alignment of text within a column can be configured by using the `:` colon character within the header separator row.

By default, text is left aligned. To center align text, use `:---:` with colons at both ends of the header separator. To right align text, use `---:` with a colon on the right end of the header separator.

```md
Project              | Status                     | Owner
:---                 | :---:                      | ---:
Website Redesign     | [!badge Review]            | Operations
Quarterly Forecast   | [!badge Approved|success]  | Finance
Customer Onboarding  | [!badge Draft|secondary]   | Product
```

Project              | Status                     | Owner
:---                 | :---:                      | ---:
Website Redesign     | [!badge Review]            | Operations
Quarterly Forecast   | [!badge Approved|success]  | Finance
Customer Onboarding  | [!badge Draft|secondary]   | Product

!!!
Column widths are calculated dynamically by the web browser and will vary depending on the content of the cells.
!!!

## Equal

Apply the `equal` class to distribute the table width evenly across columns.

```md
{.equal}
Project              | Status                     | Owner
---                  | ---                        | ---
Website Redesign     | [!badge Review]            | Operations
Quarterly Forecast   | [!badge Approved|success]  | Finance
Customer Onboarding  | [!badge Draft|secondary]   | Product
```

{.equal}
Project              | Status                     | Owner
---                  | ---                        | ---
Website Redesign     | [!badge Review]            | Operations
Quarterly Forecast   | [!badge Approved|success]  | Finance
Customer Onboarding  | [!badge Draft|secondary]   | Product

## Nowrap

The `whitespace-nowrap` class prevents text within table cells from wrapping to the next line, keeping all content on a single line. This is useful for maintaining the layout of content that should stay on one line, such as code snippets or long strings.

```md
{.whitespace-nowrap}
Name   | Long Message                                                    | Description
---    | ---                                                             | ---
Item 1 | This is an extra long message that should not wrap in the table | This is a description
Item 2 | Another long content item                                       | Another description
Item 3 | A third example with similarly long content on one line         | A final description
```

{.whitespace-nowrap}
Name   | Long Message                                                    | Description
---    | ---                                                             | ---
Item 1 | This is an extra long message that should not wrap in the table | This is a description
Item 2 | Another long content item                                       | Another description
Item 3 | A third example with similarly long content on one line         | A final description

You can also apply multiple custom CSS classes to combine formatting options:

```md
{.whitespace-nowrap .compact}
Name   | Long Message                                                    | Description
---    | ---                                                             | ---
Item 1 | This is an extra long message that should not wrap in the table | This is a description
Item 2 | Another long content item                                       | Another description
Item 3 | A third example with similarly long content on one line         | A final description
```

{.whitespace-nowrap .compact}
Name   | Long Message                                                    | Description
---    | ---                                                             | ---
Item 1 | This is an extra long message that should not wrap in the table | This is a description
Item 2 | Another long content item                                       | Another description
Item 3 | A third example with similarly long content on one line         | A final description

---

## Column styling

Add attributes to a header cell to apply the same styling to every cell in that column. In this sample, the `Status` column uses a gray background and stronger header-style text.

```md
Project              | Status {style="background-color: var(--gray-100);"} | Owner
---                  | ---                                                                                                 | ---
Website Redesign     | [!badge Review]                                                                                     | Operations
Quarterly Forecast   | [!badge Approved|success]                                                                            | Finance
Customer Onboarding  | [!badge Draft|secondary]                                                                             | Product
```

Project              | Status {style="background-color: var(--gray-100); color: var(--base-text-strong); font-weight: 600;"} | Owner
---                  | ---                                                                                                 | ---
Website Redesign     | [!badge Review]                                                                                     | Operations
Quarterly Forecast   | [!badge Approved|success]                                                                            | Finance
Customer Onboarding  | [!badge Draft|secondary]                                                                             | Product

## Wide tables

Tables that exceed the available page width can be scrolled horizontally. This can happen when a cell contains a large image.

```md
Asset              | Preview                                                            | Notes
---                | ---                                                                | ---
Launch screenshot  | ![](/static/sample-large.jpg){width="960" style="max-width: none;"} | The image keeps its full width inside the cell.
```

Asset              | Preview                                                            | Notes
---                | ---                                                                | ---
Launch screenshot  | ![](/static/sample-large.jpg){width="960" style="max-width: none;"} | The image keeps its full width inside the cell.

Tables with many columns can also overflow the page body and scroll horizontally.

```md
Region | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec | Total | Forecast | Owner
--- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---
North America | 42 | 48 | 53 | 58 | 61 | 67 | 71 | 73 | 69 | 64 | 59 | 55 | 720 | [!badge On track|success] | Operations
Europe | 31 | 34 | 39 | 44 | 49 | 52 | 57 | 59 | 56 | 50 | 46 | 41 | 558 | [!badge Watch|warning] | Growth
Asia Pacific | 28 | 32 | 37 | 43 | 47 | 51 | 55 | 58 | 61 | 63 | 66 | 70 | 611 | [!badge Rising|primary] | Product
```

Region | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec | Total | Forecast | Owner
--- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---
North America | 42 | 48 | 53 | 58 | 61 | 67 | 71 | 73 | 69 | 64 | 59 | 55 | 720 | [!badge On track|success] | Operations
Europe | 31 | 34 | 39 | 44 | 49 | 52 | 57 | 59 | 56 | 50 | 46 | 41 | 558 | [!badge Watch|warning] | Growth
Asia Pacific | 28 | 32 | 37 | 43 | 47 | 51 | 55 | 58 | 61 | 63 | 66 | 70 | 611 | [!badge Rising|primary] | Product
