const WeightedQuickUnion = (n) => {
    const idArray = Array.from(Array(n).keys())
    const szArray = Array.from(Array(n).keys()).map(i => 1))

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
            if(i === j){
                return
            }
            if(szArray[i] < szArray[j]){
                idArray[i] = j
                szArray[j] += szArray[i]
            }else{
                idArray[j] = i
                szArray[i] += szArray[j]
            }
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
