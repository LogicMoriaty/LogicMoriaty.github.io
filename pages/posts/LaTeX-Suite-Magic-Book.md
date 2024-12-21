---
share: "true"
title: Obsidian LaTeX Suite 魔法手册
cover: https://cdn.jsdelivr.net/gh/LogicMoriaty/source/card1/img(26).webp
date: 2024-12-21
updated: 2024-12-21
categories: Latex
tags:
  - Latex
  - Snippet
  - Obsidian
top: 1
excerpt: Obsidian LaTeX Suite插件的Snippets整理
---
## Math Mode

| **Trigger** | **Replacement**            | **Options** | **Examples** |
| ----------- | -------------------------- | ----------- | ------------ |
| lm          | `$$0$`                     | tA          |              |
| Lm          | `$$0$`                     | tA          |              |
| dm          | `$$\n$0\n$$`               | tAw         |              |
| Dm          | `$$\n$0\n$$`               | tAw         |              |
| beg         | `\begin{$0}\n$1\n\end{$0}` | mA          |              |
| quad        | `\quad`                    | mA          |              |

## Greek Letters

| **Trigger**                        | **Replacement** | **Options** | **Description**                                               | **Examples**  |
| ---------------------------------- | --------------- | ----------- | ------------------------------------------------------------- | ------------- |
| alpha                              | `\alpha`        | mA          | Greek letter alpha                                            | $\alpha$      |
| @A                                 | `\alpha`        | mA          | Greek letter alpha (alternative trigger)                      |               |
| beta                               | `\beta`         | mA          | Greek letter beta                                             | $\beta$       |
| @B                                 | `\beta`         | mA          | Greek letter beta (alternative trigger)                       |               |
| chi                                | `\chi`          | mA          | Greek letter chi                                              | $\chi$        |
| @C                                 | `\chi`          | mA          | Greek letter chi (alternative trigger)                        |               |
| gamma                              | `\gamma`        | mA          | Greek letter gamma                                            | $\gamma$      |
| Gamma                              | `\Gamma`        | mA          | Greek letter Gamma (uppercase)                                | $\Gamma$      |
| delta                              | `\delta`        | mA          | Greek letter delta                                            | $\delta$      |
| de\lta                             | `\delta`        | mA          | Greek letter delta (alternative trigger with typo)            |               |
| Delta                              | `\Delta`        | mA          | Greek letter Delta (uppercase)                                | $\Delta$      |
| De\lta                             | `\Delta`        | mA          | Greek letter Delta (uppercase, alternative trigger with typo) |               |
| eps                                | `\epsilon`      | mA          | Greek letter epsilon                                          | $\epsilon$    |
| @E                                 | `\epsilon`      | mA          | Greek letter epsilon (alternative trigger)                    |               |
| vareps                             | `\varepsilon`   | mA          | Greek letter varepsilon                                       | $\varepsilon$ |
| : e                                | `\varepsilon`   | mA          | Greek letter varepsilon (alternative trigger)                 |               |
| zeta                               | `\zeta`         | mA          | Greek letter zeta                                             | $\zeta$       |
| @Z                                 | `\zeta`         | mA          | Greek letter zeta (alternative trigger)                       |               |
| theta                              | `\theta`        | mA          | Greek letter theta                                            | $\theta$      |
| Theta                              | `\Theta`        | mA          | Greek letter Theta (uppercase)                                | $\Theta$      |
| kappa                              | `\kappa`        | mA          | Greek letter kappa                                            | $\kappa$      |
| @k                                 | `\kappa`        | mA          | Greek letter kappa (alternative trigger)                      |               |
| lambda                             | `\lambda`       | mA          | Greek letter lambda                                           | $\lambda$     |
| Lambda                             | `\Lambda`       | mA          | Greek letter Lambda (uppercase)                               | $\Lambda$     |
| mu                                 | `\mu`           | mA          | Greek letter mu                                               | $\mu$         |
| @m                                 | `\mu`           | mA          | Greek letter mu (alternative trigger)                         |               |
| rho                                | `\rho`          | mA          | Greek letter rho                                              | $\rho$        |
| varrh                              | `\varrho`       | mA          | Greek letter varrho                                           | $\varrho$     |
| @r                                 | `\rho`          | mA          | Greek letter rho (alternative trigger)                        |               |
| sigma                              | `\sigma`        | mA          | Greek letter sigma                                            | $\sigma$      |
| Sigma                              | `\Sigma`        | mA          | Greek letter Sigma (uppercase)                                | $\Sigma$      |
| omega                              | `\omega`        | mA          | Greek letter omega                                            | $\omega$      |
| @o                                 | `\omega`        | mA          | Greek letter omega (alternative trigger)                      |               |
| Omega                              | `\Omega`        | mA          | Greek letter Omega (uppercase)                                | $\Omega$      |
| xi                                 | `\xi`           | mA          | Greek letter xi                                               | $\xi$         |
| Xi                                 | `\Xi`           | mA          | Greek letter Xi (uppercase)                                   | $\Xi$         |
| pi                                 | `\pi`           | mA          | Greek letter pi                                               | $\pi$         |
| Pi                                 | `\Pi`           | mA          | Greek letter Pi (uppercase)                                   | $\Pi$         |
| tau                                | `\tau`          | mA          | Greek letter tau                                              | $\tau$        |
| upsl                               | `\upsilon`      | mA          | Greek letter upsilon (alternative trigger)                    | $\upsilon$    |
| Upsl                               | `\Upsilon`      | mA          | Greek letter Upsilon (uppercase, alternative trigger)         | $\Upsilon$    |
| phi                                | `\phi`          | mA          | Greek letter phi                                              | $\phi$        |
| Phi                                | `\Phi`          | mA          | Greek letter Phi (uppercase)                                  | $\Phi$        |
| varphi                             | `\varphi`       | mA          | Greek letter varphi                                           | $\varphi$     |
| psi                                | `\psi`          | mA          | Greek letter psi                                              | $\psi$        |
| Psi                                | `\Psi`          | mA          | Greek letter Psi (uppercase)                                  | $\Psi$        |
| eta                                | `\eta`          | mA          | Greek letter eta                                              | $\eta$        |
| iota                               | `\iota`         | mA          | Greek letter iota                                             | $\iota$       |
| `([^\\\\])(${GREEK}\| ${SYMBOL}) ` | `[[0|0]]\[[1|1]]`   | rmA         | Add a backslash before Greek letters and symbols              |               |

