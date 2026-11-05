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
I am reading this from Tom Leinster's Book.
# 1. Diagrams and Cones

## Definition: Diagram of a Shape
Let $I$ be a small index category (often called a shape category). A **diagram of shape $I$** in a category $\mathcal{C}$ is a functor $J: I \to \mathcal{C}$.

> **Intuition:** Think of $I$ as an indexing template or shape, $\mathcal{C}$ as the target category, and $J$ as picking out a specific collection of objects and morphisms in $\mathcal{C}$ arranged according to the shape $I$.

## Definition: Cone
Let $J: I \to \mathcal{C}$ be a diagram of shape $I$ in $\mathcal{C}$. A **cone** to $J$ is a pair $(C, \alpha)$ consisting of:
1. An object $C \in \operatorname{Ob}(\mathcal{C})$, called the **apex** of the cone.
2. A family of morphisms $\alpha_I: C \to J(I)$ in $\mathcal{C}$ indexed by objects $I \in \operatorname{Ob}(I)$, called the **legs** of the cone.

This family must satisfy the **cone condition**: for any morphism $i: I \to I'$ in $I$, the diagram commutes ($J(i) \circ \alpha_I = \alpha_{I'}$):


---

# 2. Limits

## Definition: Limit
A **limit** of a diagram $J: I \to \mathcal{C}$ is a universal cone $(L, \lambda)$ to $J$. 

This means that for every cone $(C, \alpha)$ to $J$, there exists a **unique mediating morphism** $l: C \to L$ such that for all $I \in \operatorname{Ob}(I)$, the diagram commutes ($\alpha_I = \lambda_I \circ l$):


---

# 3. Examples of Shapes and Limits

## Example 1: Empty Category $\emptyset$
Let $I = \emptyset$ be the empty category.
- A diagram $J: \emptyset \to \mathcal{C}$ contains no objects or morphisms.
- A cone to $J$ is simply an object $C \in \operatorname{Ob}(\mathcal{C})$ (with no legs required).
- The limit of the empty diagram is an object $L$ such that for every object $C$, there exists a unique morphism $l: C \to L$. 
- Thus, the limit of the empty diagram is a **terminal object** $1 \in \operatorname{Ob}(\mathcal{C})$.

$C \rightarrow^{\exists! l} 1$


## Example 2: Discrete Category of Two Objects
Let $I = \mathbf{2}$ be a discrete category with two objects $\{1, 2\}$ and only identity morphisms.
- A diagram $J: \mathbf{2} \to \mathcal{C}$ selects a pair of objects $(A_1, A_2)$ in $\mathcal{C}$.
- A cone to $J$ consists of an object $C$ and two morphisms $f_1: C \to A_1$ and $f_2: C \to A_2$.
- The limit is the **binary product** $(A_1 \times A_2, \pi_1, \pi_2)$, equipped with canonical projection morphisms $\pi_1: A_1 \times A_2 \to A_1$ and $\pi_2: A_1 \times A_2 \to A_2$:



## Example 3: Parallel Pair (Equalizers)
Let $I$ be the category with two objects $\{1, 2\}$ and two parallel non-identity morphisms $u, v: 1 \to 2$.
- A diagram $J: I \to \mathcal{C}$ selects two objects $X, Y$ and two parallel morphisms $f, g: X \to Y$.
- A cone to $J$ is determined by a single morphism $\alpha: C \to X$ such that $f \circ \alpha = g \circ \alpha$ (the leg $\alpha_Y: C \to Y$ is forced to be $f \circ \alpha$).

$C  \xrightarrow{\quad \alpha \quad}  X  \begin{array}{c} \xrightarrow{f} \xrightarrow{g} \end{array} Y$

- The limit of this shape is called an **equalizer**. It consists of an object $E$ and a morphism $e: E \to X$ such that:
  1. $f \circ e = g \circ e$
  2. For any object $C$ and morphism $\alpha: C \to X$ with $f \circ \alpha = g \circ \alpha$, there exists a unique mediating morphism $l: C \to E$ satisfying $\alpha = e \circ l$:


---

# 4. Uniqueness of Limits up to Isomorphism

### Proposition
Let $J: I \to \mathcal{C}$ be a diagram of shape $I$. If $(L, \lambda)$ and $(L', \lambda')$ are both limits of $J$, then the unique mediating morphism $l': L \to L'$ is an isomorphism, with inverse given by the mediating morphism $l: L' \to L$.


---

# 5. Small Products and Preservation

### Definition: Small Product
Let $I$ be a small discrete category (no non-identity morphisms). Limits of shape $I$ are called **(small) products**.
- A diagram $J: I \to \mathcal{C}$ is a family of objects $\{C_i\}_{i \in I}$.
- A cone $(C, \alpha)$ is a family of morphisms $\alpha_i: C \to C_i$ for each $i \in I$.
- The limit is the pair:
  $\left( \prod_{i \in I} C_i, \; \left( \pi_j: \prod_{i \in I} C_i \to C_j \right)_{j \in I} \right)$
- Universal property: for every cone $(C, (\alpha_j)_{j \in I})$, there exists a unique morphism $\langle \alpha_j \rangle_{j \in I}: C \to \prod_{i \in I} C_i$ making all triangles commute:

#### Concrete Example
In $\mathbf{Set}$, small products are given by the standard **Cartesian product**:
$\prod_{i \in I} C_i = \{ (c_i)_{i \in I} \mid c_i \in C_i \}$

---

## Definition: Preservation of Limits
A functor $F: \mathcal{C} \to \mathcal{D}$ **preserves small limits** if whenever $(L, \lambda)$ is a limit for a small diagram $J: I \to \mathcal{C}$, the cone $(F(L), F(\lambda))$ is a limit for the composite diagram $F \circ J: I \to \mathcal{D}$ in $\mathcal{D}$.

---

# 6. Duality & Existence Theorem

### Dual Concepts
By reversing all arrows in the definitions above, we obtain dual concepts:
- **Cocone:** A family of morphisms $J(I) \to C$.
- **Colimit:** A universal cocone to a diagram $J: I \to \mathcal{C}$.

### Fundamental Theorem of Limits
> **Theorem:** A category $\mathcal{C}$ has all small limits (i.e., is **complete**) if and only if $\mathcal{C}$ has all **small products** and **equalizers**.
