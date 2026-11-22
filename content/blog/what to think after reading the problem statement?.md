---
title: my tips for solving problems
draft: false
tags:
  - olympiad
  - tips
  - explorerexclude
date: 9 November, 2026
---
## what to think after reading the problem statement?
- [ ] What is the size of $n$? Can I afford to do a brute force algorithm , or go through all the subsets? 
- [ ] If there is an operation mentioned in the problem, does the order of operation matter? If I change the order, does the end result change? If yes, then I might wanna look at [[greedy]]
- [ ] Will sorting the array make the problem easier? Am I allowed to sort?
- [ ] What if, instead of trying to find the answer, I check whether the answer is equal to some number $x$. Does $x$ satisfy all my conditions? What if I go through all these $x$'s and try to find the best one - maybe that could be my answer?
	What is the time complexity of checking whether my $x$ is *good?* Can I afford to check for all possible $x$ or do I need to optimise for that?


## now the coding part.
The first approach might not always give the cleanest code! Try to approach the problem with a different angle if time permits, and who knows you will save that time in coding out a shorter solution

Always make functions! If you are doing some computation twice - make a function! If there are too many nested loops - function! If there are multiple ingredients to the code and its confusing how to connect all of them, make a function for each of those ingredients! 