Insert space after greek letters and symbols, etc

| **Trigger**                                                                 | **Replacement**       | **Options** | **Description**                                                                                      | **Examples**           |
| --------------------------------------------------------------------------- | --------------------- | ----------- | ---------------------------------------------------------------------------------------------------- | ---------------------- |
| `\\(${GREEK}       \| ${SYMBOL}             \| ${SHORT_SYMBOL})([A-Za-z]) ` | `\[[0|0]] [[1|1]]`        | rmA         | Matches Greek symbols or short symbols followed by a letter, adds brackets and separates them.       |                        |
| `\\(${GREEK}       \| ${SYMBOL}) sr `                                       | `\[[0|0]]^{2}`          | rmA         | Matches Greek or symbol followed by "sr", replaces with superscript 2.                               | $\lambda^{2}$          |
| `\\(${GREEK}       \| ${SYMBOL}) cb `                                       | `\[[0|0]]^{3}`          | rmA         | Matches Greek or symbol followed by "cb", replaces with superscript 3.                               | $\lambda^{3}$          |
| `\\(${GREEK}       \| ${SYMBOL}) rd `                                       | `\[[0|0]]^{\$0}$1`      | rmA         | Matches Greek or symbol followed by "rd", replaces with a dynamic superscript of the first argument. | $\lambda^{rd}$         |
| `\\(${GREEK}       \| ${SYMBOL}) hat `                                      | `\hat{\[[0|0]]}`        | rmA         | Matches Greek or symbol followed by "hat", applies the `\hat{}` formatting.                          | $\hat{\lambda}$        |
| `\\(${GREEK}       \| ${SYMBOL}) dot `                                      | `\dot{\[[0|0]]}`        | rmA         | Matches Greek or symbol followed by "dot", applies the `\dot{}` formatting.                          | $\dot{\lambda}$        |
| `\\(${GREEK}       \| ${SYMBOL}) bar `                                      | `\bar{\[[0|0]]}`        | rmA         | Matches Greek or symbol followed by "bar", applies the `\bar{}` formatting.                          | $\bar{\lambda}$        |
| `\\(${GREEK}       \| ${SYMBOL}) vec `                                      | `\vec{\[[0|0]]}`        | rmA         | Matches Greek or symbol followed by "vec", applies the `\vec{}` formatting.                          | $\vec{\lambda}$        |
| `\\(${GREEK}       \| ${SYMBOL}) tilde `                                    | `\tilde{\[[0|0]]}`      | rmA         | Matches Greek or symbol followed by "tilde", applies the `\tilde{}` formatting.                      | $\tilde{\lambda}$      |
| `\\(${GREEK}       \| ${SYMBOL}) und `                                      | `\underline{\[[0|0]]}`  | rmA         | Matches Greek or symbol followed by "und", applies the `\underline{}` formatting.                    | $\underline{\lambda}$  |
| `\\(${GREEK}),\\.`                                                          | `\boldsymbol{\[[0|0]]}` | rmA         | Matches Greek followed by a comma and period, applies the `\boldsymbol{}` formatting.                | $\boldsymbol{\lambda}$ |
| `\\(${GREEK})\\.,`                                                          | `\boldsymbol{\[[0|0]]}` | rmA         | Matches Greek followed by a period and comma, applies the `\boldsymbol{}` formatting.                | $\boldsymbol{\lambda}$ |


## Operations

