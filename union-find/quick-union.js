const root = (idArray) => (i) => {
    while(i != idArray[i]){
        i = idArray[i]
    }
}


const QuickUnionUF = (n) => {
    const idArray = Array.from(Array(n).keys()).map(i => ({id: i}))

    const curriedRoot = root(idArray)

    return {
        connected: (p,q) => root(p) == root(q),
        union: (p, q) => {
            const i = root(p)
            const j = root(q)
            return idArray[i] = j
        }
    }
}

console.log(QuickUnionUF(10).union(1,2))
