---
icon: code
tags: [templating]
nav:
  badge: NEW|info
templating: false
---
# Functions and Filters

Retype's templating system is powered by [Scriban](https://github.com/scriban/scriban) and includes a comprehensive set of built-in functions and filters for transforming strings, working with arrays, formatting dates, performing math, processing HTML, and inspecting objects.

---

## Using functions and filters

### Function syntax

Call a function by passing the input as the first argument:

```md
{{ string.upcase "hello world" }}
{{ array.size page.tags }}
{{ date.now.year }}
```

### Pipe (filter) syntax

Use the pipe operator (`|`) to pass the left-hand value as the first argument to the function on the right. This is equivalent to calling the function directly and is the most common style:

```md
{{ "hello world" | string.upcase }}
{{ page.tags | array.size }}
{{ page.title | string.truncate 40 }}
```

### Chaining filters

Chain multiple filters together. Each filter receives the output of the previous one:

```md
{{ "  hello world  " | string.strip | string.upcase }}
{{ page.tags | array.sort | array.join ", " }}
{{ page.title | string.replace "-" " " | string.capitalizewords }}
```

---

## String functions

Function | Description
--- | ---
`string.upcase` | Converts to uppercase
`string.downcase` | Converts to lowercase
`string.capitalize` | Uppercases the first character only
`string.capitalizewords` | Uppercases the first character of each word
`string.strip` | Removes leading and trailing whitespace
`string.lstrip` | Removes leading whitespace
`string.rstrip` | Removes trailing whitespace
`string.strip_newlines` | Removes all newline characters
`string.append` | Appends a string to the end
`string.prepend` | Prepends a string to the beginning
`string.replace` | Replaces all occurrences of a substring
`string.replace_first` | Replaces the first occurrence of a substring
`string.remove` | Removes all occurrences of a substring
`string.remove_first` | Removes the first occurrence of a substring
`string.remove_last` | Removes the last occurrence of a substring
`string.contains` | Returns `true` if the string contains a value
`string.starts_with` | Returns `true` if the string starts with a value
`string.ends_with` | Returns `true` if the string ends with a value
`string.size` | Returns the number of characters
`string.slice` | Returns a substring starting at an index
`string.split` | Splits a string into an array by a delimiter
`string.truncate` | Truncates to a character count and appends an ellipsis
`string.truncatewords` | Truncates to a word count and appends an ellipsis
`string.pluralize` | Returns the singular or plural form based on a number
`string.handleize` | Converts to a URL-friendly handle
`string.pad_left` | Pads with leading spaces to a total width
`string.pad_right` | Pads with trailing spaces to a total width
`string.base64_encode` | Encodes to Base64
`string.base64_decode` | Decodes from Base64

### Case and whitespace

```md
{{ "hello world" | string.upcase }}           {{# HELLO WORLD #}}
{{ "HELLO WORLD" | string.downcase }}         {{# hello world #}}
{{ "hello world" | string.capitalize }}       {{# Hello world #}}
{{ "hello world" | string.capitalizewords }}  {{# Hello World #}}
{{ "  hello  " | string.strip }}              {{# hello #}}
{{ "hello\nworld" | string.strip_newlines }}  {{# helloworld #}}
```

### Append, prepend, and replace

```md
{{ "Hello" | string.append " World" }}                        {{# Hello World #}}
{{ "World" | string.prepend "Hello " }}                       {{# Hello World #}}
{{ "Hello, world." | string.replace "world" "Retype" }}       {{# Hello, Retype. #}}
{{ "Hello, world." | string.replace_first "l" "L" }}          {{# HeLlo, world. #}}
{{ "Hello, world." | string.remove "world" }}                 {{# Hello, . #}}
```

### Truncation

The `string.truncate` character count includes the ellipsis characters:

```md
{{ "The quick brown fox" | string.truncate 13 }}
{{# The quick b... #}}

{{ "The quick brown fox" | string.truncatewords 3 }}
{{# The quick brown... #}}

{{ "The quick brown fox" | string.truncate 13 "…" }}
{{# The quick brow… #}}
```