| **Trigger** | **Replacement**     | **Options** | **Description**                                                                                                                  | **Examples**        |
| ----------- | ------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `te`        | `\text{$0}`         | m           | Matches "te" and wraps the matched text with `\text{}` formatting.                                                               | $\text{te tab}$     |
| `text`      | `\text{$0}`         | mA          | Matches "text" and wraps the matched text with `\text{}` formatting.                                                             | $\text{text}$       |
| `bf`        | `\mathbf{$0}`       | mA          | Matches "bf" and wraps the matched text with `\mathbf{}` for bold math font.                                                     | $\mathbf{b}$        |
| `sr`        | `^{2}`              | mA          | Matches "sr" and replaces with superscript 2 (`^{2}`).                                                                           | $^{2}$              |
| `cb`        | `^{3}`              | mA          | Matches "cb" and replaces with superscript 3 (`^{3}`).                                                                           | $^{3}$              |
| `tp`        | `^{$0}$1`           | mA          | Matches "tp" and applies a dynamic superscript (`^{}`), followed by the first captured group.                                    | $^{n}$              |
| `sb`        | `_{$0}$1`           | mA          | Matches "sb" and applies a subscript (`_{}`), followed by the first captured group.                                              | $_{n}$              |
| `sts`       | `_\text{$0}`        | rmA         | Matches "sts" and wraps the text with a subscript and `\text{}` formatting.                                                      | $_\text{text}$      |
| `sqrt`      | `\sqrt{ $0 }$1`     | mA          | Matches "sqrt" and wraps the matched text inside `\sqrt{}` for square root notation.                                             | $\sqrt{ 2 }$        |
| `//`        | `\frac{$0}{$1}$2`   | mA          | Matches "//" and replaces with a fraction using `\frac{numerator}{denominator}`.                                                 | $\frac{n}{d}$       |
| `rm`        | `\mathrm{$0}$1`     | mA          | Matches "rm" and wraps the matched text with `\mathrm{}` for Roman (upright) font.                                               | $\mathrm{r}$        |
| `star`      | `^{*}`              | mA          | Matches "star" and replaces with superscript asterisk (`^{*}`).                                                                  | $^{*}$              |
| `trace`     | `\mathrm{Tr}`       | mA          | Matches "trace" and replaces with `\mathrm{Tr}` (trace operator).                                                                | $\mathrm{Tr}$       |
| `det`       | `\det`              | mA          | Matches "det" and replaces with `\det` (determinant operator).                                                                   | $\det$              |
| `Re`        | `\mathrm{Re}`       | mA          | Matches "Re" and replaces with `\mathrm{Re}` (Real part operator).                                                               | $\mathrm{Re}$       |
| `Im`        | `\mathrm{Im}`       | mA          | Matches "Im" and replaces with `\mathrm{Im}` (Imaginary part operator).                                                          | $\mathrm{Im}$       |
| `Tr`        | `\operatorname{Tr}` | mA          | Matches "Tr" and replaces with `\operatorname{Tr}` (trace operator in an operator font).                                         | $\operatorname{Tr}$ |
| `bar`       | `\bar{$0}$1`        | mA          | Matches "bar" and wraps the matched text with `\bar{}` for overline formatting.                                                  | $\bar{e}$           |
| `hat`       | `\hat{$0}$1`        | mA          | Matches "hat" and wraps the matched text with `\hat{}` for hat (caret) symbol formatting.                                        | $\hat{e}$           |
| `dot`       | `\dot{$0}$1`        | mA          | Matches "dot" and wraps the matched text with `\dot{}` for dot notation (used in derivatives).                                   | $\dot{e}$           |
| `ddot`      | `\ddot{$0}$1`       | mA          | Matches "ddot" and wraps the matched text with `\ddot{}` for double dot notation (used for second derivatives).                  | $\ddot{e}$          |
| `vec`       | `\vec{$0}$1`        | mA          | Matches "vec" and wraps the matched text with `\vec{}` for vector notation.                                                      | $\vec{e}$           |
| `tilde`     | `\tilde{$0}$1`      | mA          | Matches "tilde" and wraps the matched text with `\tilde{}` for tilde formatting (used for various purposes like approximations). | $\tilde{e}$         |
| `und`       | `\underline{$0}$1`  | mA          | Matches "und" and wraps the matched text with `\underline{}` for underlining.                                                    | $\underline{e}$     |

| **Trigger**                   | **Replacement**          | **Options** | **Description**                                                                                     | **Priority** |
| ----------------------------- | ------------------------ | ----------- | --------------------------------------------------------------------------------------------------- | ------------ |
| `([a-zA-Z]),\\.` | `\mathbf{[[0]]}` | rmA | Matches a letter followed by a comma 和 period, applies bold formatting. | |
| `([a-zA-Z])\\.,`              | `\mathbf{[[0]]}`         | rmA         | Matches a letter followed by a period and comma, applies bold formatting.                           |              |
| `([A-Za-z])(\\d)`             | `[[0]]_{[[1]]}` | rmA | Auto letter subscript: Matches a letter followed by a digit 和 applies subscript notation. | -1 |
| `([A-Za-z])_(\\d\\d)`         | `[[0]]_{[[1]]}`          | rmA         | Matches a letter followed by a two-digit subscript and applies subscript notation.                  |              |
| `\\hat{([A-Za-z])}(\\d)`      | `\hat{[[0]]}_{[[1]]}`    | rmA         | Matches a letter with a hat and a digit, applies hat and subscript formatting.                      |              |
| `\\\\mathbf{([A-Za-z])}(\\d)` | `\mathbf{[[0]]}_{[[1]]}` | rmA         | Matches a letter in boldface followed by a digit, applies boldface and subscript formatting.        |              |
| `\\\\vec{([A-Za-z])}(\\d)`    | `\vec{[[0]]}_{[[1]]}`    | rmA         | Matches a letter with vector notation followed by a digit, applies vector and subscript formatting. |              |
| `([a-zA-Z])bar`               | `\bar{[[0]]}`            | rmA         | Matches a letter followed by "bar", applies overline formatting.                                    |              |
| `([a-zA-Z])hat`               | `\hat{[[0]]}`            | rmA         | Matches a letter followed by "hat", applies hat formatting.                                         |              |
| `([a-zA-Z])ddot`              | `\ddot{[[0]]}`           | rmA         | Matches a letter followed by "ddot", applies double dot formatting (second derivative).             | 3            |
| `([a-zA-Z])dot`               | `\dot{[[0]]}`            | rmA         | Matches a letter followed by "dot", applies dot formatting (used in derivatives).                   | 1            |
| `([a-zA-Z])vec`               | `\vec{[[0]]}`            | rmA         | Matches a letter followed by "vec", applies vector formatting.                                      |              |
| `([a-zA-Z])tilde`             | `\tilde{[[0]]}`          | rmA         | Matches a letter followed by "tilde", applies tilde formatting.                                     |              |
| `([a-zA-Z])und`               | `\underline{[[0]]}`      | rmA         | Matches a letter followed by "und", applies underline formatting.                                   |              |

