---
title: Interploation
draft: false
tags:
date: 14 September 2025
---
# Constructing Craig Interpolation Formulas  
*Based on notes from Guoxiang Huang (expanded with full proofs)*

## 1. Stratified Formulas
A formula $\varphi$ is **stratified** if there exists a level function $\ell$ assigning natural numbers to predicates in $\Delta \cup \{\varphi\}$ so that whenever $P(t_1,\dots,t_n)$ occurs positively in a clause using predicate $P$, and $Q(s_1,\dots,s_m)$ occurs negatively in the same clause using predicate $Q$, then $\ell(P)\ge \ell(Q)$.

**Proposition.** $\Delta\models\varphi$ has a Herbrand solution iff $\varphi$ is stratified.

**Proof.**  
$(\Rightarrow)$ If $\Delta\models\varphi$ has a Herbrand solution, then there exists a Herbrand structure $M$ in which all ground instances of $\Delta$ are true and $\varphi$ is false. From the least fixpoint construction of Herbrand models, predicates can be assigned levels according to when they become true in the iterative construction. These levels form a stratification witnessing satisfaction.  
$(\Leftarrow)$ If $\varphi$ is stratified, then the standard stratified fixpoint construction yields a minimal model satisfying the positive part of $\Delta$. Since the stratification prevents circularity between positive and negative predicates, every ground instance of $\Delta$ receives a truth value deterministically. Evaluating $\varphi$ in this model yields a consistent truth assignment, giving a Herbrand solution. ∎

## 2. Moving to Propositional Logic
Given formulas $\varphi_1$ and $\varphi_2$, we say $\varphi_1\models\varphi_2$ if every valuation making $\varphi_1$ true also makes $\varphi_2$ true. An interpolant extracts the common “reason” for the entailment.

Example: $p\land r\models p\lor q$ but $r$ is irrelevant.

## 3. Interpolant
A formula $\theta$ is an interpolant of $\varphi_1$ and $\varphi_2$ if:  
1. $\varphi_1\models\theta$  
2. $\theta\models\varphi_2$  
3. $\mathrm{voc}(\theta)\subseteq\mathrm{voc}(\varphi_1)\cap\mathrm{voc}(\varphi_2)$  

**Craig’s Interpolation Theorem.** If $\varphi_1\models\varphi_2$, then an interpolant exists.

## 4. Lemmas for Constructing Interpolants

### Lemma 1
If $p\notin\mathrm{voc}(\varphi_2)$ and $\varphi\models\varphi_2$, then $\varphi[p/\top]\lor\varphi[p/\bot]\models\varphi_2$.

**Proof.** Let $v$ be any valuation such that $v\models\varphi[p/\top]\lor\varphi[p/\bot]$.  
Case 1: $v\models\varphi[p/\top]$. Define a valuation $v'$ identical to $v$ except $v'(p)=\top$. Since $\varphi[p/\top]$ is $\varphi$ with every $p$ replaced by $\top$, $v'$ satisfies $\varphi$.  
Case 2: $v\models\varphi[p/\bot]$. Similarly define $v'(p)=\bot$, and again $v'\models\varphi$.  
In both cases $v'\models\varphi$, and since $\varphi\models\varphi_2$, we have $v'\models\varphi_2$. Because $p\notin\mathrm{voc}(\varphi_2)$, $v$ and $v'$ agree on all symbols in $\varphi_2$, so $v\models\varphi_2$. Thus every valuation satisfying $\varphi[p/\top]\lor\varphi[p/\bot]$ satisfies $\varphi_2$. ∎

### Lemma 2
Suppose $p\notin\mathrm{voc}(\varphi_2)$, $\varphi_1\models\varphi_2$, Then $\phi_1[p/\top]\lor\phi_1[p/\bot]\models\varphi_2$.
**Proof.** Let $v\models\phi_1[p/\top]\lor\phi_1[p/\bot]$.  
Case 1: $v\models\psi_1[p/\top]$. Define $v'$ equal to $v$ except $v'(p)=\top$. 

Case 2: $v\models\psi_2[p/\bot]$ is symmetric with $v'(p)=\bot$.  
Thus any valuation satisfying $\psi_1[p/\top]\lor\psi_2[p/\bot]$ satisfies $\varphi_2$. ∎

