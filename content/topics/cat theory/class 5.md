---
title: class 5
draft: false
tags:
date: 8 October, 2026
---
I missed this class, so the notes were borrowed from a friend and converted to markdown using ai, and then I added remarks and thoughts;
## 1. Universal Arrows

### Definition

Let $\mathcal{C}$ and $\mathcal{D}$ be two categories, $G: \mathcal{D} \to \mathcal{C}$ a functor, and $C \in \operatorname{Ob}(\mathcal{C})$.
A **universal arrow** from $C$ to $G$ is a pair $(r, \eta_C)$, where:
- $r \in \operatorname{Ob}(\mathcal{D})$
- $\eta_C: C \to G(r)$ is a morphism in $\mathcal{C}$

such that for any object $D' \in \operatorname{Ob}(\mathcal{D})$ and any morphism $f: C \to G(D')$, there exists a **unique** morphism $f': r \to D'$ in $\mathcal{D}$ such that:

$f = G(f') \circ \eta_C$

"it factors through $G(r)$"
The interesting bit here is that we need a functor from $\mathcal{D}$ to $\mathcal{C}$. Why do we need that?
Whenever we have a function from $C$ to some "good" object, and by good we mean that it is an image under the functor, then we can factor that function through $G(r)$. Again, why do we need a functor for this definition? What does it add?
## 2. Construction of Adjoint Functors via Universal Arrows

### Proposition

Let $G: \mathcal{D} \to \mathcal{C}$ be a functor. If for every object $C \in \operatorname{Ob}(\mathcal{C})$, there exists a universal arrow $(F(C), \eta_C)$ from $C$ to $G$, then:

1. $F(-)$ uniquely extends to a functor $F: \mathcal{C} \to \mathcal{D}$.
2. $\eta: \operatorname{Id}_{\mathcal{C}} \Rightarrow G \circ F$ is a natural transformation.

What it means is that, for all self loops in $C$, under the natural transformation, they might get mapped to some different object but it remains a self loop?
### Proof Outline

1. **Defining Action on Morphisms** $F(f)$: Given a morphism $f: C_1 \to C_2$ in $\mathcal{C}$, consider the composite morphism $\eta_{C_2} \circ f: C_1 \to G(F(C_2))$. By the universal property of $(F(C_1), \eta_{C_1})$, there exists a unique morphism $F(f): F(C_1) \to F(C_2)$ in $\mathcal{D}$ such that:
    $G(F(f)) \circ \eta_{C_1} = \eta_{C_2} \circ f$
2. **Functoriality**:
    - **Identity**: $F(\operatorname{id}_C) = \operatorname{id}_{F(C)}$ follows from uniqueness applied to $\eta_C \circ \operatorname{id}_C = \eta_C$.
    - **Composition**: $F(g \circ f) = F(g) \circ F(f)$ follows from the uniqueness of the induced universal arrow.
3. **Naturality of** $\eta$: The defining equation $G(F(f)) \circ \eta_{C_1} = \eta_{C_2} \circ f$ guarantees that $\eta$forms a natural transformation $\eta: \operatorname{Id}_{\mathcal{C}} \Rightarrow GF$.
    
4. **Uniqueness**: If $F'$ is another functor agreeing on objects ($F'C = FC$) with natural transformation $\eta$, then $F'(f) = F(f)$ by uniqueness of universal factorization.
    

## 3. Concrete Example: Free Vector Space Functor

Consider the forgetful functor $G = U: \mathbf{Vect} \to \mathbf{Set}$.
- **Left Adjoint (**$F$**)**: The **Free Vector Space** functor $F: \mathbf{Set} \to \mathbf{Vect}$.
    
- For a set $X$, $FX$ is defined as the set of functions with finite support:
    
    $$FX := \{f: X \to \mathbb{R} \mid \vert{}\operatorname{supp}(f)\vert{} < \infty\}$$
- Operations are defined pointwise:
    
    - $(f + g)(x) = f(x) + g(x)$
        
    - $(\lambda f)(x) = \lambda f(x)$
        
- **Basis / Canonical Embedding**: Define $\vert{}x\rangle \in FX$ for each $x \in X$ as:
    
    $$\vert{}x\rangle(y) = \begin{cases} 1 & \text{if } y = x \\ 0 & \text{if } y \neq x \end{cases}$$
    
    The assignment $x \mapsto \vert{}x\rangle$ defines the universal arrow $\eta_X: X \to U(FX)$ in $\mathbf{Set}$.
    

## 4. Formal Definition of Adjunctions

### Definition

Let $\mathcal{C}$ and $\mathcal{D}$ be two categories. An **adjunction** from $\mathcal{C}$ to $\mathcal{D}$ is a triple $(F, G, \theta)$, where:

- $F: \mathcal{C} \to \mathcal{D}$ and $G: \mathcal{D} \to \mathcal{C}$ are functors.
    
- $\theta$ is a collection of bijection maps indexed by $C \in \operatorname{Ob}(\mathcal{C})$ and $D \in \operatorname{Ob}(\mathcal{D})$:
    
    $$\theta_{C, D}: \mathcal{C}(C, GD) \xrightarrow{\cong} \mathcal{D}(FC, D)$$
- $\theta$ is **natural in both variables** $C$ and $D$. Namely, for any $g: C' \to C$ in $\mathcal{C}$ and $h: D \to D'$ in $\mathcal{D}$:
    
    $$\theta_{C', D'}(G(h) \circ f \circ g) = h \circ \theta_{C, D}(f) \circ F(g)$$

### Notation

- $F$ is called the **left adjoint** to $G$ ($F \dashv G$).
    
- $G$ is called the **right adjoint** to $F$.
    

## 5. Equivalence of Universal Arrows and Hom-Set Adjunctions

### Proposition

Let $F: \mathcal{C} \to \mathcal{D}$ and $G: \mathcal{D} \to \mathcal{C}$ be functors. The existence of a family of universal arrows $(FC, \eta_C)$ for each $C \in \operatorname{Ob}(\mathcal{C})$ is equivalent to specifying an adjunction $F \dashv G$.

### Proof Key Steps

1. **Constructing the Hom-Bijection** $\theta_{C,D}$: Given $f \in \mathcal{C}(C, GD)$, define $\theta_{C, D}(f) = \hat{f}$, where $\hat{f}: FC \to D$ is the unique morphism given by universal property satisfying:
    
    $$G(\hat{f}) \circ \eta_C = f$$
2. **Bijectivity**: The inverse map $\theta_{C,D}^{-1}: \mathcal{D}(FC, D) \to \mathcal{C}(C, GD)$ is given by:
    
    $$h \mapsto G(h) \circ \eta_C$$
3. **Naturality Verification**: To show $\theta_{C', D'}(G(h) \circ f \circ g) = h \circ \hat{f} \circ F(g)$, apply $G(-)$and precompose with $\eta_{C'}$:
    
    $$G(h \circ \hat{f} \circ F(g)) \circ \eta_{C'} = G(h) \circ G(\hat{f}) \circ G(F(g)) \circ \eta_{C'}$$
    
    Using the definition of $F(g)$ ($G(F(g)) \circ \eta_{C'} = \eta_C \circ g$):
    
    $$= G(h) \circ G(\hat{f}) \circ \eta_C \circ g = G(h) \circ f \circ g$$
    
    By uniqueness of the universal arrow, naturality holds.