## Trigonometric function

```
{trigger: "([^\\\\])(arcsin|arccos|arctan|arccot|arccsc|arcsec|sin|cos|tan|cot|csc)", replacement: "[[0|0]]\\[[1|1]]", options: "rmA"},

{trigger: "\\\\(arcsin|arccos|arctan|arccot|arccsc|arcsec|sin|cos|tan|cot|csc)([A-Za-gi-z])", replacement: "\\[[0|0]] [[1|1]]", options: "rmA"}, // Insert space after trig funcs. Skips letter "h" to allow sinh, cosh, etc.    

{trigger: "\\\\(arcsinh|arccosh|arctanh|arccoth|arcsch|arcsech|sinh|cosh|tanh|coth|csch)([A-Za-z])", replacement: "\\[[0|0]] [[1|1]]", options: "rmA"}, // Insert space after trig funcs
```

| **Trigger** | **Description**                       | **Examples** |
| ----------- | ------------------------------------- | ------------ |
| `arcsin`    | Inverse sine function                 | $\arcsin$    |
| `arccos`    | Inverse cosine function               | $\arccos$    |
| `arctan`    | Inverse tangent function              | $\arctan$    |
| `arccot`    | Inverse cotangent function            | $\arccot$    |
| `arccsc`    | Inverse cosecant function             | $\arccsc$    |
| `arcsec`    | Inverse secant function               | $\arcsec$    |
| `sin`       | Sine function                         | $\sin$       |
| `cos`       | Cosine function                       | $\cos$       |
| `tan`       | Tangent function                      | $\tan$       |
| `cot`       | Cotangent function                    | $\cot$       |
| `csc`       | Cosecant function                     | $\csc$       |
| `sec`       | Secant function                       | $\sec$       |
| `arcsinh`   | Inverse hyperbolic sine function      | $\arcsinh$   |
| `arccosh`   | Inverse hyperbolic cosine function    | $\arccosh$   |
| `arctanh`   | Inverse hyperbolic tangent function   | $\arctanh$   |
| `arccoth`   | Inverse hyperbolic cotangent function | $\arccoth$   |
| `arcsch`    | Inverse hyperbolic cosecant function  | $\arcsch$    |
| `arcsech`   | Inverse hyperbolic secant function    | $\arcsech$   |
| `sinh`      | Hyperbolic sine function              | $\sinh$      |
| `cosh`      | Hyperbolic cosine function            | $\cosh$      |
| `tanh`      | Hyperbolic tangent function           | $\tanh$      |
| `coth`      | Hyperbolic cotangent function         | $\coth$      |
| `csch`      | Hyperbolic cosecant function          | $\csch$      |
| `sech`      | Hyperbolic secant function            | $\sech$      |


## Visual Operations

| **Trigger** | **Replacement**                   | **Options** | **Description**                                                                                      | **Examples**                  |
| ----------- | --------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------- | ----------------------------- |
| `U`         | `\underbrace{ ${VISUAL} }_{ $0 }` | mA          | Applies an underbrace to the matched content, with an optional label (subscript).                    | $\underbrace{ Visual }_{ U }$ |
| `B`         | `\underset{ $0 }{ ${VISUAL} }`    | mA          | Applies an underset to the matched content, with an optional label (subscript).                      | $\underset{ B }{ Visual }$    |
| `C`         | `\cancel{ ${VISUAL} }`            | mA          | Applies a cancellation mark (strike-through) to the matched content.                                 | $\cancel{ Visual }$           |
| `K`         | `\cancelto{ $0 }{ ${VISUAL} }`    | mA          | Applies a cancellation mark (strike-through) and points to a target, where `$0` is the target value. | $\cancelto{ K }{ Visual }$    |
| `S`         | `\sqrt{ ${VISUAL} }`              | mA          | Applies a square root to the matched content.                                                        | $\sqrt{ Visual }$             |

## Symbols

