---
title: Linear Temporal Logic
draft: true
tags:
  - logic
  - mpri
date:
excludeFromIndex:
---
# Linear Temporal Logic (LTL): Semantics and Expressiveness

These notes introduce Linear Temporal Logic (LTL), explain the notation used in the lecture, and then organize the results from the handwritten pages on expressive power, initial equivalence, and past operators.

> **Notation note.** The lecture uses several variants of temporal logic. We write `X` for next, `F` for eventually, `G` for always, `U` for until, `Y` (or $X^{-1}$) for yesterday/previous, and `S` for since. Some texts use $X^{-1}$ rather than $Y$. The exact notation for the logic fragments may vary between sources.

---

## 1. Words, traces, and models

Let $AP$ be a set of **atomic propositions**. A letter is a subset of $AP$, representing the propositions that are true at one moment.

An **infinite word** (also called an infinite trace) over $AP$ is a sequence

$$
w = w_0w_1w_2\cdots \in (2^{AP})^\omega.
$$

Here:
- $w$ is the entire infinite sequence;
- $w_i\subseteq AP$ is the letter at position $i$;
- $a\in w_i$ means that proposition $a$ is true at position $i$.
For example, if $AP=\{a,b\}$, then
$$
w = \{a\}\,\{a,b\}\,\varnothing\,\{b\}\,\{a\}\cdots
$$
is an infinite word. At position $1$, both $a$ and $b$ are true; at position $2$, neither is true.
We interpret LTL formulas over an infinite word and a position in that word. The notation
$$
(w,i)\models\varphi
$$
means that formula $\varphi$ is true at position $i$ of word $w$.

In particular,
$$
(w,0)\models\varphi
$$

means that $\varphi$ is true at the initial position.

The suffix of $w$ beginning at position $i$ is often written $w[i,\infty)$.

---

## 2. Syntax of LTL

A standard syntax for future-time LTL is
$$
\varphi ::= \top \mid \bot \mid a \mid
\neg\varphi \mid (\varphi\land\varphi) \mid
X\varphi \mid (\varphi\,U\,\varphi),
$$

where $a\in AP$.
Other Boolean connectives are abbreviations:
$$
\varphi\lor\psi := \neg(\neg\varphi\land\neg\psi),
\qquad
\varphi\to\psi := \neg\varphi\lor\psi.
$$

Two common temporal operators are defined from `X` and `U`:
$$
F\varphi := \top\,U\,\varphi,
$$
$$
G\varphi := \neg F\neg\varphi.
$$
Their informal meanings are:

- $X\varphi$: $\varphi$ holds at the next position;
- $F\varphi$: $\varphi$ holds at some position in the future, possibly the current one;
- $G\varphi$: $\varphi$ holds at every position from now on;
- $\varphi U \psi$: $\psi$ eventually holds, and $\varphi$ holds at every position before the first such occurrence of $\psi$.

The phrase “possibly the current one” is important: standard LTL's `F` and `U` are non-strict.
## 3. Semantics of future-time LTL

Let $w=w_0w_1\ldots$ be an infinite word and $i\geq 0$.
### Atomic propositions and Boolean connectives

$$
(w,i)\models a
\quad\Longleftrightarrow\quad
a\in w_i.
$$

$$
(w,i)\models\top \quad\text{always},
\qquad
(w,i)\not\models\bot.
$$

$$
(w,i)\models\neg\varphi
\quad\Longleftrightarrow\quad
(w,i)\not\models\varphi.
$$

$$
(w,i)\models\varphi\land\psi
\quad\Longleftrightarrow\quad
(w,i)\models\varphi
\text{ and }(w,i)\models\psi.
$$

### Next

$$
(w,i)\models X\varphi
\quad\Longleftrightarrow\quad
(w,i+1)\models\varphi.
$$

### Eventually

$$
(w,i)\models F\varphi
\quad\Longleftrightarrow\quad
\exists j\geq i:\ (w,j)\models\varphi.
$$

### Always

$$
(w,i)\models G\varphi
\quad\Longleftrightarrow\quad
\forall j\geq i:\ (w,j)\models\varphi.
$$