### Testing strings

```md
{{ if "hello world" | string.contains "world" }}
  Contains "world"
{{ end }}

{{ if page.path | string.ends_with ".md" }}
  This is a Markdown file.
{{ end }}

{{ if page.url | string.starts_with "https" }}
  Secure URL
{{ end }}
```

### Split and join

Split a string into an array, then loop or join the result:

```md
{{ for word in "one,two,three" | string.split "," ~}}
- {{ word }}
{{ end }}
```

### Pluralize

```md
{{ page.tags | array.size }} {{ page.tags | array.size | string.pluralize "tag" "tags" }}
{{# 3 tags #}}
```

### Handleize

```md
{{ "Hello World! 100%" | string.handleize }}
{{# hello-world-100 #}}
```

---

## Array functions

Function | Description
--- | ---
`array.first` | Returns the first element
`array.last` | Returns the last element
`array.size` | Returns the number of elements
`array.limit` | Returns up to `n` elements from the start
`array.offset` | Returns elements starting after index `n`
`array.reverse` | Reverses the array
`array.sort` | Sorts elements by value, or by a named member
`array.map` | Extracts a named property from each object element
`array.join` | Joins elements into a string with a delimiter
`array.compact` | Removes `null` values
`array.uniq` | Removes duplicate values
`array.contains` | Returns `true` if the array contains a specific item
`array.any` | Returns `true` if any element satisfies a function
`array.each` | Applies a function to each element and returns the transformed array
`array.filter` | Returns only elements that satisfy a function
`array.add` | Adds a value to the end of the array
`array.add_range` | Concatenates two arrays
`array.insert_at` | Inserts a value at a specific index
`array.remove_at` | Removes the element at a specific index

### Accessing elements

```md
{{ page.tags | array.first }}             {{# first tag #}}
{{ page.tags | array.last }}              {{# last tag #}}
{{ page.tags | array.size }}              {{# number of tags #}}
{{ page.tags[0] }}                        {{# first tag by index #}}
```

### Limit and offset

`array.limit` and `array.offset` are commonly used together to paginate or select a window of items:

```md
{{ for post in content.blog.posts | array.limit 3 ~}}
- [{{ post.title }}]({{ post.path }})
{{ end }}
```

```md
{{# Skip first 3, show next 3 #}}
{{ for post in content.blog.posts | array.offset 3 | array.limit 3 ~}}
- [{{ post.title }}]({{ post.path }})
{{ end }}
```

### Sort and transform

`array.sort` sorts by element value. Pass a member name to sort objects by a property:

```md
{{# Sort primitive values #}}
{{ ["banana", "apple", "cherry"] | array.sort | array.join ", " }}
{{# apple, banana, cherry #}}

{{# Sort objects by a member #}}
{{ content.blog.posts | array.sort "title" | array.map "title" | array.join ", " }}
```

### Map, join, and uniq

```md
{{# Extract a single property from each object #}}
{{ page.authors | array.map "name" | array.join ", " }}

{{# Remove duplicates and join #}}
{{ page.tags | array.uniq | array.sort | array.join " · " }}
```

### Compact

```md
{{# Remove null values from an array #}}
{{ [1, null, 2, null, 3] | array.compact }}
{{# [1, 2, 3] #}}
```

### Filter with a function reference

Use `array.filter` with a function reference (prefixed with `@`) to keep only matching elements:

```md
{{# Keep only empty strings #}}
{{ ["", "hello", "", "world"] | array.filter @string.empty }}
{{# ["", ""] #}}
```

---

## Date functions

A date object returned by `date.now` or `date.parse` exposes the following properties:

Property | Description
--- | ---
`.year` | The year
`.month` | The month (1–12)
`.day` | The day of the month (1–31)
`.day_of_year` | The day within the year (1–366)
`.hour` | The hour (0–23)
`.minute` | The minute (0–59)
`.second` | The second (0–59)
`.millisecond` | The millisecond

### Current date and time

Date properties are accessed with dot notation directly on `date.now`:

