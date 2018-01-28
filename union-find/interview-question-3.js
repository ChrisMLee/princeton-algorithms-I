/*
Successor with delete: Given a set of n integers S={0,1,...,n−1} and a sequence of requests of the following form:
    - Remove x from S
    - Find the successor of x: the smallest y in S such that y≥x.

    design a data type so that all operations (except construction) take logarithmic time or better in the worst case.
*/



const S = new Set([0,1,2,3,4,5])

const remove = (x, set) => {
    return set.delete(x)
}
