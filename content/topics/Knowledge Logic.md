---
title: knowledge logic
draft: false
tags:
  - logic
  - philosophy
  - mpri
date: 1 October, 2026
---
# introduction
## basic building blocks
three kinds of entities :
- concepts (set of individuals)(similar to unary predicates in [[First Order Logic]])
- roles (similar to binary relations between individuals)
- individual names ( similar to constants )

It contains a set of statements, called Axioms. They describe partial knowldge of the world

### ABox axioms
capture knowledge about named individuals using concept assertions (for example $Mother(julia))$ and role assertions $(parentOf(julia,john))$

### TBox axioms
describe relationship between concepts.
Example : $"Mother" subset.eq.sq  "Parent"$

### RBox axioms
Express relations between roles.
- Role inclusion
- Role equivalence
- role composition

## constructors for concepts and roles

- Boolean concept constructors
- Role restrictions
- Number restrictions
- Local reflexivity 
# Attributive concept language with Complements
Complex Concepts
$C := \top | \bot | A | not C| C inter.sq.big C| C union.sq C| forall r. C | exists r. C$
where $r= "relation symbol"$
## Interpretation
$I eq.def (triangle.stroked.t ^I, dot ^I)$ = (domain set, interpretation function)

## Concept satisfiability problem:
Input: A (complex) concept C in ALC.
Question: Is there an interpretation $I eq.def (triangle.stroked.t ^I, dot ^I)$such that $C^I not= ∅$?
This is PSPACE Complete.

- It has finite interpretation property

## Subsumption problem
PSPACE Complete

## Knowledge base consistency problem
EXPTIME-complete
