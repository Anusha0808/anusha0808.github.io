---
title: class 2
draft: false
tags:
  - category-theory
  - mpri
  - class
date: 14 September 2026
---

# Class 2
## commutative diagrams
meaning:
diagrams have no loops
any two paths of length atleast 2 give equations with the same end points


## definitions covered
### categorical product
Let C be a category. Let A,B be objects in C. 
Product iff A and B is given by the following
- an object $(A \times B) \in Ob(C)$
- a pair of morphisms $\pi_1: A \times B \rightarrow A$ and $\pi_2$ called projections

such that for any object X in C and morphisms $f: X \rightarrow A$ and $a: X \rightarrow B$, there exists a **unique** morphisms written $<f,g>: X \rightarrow A\times B$ such that the diagram commutes


>doubt: 
 are we implying that C is closed under product or are we introducing products 
ans : we are saying if the product exists in C, then it is something like this
but then it is possible to define product for any two objects? why not make C closed under products?
(ask him)
oh then maybe its like if a category is closed under  
since we have the definition of product, what is stopping us from making the definition of category closed under product? in which cases the product may not be defined? the morphisms from the product to some other object could just be empty
> Answer : the definition is an iff of product. it means , if a product exists, it must satisfy the following conditions, and vice a versa

products are commutative (upto isomorphism) and product exists iff both directions product exists.
#### Examples:
1) Set : categorical product is the cartesian product
2) vector spaces : the direct sum
3) Category of posets and monotonr functions

#### prop: $<\pi_1, \pi_2> = id_{A\times B}$
$<\pi_1, \pi_2> = id_{A\times B}$

#### prop : distributivity
Let $A \leftarrow^{\pi_1} A \times B \rightarrow^{\pi_2} B$ be a product. Let X be an object, $f: X \rightarrow A, g : X -> B$ morphisms. Let Y ba an object and $h: Y -> X$. Show that $<f \circ g> \circ h = <f \circ h, g \circ h>$

Proof.
Here the uniqueness of the morphism of the product is crucial.

#### prop : uniqueness of product upto isomorphism
$A \leftarrow^{\pi_1} A \times B \rightarrow^{\pi_2} B , A \leftarrow^{t_1} X \rightarrow^{t_2} B$ are categorical products of A and B. Prove that there exists an isomorphism $i : X \rightarrow A \times B$. and that there is a unique isomorphism such that $\pi_i \circ i = t_i$

## Terminal objects
A category C has a terminal object ( sometimes called the final object) if there exists $1 \in Ob(C)$, such that for any object $X$, there exists a unique morphism from X into $1$. We write $1_X: X \rightarrow 1$ or $!_X$
### Examples:
In sets, any singleton is terminal
Counter example : The empty category has no objects and no morphisms. This does not have any terminal object bec it does not have any object

### Prop : any two terminal objects are isomorphic to each other.

## Finite products
We say that a category C has finite products ( or that it is a **cartesian**) if it has a terminal object $1$ and for every pair of objects A and B, it contains the binary product of A and B

https://ncatlab.org/nlab/show/generalized+the cool stuff

### Examples:
the empty category has finite products. but no terminal object.
vec also has finite products. terminal object : 0 dimensional vector space.

question? does every non trivial category C which has finite products a terminal objects?

yes.

### Prop : terminal object acts as identity in product.
Let C be a category with finite product. Show that $1 \times A \cong A$
Proof. 

## we get functors here.
did not write the notes here. fill this up.
### prop : 
show that