```md
{{ date.now }}                      {{# e.g. 02 Mar 2026 #}}
{{ date.now.year }}                 {{# 2026 #}}
{{ date.now.month }}                {{# 3 #}}
{{ date.now.day }}                  {{# 2 #}}
```

### Formatting

Use `date.to_string` with a format pattern. The default format is `%d %b %Y`:

```md
{{ date.now | date.to_string "%Y-%m-%d" }}            {{# 2026-03-02 #}}
{{ date.now | date.to_string "%B %d, %Y" }}           {{# March 02, 2026 #}}
{{ date.now | date.to_string "%A, %B %d, %Y" }}       {{# Monday, March 02, 2026 #}}
{{ date.now | date.to_string "%I:%M %p" }}            {{# 09:30 AM #}}
```

Common format tokens:

Token | Output | Description
--- | --- | ---
`%Y` | `2026` | Four-digit year
`%m` | `03` | Two-digit month
`%d` | `02` | Two-digit day
`%B` | `March` | Full month name
`%b` | `Mar` | Abbreviated month name
`%A` | `Monday` | Full weekday name
`%H` | `09` | Hour (24-hour clock)
`%I` | `09` | Hour (12-hour clock)
`%M` | `30` | Minutes
`%S` | `00` | Seconds
`%p` | `AM` | AM/PM
`%F` | `2026-03-02` | ISO 8601 date (`%Y-%m-%d`)
`%T` | `09:30:00` | Time (`%H:%M:%S`)

### Parsing a date string

```md
{{ date.parse "2026-03-02" | date.to_string "%B %d, %Y" }}
{{# March 02, 2026 #}}
```

### Date arithmetic

Pass a negative number to subtract from a date:

```md
{{ date.now | date.add_days 7 }}              {{# 7 days from now #}}
{{ date.now | date.add_days (-7) }}           {{# 7 days ago #}}
{{ date.now | date.add_months 1 }}            {{# 1 month from now #}}
{{ date.now | date.add_years 1 }}             {{# 1 year from now #}}
```

### Date comparison

Standard comparison operators (`==`, `!=`, `<`, `>`, `<=`, `>=`) work on date objects:

```md
{{ releaseDate = date.parse "2026-06-01" }}
{{ if date.now < releaseDate }}
  Coming soon.
{{ else }}
  Available now.
{{ end }}
```

### Conditional content by month

Access `.month` as a property on `date.now`, not as a piped function:

```md
{{ if date.now.month == 12 }}
Happy Holidays!
{{ else if date.now.month >= 6 && date.now.month <= 8 }}
Summer edition
{{ end }}
```

---

## Math functions

Function | Description
--- | ---
`math.abs` | Absolute value
`math.ceil` | Rounds up to nearest integer
`math.floor` | Rounds down to nearest integer
`math.round` | Rounds to nearest integer, or to specified decimal places
`math.plus` | Addition
`math.minus` | Subtraction
`math.times` | Multiplication
`math.divided_by` | Division (integer divisor truncates result to integer)
`math.modulo` | Remainder after division
`math.format` | Formats a number using .NET numeric format strings
`math.is_number` | Returns `true` if the value is a number
`math.random` | Generates a random integer in a range
`math.uuid` | Generates a new UUID

### Basic operations

```md
{{ -15.5 | math.abs }}                         {{# 15.5 #}}
{{ 4.3 | math.ceil }}                          {{# 5 #}}
{{ 4.7 | math.floor }}                         {{# 4 #}}
{{ 4.5612 | math.round 2 }}                    {{# 4.56 #}}
{{ 10 | math.plus 5 }}                         {{# 15 #}}
{{ 10 | math.minus 3 }}                        {{# 7 #}}
{{ 3 | math.times 4 }}                         {{# 12 #}}
{{ 10 | math.divided_by 3 }}                   {{# 3 (integer result when divisor is integer) #}}
{{ 10 | math.divided_by 3.0 | math.round 2 }}  {{# 3.33 #}}
{{ 11 | math.modulo 3 }}                       {{# 2 #}}
```

### Formatting numbers

