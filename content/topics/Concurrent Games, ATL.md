---
title: Concurrent Games, ATL
draft: false
tags:
  - mpri
  - games
  - logic
date: 7 October, 2026
---
Objectives of coalitions are described using temporal logic.

## Concurrent Game structures
$M = (Agt, S, Act, act, \delta, L)$

$Agt$ is a finite non empty set of agents
$S$ is a finite non empty set of states 
$Act$: finite set of actions
$L :S \to \mathcal{P}(PROP)$ is a labelling specifying a truth assignment for each state.

$act : Agt \times S \to \mathcal{P}(Act) \setminus \emptyset$ is the action manager. It means that for each pair (a,s), the agent a must have some action to do at the state s.
$act(a,s) \equiv$ set of agents that can be executed by the agent a from the state s
$\delta: S \times(Agt \to Act) \to S$
transition function
$\delta (s,f)$ is undefined if there is some agent a such that $f(a) \not \in act(a,s)$, This is called joint action. It is a partial function.


### Turn based CGS
At each state, there is atmost one agent that can perform more than one action. So at most one agent is deciding what to do, the action.


## Strategic Ability
To express that a coalition of agents have a collective strategy to enforce some property and to reason on it.