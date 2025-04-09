---
icon: list-unordered
tags: [component]
---
# List

Retype includes broad support for creating lists of items, including [unordered](#unordered-lists), [ordered](#ordered-lists), and [description](#description-list) lists.

---

## Unordered lists

Unordered list variations include:

1. `-` for [bullet](#bullet)
2. `- [x]` for [checked](#task-list) item
3. `- [ ]` for [unchecked](#task-list) item

### Bullet

``` Sample unordered list
- Item 1
- Item 2
- Item 3
```

- Item 1
- Item 2
- Item 3

### Task list

``` Sample task list with checked and unchecked items
- [x] Item 1
- [x] Item 2
- [ ] Item 3
```

- [x] Item 1
- [x] Item 2
- [ ] Item 3

### Icon list

By applying the following `{.list-icon}` generic attribute, you can convert a bullet list into an icon list.

```md
{.list-icon}
- :icon-check-circle: Item 1
    - :icon-check-circle: This is sub-item 1.1
    - :icon-alert: This is sub-item 1.2
    - :icon-circle-slash: This is sub-item 1.3
- :icon-check-circle: Item 2
    - :icon-check-circle: This is sub-item 2.1
    - :icon-check-circle: This is sub-item 2.2
    - :icon-alert: This is sub-item 2.3
    - :icon-circle-slash: This is sub-item 2.4
```

{.list-icon}
- :icon-check-circle: Item 1
    - :icon-check-circle: This is sub-item 1.1
    - :icon-alert: This is sub-item 1.2
    - :icon-circle-slash: This is sub-item 1.3
- :icon-check-circle: Item 2
    - :icon-check-circle: This is sub-item 2.1
    - :icon-check-circle: This is sub-item 2.2
    - :icon-alert: This is sub-item 2.3
    - :icon-circle-slash: This is sub-item 2.4

Without the `{.list-icon}` css class applied, the above sample would render as:

- :icon-check-circle: Item 1
    - :icon-check-circle: This is sub-item 1.1
    - :icon-alert: This is sub-item 1.2
    - :icon-circle-slash: This is sub-item 1.3
- :icon-check-circle: Item 2
    - :icon-check-circle: This is sub-item 2.1
    - :icon-check-circle: This is sub-item 2.2
    - :icon-alert: This is sub-item 2.3
    - :icon-circle-slash: This is sub-item 2.4

!!!
Additional techniques for creating icon and emoji lists are outlined in issues [#603](https://github.com/retypeapp/retype/issues/603) and [#370](https://github.com/retypeapp/retype/issues/370).
!!!
---

## Ordered lists

Ordered list variations include:

1. `1.` for [numbers](#numbers) (default)
2. `a.` for [lowercase](#lowercase-letters) letters
3. `A.` for [uppercase](#uppercase-letters) letters
4. `i.` for [lowercase](#lowercase-roman-numerals) Roman numerals
5. `I.` for [uppercase](#uppercase-roman-numerals) Roman numerals

### Numbers

``` Sample ordered list
1. Item 1
2. Item 2
3. Item 3
```

1. Item 1
2. Item 2
3. Item 3

### Lowercase letters

``` Sample for lowercase letter list
a. Item 1
b. Item 2
c. Item 3
```

a. Item 1
b. Item 2
c. Item 3

### Uppercase letters

``` Sample for uppercase letter list
A. Item 1
B. Item 2
C. Item 3
```

A. Item 1
B. Item 2
C. Item 3

!!!
Uppercase letter ordered lists are not broadly supported across all web browsers, so the above sample might render as a lowercase letter list for you. Hopefully, support within the web browsers will improve over time.
!!!

### Lowercase Roman numerals

``` Sample for lowercase Roman numeral list
i. Item 1
ii. Item 2
iii. Item 3
```

i. Item 1
ii. Item 2
iii. Item 3

### Uppercase Roman numerals

``` Sample for uppercase Roman numeral list
I. Item 1
II. Item 2
III. Item 3
```

I. Item 1
II. Item 2
III. Item 3

!!!
Uppercase Roman numeral ordered lists are not broadly supported across all web browsers, so the above sample might render as a lowercase Roman numeral list for you. Hopefully, support within the web browsers will improve over time.
!!!

---

## Description List

A Description List is a way to display terms along with their corresponding definitions or descriptions.

The Description List is commonly used to create a glossary or dictionary where you have a word and its meaning listed together.

### Basic list

```md
Term 1
:   Definition 1

Term 2
:   Definition 2

Term 3
:   Definition 3
```

Term 1
:   Definition 1

Term 2
:   Definition 2

Term 3
:   Definition 3

### Include Markdown

```md
Term 1
:   Definition 1
    With a paragraph
    > This is a block quote

    - Nested item 1
    - Nested item 2

Term 2
:   Definition 2
    This is a paragraph continuing the definition.

    > This is a blockquote inside the definition.

Term 3
:   Definition 3
```

Term 1
:   Definition 1
    With a paragraph
    > This is a block quote

    - Nested item 1
    - Nested item 2

Term 2
:   Definition 2
    This is a paragraph continuing the definition.

    > This is a blockquote inside the definition.
