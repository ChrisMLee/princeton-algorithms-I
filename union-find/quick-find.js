const QuickFindUF = (n) => {
    const idArray = Array.from(Array(n).keys()).map(i => ({id: i}))
    return {
        connected: (p,q) => idArray[p] === idArray[q],
        union: (p, q) => {
            const pId = idArray[p]
            const qId = idArray[q]
            return idArray.map((obj, index) => {if(obj === pId){ return qId }else{return obj} })
        }
    }
}


console.log(QuickFindUF(10).union(1,2))
