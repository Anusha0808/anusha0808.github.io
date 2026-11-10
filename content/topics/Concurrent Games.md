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

Coalition $A \subseteq Agt$
joint action $g: A \to Act$ a joint strategy of the coalition

so we assume that at the same state, they do the same transitions.
### Turn based CGS
At each state, there is atmost one agent that can perform more than one action. So at most one agent is deciding what to do, the action.

## Strategic Ability
To express that a coalition of agents have a collective strategy to enforce some property and to reason on it.

ATL is a way to quantify over strategies by a coalition
## ATL
$<<A>> \phi$ coalition A has a collective strategy to enforce the temporal property $\phi$

A collective strategy is a tuple of individual strategies.

We encode several modalities in one over here. This has a term -- 

In turn based CGS, we can push the negation of $\not \models$ to inside and $<<A>>$ becomes $<< \bar{A}>>$

do we have history deterministic strategies? not required! only positional strategies suffice. so we only have finitely many strategies to brute force our way through.


## variant semantics of ATL
- plans instead of strategies 
- finite memory / memoryfull strategies ( not required for ATL, but ATL$^*$ for example)
- quanitify over strategies 

## strategic logic
We quantify over strategies. ( like monadic second order logic )

We are "internalising" the semantics of ATL, ATL$^*$ 

### incomplete information in ATL

Some states cannot be distinguished by a player. For example $s_0 \equiv s_1$ _for_ Agent $1$

