const QuickUnionUF = (n) => {
    const idArray = Array.from(Array(n).keys())

    const root = (r) => {
        while(r !== idArray[r]){
            r = idArray[r];
        }
        return r;
    }

    return {
        idArray,
        root,
        connected: (p,q) => root(p) == root(q),
        union: (p, q) => {
            const i = root(p)
            const j = root(q)
            return idArray[i] = j
        }
    }
}

const main = () => {
    const newQuickUnion = QuickUnionUF(10)
    newQuickUnion.union(1,2)
    console.log("newQuickUnion.union(1,2)", newQuickUnion.idArray)
    console.log("newQuickUnion.connected(1,2)", newQuickUnion.connected(1,2))
    console.log("newQuickUnion.connected(2,3)", newQuickUnion.connected(2, 3))
}

main()

