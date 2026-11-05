---
title: Propositional Logic
draft: false
tags:
  - logic
date: 12 July, 2025
---
## Definitions
### What is a proposition?
A proposition is a *"declarative sentence that is either true or false"*.
For example - questions and commands are not propositions

>[!caution] A proposition might also be called a statement

### Atomic Propositions
A statement/proposition is called atomic, if it has no connectives or quantifiers. It is called compound otherwise.
## Syntax
infinite set of atomic propositions $\mathbb{P}= \{ p_{0}, p_{1}, ..\}$
Two logical connectives ¬ (not) and $\vee$ (or)
Set $\phi$ of formulas of propositional logic is the smallest set satisfying the following conditions:
- Every atomic prop $p$ is a member of $\phi$
- If $\alpha$ is a member of $\phi$ , so is ¬ $\alpha$
- If $\alpha$ and $\beta$ are members of $\phi$, so is $\alpha \vee \beta$

##### Derived Connectives
$and$ :  $\alpha \wedge \beta = \lnot(\lnot \alpha \lor \lnot \beta)$
$implies$ : $\alpha \supset \beta = \lnot \alpha \lor \beta$
$\text{iff}$ : $\alpha \equiv \beta = (\alpha \supset \beta) \land (\beta \supset \alpha)$

### Exercise
According to the Pigeonhole Principle, if we try to place n+1 pigeons
in n pigeonholes, then at least one pigeonhole must have two or more pigeons. For
$i ∈ {1, 2, . . . , n+1}$ and $j ∈ {1, 2, . . . , n}$, let the atomic proposition $p_{ij}$ denote that
the $i^{th}$ pigeon is placed in the the $j^{th}$ pigeonhole. Write down a formula expressing
the Pigeonhole Principle. What is the length of your formula as a function of n?


###### SOLUTION
Suppose we also had a connective $\exists$
Then using that, the formula becomes
$\exists i \exists j,k : p_{ij} \land p_{ik}$  

Now we can derive the logical connective $\exists$
Let $\beta_{ijk} = p_{ij} \land p_{ik}$ 
Let $\alpha_i = \beta_{i11} \lor \beta_{i12} ... \lor \beta_{inn}$
Then the original formula becomes 
$\alpha_1 \lor \alpha_2 \lor ... \lor \alpha_{n+1}$

Length of the formula : $n \times (n-1) \times (n+1)$ 

Shorter solution? I do not have it right now.

## Satisfiability and Validity
A formula $α$ is said to be satisﬁable if there is a valuation v such that $v(α) = ⊤$. We write $v ⊨ α$ to indicate that $v(α) = ⊤$.
The formula α is said to be valid if $v ⊨ α$ for every valuation v. We write $⊨ α$
to indicate that α is valid. We also refer to valid formulas of propositional logic as [[Tautology and Contradictions|tautologies]]
###### Proposition 
```
Let α be a formula. α is valid iﬀ ¬α is not satisﬁable.
```

### Vocabulary 
Since testing the validity of a formula $\alpha$ involves checking the truth value across an uncountable number of valuations, we have a way to decrease this.
We check the effect of a valuations on the atomic prop mentioned in $\alpha$

We inductively define $Voc(\alpha)$
> $p\in \mathbb{P} , Voc(p) = p$
> 
> $\alpha = \lnot \beta, Voc(\alpha) = Voc(\beta)$
> 
> $\alpha = \beta \lor \gamma, Voc(\alpha) = Voc(\alpha) \cup Voc(\beta)$

I mean still we will have to look at uncountable number of valuations right?
This is still not decreasing the number of valuations that we need to check? So why do we have this?
## Axiomatisation
I will use $\implies$ instead of $\supset$. (It is just easier to read)
a good resource : https://krchowdhary.com/axiomatic.pdf

Axiom Schemes:
> $\alpha \implies (\beta \implies \alpha)$
> $(\alpha \implies ( \beta \implies \alpha )) \implies (( \alpha \implies \beta) \implies (\alpha \implies \beta)$
> $(\lnot \beta \implies \lnot \alpha) \implies ((\lnot \beta \implies \alpha) \implies \beta$
> MP : $\frac{\alpha, \alpha \implies \beta}{\beta}$

The first three axioms are _tautologies_ 

## Compactness and Strong Completeness

> [!important] Logical Consequence
>  Let X be a set of formulas and v be a valuation. We write $v \models X$ to denote $v \models \beta$ for every formula $\beta \in X$. A formula α is a logical consequence of X , written $X ⊨ α$, if for every valuation v such that $v ⊨ X$ it is also the case that $v ⊨ α$


> [!important]  Derivability
> Let X be a set of formulas and v be a valuation. We say that a formula α is derivable from X, written $v \vdash \beta$ if there exists a sequence $\alpha_1, \alpha_2 , .. , \alpha_n$ of formulas such that $\alpha_n = \alpha$ and for $i \in \{1,2,..,n\}$, $\alpha_i$ is either a member of X , or an instance of one of the axioms of AX, or is derived from $α_j , α_k , j , k < i$ , using the inference rule MP.

 Motivation for $X$ and Logical Consequence
> It is possible that sometimes are not concerned if a given logical formula $\alpha$ is always true, rather we might be interested that if under some circumstances, $\alpha$ is true.
> In this situation, we can represent these "circumstances" or "constraints" using a set of formulas $X$. And now we can ask under $X$ and a valuation $v$, can $\alpha$ be true? 


$X \models \alpha$ : *$\alpha$ is a logical consequence of X*
$X \vdash \alpha$ : *$\alpha$ is derivable from X*

### Theorem: Strong Completeness
>Let $X \subseteq \phi$ and $\alpha \in \phi$, Then $X \models \alpha$ iff $X \vdash \alpha$


# Good Resources to check this?


- [[https://www.logicinaction.org/|Logic in Action]] : Need to test this
- 