### Until

$$
(w,i)\models\varphi\,U\,\psi
$$

if and only if there exists $j\geq i$ such that

$$
(w,j)\models\psi
$$

and, for every $k$ with $i\leq k<j$,

$$
(w,k)\models\varphi.
$$

Thus, `until` requires $\psi$ to become true eventually. Until that happens, $\varphi$ must remain true. At the position where $\psi$ first witnesses the until condition, $\varphi$ need not hold.

For example, $a\,U\,b$ says: “$a$ holds continuously until a position at which $b$ holds.”

---

## 4. Past-time operators

Past-time LTL adds operators that refer to earlier positions. A common syntax includes:

- $Y\varphi$, or $X^{-1}\varphi$: $\varphi$ held at the previous position;
- $\varphi\,S\,\psi$: $\psi$ held at some point in the past, and $\varphi$ has held continuously since then.

At position $i$,

$$
(w,i)\models Y\varphi
\quad\Longleftrightarrow\quad
i>0\text{ and }(w,i-1)\models\varphi.
$$

In particular, $Y\varphi$ is false at position $0$.

The semantics of since is

$$
(w,i)\models\varphi\,S\,\psi
$$

if and only if there is some $j$, $0\leq j\leq i$, such that

$$
(w,j)\models\psi
$$

and, for every $k$ with $j<k\leq i$,

$$
(w,k)\models\varphi.
$$

The operator `S` is the past-time analogue of `U`.

---

## 5. Logic fragments and expressiveness

We use notation such as

$$
\mathcal L(U,X),\qquad
\mathcal L(F,X),\qquad
\mathcal L(S,X^{-1})
$$

to denote fragments of temporal logic whose formulas are built using the indicated temporal operators, together with atomic propositions and Boolean connectives.

For example:
- $\mathcal L(U,X)$: future LTL with `until` and `next`;
- $\mathcal L(F,X)$: future LTL with `eventually` and `next`, but without `until`;
- $\mathcal L(S,X^{-1})$: past LTL with `since` and `previous`;
- $\mathcal L(U,X,S,X^{-1})$: LTL with both future and past operators.

The expressive power of a logic concerns which properties its formulas can describe.
### 5.1 Two notions of expressiveness

The lecture distinguishes two ideas.
1. **Distinguishing power:** the ability to distinguish two models or traces.
2. **Expressive power:** the ability to state or define properties.
The distinction is useful because a logic can distinguish models in one setting without necessarily having the ability to express every property of interest in another formal sense.

### 5.2 Equivalence of formulas

Two formulas $\varphi$ and $\psi$ are **(trace-)equivalent** if they have the same truth value on every word at every position:

$$
\varphi\equiv\psi
\quad\Longleftrightarrow\quad
\forall w\in(2^{AP})^\omega\ \forall i\geq0:
$$

$$
(w,i)\models\varphi
\quad\Longleftrightarrow\quad
(w,i)\models\psi.
$$

This is the substitutional (or full) equivalence used in the notes.

### 5.3 One logic is at least as expressive as another

Let $\mathcal L$ and $\mathcal L'$ be two logics interpreted over the same class of models. We say that $\mathcal L$ is **at least as expressive as** $\mathcal L'$ if

$$
\forall\varphi\in\mathcal L'\ \exists\psi\in\mathcal L:
\quad \varphi\equiv\psi.
$$

In words: every property expressible in $\mathcal L'$ can also be expressed in $\mathcal L$.

If each logic is at least as expressive as the other, they have the same expressive power (with respect to the chosen notion of equivalence).

---

## 6. Initial equivalence

When formulas are interpreted over executions of a system, we are often interested only in the initial state of each execution.

This motivates a weaker equivalence.

Two formulas $\varphi$ and $\psi$ are **initially equivalent** if

$$
\varphi\equiv_{\mathrm{init}}\psi
$$

means

$$
\forall w\in(2^{AP})^\omega:
\quad
(w,0)\models\varphi
\Longleftrightarrow
(w,0)\models\psi.
$$

The difference is:

- Full equivalence compares formulas at **every position** of every word.
- Initial equivalence compares formulas only at **position $0$** of every word.

