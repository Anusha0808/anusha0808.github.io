---
title: class 2
draft: false
tags:
  - category-theory
  - mpri
  - class
  - explorerexclude
date: 14 September 2026
---
# Class 2

## Commutative diagrams

Meaning: diagrams have no loops; any two paths of length at least 2 between the same two objects give equal composite morphisms.

## Categorical product

> [!definition] Product
> 
> Let $\mathcal{C}$ be a category and $A, B \in \operatorname{Ob}(\mathcal{C})$. A **product** of $A$ and $B$ is given by:
> 
> - an object $A \times B \in \operatorname{Ob}(\mathcal{C})$
> - a pair of morphisms $\pi_1 : A \times B \to A$, $\pi_2 : A \times B \to B$, called **projections**
> 
> such that for every object $X$ and morphisms $f : X \to A$, $g : X \to B$, there exists a **unique** morphism $\langle f, g\rangle : X \to A \times B$ making the diagram commute.

**Doubt.** Are we saying $\mathcal{C}$ is _closed under_ products, or just defining what a product _is_, when one happens to exist?

**Answer.** The definition is an "iff": _if_ a product exists, it satisfies these conditions, and vice versa. It doesn't force $\mathcal{C}$ to have all products — the morphisms from the product to some other object could simply fail to exist.

Products are commutative up to isomorphism, and the product $A \times B$ exists iff it exists "in both directions" (the universal property holds symmetrically in $A,B$).

_Examples._

1. $\mathbf{Set}$: categorical product = Cartesian product
2. Vector spaces: categorical product = direct sum
3. $\mathbf{Pos}$ (posets and monotone functions)

**Proposition.** $\langle \pi_1, \pi_2 \rangle = \operatorname{id}_{A \times B}$

**Proposition (distributivity).** Let $A \xleftarrow{\pi_1} A\times B \xrightarrow{\pi_2} B$ be a product, $X$ an object with $f: X \to A$, $g : X \to B$, and $Y$ an object with $h : Y \to X$. Show that $$\langle f, g\rangle \circ h = \langle f \circ h,\ g \circ h\rangle$$

**Proof.** The uniqueness part of the universal property of the product is the crucial ingredient: both sides, post-composed with $\pi_1$ and $\pi_2$, agree, so by uniqueness of the mediating morphism they must be equal.

**Proposition (uniqueness of products up to isomorphism).** Let $A \xleftarrow{\pi_1} A \times B \xrightarrow{\pi_2} B$ and $A \xleftarrow{t_1} X \xrightarrow{t_2} B$ both be products of $A$ and $B$. Then there exists an isomorphism $i : X \to A \times B$, unique such that $\pi_i \circ i = t_i$.

## Terminal objects

> [!definition] Terminal object
> 
> A category $\mathcal{C}$ has a **terminal object** (or _final object_) if there is $1 \in \operatorname{Ob}(\mathcal{C})$ such that for every object $X$, there is a unique morphism $!_X : X \to 1$ (also written $1_X$).

_Examples._

- In $\mathbf{Set}$, any singleton is terminal.
- _Counterexample:_ the empty category has no objects at all, so it has no terminal object either.

**Proposition.** Any two terminal objects are isomorphic.

## Finite products

**Definition (cartesian category).** $\mathcal{C}$ **has finite products** (is _cartesian_) if it has a terminal object $1$ and, for every pair of objects $A,B$, their binary product $A \times B$.

_(See also: nLab, generalized products/limits — paste the full link here.)_

_Examples._

- The empty category has finite products vacuously (it has no objects to take products of), but no terminal object.
- $\mathbf{Vec}$ has finite products; its terminal object is the $0$-dimensional vector space.

**Proposition (terminal object as identity for product).** Let $\mathcal{C}$ have finite products. Show that $1 \times A \cong A$.

**Proof.** _(to fill in)_

## Functors

_(Didn't write notes for this section in class — fill in, including the proposition that was being set up.)_