| **Trigger**   | **Replacement**                        | **Options** | **Description**                                                                | **Examples**            |
| ------------- | -------------------------------------- | ----------- | ------------------------------------------------------------------------------ | ----------------------- |
| `ooo`         | `\infty`                               | mA          | Represents infinity symbol (`∞`).                                              | $\infty$                |
| `sum`         | `\sum`                                 | mA          | Represents summation symbol (Σ).                                               | $\sum$                  |
| `prod`        | `\prod`                                | mA          | Represents product symbol (Π).                                                 | $\prod$                 |
| `lim`         | `\lim_{ ${0:n} \\to ${1:\\infty} } $2` | mA          | Represents limit notation with customizable bounds and expression.             | $\lim_{ n \to \infty }$ |
| `([^\\\\])pm` | `[[0]]\pm`                             | rm          | Represents ± symbol, avoiding accidental escapes (like \pm).                   | $\pm$                   |
| `([^\\\\])mp` | `[[0]]\mp`                             | rm          | Represents ∓ symbol, avoiding accidental escapes.                              | $\mp$                   |
| `+-`          | `\pm`                                  | mA          | Represents ± symbol.                                                           | $\pm$                   |
| `-+`          | `\mp`                                  | mA          | Represents ∓ symbol.                                                           | $\mp$                   |
| `...`         | `\dots`                                | mA          | Represents ellipsis (three dots).                                              | $\dots$                 |
| `v...`        | `\vdots`                               | mA          | Represents vertical ellipsis (dots in a vertical line).                        | $\vdots$                |
| `d...`        | `\ddots`                               | mA          | Represents diagonal ellipsis (dots in a diagonal line).                        | $\ddots$                |
| `c...`        | `\cdots`                               | mA          | Represents centered ellipsis (dots in a horizontal line).                      | $\cdots$                |
| `<->`         | `\leftrightarrow`                      | mA          | Represents a bi-directional arrow (↔).                                         | $\leftrightarrow$       |
| `->`          | `\to`                                  | mA          | Represents a right arrow (→).                                                  | $\to$                   |
| `-->`         | `\Rightarrow`                          | mA          | Represents implies symbol (⇒).                                                 | $\Rightarrow$           |
| `<--`         | `\Leftarrow`                           | mA          | Represents reverse implies symbol (⇐).                                         | $\Leftarrow$            |
| `!>`          | `\mapsto`                              | mA          | Represents a mapsto symbol (↦), typically used in functions.                   | $\mapsto$               |
| `invs`        | `^{-1}`                                | mA          | Represents the inverse symbol (−1).                                            | $^{-1}$                 |
| `\\\\`        | `\setminus`                            | mA          | Represents the set difference symbol (\\).                                     | $f\setminus f$          |
| $\mid \mid$   | `\mid`                                 | mA          | Represents "mid" symbol (vertical bar) used in set notation.                   | $\mid$                  |
| `and`         | `\cap`                                 | mA          | Represents intersection symbol (∩).                                            | $\cap$                  |
| `orr`         | `\cup`                                 | mA          | Represents union symbol (∪).                                                   | $\cup$                  |
| `inn`         | `\in`                                  | mA          | Represents "element of" symbol (∈).                                            | $\in$                   |
| `notinn`      | `\notin`                               | mA          | Represents "not element of" symbol (∉).                                        | $\notin$                |
| `\subset eq`  | `\subseteq`                            | mA          | Represents "subset equal to" symbol (⊆).                                       | $\subseteq$             |
| `set`         | `\{ $0 \}$1`                           | mA          | Represents a set with elements enclosed in curly braces.                       | $\{  \}$                |
| `=>`          | `\implies`                             | mA          | Represents implies symbol (⇒).                                                 | $\implies$              |
| `=<`          | `\impliedby`                           | mA          | Represents reverse implies symbol (⇐).                                         | $\impliedby$            |
| `iff`         | `\iff`                                 | mA          | Represents "if and only if" symbol (⇔).                                        | $\iff$                  |
| `e\xi sts`    | `\exists`                              | mA          | Represents "there exists" symbol (∃).                                          | $\exists$               |
| `forall`      | `\forall`                              | mA          | Represents "for all" symbol (∀).                                               | $\forall$               |
| `===`         | `\equiv`                               | mA          | Represents equivalence symbol (≡).                                             | $\equiv$                |
| `Sq`          | `\square`                              | mA          | Represents square symbol (□), used in logic or proofs.                         | $\square$               |
| `!=`          | `\neq`                                 | mA          | Represents "not equal to" symbol (≠).                                          | $\neq$                  |
| `.=`          | `\doteq`                               | mA          | Represents "approximately equal" symbol (≐).                                   | $\doteq$                |
| `doteq`       | `\doteq`                               | mA          | Represents "approximately equal" symbol (≐).                                   | $\doteq$                |
| `>=`          | `\geq`                                 | mA          | Represents "greater than or equal to" symbol (≥).                              | $\geq$                  |
| `<=`          | `\leq`                                 | mA          | Represents "less than or equal to" symbol (≤).                                 | $\leq$                  |
| `>>`          | `\gg`                                  | mA          | Represents "much greater than" symbol (≫).                                     | $\gg$                   |
| `<<`          | `\ll`                                  | mA          | Represents "much less than" symbol (≪).                                        | $\ll$                   |
| `lt`          | `\lt`                                  | mA          | Represents "less than" symbol (<).                                             | $\lt$                   |
| `gt`          | `\gt`                                  | mA          | Represents "greater than" symbol (>).                                          | $\gt$                   |
| `~~`          | `\sim`                                 | mA          | Represents "similar to" symbol (∼).                                            | $\sim$                  |
| `~=`          | `\cong`                                | mA          | Represents "congruent to" symbol (≅).                                          | $\cong$                 |
| `cong`        | `\cong`                                | mA          | Represents "congruent to" symbol (≅).                                          | $\cong$                 |
| `~-`          | `\simeq`                               | mA          | Represents "almost equal to" symbol (≃).                                       | $\simeq$                |
| `\sim ~`      | `\approx`                              | mA          | Represents "approximately equal to" symbol (≈).                                | $\approx$               |
| `prop`        | `\propto`                              | mA          | Represents "proportional to" symbol (∝).                                       | $\propto$               |
| `sse`         | `\subseteq`                            | mA          | Represents "subset equal to" symbol (⊆).                                       | $\subseteq$             |
| `sqs`         | `\sqsubseteq`                          | mA          | Represents "square subset equal to" symbol (⊑).                                | $\sqsubseteq$           |
| `nabl`        | `\nabla`                               | mA          | Represents the nabla symbol (∇), often used for gradients and vector calculus. | $\nabla$                |
| `nabla`       | `\nabla`                               | mA          | Represents the nabla symbol (∇), often used for gradients and vector calculus. |                         |
| `xx`          | `\times`                               | mA          | Represents multiplication symbol (×).                                          | $\times$                |
| `**`          | `\cdot`                                | mA          | Represents dot product symbol (⋅), often used for scalar multiplication.       | $\cdot$                 |
| `para`        | `\parallel`                            | mA          | Represents parallel symbol (∥).                                                | $\parallel$             |
| `wedge`       | `\wedge`                               | mA          | Represents wedge symbol (∧), often used for logical "and".                     | $\wedge$                |


