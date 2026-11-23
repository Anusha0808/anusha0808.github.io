---
title: class 3
draft: false
tags:
  - category-theory
  - mpri
  - class
  - explorerexclude
date: " 21 September 2026"
---
I am reading this from Tom Leinster's book.

# 1. Diagrams and cones

**Definition (diagram of a shape).** Let $I$ be a small index category (a _shape_ category). A **diagram of shape $I$** in a category $\mathcal{C}$ is a functor $J : I \to \mathcal{C}$.

_Intuition:_ think of $I$ as an indexing template, $\mathcal{C}$ as the target category, and $J$ as picking out a specific collection of objects and morphisms in $\mathcal{C}$, arranged according to the shape $I$.

**Definition (cone).** Let $J : I \to \mathcal{C}$ be a diagram. A **cone** to $J$ is a pair $(C, \alpha)$ where:

1. $C \in \operatorname{Ob}(\mathcal{C})$ is the **apex**.
2. a family of morphisms $\alpha_I : C \to J(I)$, indexed by $I \in \operatorname{Ob}(I)$, called the **legs**,

satisfying the _cone condition_: for every morphism $i : I \to I'$ in $I$, $J(i) \circ \alpha_I = \alpha_{I'}$.

# 2. Limits

> [!definition] Limit
> 
> A **limit** of $J : I \to \mathcal{C}$ is a universal cone $(L,\lambda)$ to $J$: for every cone $(C,\alpha)$ to $J$, there is a **unique mediating morphism** $l : C \to L$ such that $\alpha_I = \lambda_I \circ l$ for all $I$.

# 3. Examples of shapes and limits

_Example (empty category $\varnothing$)._

- A diagram $J : \varnothing \to \mathcal{C}$ has no objects or morphisms.
- A cone to $J$ is just an object $C$ (no legs required).
- The limit is an object $L$ with a unique morphism $l : C \to L$ for every $C$ — i.e. a **terminal object** $1$.

_Example (discrete category on two objects)._ Let $I = \mathbf{2} = {1,2}$, discrete (only identity morphisms).

- A diagram selects a pair $(A_1,A_2)$.
- A cone is $C$ with $f_1 : C \to A_1$, $f_2 : C \to A_2$.
- The limit is the **binary product** $(A_1 \times A_2, \pi_1,\pi_2)$.

_Example (parallel pair / equalizers)._ Let $I$ have two objects ${1,2}$ and two parallel non-identity morphisms $u,v : 1 \to 2$.

- A diagram selects $X,Y$ and parallel $f,g : X \to Y$.
- A cone is $\alpha : C \to X$ with $f \circ \alpha = g \circ \alpha$ (the leg into $Y$ is forced to be $f \circ \alpha$).
- The limit is the **equalizer**: $E$ with $e : E \to X$ such that $f \circ e = g \circ e$, universal among such morphisms.

# 4. Uniqueness of limits up to isomorphism

**Proposition.** If $(L,\lambda)$ and $(L',\lambda')$ are both limits of $J : I \to \mathcal{C}$, the unique mediating morphism $l' : L \to L'$ is an isomorphism, with inverse the mediating morphism $l : L' \to L$.

# 5. Small products and preservation

**Definition (small product).** Let $I$ be a small discrete category. A limit of shape $I$ is a **(small) product**:

- a diagram is a family ${C_i}_{i\in I}$,
- a cone is $(C,(\alpha_i)_{i \in I})$,
- the limit is $\left(\prod_{i\in I} C_i, (\pi_j)_{j \in I}\right)$, universal: for every cone there's a unique $\langle \alpha_j\rangle_{j\in I} : C \to \prod_i C_i$.

_Example._ In $\mathbf{Set}$: $\displaystyle\prod_{i\in I} C_i = {(c_i)_{i\in I} \mid c_i \in C_i}$.

**Definition (preservation of limits).** $F : \mathcal{C} \to \mathcal{D}$ **preserves small limits** if whenever $(L,\lambda)$ is a limit for $J : I \to \mathcal{C}$, then $(F(L), F(\lambda))$ is a limit for $F \circ J$.

# 6. Duality and the existence theorem

Reversing all arrows gives the dual notions:

- **Cocone:** a family of morphisms $J(I) \to C$.
- **Colimit:** a universal cocone to $J$.

> [!theorem] Fundamental theorem of limits
> 
> $\mathcal{C}$ has all small limits (is **complete**) iff it has all small products and all equalizers.