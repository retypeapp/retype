---
tags: [component]
---
# $\KaTeX$

[$\KaTeX$](https://katex.org/) is a math typesetting library for web applications. Retype supports KaTeX syntax inside Markdown code blocks.

KaTeX resource files are only deployed to a Retype documentation website if at least one document uses diagrams

## Component syntax

With a similar syntax to code blocks, creating a KaTeX formula requires a `` ``` `` code fence with the inclusion of one of the `katex`, `latex` or `math` specifiers.

## Examples

~~~ Katex block
```katex
% \f is defined as #1f(#2) using the macro
\f\relax{x} = \int_{-\infty}^\infty
    \f\hat\xi\,e^{2 \pi i \xi x}
    \,d\xi
```
~~~

```katex
% \f is defined as #1f(#2) using the macro
\f\relax{x} = \int_{-\infty}^\infty
    \f\hat\xi\,e^{2 \pi i \xi x}
    \,d\xi
```

---

~~~ Latex block
```latex
\bigg\{ \;\mathbb{F}[x]\text{-modules } V\; \bigg\}
\longleftrightarrow
\bigg\{ \substack{\text{$\mathbb{F}$-vector spaces $V$ with a}
\\ \text{linear map $T : V \rightarrow V$}} \bigg\}
```
~~~

```latex
\bigg\{ \;\mathbb{F}[x]\text{-modules } V\; \bigg\}
\longleftrightarrow
\bigg\{ \substack{\text{$\mathbb{F}$-vector spaces $V$ with a}
\\ \text{linear map $T : V \rightarrow V$}} \bigg\}
```

---

~~~ Math block
```math
\displaystyle \frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr)
    e^{\frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}}
    {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }
```
~~~

```math
\displaystyle \frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr)
    e^{\frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}}
    {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }
```

---

~~~ Inline formula
$\displaystyle \left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$
~~~

$\displaystyle \left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$

---

~~~ The $$ multiline formula block
$$
\displaystyle {1 +  \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots }= \prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})}, \quad\quad \text{for }\lvert q\rvert<1.
$$
~~~

$$
\displaystyle {1 +  \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots }= \prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})}, \quad\quad \text{for }\lvert q\rvert<1.
$$

---


[!ref KaTeX website](https://katex.org/)

[!ref KaTeX GitHub Repository](https://github.com/KaTeX/KaTeX)