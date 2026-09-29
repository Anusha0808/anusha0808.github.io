---
title: Energy Parity Games
draft: false
tags:
  - GOGR
  - Paper
date: 14 September 2025
---
Reference : https://lsv.ens-paris-saclay.fr/~doyen/papers/Energy_Parity_Games.pdf 

## Prelims 
#### simple energy games 
- Note that weights are encoded in binary
- $NP \cap coNP$ 
- Memoryless strategies are enough
- atmost $(N-1)\times W$ is needed to win if we can win at all 
- determined
- if we are starting from a vertex which is not winning for Player 1, then the same spoiling strategy of player 2 works against all initial credit values. 


#### parity games
- memoryless strategy 
- $NP \cap coNP$ 
- determined
- complement of a parity objective is parity 

## Strategy complexity of energy parity games
>[!info] Memory Required : $4 \times n \times d \times W$
>where n is the number of states, d is the max priority 
> idk what this is

>[!hint] Lemma 1:
>Let G be a player 1 energy parity game with n states.
>If player 1 wins from a state q_0, then player 1  has a winning strategy from q_0 with memory of size $2 \times (n-1)\times W +1$ and an initial credit $(n-1)\times W$

Player 1 games means all the vertices are of player 1
Still we need a strategy to win the objective, even if there is no one to oppose, because we want to keep the weight as high as possible

###### Proof: 
suppose $\rho$ is an optimal outcome.
Then minimal priority $inf(\rho)$ is even, $inf(\rho)$ is strongly connected. 


>[!summary] Lemma 2:
>G be energy parity Game
>for each winning state q, let v(q) be the min initial credit in q
>For all outcomes $\rho$ of an optimal strategy $\sigma$ from initial state $q_0$, if the initial credit is $v(q_0) + x$ for some $x \geq 0$, then energy level at all pos of $\rho$ where a state q occurs is atleast $v(q) + x$

The proof of the above follows from the minimality of v(q)
>[!summary] Lemma 3:
>For all energy parity games G, memoryless strategies are sufficient
for player 2 (i.e., the minimum initial credit for player 1 does not change if
player 2 is restricted to play memoryless).

We already know that parity games have memoryless strategies for both the players.