| **Trigger** | **Replacement** | **Options** | **Description**                      | **Examples** |
| ----------- | --------------- | ----------- | ------------------------------------ | ------------ |
| `xnn`       | `x_{n}`         | mA          | Represents `x` with subscript `n`.   | $x_{n}$      |
| `xii`       | `x_{i}`         | mA          | Represents `x` with subscript `i`.   | $x_{i}$      |
| `xjj`       | `x_{j}`         | mA          | Represents `x` with subscript `j`.   | $x_{j}$      |
| `xp1`       | `x_{n+1}`       | mA          | Represents `x` with subscript `n+1`. | $x_{n+1}$    |
| `ynn`       | `y_{n}`         | mA          | Represents `y` with subscript `n`.   | $y_{n}$      |
| `yii`       | `y_{i}`         | mA          | Represents `y` with subscript `i`.   | $y_{i}$      |
| `yjj`       | `y_{j}`         | mA          | Represents `y` with subscript `j`.   | $y_{j}$      |

| **Trigger**   | **Replacement**    | **Options** | **Description**                                                                    | **Examples**       |
| ------------- | ------------------ | ----------- | ---------------------------------------------------------------------------------- | ------------------ |
| `mcal`        | `\mathcal{$0}$1`   | mA          | Applies `\mathcal{}` to the input, typically for calligraphic letters.             | $\mathcal{M}$      |
| `mbb`         | `\mathbb{$0}$1`    | mA          | Applies `\mathbb{}` to the input, typically for blackboard bold letters.           | $\mathbb{M}$       |
| `ell`         | `\ell`             | mA          | Represents the lowercase script letter `ℓ`.                                        | $\ell$             |
| `lll`         | `\ell`             | mA          | Represents the lowercase script letter `ℓ`, same as `ell`.                         | $\ell$             |
| `LL`          | `\mathcal{L}`      | mA          | Applies `\mathcal{}` to `L` for a calligraphic L.                                  | $\mathcal{L}$      |
| `HH`          | `\mathcal{H}`      | mA          | Applies `\mathcal{}` to `H` for a calligraphic H.                                  | $\mathcal{H}$      |
| `CC`          | `\mathbb{C}`       | mA          | Represents the blackboard bold C (`ℂ`), typically used for complex numbers.        | $\mathbb{C}$       |
| `RR`          | `\mathbb{R}`       | mA          | Represents the blackboard bold R (`ℝ`), typically used for real numbers.           | $\mathbb{R}$       |
| `ZZ`          | `\mathbb{Z}`       | mA          | Represents the blackboard bold Z (`ℤ`), typically used for integers.               | $\mathbb{Z}$       |
| `NN`          | `\mathbb{N}`       | mA          | Represents the blackboard bold N (`ℕ`), typically used for natural numbers.        | $\mathbb{N}$       |
| `II`          | `\mathbb{1}`       | mA          | Represents the blackboard bold 1 (`ℐ`), often used as the identity matrix.         | $\mathbb{1}$       |
| `\mathbb{1}I` | `\hat{\mathbb{1}}` | mA          | Represents the identity matrix `ℐ` with a hat (often used in functional analysis). | $\hat{\mathbb{1}}$ |
| `AA`          | `\mathcal{A}`      | mA          | Applies `\mathcal{}` to `A` for a calligraphic A.                                  | $\mathcal{A}$      |
| `BB`          | `\mathbf{B}`       | mA          | Applies `\mathbf{}` to `B` for a bold `B`.                                         | $\mathbf{B}$       |
| `EE`          | `\mathbf{E}`       | mA          | Applies `\mathbf{}` to `E` for a bold `E`.                                         | $\mathbf{E}$       |


## Unit Vectors

| **Trigger** | **Replacement**    | **Options** | **Description**                                          | **Examples**       |
| ----------- | ------------------ | ----------- | -------------------------------------------------------- | ------------------ |
| `:i`        | `\mathbf{i}`       | mA          | Represents the unit vector `i` in bold font.             | $\mathbf{i}$       |
| `:j`        | `\mathbf{j}`       | mA          | Represents the unit vector `j` in bold font.             | $\mathbf{j}$       |
| `:k`        | `\mathbf{k}`       | mA          | Represents the unit vector `k` in bold font.             | $\mathbf{k}$       |
| `:x`        | `\hat{\mathbf{x}}` | mA          | Represents the unit vector `x` with a hat, in bold font. | $\hat{\mathbf{x}}$ |
| `:y`        | `\hat{\mathbf{y}}` | mA          | Represents the unit vector `y` with a hat, in bold font. | $\hat{\mathbf{y}}$ |
| `:z`        | `\hat{\mathbf{z}}` | mA          | Represents the unit vector `z` with a hat, in bold font. | $\hat{\mathbf{z}}$ |


## Derivatives

