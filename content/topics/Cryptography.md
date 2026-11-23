---
title: cryptography
draft: false
tags:
  - mpri
date: 13 November, 2026
excludeFromIndex:
---
Instructor: Prof. Guillaume Scerri

## Class 1

> [!cite] Kerckhoff's principle The system should be, if not mathematically unbreakable, then unbreakable in practice.

In this course we assume cryptography is secure (i.e. we reason at the protocol level, not the primitive level).

## Process algebra

_Running example:_ $$A \to B : A,\ \operatorname{sign}(s, pr_B, sik_A)$$ $$B \to A : \operatorname{sign}(s, pr_A, sik_B)$$

### Syntax

- $X$: an infinite set of **variables**
- $N$: an infinite set of **names**
- $\Sigma$: a set of **function symbols**
- $I$: a set of **indices**

> [!definition] Terms The terms built on $X,N,\Sigma$, written $\tau(X,N,\Sigma)$, are defined by $$t ::= x \mid n \mid n!\to_i \mid f(t_1,\dots,t_n)$$ where $x\in X$, $n\in N$, $\to_i\ \in (I \uplus N)^\sigma$, and $f/n \in \Sigma$.

### Elementary processes

$C$: a set of **channels**.

> [!definition] Elementary process $$P_e ::= \operatorname{in}(c,x).P_e \mid \operatorname{out}(c,t).P_e \mid \texttt{let } x=t \texttt{ in } P_e \mid \texttt{if } t_1=t_2 \texttt{ then } P_e \texttt{ else } P_e \mid 0$$ with the convention $\texttt{if } t_1=t_2 \texttt{ then } P \equiv \texttt{if } t_1=t_2 \texttt{ then } P \texttt{ else } 0$.

### Composition of elementary protocols

$$P ::= P_e \mid P | P \mid {!}^i P$$

where $|$ denotes parallel composition and ${!}^i$ denotes replication (indexed by $i$). Protocols are considered up to commutativity and associativity of $|$ and replication.

**Renaming.** $P{i \to k}$ ($i \in I$, $k \in N$): $P$ with every instance of $i$ replaced by $k$.

- $C(P)$: channels used in $P$
- $N(P)$: names used in $P$
- $FV(P)$: free variables of $P$

### Semantics

> [!question] What do we actually mean by _computation_ and _messages_, formally?

#### Term semantics

$D$: the **domain of messages** (e.g. for Turing machines, bit-strings).

> [!definition] Interpretation $\llbracket\cdot\rrbracket$ is an **interpretation** of messages: for $t\in\tau(X,N,\Sigma)$, a substitution $\sigma : X \to \tau(X,N,\Sigma)$, and a valuation $\theta: X \to D$, $$\llbracket t\sigma\rrbracket^\theta = \llbracket t\rrbracket^{\llbracket\sigma\rrbracket^\theta}$$ where $$\llbracket\sigma\rrbracket^\theta(x) = \begin{cases}\llbracket \sigma(x)\rrbracket^\theta & x \in \operatorname{Dom}(\sigma)\ \theta(x) & \text{otherwise}\end{cases}$$ satisfied whenever $\llbracket f\rrbracket : D^n \to D$ for each $f\in\Sigma$.

#### Attacker

> [!definition] Attacker An **attacker** is a function $$A : D^* \to (C\times D) \uplus (I \times N)$$

#### Traces

> [!definition] Protocol state A **protocol state** is a triple $(P,\sigma,\phi)$ with $P$ a protocol, $\sigma : X \to D$, $\phi \in D^*$. (We assume the free variables of the protocol are distinct from its bound variables.)

> [!todo] Notes stop here — pick up with the definition of traces next class.