Consequently,

$$
\varphi\equiv\psi
\quad\Longrightarrow\quad
\varphi\equiv_{\mathrm{init}}\psi,
$$

but the converse need not hold.

### Important: initial equivalence is not generally preserved by substitution

The notes emphasize that initial equivalence is not substitutional.

For example, at position $0$,

$$
Y a\equiv_{\mathrm{init}}\bot,
$$

because there is no previous position.

But this does not mean that we may replace $Ya$ by $\bot$ inside an arbitrary larger formula and preserve initial equivalence. Consider

$$
X(Ya).
$$

At position $0$, this formula checks whether $a$ held at position $0$: the outer `X` moves to position $1$, and the inner `Y` moves back to position $0$. Thus

$$
(w,0)\models X(Ya)
\quad\Longleftrightarrow\quad
a\in w_0.
$$

By contrast,

$$
(w,0)\not\models X\bot.
$$

Therefore,

$$
Ya\equiv_{\mathrm{init}}\bot
$$

but

$$
X(Ya)\not\equiv_{\mathrm{init}}X\bot.
$$

This is a concrete demonstration of why initial equivalence is not a congruence under arbitrary formula contexts.

---

## 7. An inexpressibility result: `until` versus `eventually`

One of the handwritten pages contains the proposition:

> The property $a\,U\,b$ is inexpressible in $\mathcal L(F,X)$.

The intended distinction is that `until` can require a condition to remain true continuously until another condition occurs, whereas `eventually` and `next` alone do not provide the same general ability to express that requirement.

The notes introduce two families of infinite words, for $n\geq 0$:

$$
\rho_n=(a^n b^n a^n c^n)^\omega,
$$

$$
\rho'_n=(a^n c^n a^n b^n)^\omega.
$$

Here $a^n$ means a block of $n$ consecutive positions labelled by $a$, and $\omega$ means that the displayed finite block is repeated forever. The exact letters should be understood as word labels; if the alphabet consists of sets of propositions, a label such as $a$ means the corresponding letter.

The intended strategy is to show two things:

1. The property $a\,U\,b$ has different truth values on the two words at the initial position.
2. Formulas in the weaker fragment $\mathcal L(F,X)$ cannot distinguish the two words at the relevant positions, for sufficiently large $n$.

The handwritten lemma states an indistinguishability claim for bounded positions and formulas in $\mathcal L(F,X)$, proved by induction on the position and structural induction on formulas.

---

## 8. Does adding past operators increase expressive power?

The notes next ask:

> Does the past increase expressive power?

The answer depends on the semantics being considered.

At arbitrary positions, past operators can provide useful additional expressive power. However, when formulas are evaluated only at the initial position of an infinite word, past operators can be eliminated without losing expressive power.

This is the significance of the Gabbay separation theorem.

### 8.1 Pure past and pure future formulas

A **pure future** formula uses only future operators, such as

$$
\mathcal L(U,X).
$$

A **pure past** formula uses only past operators, such as

$$
\mathcal L(S,X^{-1}).
$$

A Boolean combination of pure past and pure future formulas is a formula obtained by combining such formulas using Boolean connectives.

### 8.2 Gabbay's separation theorem (Gabbay et al., 1980)

The lecture states the following result:

Every formula of

$$
\mathcal L(U,X,S,X^{-1})
$$

is equivalent to a Boolean combination of pure-past formulas and pure-future formulas.

The theorem is a separation result: it allows a formula involving both past and future operators to be reorganized into a Boolean combination of formulas that use only past operators or only future operators.

The handwritten notes indicate that the proof is based on establishing suitable rewriting rules.

### 8.3 Consequence at the initial position

At position $0$, past operators have particularly simple semantics:

$$
(w,0)\models X^{-1}\varphi
\quad\text{is always false},
$$

and

$$
(w,0)\models \varphi\,S\,\psi
\quad\Longleftrightarrow\quad
(w,0)\models\psi.
$$

The second equivalence holds because the only possible witness for `since` at position $0$ is position $0$ itself. There are no earlier positions at which $\psi$ could hold.

