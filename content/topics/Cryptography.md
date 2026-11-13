---
title: cryptography
draft: false
tags:
  - mpri
date: 13 November, 2026
excludeFromIndex:
---
Instructor : Prof. Guillaume Scerri

## Class 1

> [!cite] Kerckhoff's principle
> The system should be, if not mathematically unbreakable, then unbreakable in practise

In this course we assume cryptography is secure.

##  Process algebra

*Running example*
$A \to B: A,$ sign $({s}_{{pr}_B}, sik_A)$
$B \to A:$ sign $({s}_{{pr}_A}, sik_B)$
#### syntax
$a \text{ terms }$
$X$ (infinite) set of variables
$N$ infinite set of names
$\Sigma$ set of function symbols 
$I$ set of indices 
##### Defintion 
The terms built on $X, N, \Sigma, \tau(X, N, \Sigma)$ is defined as 
$t := x | n | n \to_i \to_i \in (I \biguplus N)^\sigma | f(t_1, ...  , t_n) \text{ if } f/n \in \Sigma$    
#### Elementary Processes
$C \text{ set of channels }$
$p_e := in(c, x).Pe | out(c,t).Pe | \text{ let x = t in Pe} | \text{ if } t_1=t_2 \text{ then } Pe \text{ else } Pe | 0$ 
if $t_1 = t_2$ then P $\equiv$ if $t_1 = t_2 \text{ then P else 0}$
### Composition of Elementary Protocols
$P = P_e | P || P | !^i P$
where second one denotes parallel, and third one is replication

We consider protocols up to commutativity and associativity of parallel and replication. 

We need some renaming now.

Definition :
$P \space { i \to k } \space (i \in I , k \in N)$ for P in which every instance of i is replaced by k

$C(P)$ Channels used in P
$N(P)$ names used in P
$FV(P)$ free variables used in P

### semantics
what do we mean by computation and messages?

#### term semantics
$D$ Domain of messages , for example, in Turing Machines, it would be strings of bits.

def : $\textlbrackdbl . \textrbrackdbl$ is an interpretation of messages for $t \in \tau( X, N, \Sigma)$
$\sigma : X \to \tau(x, c, \sigma) \space \theta : X \to D$
$\sigma$ is substitution of terms
$\textlbrackdbl t \sigma \textrbrackdbl ^ \theta = \textlbrackdbl t \textrbrackdbl^{ \textlbrackdbl \sigma \textrbrackdbl ^ \theta}$ when 
 $\textlbrackdbl \sigma \textrbrackdbl ^ \theta (x) =  \textlbrackdbl \sigma (x) \textrbrackdbl ^ \theta$ if $x \in Dom(\sigma)$ , $\theta(x)$ otherwise
Satisfied if $\textlbrackdbl f \textrbrackdbl: D^n \to D$
#### Attacker 
An attacker is a function 
$A : D* \to (C \times D) \biguplus ( I \times N)$
#### Traces 
A protocol state is a triple $(P, sigma, \phi)$ with p protocol, $\sigma : x \to D, \phi \in D*$
We assume the free variables of the protocol are distinct from the bound variables.

ded here
