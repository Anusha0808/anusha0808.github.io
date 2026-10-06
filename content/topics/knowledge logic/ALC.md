---
title: ALC Attributive concept language with Complements
draft: false
tags:
  - class
  - logic
  - knowledge
  - ontologies
  - mpri
date: 1 October, 2026
---

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