| **Trigger**                        | **Replacement**                                                 | **Options** | **Description**                                                                | **Examples**                                       |
| ---------------------------------- | --------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------ | -------------------------------------------------- |
| `partia`                           | `\frac{ \partial ${0:y} }{ \partial ${1:x} } $2`                | m           | Represents the first partial derivative of `y` with respect to `x`.            | $\frac{ \partial y }{ \partial x }$                |
| `pa2`                              | `\frac{ \partial^{2} ${0:y} }{ \partial ${1:x}^{2} } $2`        | mA          | Represents the second partial derivative of `y` with respect to `x`.           | $\frac{ \partial^{2} y }{ \partial x^{2} }$        |
| `pa3`                              | `\frac{ \partial^{3} ${0:y} }{ \partial ${1:x}^{3} } $2`        | mA          | Represents the third partial derivative of `y` with respect to `x`.            | $\frac{ \partial^{3} y }{ \partial x^{3} }$        |
| `pa([A-Za-z])([A-Za-z])`           | `\frac{ \partial [[0]] }{ \partial [[1]] } `                    | rm          | Represents a partial derivative of a variable with respect to another.         | $\frac{ \partial y }{ \partial x }$                |
| `pa([A-Za-z])([A-Za-z])([A-Za-z])` | `\frac{ \partial^{2} [[0]] }{ \partial [[1]] \partial [[2]] } ` | rm          | Represents the second mixed partial derivative of variables.                   | $\frac{ \partial^{2} y }{ \partial y \partial x }$ |
| `pa([A-Za-z])([A-Za-z])2`          | `\frac{ \partial^{2} [[0]] }{ \partial [[1]]^{2} } `            | rmA         | Represents the second partial derivative of a variable with respect to itself. | $\frac{ \partial^{2} y }{ \partial x^{2} }$        |
| `de([A-Za-z])([A-Za-z])`           | `\frac{ d[[0]] }{ d[[1]] } `                                    | rm          | Represents the derivative of `[[0|0]]` with respect to `[[1|1]]`.                  | $\frac{ dy }{ dx }$                                |
| `de([A-Za-z])([A-Za-z])2`          | `\frac{ d^{2}[[0]] }{ d[[1]]^{2} } `                            | rmA         | Represents the second derivative of `[[0|0]]` with respect to `[[1|1]]`.           | $\frac{ d^{2}y }{ dx^{2} }$                        |
| `ddt`                              | `\frac{d}{dt} `                                                 | mA          | Represents the derivative with respect to time (`dt`).                         | $\frac{d}{dt}$                                     |
| `dd`                               | `\frac{d ${0:y}}{d${1:x}} $2`                                   | m           | Represents a derivative of `y` with respect to `x`.                            | $\frac{d y}{dx}$                                   |
| `dd_{2}`                           | `\frac{d^{2} ${0:y}}{d${1:x}^{2} $2`                            | m           | Represents the second derivative of `y` with respect to `x`.                   | $\frac{d^{2} y}{dx^{2}}$                           |
## Integrals

| **Trigger** | **Replacement**                                  | **Options** | **Description**                                                                        | **Examples**                     |
| ----------- | ------------------------------------------------ | ----------- | -------------------------------------------------------------------------------------- | -------------------------------- |
| `oinf`      | `\int_{0}^{\infty} $0 \\, d${1:x} $2`            | mA          | Represents a definite integral from 0 to infinity with respect to `x`.                 | $\int_{0}^{\infty}  \, dx$       |
| `infi`      | `\int_{-\infty}^{\infty} $0 \\, d${1:x} $2`      | mA          | Represents a definite integral from negative infinity to infinity with respect to `x`. | $\int_{-\infty}^{\infty}  \, dx$ |
| `dint`      | `\int_{${0:0}}^{${1:\\infty}} $2 \\, d${3:x} $4` | mA          | Represents a definite integral with custom limits and integrand.                       | $\int_{0}^{\infty}  \, dx$       |
| `oint`      | `\oint`                                          | mA          | Represents a contour integral (loop integral).                                         | $\oint$                          |
| `iiint`     | `\iiint`                                         | mA          | Represents a triple integral.                                                          | $\iiint$                         |
| `iint`      | `\iint`                                          | mA          | Represents a double integral.                                                          | $\iint$                          |
| `int`       | `\int $0  d${1:x} $2`                            | mA          | Represents a simple integral with respect to `x`.                                      | $\int   dx$                      |

## Quantum mechanics

| **Trigger**       | **Replacement**                        | **Options** | **Description**                                                             | **Examples**            |
| ----------------- | -------------------------------------- | ----------- | --------------------------------------------------------------------------- | ----------------------- |
| `hba`             | `\hbar`                                | mA          | Represents the reduced Planck's constant `\hbar`.                           | $\hbar$                 |
| `dag`             | `^{\dagger}`                           | mA          | Represents the Hermitian conjugate or dagger symbol (`†`).                  | $^{\dagger}$            |
| `o+`              | `\oplus `                              | mA          | Represents the direct sum operator (`⊕`).                                   | $\oplus$                |
| `bigo+`           | `\bigoplus `                           | mA          | Represents the big direct sum operator (`\bigoplus`).                       | $\bigoplus$             |
| `ox`              | `\otimes `                             | mA          | Represents the tensor product operator (`⊗`).                               | $\otimes$               |
| `ot\mathrm{Im}es` | `\otimes `                             | mA          | Handles conflict with "im" snippet, represents the tensor product operator. | $\otimes$               |
| `bra`             | `\bra{$0} $1`                          | mA          | Represents a bra vector (`\langle \psi \| `) in quantum mechanics.          | $\bra{\psi}$            |
| `ket`             | `\ket{$0} $1`                          | mA          | Represents a ket vector (`\| \psi \rangle `) in quantum mechanics.          | $\ket{\psi}$            |
| `brk`             | `\braket{ $0 \| $1 } $2 `              | mA          | Represents a braket (inner product) `<0\|1> `.                              | $\braket{ 0 \mid 1 }$   |
| `<>`              | `\braket{ $0  } $1`                    | mA          | Represents a braket with a single state `<0>`.                              | $\braket{ 0  }$         |
| `outp`            | `\ket{${0:\\psi}} \bra{${0:\\psi}} $1` | mA          | Represents a quantum state `\|ψ⟩⟨ψ\|`, a projection operator.               | $\ket{\psi} \bra{\psi}$ |