`math.format` accepts [.NET standard numeric format strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings):

```md
{{ 1234.56 | math.format "N2" }}              {{# 1,234.56 #}}
{{ 0.1234 | math.format "P1" }}               {{# 12.3% #}}
{{ 1234567 | math.format "C" }}               {{# $1,234,567.00 #}}
{{ 255 | math.format "X4" }}                  {{# 00FF #}}
```

### File size example

When dividing, use a float divisor to preserve decimal precision:

```md
{{ fileSizeBytes | math.divided_by 1024 | math.divided_by 1024.0 | math.round 2 }} MB
```

---

## HTML functions

Function | Description
--- | ---
`html.strip` | Removes all HTML tags, leaving plain text
`html.escape` | Escapes `<`, `>`, `&`, and `"` as HTML entities
`html.newline_to_br` | Replaces newlines with `<br />` tags
`html.url_encode` | Percent-encodes URL-unsafe characters (e.g. `@` → `%40`)
`html.url_escape` | Escapes characters not permitted in URLs

### Examples

```md
{{ "<p>Hello <strong>world</strong></p>" | html.strip }}
{{# Hello world #}}

{{ "<script>alert('xss')</script>" | html.escape }}
{{# &lt;script&gt;alert(&#39;xss&#39;)&lt;/script&gt; #}}

{{ "Hello\nworld" | html.newline_to_br }}
{{# Hello<br />world #}}

{{ "user@example.com" | html.url_encode }}
{{# user%40example.com #}}
```

---

## Object functions

Function | Description
--- | ---
`object.default` | Returns a fallback value if the input is `null` or an empty string
`object.has_key` | Returns `true` if the object has a named member
`object.has_value` | Returns `true` if the named member exists and has a non-null value
`object.keys` | Returns an array of the object's member names
`object.values` | Returns an array of the object's member values
`object.size` | Returns the count of members (object), elements (array), or characters (string)
`object.typeof` | Returns a type string: `string`, `boolean`, `number`, `array`, or `object`
`object.kind` | Returns a detailed type: `int`, `double`, `bool`, `string`, `array`, `object`, etc.

### Default value

```md
{{ page.description | object.default "No description provided." }}
```

### Inspect an object

```md
{{ page | object.keys }}
{{# ["title", "description", "url", "path", ...] #}}

{{ page | object.has_key "description" }}
{{# true #}}
```

### Type checking

Use `object.typeof` to branch on the type of a value:

```md
{{ if page.tags | object.typeof == "array" }}
  Tags: {{ page.tags | array.join ", " }}
{{ end }}

{{ if someValue | object.typeof == "string" }}
  Length: {{ someValue | string.size }}
{{ end }}
```

---

## User-defined functions

Define reusable logic with `func` and `end`:

```md
{{ func format_author(author) }}
  {{ if author.url }}[{{ author.name }}]({{ author.url }}){{ else }}{{ author.name }}{{ end }}
{{ end }}

Written by {{ format_author page.author }}.
```

### Functions with default parameters

Parameters can have default values:

```md
{{ func excerpt(text, length = 150) }}
  {{ text | html.strip | string.truncate length }}
{{ end }}

{{ excerpt page.description }}
{{ excerpt page.description 80 }}
```

### Inline function shorthand

Short functions can be written as a single assignment expression:

```md
{{ double(x) = x | math.times 2 }}
{{ double 5 }}
{{# 10 #}}
```

---

## Practical examples

### Author byline

```md
{{ page.author.name }} · {{ page.date | date.to_string "%B %d, %Y" }}
```

### Tag list with count

```md
{{ page.tags | array.size }} {{ page.tags | array.size | string.pluralize "tag" "tags" }}:
{{ page.tags | array.sort | array.join " · " }}
```

### Latest blog posts as cards

```md
{{ for post in content.blog.posts | array.limit 3 ~}}
[!card vert]({{ post.path }})
{{ end }}
```

### Conditional description fallback

```md
{{ page.description | object.default page.title }}
```

### Copyright year

```md
© {{ date.now.year }} My Company. All rights reserved.
```