Thus, once a formula has been separated into a Boolean combination of pure-past and pure-future formulas, its pure-past components can be evaluated at the initial position and replaced by equivalent formulas without past operators.

This gives the corollary recorded in the notes:

$$
\boxed{
\mathcal L(U,X,S,X^{-1})
\equiv_{\mathrm{init}}
\mathcal L(U,X)
}
$$

In words: **future LTL with until and next has the same expressive power at the initial position as LTL with both future and past operators.**

This is an equality of expressive power under initial equivalence, not necessarily under full equivalence at every position.

---

## 9. The Kamp/Gabbay result and first-order logic

The final page records a theorem attributed to Kamp and Gabbay et al. concerning the relationship between temporal logic and first-order logic.

The standard result is that, over linear orders of positions, temporal logic with future and past modalities has the expressive power of first-order logic with the corresponding order structure. In the usual formulation, this is Kamp's theorem:

$$
\text{LTL with Until and Since}
\quad\equiv\quad
\mathrm{FO}[<]
$$

over the relevant classes of words, with the precise statement depending on the vocabulary and whether formulas are evaluated at a position or at the initial position.

The notes also write a relationship involving

$$
\mathcal L(X,U,S,X^{-1})
\quad\text{and}\quad
\mathcal L(U,X).
$$

Read this alongside the initial-equivalence result above: the key point is that past operators can be eliminated when evaluating at the initial position, even though they are useful in the general temporal language.

---

## 10. Questions to investigate

The last page asks whether the future logic can be simplified further. In particular:

$$
\mathcal L(U,X)\stackrel{?}{=}\mathcal L(F,X)
$$

and

$$
\mathcal L(U,X)\stackrel{?}{=}\mathcal L(U).
$$

These are questions about whether the indicated operators can be removed without reducing expressive power.

A useful way to approach such questions is:

1. Identify a property expressible in the larger fragment.
2. Try to express it in the smaller fragment.
3. If this seems impossible, construct two words that the smaller fragment cannot distinguish but the property does distinguish.
4. Prove the indistinguishability claim, often by induction on formulas.

The first question is connected to the inexpressibility result in Section 7: `until` is more expressive than `eventually` plus `next` in the relevant setting.

---

## 11. Quick reference

| Symbol | Name | Informal meaning |
|---|---|---|
| $X\varphi$ | Next | $\varphi$ holds at the next position |
| $F\varphi$ | Eventually | $\varphi$ holds now or at some future position |
| $G\varphi$ | Always | $\varphi$ holds now and at every future position |
| $\varphi U\psi$ | Until | $\psi$ eventually holds, while $\varphi$ holds until then |
| $X^{-1}\varphi$ or $Y\varphi$ | Previous | $\varphi$ held at the previous position |
| $\varphi S\psi$ | Since | $\psi$ held at some point in the past, and $\varphi$ held since then |
| $\varphi\equiv\psi$ | Full equivalence | Same truth value at every word and every position |
| $\varphi\equiv_{\mathrm{init}}\psi$ | Initial equivalence | Same truth value at position $0$ of every word |

## 12. Main takeaways

1. An LTL model is an infinite word $w=w_0w_1\ldots$, and $(w,i)\models\varphi$ means that $\varphi$ holds at position $i$.
2. `Until` expresses a sustained condition leading up to an eventual event; it is not simply the same as `eventually`.
3. Full equivalence compares formulas at all positions. Initial equivalence compares them only at position $0$.
4. Initial equivalence is not preserved by arbitrary substitution into larger formulas.
5. Gabbay's separation theorem separates past and future operators into pure-past and pure-future components.
6. At the initial position, past operators can be eliminated. Hence past LTL and future LTL have the same initial expressive power in the setting of the theorem.
7. The relationship between temporal logic and first-order logic is captured by Kamp's theorem, with the exact formulation depending on the underlying structures and semantics.

---

*These notes combine the handwritten material with standard definitions needed to make it self-contained. Where the handwriting is ambiguous—especially in the inexpressibility proof and the final diagram—the text explicitly flags the uncertainty rather than silently guessing.*
