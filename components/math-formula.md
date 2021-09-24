---
tags: [component]
---

# Math formula

Retype supports rendering of math formulas built according to the [LaTeX](https://en.wikipedia.org/wiki/LaTeX) grammar. Internally Retype is powered by [$\KaTeX$](https://katex.org/) library, and supports any function the library supports.

Math equations can be inlined or rendered as separate blocks.

## Inline syntax

An inline math equation should be wrapped in `$` characters.

```latex Inline formula
$\displaystyle \left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$
```

This formula $\displaystyle \left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$ is inlined with text.

---

## Block syntax

A block math equation should be wrapped in `$$` tokens placed on separate lines. Block equatations are center aligned.

```latex The $$ multiline formula block
$$
\displaystyle {1 +  \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots }= \prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})}, \quad\quad \text{for }\lvert q\rvert<1.
$$
```

$$
\displaystyle {1 +  \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots }= \prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})}, \quad\quad \text{for }\lvert q\rvert<1.
$$

---

## LaTeX code highlighting

LaTeX syntax can be highlighted by adding `latex` language specifier to code blocks.

||| Demo

```latex
\bigg\{ \;\mathbb{F}[x]\text{-modules } V\; \bigg\}
\longleftrightarrow
\bigg\{ \substack{\text{$\mathbb{F}$-vector spaces $V$ with a}
\\ \text{linear map $T : V \rightarrow V$}} \bigg\}
```

||| Source

````
```latex
\bigg\{ \;\mathbb{F}[x]\text{-modules } V\; \bigg\}
\longleftrightarrow
\bigg\{ \substack{\text{$\mathbb{F}$-vector spaces $V$ with a}
\\ \text{linear map $T : V \rightarrow V$}} \bigg\}
```
````

|||
