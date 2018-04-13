# Stacks and Queues

### Stacks and Queues
* value: collection of objects
* operations: insert, remove, iterate, test if empty
* Intent is clear when we insert

They differ in how they remove:
* Stack: "Last In, First Out": Examine the item most recently added.
`push` and `pop`
* Queue: "First In, First Out": Examine the item least recently added.
`enqueue` and `dequeue`

Stacks: stack is already implemented in JavaScritpt array. You can simply call `push` and `pop`
Queue: is already in implemented in Javascript array. You can call `push` and `shift`

### Client, implementation, interface
Separate interface from implementation.
Ex. stack, queue, bag, priority queue, symbol-table, union-find

Benefits
* Client can't know details of implementation => can choose any implementation
* Implementation can't know client needs => many clients (with different needs) are able to use same implementation
* Design: creates modular reusable libraries
* Performance: use optimized implementation when necessary

### Stacks
```
const StackOfStrings = () => {
  push(item){
  
  },
  pop(){
  
  },
  isEmpty(){
  
  }
}

```

### Stack: Linked-List Implementation 
O(1) - constant time

https://www.thatjsdude.com/interview/linkedList.html

https://www.geeksforgeeks.org/implementation-linkedlist-javascript/

Linked List:
First implement OO
Then OLOO 

Nodes of a singly-linked list are very similar to steps in a scavenger hunt. Each step contains a message (e.g. "You've reached France") and pointers to the next step (e.g. "Visit these latitude and longitude coordinates"). When we start sequencing these individual steps to form a sequence of steps, we are creating a scavenger hunt.  

If there is a head, we have to walk through the linked list chain to read the tail (tail is where the next node is null. Then we set the value of next at the tail to empty `node`

via https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392
```
const SinglyList = () => {
  this.head = null
  this._length = 0
}

SinglyList.prototype.push = val => {
  const node = {
    value: val,
    next: null
  }
  let currentNode = this.head
 
  // 1st use-case: an empty list. if head does not point to a node, assign `node` as the head of the list, increment the count, and return the node 
  if(!currentNode){
    this.head = node
    this._length++
    return node
  }
  // 2nd use-case: a non-empty list
  while(currentNode.next){
    currentNode = currentNode.next
  }
  // Once you find a node with no `next` value, assign it to the node being pushed in
  currentNode.next = node
  
  this._length++
  return node
}

SinglyList.prototype.remove = position => {
  let currentNode = this.head,
  length = this._length,
  count = 0, 
  messsage = {failure: 'Failure: non-existent node in this list.'},
  beforeNodeToDelete = null,
  nodeToDelete = null,
  deletedNode = null;
  
  // 1st use-case: an invalid position
  if (position < 0 || position > length) {
    throw new Error(message.failure);
  }

  // 2nd use-case: the first node is removed. this is `pop`
  if (position === 1) {
    this.head = currentNode.next;
    deletedNode = currentNode;
    currentNode = null;
    this._length--;

    return deletedNode;
  }
  
  // 3rd use-case: any other node is removed
  while (count < position) {
      // you stop at a position just before the node you want to delete
      beforeNodeToDelete = currentNode;
      nodeToDelete = currentNode.next;
      count++;
  }

  // Point the item before the node to delete at the deleted nodes reference to the following node
  beforeNodeToDelete.next = nodeToDelete.next;
  deletedNode = nodeToDelete;
  nodeToDelete = null;
  this._length--;

  return deletedNode;
 
}
```

Linked List takes constant time O(h)
```
function LinkedStackOfStrings(){
  this.first = null
}

const node = (val, next = null) => { 
  return({
    item: val,
    next 
  })
}

LinkedStackOfStrings.prototype.empty = function(){
  return this.first === null 
}

LinkedStackOfStrings.prototype.push = function(item){
  const oldFirst = this.first
  this.first = node(item, oldFirst)
}

LinkedStackOfStrings.prototype.pop = function(){
  const item = this.first.item
  this.first = this.first.next
  return item
}

const stringStack = new LinkedStackOfStrings()
stringStack.push("hello")
stringStack.push("world")
stringStack.push("noice")
stringStack.pop()
```

### Stack: array implementation
* push: add new item at arr[N]
* pop: remove item from arr[N-1]

Defect: stack overflows when N exceeds capacity

### Stack considerations
Overflow and underflow
* Underflow: throw exception if pop from an empty stack
* Overflow: use resizing array for array implementation

Null Items: We allow null items to be inserted

Loitering: Holding a reference to an object when it is no longer needed
```
{
  pop(){
    return s[--N]
  }
}

// should change to

{
  pop(){
    const item = s[--N]
    s[N] = null
    return item
  }
}

```

### Stack: resizing array implmentation
https://en.wikipedia.org/wiki/Dynamic_array

How to grow array?
* Repeated doubling ft f