## Environments

| **Trigger** | **Replacement**                      | **Options** | **Description**                                                    | **Examples**                             |
| ----------- | ------------------------------------ | ----------- | ------------------------------------------------------------------ | ---------------------------------------- |
| `pmat`      | `\begin{pmatrix}\n$0\n\end{pmatrix}` | mA          | Creates a matrix with round brackets.                              | $\begin{pmatrix}1\\0\end{pmatrix}$       |
| `bmat`      | `\begin{bmatrix}\n$0\n\end{bmatrix}` | mA          | Creates a matrix with square brackets.                             | $\begin{bmatrix}1\\0\end{bmatrix}$       |
| `Bmat`      | `\begin{Bmatrix}\n$0\n\end{Bmatrix}` | mA          | Creates a matrix with double curly brackets.                       | $\begin{Bmatrix}1\\0\end{Bmatrix}$       |
| `vmat`      | `\begin{vmatrix}\n$0\n\end{vmatrix}` | mA          | Creates a matrix with vertical bars (determinant symbol).          | $\begin{vmatrix}1\\0\end{vmatrix}$       |
| `Vmat`      | `\begin{Vmatrix}\n$0\n\end{Vmatrix}` | mA          | Creates a matrix with double vertical bars.                        | $\begin{Vmatrix}1\\0\end{Vmatrix}$       |
| `case`      | `\begin{cases}\n$0\n\end{cases}`     | mA          | Creates a piecewise function or set of cases.                      | $\begin{cases}1\\0\end{cases}$           |
| `align`     | `\begin{align}\n$0\n\end{align}`     | mA          | Aligns equations for multi-line equations.                         | $\begin{align}1\\0\end{align}$           |
| `array`     | `\begin{array}\n$0\n\end{array}`     | mA          | Creates a general array (without specific formatting like matrix). | $\begin{array}&1\\&0\end{array}$         |
| `matrix`    | `\begin{matrix}\n$0\n\end{matrix}`   | mA          | Creates a matrix with no brackets or bars.                         | $\begin{matrix}1 &2 \\0 & 2\end{matrix}$ |

## Brackets

| **Trigger** | **Replacement**             | **Options** | **Description**                                                       | **Examples**                   |
| ----------- | --------------------------- | ----------- | --------------------------------------------------------------------- | ------------------------------ |
| `avg`       | `\langle $0 \\rangle $1`    | mA          | Creates an average or expectation symbol.                             | $\langle  f\rangle$            |
| `norm`      | `\lvert $0 \\rvert $1`      | mA          | Creates the norm of a value using vertical bars.                      | $\lvert f \rvert$              |
| `abs`       | `\lvert $0 \\rvert $1`      | mA          | Creates the absolute value using vertical bars.                       | $\lvert f \rvert$              |
| `mod`       | ` \| $0\| $1 `              | mA          | Creates the modulus or absolute value using vertical bars.            | $\mid f \mid$                  |
| `(`         | `(${VISUAL})`               | mA          | Wraps the content with round brackets.                                | $(f)$                          |
| `[`         | `[${VISUAL}]`               | mA          | Wraps the content with square brackets.                               | $[f]$                          |
| `{`         | `{${VISUAL}}`               | mA          | Wraps the content with curly brackets.                                | ${f}$                          |
| `(`         | `($0)$1`                    | mA          | Wraps the content with round brackets.                                | $(f)$                          |
| `{`         | `{$0}$1`                    | mA          | Wraps the content with curly brackets.                                | ${f}$                          |
| `[`         | `[$0]$1`                    | mA          | Wraps the content with square brackets.                               | $[1]$                          |
| `lr(`       | `\left( $0 \\right) $1`     | mA          | Creates left and right parentheses, adjusting size automatically.     | $\left( \frac{f}{d} \right)$   |
| `lr\|`      | `\left\|$0 \\right\|$1 `    | mA          | Creates left and right vertical bars, adjusting size automatically.   |                                |
| `lr{`       | `\left\\{ $0 \\right\\} $1` | mA          | Creates left and right curly braces, adjusting size automatically.    | $\left\{ \frac{f}{d} \right\}$ |
| `lr[`       | `\left[ $0 \\right] $1`     | mA          | Creates left and right square brackets, adjusting size automatically. | $\left[ \frac{f}{d} \right]$   |
| `lra`       | `\left< $0 \\right> $1`     | mA          | Creates left and right angle brackets (inner product).                | $\left< \frac{f}{d} \right>$   |
## Misc

| Trigger | Replacement                                                                                                             | Options | Description                                                                                | Examples                                                     |
| ------- | ----------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| `tayl`  | `${0:f}(${1:x} + ${2:h}) = ${0:f}(${1:x}) + ${0:f}'(${1:x})${2:h} + ${0:f}''(${1:x}) \\frac{${2:h}^{2}}{2!} + \\dots$3` | mA      | Generates the Taylor series expansion of a function, using `f(x + h)` and its derivatives. | $f(x + h) = f(x) + f'(x)h + f''(x) \frac{h^{2}}{2!} + \dots$ |




