---
title: class 4
draft: false
tags:
  - category-theory
  - mpri
  - class
date: 28 September, 2026
---
I tried inserting sketches from my iPad directly here.
## § Exercises
### Exercise 22
Wrong exercise from the last TD :
correction
Assume a cat C has pullbacks and ==a terminal object.== Now prove that it has
- binary products and therefore finite
- equalizers 

![[Sketch.png|228]]

![[Sketch 1.png]]
Let A, B in Ob(C)
consider the pullback of $(1_A, 1_B)$ and denote it with $(P, pi_1, pi_2)$ i.e. see the diagram
We claim that $(P, pi_1, pi_2)$ is the product of A and B. Towards the end, let $X \in ob(c)$ and $f : X \to A$ and $g : X \to B$ be morphisms

We verify that $1_A \circ f = 1_B \circ g = 1_X$ because 1 is the terninal object. From the universal property of the pullback we have a unique morphism $<f, g> : X \to P$

b) Prove that all equalizers exist.

Let $f,g : A \to B$ be morphisms from (a), we know that C has binary products. Consider the pullback and denote it with $(E, e_1, e_2)$

![[Sketch 2.png|432]]
![[41c91290-49a8-4dca-a6a6-55d12b8b528c.png]]

let X be an object and let e' : X arrow A, such that f dot e' = g dot e'
We verify that $<id , f> \circ e' = <e' , f \circ e' > eq  <e' , g \circ e' > = <id, g> \circ e'$

### Exercise 21
he did this.

## Functors and Natural Transformations

$P: Set \rightarrow Set$ powerset functor
$U: Vec \rightarrow Set$ forgetful functor
$U(V) = V$ the underlying set 


> [!NOTE] proposition
> Let C be a category with binary products $(- \times -)$
Show that the assignment $(- \times -)$ is a functor
$(- \times -): C \times C \rightarrow C$ 

Proof.
Define $F: C \times C \rightarrow C$ by $F(A,B) = A \times B$
$F(f,g) = f \times g$

want to show :$F(id_A, id_B) = id_{A \times B}$
$F( f' , g' )= (f, g)$
LHS = 
$F((f' \circ f, g' \circ g)) = (f' \circ f) times (g' \circ g)$

recall 
$f \times g = <f \circ pi_{A_1}, g \circ pi_{A_2}>$ for $f: A_1 \to A_2, g: B_1 \to B_2$
$F(id_A, id_B) = id_A \times id_B = < pi_A, pi_B> = id_{A \times B}$

## Natural Transformations
Let $F,G : C \to D$ be two functors.
A natural transformation $\alpha: F \implies G$ is a family of morphisms $\{\alpha_A : FA \to GA\}_{A \in Ob(C)}$ indexed by the objects of C such that for every obejcts A, B of C and every morphism f: A to B we have that Gf circ alpha_A = alpha_B circ Ff
![[Pasted image 20260928152945.png|480]]

### Examples

#### The identity natural transformation.
$\iota : F \implies F : C \to C$
$iota_A = FA \to FA$
$iota_A := id_A$

#### Powerset functor 
$P: Set \to set$
$\eta : Id \implies P : Set \to set$

$\eta_X : X \to PX$
$\eta_X(Y) := {y} \in PX$

naturality is easy

#### $\mu : P \times P \implies P: Set \to Set$
$\mu_X = P(P(X)) \to PX$
$\mu_X := S \to \cup S= \cup_{A \in S} A$
S is the set of subsets of X

If X = natural nos
S = {{1,2,3} , {7,8}, {10}}
union S = {1,2,3,7,8,10}

![[Pasted image 20260928154201.png|411x253]]

complete the proof.

#### Co product natural transformation
Let C be a category with binary co products (- + -)
Define a natural transformation $\beta: + \circ <Id,Id> \implies Id : C \to C$

$\beta_A : A + A \to A$
$\beta := [id_A, id_A]$

Prove this.


### Properties
Natural Transformations also compose.

Prove this.

## Category of functors
If C and D are categories, we define the functor category [C,D] to be the category with the 
- objects are functors $F : C \to D$
- morphisms are natural Transformations $\alpha : F \implies G$
- identity is the identity natural transformation
- composition 

*Remark: If C and D are small, then [C,D] is locally small. If C and D are locally small then [C,D] need not be locally small*

