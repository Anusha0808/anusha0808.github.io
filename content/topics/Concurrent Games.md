---
title: Concurrent Games & ATL
draft: false
tags:
  - mpri
  - games
  - logic
date: 10 November, 2026
---
Objectives of coalitions are described using temporal logic.

## Concurrent game structures

> [!definition] Concurrent game structure (CGS) $M = (Agt, S, Act, act, \delta, L)$ where:
> 
> - $Agt$: finite non-empty set of agents
> - $S$: finite non-empty set of states
> - $Act$: finite set of actions
> - $L : S \to \mathcal{P}(PROP)$: labelling, a truth assignment for each state
> - $act : Agt \times S \to \mathcal{P}(Act)\setminus{\emptyset}$: the action manager — $act(a,s)$ is the (non-empty) set of actions available to agent $a$ at state $s$
> - $\delta : S \times (Agt \to Act) \to S$: the transition function, a **partial** function. $\delta(s,f)$ is undefined whenever some agent $a$ has $f(a) \notin act(a,s)$ — a mapping $f: Agt \to Act$ compatible with $act$ at $s$ is called a **joint action**.

A **coalition** is a subset $A \subseteq Agt$; a **joint strategy** of $A$ is a map $g : A \to Act$ (so all agents in $A$ act at the same state — they commit to the same move).

> [!definition] Turn-based CGS At each state, at most one agent has more than one available action — i.e. at most one agent is actually deciding what to do.

## Strategic ability

ATL expresses that a coalition has a collective strategy to enforce some property, and lets us reason about it.

> [!definition] ATL $\langle\langle A\rangle\rangle\varphi$: coalition $A$ has a collective strategy to enforce the temporal property $\varphi$.

A collective strategy is a tuple of individual strategies — this single modality encodes several quantifiers at once.

> [!remark] In turn-based CGSs, pushing negation inside past $\langle\langle A\rangle\rangle$ turns it into $\langle\langle \overline{A}\rangle\rangle$ (the complementary coalition).

> [!question] Do we need history-dependent strategies? No — only **positional** strategies suffice, so there are only finitely many strategies to brute-force over.

## Variant semantics of ATL

- plans instead of strategies
- finite-memory / memoryful strategies (not needed for ATL itself, but for ATL$^*$, for example)
- quantifying over strategies

## Strategic logic

Quantifies explicitly over strategies (cf. monadic second-order logic) — "internalising" the semantics of ATL / ATL$^*$.

### Incomplete information in ATL

Some states cannot be distinguished by a given player: e.g. $s_0 \equiv_1 s_1$ for Agent $1$.