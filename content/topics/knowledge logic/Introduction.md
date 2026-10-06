---
title: Introduction
draft: true
tags:
  - logic
date: 1 October, 2026
---
# basic building blocks
three kinds of entities :
- concepts (set of individuals)(similar to unary predicates in [[First Order Logic]])
- roles (similar to binary relations between individuals)
- individual names ( similar to constants )

It contains a set of statements, called Axioms. They describe partial knowldge of the world

## ABox axioms
capture knowledge about named individuals using concept assertions (for example $Mother(julia))$ and role assertions $(parentOf(julia,john))$

## TBox axioms
describe relationship between concepts.
Example : $"Mother" subset.eq.sq  "Parent"$

## RBox axioms
Express relations between roles.
- Role inclusion
- Role equivalence
- role composition

# constructors for concepts and roles

- Boolean concept constructors
- Role restrictions
- Number restrictions
- Local reflexivity 

