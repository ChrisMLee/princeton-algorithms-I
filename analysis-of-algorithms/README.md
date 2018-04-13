# Anaylsis of Algorithms

"How many times do I have to turn the crank?"



Knuth: use scientific method to understand performance.

Observe: running time of computer
Hypothesize: model consistent with observations 
Predict: events using hypothesis 
Verify: predictions by making further observations
Validate: until hypothesis and predictions agree 

Experiments must be reproducible.  
Hypotheses have to be falsifiable.  

n^2 / (n lg n) = n / lg n = 1,000,000/lg(1,000,000) = 1,000,000 / 20 = 50,000  

2^4

log 2 16 = 4

### Observations


```
function threeSum(ints){
  const n = ints.length
  let count = 0
  for(let i = 0; i < n; i++){
    for(let j = i+1; j < n; j++){
      for(let k = j + 1; k < n; k++){
        if(ints[1] + ints[j] + ints[k] == 0){
          count++
        }
      }
    }
  }
  return count
}
```

### Mathematical Models
Total running time: sum of cost * frequency for all operations

We only count the most expensive operation (where cost * frequency is the highest).

Tilde notation - we ignore lower order terms (e.g. lean towards cubed or squared etc.)

We use approximate models.

### Order of Growth classifications

i - constant, statement
log N - logarithmic, divide in half, example: binary search
N - linear, loop
N log N - linearithmic, divide and conquer, example: mergesort
N^2 - quadratic, double loop, example: check all pairs
N^3 - cubic, triple loop, example: check all triples
2^N - exponential, exhaustive search

We strive for N or N log N
Quadratic and Cubic are not feasible for large inputs

Algorithms for which the running time is logarithmic are those where processing discards a large quantity of values in each iterations. The binary search algorithm you encountered a few weeks back (in the "guess a number" game) is an example. In each iteration, the algorithm discards half the possible values for the searched-for number. 

### Theory of Algorithms
Best Case: Lower bound on cost
* Determined by "easiest" input
* Provides a goal for all inputs

Worst Case: Upper bound on cost
* Determined by "most difficult" input
* Provides a guarantee for all inputs

Average Case: Expected cost for random input
* Need a model for "random input"
* Provides a way to predict performance

Big Theta - asymptotic order of growth, Θ(N^2)  used to classify algorithms

Big Oh - Θ(N^2) and smaller, O(N^2), develop upper bounds 

Big Omega - Θ(N^2) and larger, develop lower bounds



1 Sum Example:

Upper Bound - brute force algorithm with O(N) for example
Lower Bound - You have to look at all entries in the array. 

Algorithm Design Approach:
Start:
* Develop an algorithm
* Prove a lower bound

Gap?
* Lower the upper bound (discover a new algorithm)
* Raise the lower bound (more difficult)

### Memory

Bit: 0 or 1
Byte: 8 bits
Megabyte: 1 million or 2^20 bytes
Gigabyte: 1 billion or 2^30 bytes


### Interview Questions

1) 3-SUM in quadratic time. Design an algorithm for the 3-SUM problem that takes time proportional to n2 in the worst case. You may assume that you can sort the n integers in time proportional to n2 or better

```
// n^3
function threeSum(arr) {
   let count = 0
   for(var i = 0; i < arr.length ; i++){
     for(var j = i+1; j < arr.length; j++){
        for(var k = j+1; k < arr.length; k++){
           if(arr[i] + arr[j] + arr[k] == 0){
             count++
           }
        } 
     } 
   }
   return count
}
```
```
// n^2
function threeSum(arr){
  let count = []
  for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
      const sumToMatch = - (arr[i] + arr[j])
      const k = binarySearch(sumToMatch, arr)
      if(k != null && k > j){
        count.push([arr[i], arr[j], arr[k]])
      }
    }
  }
  return count
}

// O(log n)
const binarySearch = (key, arr) => {
  let s = 0
  let e = arr.length - 1
  while(s <= e){
    let mid = Math.floor((s + e) / 2)
    if (key < arr[mid]){
      e = mid - 1
    } else if (key > arr[mid]){
      s = mid + 1
    } else {
      return mid
    }
  }
  return null
}
```

> Thank you for your response. 
> Hint: given an integer 𝚡 and a sorted array 𝚊[] of n distinct integers, design a linear-time algorithm to determine if there exists two distinct indices 𝚒 and 𝚓 such that 𝚊[𝚒]+𝚊[𝚓]==𝚡.

2) Search in a bitonic array. An array is bitonic if it is comprised of an increasing sequence of integers followed immediately by a decreasing sequence of integers. Write a program that, given a bitonic array of n distinct integer values, determines whether a given integer is in the array.

```
const ascendingSearch = (int, arr) => {
  let s = 0
  let e = arr.length -1
  while(s <= e){
    let mid = Math.floor((s + e) / 2)
    if(int < arr[mid]){
      e = mid - 1
    } else if (int > arr[mid]){
      s = mid + 1
    } else {
      return mid
    }
  }
  return -1
}


const descendingSearch = (int, arr) => {
    let s = 0
    let e = arr.length -1
    while(s <= e){
      let mid = Math.floor((s + e) / 2)
      if(int < arr[mid]){
        s = mid + 1
      } else if (int > arr[mid]){
        e = mid - 1
      } else {
        return mid
      }
    }
    return -1
}

// findBitonicPoint([1,2,3,4,3,2,1], 0, 6)
// O(log n)
const findBitonicPoint = (arr, l, r) => {
  let mid = (r + l) / 2
  if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid  + 1]){
   return mid 
  }else if(arr[mid] > arr[mid-1] && arr[mid] < arr[mid + 1]){
   return findBitonicPoint(arr, mid, r) 
  }else{
   return findBitonicPoint(arr, l, mid) 
  }
}

const bitonicSearch = (key, arr) => {
  const middleIndex = findBitonicPoint(arr, 0, arr.length -1)
  if(key === arr[middleIndex]){
    return middleIndex
  }else{
    const ascSearch = ascendingSearch(key, arr.slice(0,middleIndex))
    if(ascSearch != -1){
      return ascSearch
    }
    return descendingSearch(key, arr.slice(middleIndex, arr.length))
  }
}
```

>Hints: Standard version. First, find the maximum integer using ∼1lgn compares—this divides the array into the increasing and decreasing pieces.

> Signing bonus. Do it without finding the maximum integer.

3) Egg drop. Suppose that you have an n-story building (with floors 1 through n) and plenty of eggs. An egg breaks if it is dropped from floor T or higher and does not break otherwise. Your goal is to devise a strategy to determine the value of T given the following limitations on the number of eggs and tosses:

```
const eggBreakLevel = (floors, breakFn) => {
  for(const [index, floor] of floors.entries()){
    if(!breakFn(floor) && breakFn(floors[index +1])){
      return floor 
    }
  }
}

const eggBreakLevel = (floors, breakFn) => {
  let start = 0
  let end = floors.length
  while(start <= end){
    let mid = Math.floor((start + end) / 2)
    if(!breakFn(floors[mid]) && breakFn(floors[mid + 1])){
      return mid 
    }else if(!breakFn(floors[mid]) && !breakFn(floors[mid + 1])){
      start = mid + 1
    }else if (breakFn(floors[mid]) && breakFn(floors[mid -1])){
      end = mid - 1
    }
  }
}
```

> Version 0: sequential search.
> Version 1: binary search.
