# Binary Search Tree

https://hackernoon.com/data-structures-in-javascript-pt-1-binary-search-trees-2c231cf2c8e1

> Binary search trees are a type of binary tree that are organized in the following way:
> The value of each left child node must be less than its parent node.
> The value of each right child node must be greater than its parent node

https://github.com/tim-hr/stuff/wiki/Time-complexity:-Binary-search-trees
Best case is O(log n)

The worst-case scenarios for BST's all involve a completely unbalanced tree, which degenerates into a singly-linked list. For example, if you just add 1, 2, 3, 4, 5 in that order to a simple (non-self-balancing) BST implementation, then all your nodes will only have a right child. You then do not get the "halving at every step" characteristic that gives BST's their power.

In this worst-case scenario:

access is O(n), search is O(n), insertion is O(n), deletion is O(n)


```
function BST(value){
  this.value = value
  this.right = null
  this.left = null
}

BST.prototype.insert = function(value){
  if(value <= this.value){
    if(!this.left){
      this.left = new BST(value)
    } else {
      this.left.insert(value)
    }
  } else if (value > this.value){
    if(!this.right){
      this.right = new BST(value)
    } else {
      this.right.insert(value)
    }
  }
}

// Binary searches like this have logarithmic run-times and have an O(log n) time complexity.
BST.prototype.contains = function(value){
  if(this.value === value){
    return true
  }
  if(value < this.value){
    if(!this.left){
      return false
    } else {
      return this.left.contains(value)
    }
  } else if(value > this.value){
    if(!this.right){
      return false
    }else{
      return this.right.contains(value)
    }
  }
}

BST.prototype.depthFirstTraversal = function(iteratorFunc, order){
  if(this.order === "pre-order"){
    iteratorFunc(this.value)
  }
  if(this.left){
    this.left.depthFirstTraversal(iteratorFunc, order)
  }
  if(order === "in-order"){
    iteratorFunc(this.value)
  }
  if(this.right){
    this.right.depthFirstTraversal(iteratorFunc, order)
  }
  if(order === "post-order"){
    iteratorFunc(this.value)
  }
}

BST.prototype.breadthFirstTraversal = function(iteratorFunc){
  // start the queue at the root node aka this
  let queue = [this]
  // while loop runs as long as queue is not empty
  while (queue.length){
    // take node out of queue, and work on it with iteratorFunc
    let treeNode = queue.shift()
    iteratorFunc(treeNode)
    // if the node has left or right child, push them onto the queue
    if(treeNode.left){
      queue.push(treeNode.left)
    }
    if(treeNode.right){
      queue.push(treeNode.right)
    }
  }
}

// traverse tree recursively and extract min value
BST.prototype.getMinVal = function(){
  if(!this.left){
    return this.value
  }else{
    return this.left.getMinVal()
  }
}


// traverse the tree recursively and extract max value
BST.prototype.getMaxVal = function(){
  if(!this.right){
    return this.value
  }else{
    return this.right.getMaxVal()
  }
}

```

### Depth-First Search

> In depth-first search, you start at the root node and traverse a branch all the way down to the bottom most node or leaf node.

There are three different types of depth-first search methods:

* Pre-order — hits the current node data before traversing both left and right subtrees
* In-order — hits the current node data after traversing the left subtree but before the right subtree
* Post-order — hits the current node data after traversing both left and right subtrees

```
BST.prototype.depthFirstTraversal = function(iteratorFunc, order){
  if(this.order === "pre-order"){
    iteratorFunc(this.value)
  }
  if(this.left){
    this.left.depthFirstTraversal(iteratorFunc, order)
  }
  if(order === "in-order"){
    iteratorFunc(this.value)
  }
  if(this.right){
    this.right.depthFirstTraversal(iteratorFunc, order)
  }
  if(order === "post-order"){
    iteratorFunc(this.value)
  }
}

```

### Breadth-First Search

> In breadth-first search, we traverse each level of the tree systematically before moving on to the next level of the tree. 

```
BST.prototype.breadthFirstTraversal = function(iteratorFunc){
  // start the queue at the root node aka this
  let queue = [this]
  // while loop runs as long as queue is not empty
  while (queue.length){
    // take node out of queue, and work on it with iteratorFunc
    let treeNode = queue.shift()
    iteratorFunc(treeNode)
    // if the node has left or right child, push them onto the queue
    if(treeNode.left){
      queue.push(treeNode.left)
    }
    if(treeNode.right){
      queue.push(treeNode.right)
    }
  }
}
```

### DFS vs BFS
There are many different use cases for DFS and BFS. Let’s say we built a family tree and stored it in a binary search tree structure. Each family member node also had an attribute that held data on whether or not the member is deceased. We want to find all the members that are still currently alive. In this case, depth-first search would be a good solution since we want to traverse to the deepest possible node or leaf node of each branch and the data we want is most likely deeper in the tree.

What if we wanted the ancestors instead? If this were the case, then we want to collect all the nodes that are up near the top or the root node. It would be better for us to sweep the tree level by level via breadth-first search here.
























