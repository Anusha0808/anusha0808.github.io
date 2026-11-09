---
title: greedy
draft: false
tags:
  - olympiad
  - explorerexclude
date: 9 November, 2026
---
> ORDER MATTERS!!!


If the problem has an operation mentioned, and if changing the order of the operation change the end result, think greedy!!

## what does "*think greedy*" mean?

### a problem to start with.

Let us have a look at a problem called [Cow Tipping](https://usaco.org/index.php?page=viewproblem2&cpid=689)

A few questions which we can help us start thinking
- [ ] Suppose the bottom right cell is a 1, then we need to make it 0. For this we will need to do the operation on the whole grid, which will flip the entries of all the cells. 
- [ ] Where should we put this operation? At the beginning, somewhere in the middle or towards the end? If we put at the end, i.e. make this the last operation, then the grid before the last operation should consist of all 1s and no 0s.
- [ ] What if we make it the first operation? Then we can get "rid" of it after fixing it, and we wont have to worry about it anymore. We can choose to forget about it, and focus on the resulting picture we have which looks like this :

![[Pasted image 20261109152804.png|284]]
![[Pasted image 20261109152954.png|292]]
Now, how about we focus on the new "corner" pieces we have? the red ones?

After fixing them , maybe, maybe we can forget them? Like how we did before? Can we do it?

Well yes, we can do the operation on the biggest rectangle that contains red cells in the second grid. And then we can "delete" them.

![[Pasted image 20261109153341.png]]
And we can keep fixing the cells in the last row and last column by following the arrows and then eventually we will be left with a smaller grid

![[Pasted image 20261109153454.png|336]] 
And now we can work on a smaller problem using the same procedure.


### but how do we code?
It seems like we are seperately solving each grid. For example, we start with a $n \times n$ grid, keep deleting the $n^{th}$ row and column, and we will be left with a smaller $(n-1) \times (n-1)$ grid to solve.

So how about having  ==function== which takes the size of the grid as input?

```python
def solve_grid(grid, int n):
{
counter=0
	# first follow the leftward purple arrow
	for i in range(n, 1, -1):
		if( grid[n][i]==1)
			# we need to flip!!
			## we do an oprtation here and flip all the entries
			counter++
	
	# now we do the same thing but we go upwards, following the green arrow
	
	# we are left with a smaller grid to work with!!
	return counter + solve_grid(grid[1...n-1][1..n-1], n-1)
}
```