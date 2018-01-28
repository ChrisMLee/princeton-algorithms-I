# Union Find

### Quick Find
Quick-find defect: Union too expensive

Quadratic time is much too slow. Quadratic algorithms don't scale with technology.

Takes N^2 array accesses to process a sequence of N union commands on N objects.

### Quick Union
Quick-union defect: Trees can get tall. You could end up with a long skinny tree, getting an object at the bottom can be too slow. 
Find too expensive (could be N array accesses)

### Improvements
Weighted Quick Union:  
* Modify quick union to avoid tall trees
* Keep track of size of each tree (number of objects)
* Balance by linking root of smaller tree to root of larger tree. Examples include `union by height` and `union by rank`. Avoid putting the large tree lower - that leads to long tall trees.

### Weighted quick-union Analysis
Running time:  
* Find: takes time proportional to depth of `p` and `q`
* Union: takes constant time, given roots.  

Proposition:  
Depth of any node `x` is at most `lg N`.
`lg` = base-2 logarithm  

Improvement #2: Path compression  
Quick union with path compression - Just after computing the root of p, set the id of each examined node to point at that root.

Make every other node in its path point to its grandparent (thereby halving path length)
```
  const root = (r) => {
      while(r !== idArray[r]){
          idArray[r] = idArray[idArray[r]]
          r = idArray[r];
      }
      return r;
  }
```

Weighted quick union (with path compression) makes it possible to solve problems that could not otherwise be addressed.

e.g. 10^9 unions and finds with 10^9 objects - WQUPC reduces time from 30 years to 6 seconds.


### Percolation
determine if an N * N system percolates  

Dynamic Connectivity solution to estimate percolation threshold
Q. How to check whether an N by N system percolates ?  
* Create an object for each site and name them 0 - N^2 - 1
* Sites are in same component if connected by open sites
* Percolates if any site in the bottom row is connected to any site in the top row
* Brute force algorithm - N^2 calls to `find`, for each site on the top, check each site on the bottom 

Clever trick:  
* Introduce two virtual site (and connection to top and bottom)
* Percolates if virtual top site is connected to virtual bottom site (efficient algorithm: only 1 call to connected)  

Q. How to model opening a new site ? 
A. Connect a newly opened site to all of its adjacent open sites (max 4 calls to `union`)  

Case Study: Union Find  
https://algs4.cs.princeton.edu/15uf/  

What is `O(log N)` ?
https://stackoverflow.com/questions/2307283/what-does-olog-n-mean-exactly  

```O(log N) basically means time goes up linearly while the n goes up exponentially. So if it takes 1 second to compute 10 elements, it will take 2 seconds to compute 100 elements, 3 seconds to compute 1000 elements, and so on.```







