---
title: class 7
draft: false
tags:
  - explorerexclude
date: 19 October, 2026
excludeFromIndex: "true"
---
# Things defined
- cartesian closed

## cartesian closed

> [!NOTE] Definition
> A Category C is cartesian closed if it has finite products and the functor $( - \times B) : C \to C$ is a left adjoint for every $B \in OB(C)$

Remark: this gives us a family of adjoints indexed by objects in C

Notation:
We write $[B \to -] : C \to C$ for the right adjoint of $(- \times B)$
We write $ev_{B,C} \times B \to C$ 




some notes here

> [!NOTE] proposition
> In a cartesian closed category we have that for every morphism $g:A \times B \to C$ there exists a unique morphism $\hat{g}: A \to [B \to C]$  such that

(some diagram here)
> Given an object $B \in OB(C)$ consider the adjunnction $(- \times B) \dashv [B \to -]$ and let $\eta^B$ be its unit and counit respectively
 

(proof on ipad)

## Questions from last year(s) exams
### Monad
A Monad on a category C is given by the following data:
- an endofunctor $T: C \to C$
- a natural transformation $\eta : id \implies T$ called unit 
- a natural transformation $\mu : T \cdot T \implies T$ multiplication

such that for every object of the category C

![[class 7-1792414502217.webp|301]]
![[class 7-1792414631952.webp|327]]


Let D be the category such taht 
- its object are rhe same as C
- a morphism $f: X \to Y$ in D given by a morphism 
	$f:C \to TY$ in C, i.e. $D(X,Y) = C(X, TY)$
the identity morphism on X in D is given by $\eta_X L X \to TX$ in C
- composition of morphisms $f:X \to Y, g: Y \to Z$ is defined by
	$g \bigodot f = \mu_Z \cdot Tg \cdot f$

#### Question 1
Prove that D is a category