Exercise : show that if we drop the condition that $p \not \in voc(\phi_2)$ then the lemma does not hold?

## 5. Constructing Craig Interpolants (Propositional Case)

**Theorem.** If $\varphi_1\models\varphi_2$, then there exists $\theta$ such that $\varphi_1\models\theta$, $\theta\models\varphi_2$, and $\mathrm{voc}(\theta)\subseteq\mathrm{voc}(\varphi_1)\cap\mathrm{voc}(\varphi_2)$.

**Proof.** Let $X=\mathrm{voc}(\varphi_1)\setminus\mathrm{voc}(\varphi_2)$. We eliminate variables of $X$ by induction.

Base case: $X=\varnothing$. Then $\theta=\varphi_1$ works since all vocabulary is shared.

Inductive step: Pick $p\in X$. By Lemma 1 applied to $\varphi=\varphi_1$, we have $\varphi_1[p/\top]\lor\varphi_1[p/\bot]\models\varphi_2$. Define $\varphi_1'=\varphi_1[p/\top]\lor\varphi_1[p/\bot]$. Note $\mathrm{voc}(\varphi_1')=\mathrm{voc}(\varphi_1)\setminus\{p\}$. By induction, $\varphi_1'$ has an interpolant $\theta$ in the shared vocabulary. Then $\varphi_1\models\varphi_1'\models\theta$ and $\theta\models\varphi_2$. Thus $\theta$ is the interpolant. ∎

## 6. Resolution-Based Interpolation (Relational Interpolants)
We assume a resolution refutation of $\varphi_1\land\varphi_2$ producing clauses labeled according to which side (left or right) their symbols originate from.

### Definition (Relational Interpolant)
A formula $\theta$ is a relational interpolant of $\varphi_1$ and $\varphi_2$ relative to clause $C$ if  
1. its nonlogical symbols appear only in the intersection of vocabularies  
2. $\varphi_1\models\theta\lor C$  
3. $\varphi_2\models\lnot\theta\lor C$

### Theorem
In a propositional resolution proof, the interpolant assigned to the empty clause by the interpolation algorithm is a relational interpolant.

**Proof.**  
We prove all three conditions.

1. **Shared vocabulary.** The algorithm assigns only formulas built from the literals of parent clauses; literals marked “left” or “right” guide whether we use $\land$ or $\lor$. Any literal appearing is inherited from shared ancestry in resolution. Thus vocabulary stays inside the shared part.  
2. **Left entailment.** Induct on proof depth. If $C$ is an input clause from $\varphi_1$, its assigned interpolant is $\bot$, so $\varphi_1\models\bot\lor C$. If from $\varphi_2$, its interpolant is $\top$, so $\varphi_1\models\top\lor C$.  
For a resolvent $R$ from $L\lor C$ and $\lnot L\lor D$, assume IH:  
$\varphi_1\models\theta_1\lor(L\lor C)$ and $\varphi_1\models\theta_2\lor(\lnot L\lor D)$.  
Examine the algorithm’s cases:  
(a) both occurrences from left → $\theta=\theta_1\lor\theta_2$; resolution preserves entailment of $C\lor D$.  
(b) both from right → $\theta=\theta_1\land\theta_2$; left side already entails both disjunctively, and conjunction is stronger.  
(c) mixed → $\theta=(L\land\theta_1)\lor(\lnot L\land\theta_2)$; resolution ensures whenever both $C$ and $D$ are false, one of $L$ or $\lnot L$ satisfies the corresponding $\theta_i$.  
Thus $\varphi_1\models\theta\lor(C\lor D)$.  
3. **Right entailment** is symmetric with $\varphi_2$, using the dual assignment.  
Therefore the assigned formula is a relational interpolant. ∎

## 7. Summary
Interpolation in propositional logic is achieved by variable elimination. Resolution-based interpolation tracks symbol origin through proofs to build a relational interpolant, which is guaranteed to sit between $\varphi_1$ and $\varphi_2$ and use only shared symbols.


# Doubts to ask in class:
- skolemisation cannot be used to remove universal quantifiers 