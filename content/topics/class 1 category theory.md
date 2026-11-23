---
title: class 1
draft: false
tags:
  - category-theory
  - mpri
  - class
  - explorerexclude
date: 7 September 2026
---
## Definitions

> [!definition] Category
> 
> A **category** $\mathcal{C}$ consists of the following data:
> 
> - a collection of objects $\mathcal{C}_o$
> - for any pair of objects $A$ and $B$, a collection of morphisms $\mathcal{C}_m(A,B)$
> - for any morphism $f \in \mathcal{C}_m(A,B)$ and any morphism $g \in \mathcal{C}_m(B,C)$, a morphism $(g \odot f) \in \mathcal{C}_m(A,C)$, called the _composition_ of $g$ and $f$
> - for any object $A$, an identity morphism $\operatorname{id}_A \in \mathcal{C}_m(A,A)$
> 
> such that:
> 
> - composition is **associative**
> - composition is **unital**: for any $f \in \mathcal{C}_m(A,B)$, $\operatorname{id}_B \odot f = f = f \odot \operatorname{id}_A$

Given a category $\mathcal{C}$:

- We write $\operatorname{Ob}(\mathcal{C}) := \mathcal{C}_o$ for its collection of objects.
- _"It's not the objects that matter, it's the morphisms that matter."_
- If $f \in \mathcal{C}_m(A,B)$, we write $f : A \to B$. $A$ is called the **domain** and $B$ the **codomain** of $f$.
- We write $\operatorname{Hom}_{\mathcal{C}}(A,B)$ or $\mathcal{C}(A,B)$ for the collection of morphisms from $A$ to $B$ (dropping the subscript when unambiguous).
- Since composition is associative, we drop the brackets.

**Remark.** Why _collections_ and not _sets_? For a category $\mathcal{C}$, $\operatorname{Ob}(\mathcal{C})$ and $\mathcal{C}(A,B)$ need not be sets — they can be "large," e.g. the collection of all sets. There is no set of all sets (self-reference, paradox).

**Definition (small / locally small).**

- $\mathcal{C}$ is **small** if $\operatorname{Ob}(\mathcal{C})$ is a set and $\mathcal{C}(A,B)$ is a set for every pair $A,B$.
- $\mathcal{C}$ is **locally small** if $\mathcal{C}(A,B)$ is a set for every $A,B \in \operatorname{Ob}(\mathcal{C})$.
- For a locally small category, $\mathcal{C}(A,B)$ is called a **hom-set** (or _external hom_).

## Examples

_Example (Set)._ Objects are sets, morphisms are functions between them.

- $\operatorname{Ob}(\mathbf{Set})$ is the collection of all sets.
- $\mathbf{Set}(X,Y) := {f \mid f : X \to Y \text{ is a function}}$
- identity morphism = identity function on $X$

_Remark:_ $\mathbf{Set}$ is locally small, but not small.

_Example (Pos)._ Objects are posets, morphisms are monotone functions between them.

- $\operatorname{Ob}(\mathbf{Pos})$ are the posets.
- Given $(X,\le)$ and $(Y,\sqsubseteq)$, $\mathbf{Pos}((X,\le),(Y,\sqsubseteq))$ is the set of monotone maps $X \to Y$.

_Example (Mat)._

- $\operatorname{Ob}(\mathbf{Mat})$ = natural numbers
- $\operatorname{Hom}(n,m)$ = $m \times n$ matrices
- identity morphism: the identity matrix
- composition: matrix multiplication

$\mathbf{Mat}$ is a small category.

_Example (a monoid as a one-object category)._ Every monoid $(M, \circ, 1)$ can be seen as a one-object category $\mathbf{M}$:

- one object $*$
- $\operatorname{Hom}(-,-) = M$ — the morphisms _are_ the elements of $M$
- $\operatorname{id}_* : * \to *$ is $1$
- composition is the monoid operation

If $M$ is small (as a set), then $\mathbf{M}$ is small; if $M$ is not small, $\mathbf{M}$ is not locally small.

**Remark.** This course sticks to locally small categories. _sadge_

## Monomorphism, epimorphism, isomorphism

**Definition (Monomorphism).** $f: B \to C$ is a **monomorphism** iff for every object $A$ and every pair of morphisms $g,h : A \to B$: $$f \circ g = f \circ h \implies g = h$$

_Example._ In $\mathbf{Set}$, monomorphisms coincide with injective functions.

**Definition (Epimorphism).** $f : A \to B$ is an **epimorphism** iff for every pair of morphisms $g,h : B \to C$: $$g \circ f = h \circ f \implies g = h$$

**Remark.** In $\mathbf{Set}$, epimorphisms coincide with surjective functions — why?

- $f$ surjective $\implies$ $f$ epi.
- Suppose $f$ is _not_ surjective. Then $g,h$ can agree on the image of $f$ (so $g \circ f = h \circ f$) while disagreeing somewhere outside it — so $g \ne h$ overall.

**Definition (Isomorphism).** $f : A \to B$ is an **isomorphism** if there exists $g : B \to A$ with $g \circ f = \operatorname{id}_A$ and $f \circ g = \operatorname{id}_B$.

_Remark:_ the inverse, when it exists, is unique.

**Claim.** Every object has a unique identity morphism.

**Proof.** Suppose $e, e' \in \mathcal{C}(A,A)$ both satisfy the identity law. Then $e = e \odot e' = e'$, using unitality on each side in turn.

## Functor

A **functor** is a morphism _between categories_.

> [!definition] Functor
> 
> A functor $F$ from a category $\mathcal{C}$ to a category $\mathcal{D}$ is given by:
> 
> - a map on objects, $A \mapsto F(A)$
> - a map on morphisms, sending $f : A \to B$ in $\mathcal{C}$ to $F(f) : F(A) \to F(B)$ in $\mathcal{D}$
> 
> such that:
> 
> - $F$ preserves identities: $F(\operatorname{id}_A) = \operatorname{id}_{F(A)}$
> - $F$ preserves composition: $F(g \circ f) = F(g) \circ F(f)$

_Notation:_ we often write $FA$ for $F(A)$ and $Ff$ for $F(f)$.

_Example (Power set functor)._ $P : \mathbf{Set} \to \mathbf{Set}$, $P(X) := {U \mid U \subseteq X}$. _(Verify functoriality.)_

_Example (Forgetful functors)._ E.g. $U : \mathbf{Vec} \to \mathbf{Set}$, forgetting the vector space structure and remembering only the underlying set.

## Opposite category

_(Didn't get this written down in class — come back and fill in the definition of $\mathcal{C}^{\mathrm{op}}$.)_