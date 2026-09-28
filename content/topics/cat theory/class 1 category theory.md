---
title: class 1
draft: false
tags:
  - category-theory
  - mpri
  - class
date: 7 September 2026
---
## Definitions

**Def:** A _category_ C consists of the following data:

- a collection of objects $C_o$
    
- for any pair of _objects_ A and B, a collection of _morphisms_ $C_m(A,B)$
    
- for any morphism $f \in C_m(A,b)$ and any morphism $g \in C_m(B,C)$, we have a morphism $(g \odot f) \in C_m(A,C)$ called the compoisiton of g and f
    
- for any object A, we have $id_A \in C_m(A,A)$ called the identity morphism on A  
    such that the following hold:
    
- composition is associative
    
- it is unital? for any $f \in C_m(A,B)$ we have $\operatorname{id}_B \odot f = f = f \odot \operatorname{id}_A$
    

Given a category C:  
We write $Ob(C) := C_o$ for its collection of objects  
"its not objects that matter its the morphisms that matter"  
If $f \in C_m(A,B)$ is a morphism from A to B, we indicate this by writing $f \rightarrow B$  
The A is called domain and B is called co domain of f.  
We also write $\operatorname{Hom}_C(A,B)$ for the collection of morphisms from A to B  
$C(A,B)$ is also for the same, we drop the subscript m

Since composition is associative, we drop the brackets.

collection? and not set? why?  
_Remark_: For category C, the collections Ob(C) and C(A,B) they do not have to be sets. they can be large, like : collection of all sets, we do not have sets of all sets (self reference, paradox!)

When Ob(C) is a set and C(A,B) is a set for any pair of objects A,B \in Ob(C), then we say C is _small_ category  
If C(A,B) is a set for every $A,B \in Ob(C)$, then we say that C is a _locally small_ category  
For a locally small category C, we say that C(A,B) is a _hom-set._ (also known as _external hom_)

## Examples

### Set

The category **Set** is defined to be the category whose objects are sets and whose morphisms are functions between them.

- Ob(Set) is the collection of all sets.
    
- Given two sets, X and Y, we define the ext hom / hom set $\operatorname{Set}(X,Y) := {f \mid f \rightarrow Y \text{ is a function}}$
    
- the identity morphism is given by the identity funtion on X
    

_Remark_ : **Set** is locally small , but it is not small.

### Partial Order

The category **Pos** is defined to be the category whose objects are partially ordered sets (poset), and morphisms are monotone functions between them.

- Ob(Pos) are the posets
    
- given two posets $(X, \leq), (Y, \sqsubseteq)$ , we define $\operatorname{Pos}((X,\leq),(Y,\sqsubseteq))$
    

### Natural nos, matrices

let _Mat_ be the category with

- Ob(Mat) are the natural numbers
    
- Hom(n,m) = { A is a $m \times n$ matrix}
    
- the identity morphism : identity matrix
    
- composition : matrix multiplication
    

Mat is a small category.

### Monoid

Every monoid $(M,\circ, 1)$ can be seen as a 1 - object category  
Define _M_ to be the following category

- It has only one object, lets call it $*$
    
- $Hom(*,*)=M$ , i.e. the morphisms are the elements of M
    
- the identity $id_*: * \rightarrow *$ os defined as 1
    
- composition : monoid operation
    

If M is a small, then **M** is small.  
if M is not small, then **M** is not locally small.

_Remark: This course will stick to locally small categories_  
sadge

## Monomorphism

f : $B \rightarrow C$ is a monomorphism iff for all objects A, every pair of morphisms g,h $A \rightarrow B$, we have that $f \circ g = f \circ h \implies g = h$

### examples

**Set**, monomorphisms coincide with injective functions

## Epimorphism

$$g \circ f = h \circ f \implies g = h$$

In sets, they are the surjective functions, why?  
f surjective implies epi  
suppose f not surjective, then it is possible that the domain of the compositions are a subset of A and not equal to A, so on the intersection of these domains, g and h will be equal but not overall.

## Isomorphism

--

the inverse is unique.

## questions

> every object has a unique identity morphism.

trivial.

## Functor

between categories. morphism between categories,  
A **Functor** F from a category **C** to category **D**, is given by the following data

- a map on objects , $A \rightarrow F(A)$
    
- a map on morphisms that sends morphisms on **C** to morphisms on **D** ( $f \rightarrow B$ goes to $F(f)(A) \rightarrow F(B)$)
    
- F preserves identities
    
- F preserves composition
    

_Notation:_  
We often FA instead of F(A)  
Ff instead of F(f)

### examples

Power Set Functor P: **Set** -> **Set**  
$P(X) := {U \mid U \subseteq X}$  
verify.

forgetful functors

## Opposite Category

did not write here