---
title: Original Problems
draft: false
tags:
  - "#stems"
date: 12 January, 2026
---
Here are some of the problems I proposed and were used in CMI's STEMS CS paper, which is my university's annual open book exam for high school and undergraduate students in India. I was one of the STEMS CS subject heads in 2026 and 2025 edition.  

[Link](https://tessellate.cmi.ac.in/stems/resources/) to the paper and solutions

# STEMS CS 2025
### Objectives
1) A natural number $n$ is called *nice* if its base $4$ representation has all non-zero digits and forms a palindrome. Find the number of *nice* numbers less than $4^{10}$ which are divisible by $3$.

2) You are given 2 disjoint directed paths of length 2025 and 2027. From each vertex out of these 2 paths, add one edge to any vertex on the other path. Find the number of such graphs which do not contain any directed cycle.
![[Pasted image 20260112134755.png]]

3) In the following figure, each cell stores a value of 0 or 1. Each cell which is not in the bottom layer has value 1 if between the two cells directly below it, the value in the one to the left is smaller than the value on the right. Otherwise, the cell has value 0.
   Determine the expected value of the topmost cell if each cell in the bottom layer is independently chosen to be $0$ or $1$ with equal probability. Express your answer as $a+b$ where $\frac{a}{b}$ is the expected value in reduced form.
![[Pasted image 20260112134807.png]]
4)  A directed graph $G = (V, E)$ with edges colored from $1$ to $k$ is a *complete semi-automaton* on $k$ colors if every vertex $v \in V$ has exactly one outgoing edge of each color. A word $w$ is a finite sequence of colors, and its *run vertex* from a vertex $v$ is a vertex $u$ such that there exists edges $e_1, \dots, e_t$ such that $v \in e_1, u \in e_t$ and the $i^{th}$ color of the word is the color of $e_i$, $1 \leq i \leq t$.  A word $w$ is *anti-synchronizing* if, for any pair of distinct vertices $s$ and $t$, the run vertices from $s$ and $t$ are distinct. Find the number of complete semi-automata on 4 colors and 5 vertices that have at least one non-empty anti-synchronizing word and give the answer modulo 99.
### Subjectives
### Matrix filling problem
Find all $n$, for which it is possible to fill an $n \times n$ matrix with entries from $\{1, \dots, n\}$ such that the following two conditions are satisfied:
     There are exactly $n$ distinct entries in each row and column.
     No contiguous sequence of length $\geq 3$ horizontally or vertically is monotonically increasing or decreasing.


# STEMS CS 2026
### Grid Coloring
Consider a $2n\times 2n$ square grid, divided into four Quarters, each of which are further subdivided into Regions as shown in $\text{Fig 1(a)}$. Now, Anusha chooses to infect each region with $\frac{1}{2}$ probability. If a Region is chosen to be infected, then she randomly colors one of the cells contained in the region with uniform probability.

We call a particular coloring of the grid *nice* if we can find a connected region consisting of white cells surrounded on all sides by colored cells. For example, $\text{Fig 1 (b)}$ is *nice*, while $\text{Fig 1 (c)}$ is not.

What is the probability that after the infection process is completed, the grid is *nice*?
![[Pasted image 20260112135703.png]]
### Noughts and Crosses
You are given an $n \times n$ matrix $B$, where each cell is either ⭕ or ❌, and $n = 2k + 1$ for some $k > 0$. The center of the matrix is the pivot at $(0, 0)$. The top-left cell is indexed as $(-k, -k)$, and the bottom-right cell as $(k, k)$.
A layer of the board is defined for each integer $i \in \{1, 2, \dots, k\}$, where the $i$-th layer consists of the set of cells $(x, y)$ such that:
$$
\max(|x|, |y|) = i
$$
The board is called **AWESOMEE** if, for every $i \leq k$, all four corners of the $i$-th layer contain the same value (either ⭕ or ❌).

##### Operations
You can perform the following operations to modify the matrix:
1. **Layer Rotate**: Rotate any layer $i$ clockwise, shifting its elements in a circular manner.
2. **Half Diagonal Shift**: You can select any half-diagonal $D_i$ (where $i \in \{1, 2, 3, 4\}$) and cycle shift the elements of that diagonal tow
3. ards the pivot. A half-diagonal  $D_1$ consists of the cells $(-k, -k), (-k+1, -k+1), \dots, (-1, -1)$, $D_2$ consists of the cells $(k, -k), (k-1, -k+1), \dots, (1, -1)$, and so on.

##### Objective
Your task is to find a strategy that minimizes the total number of operations (Layer Rotates and Half Diagonal Shifts) needed to make the board **AWESOMEE**, where the board satisfies the condition that for all layers $i \leq k$, the four corners of the $i$-th layer are equal.

![[Pasted image 20260112135559.png]]
### Get the DAG back 
Given $D$, a Directed Acyclic Graph (DAG), we define the graph $\text{back}(D)$ in the following way: it contains all the vertices and edges of $D$, and if there is a path of non-zero length from $v$ to $u$ in $D$, then we add an edge from $u$ to $v$ in $\text{back}(D)$.  
Describe an efficient algorithm which, when given a directed graph $G$, decides if there exists a DAG $D$ such that $\text{back}(D) = G$, and if so, outputs $D$.

# Discarded problems
### Cyclic MEX
It was not used because it is solvable by chatGPT :(. Otherwise, it could have been a good P1 on both the papers.

Given integers $n > 0$, $k > 0$ (even), $k \leq n$, let $m = n \cdot k$. A ring $R$ with $m$ compartments, is indexed $0$ to $m-1$ (the indices are considered modulo $m$). It is filled as follows:

1. For $i = 1$ to $2n$:
   - Select an index $j$ such that $R[j + tk]$ for all $t = 0$ to $((k/2) - 1)$ are empty.
   - Fill these $k/2$ compartments with $i$.
This ensures $R$ is completely filled.
- **Arc:** A contiguous subsegment of $R$.
- **Ugliness:** The MEX (minimum excluded value) of the integers in an arc.
- **Total Ugliness:** The sum of ugliness over all arcs of size $k$.
Find a way to minimise the **total ugliness** of $R$.

