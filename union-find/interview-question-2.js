/*
  Union-find with specific canonical element. Add a method 𝚏𝚒𝚗𝚍() to the union-find data type so that 𝚏𝚒𝚗𝚍(𝚒) returns the largest element in the connected component containing i. The operations, 𝚞𝚗𝚒𝚘𝚗(), 𝚌𝚘𝚗𝚗𝚎𝚌𝚝𝚎𝚍(), and 𝚏𝚒𝚗𝚍() should all take logarithmic time or better.

  For example, if one of the connected components is {1,2,6,9}, then the 𝚏𝚒𝚗𝚍() method should return 9 for each of the four elements in the connected components.
*/

// element ? = {} ?

// largest element containing i

// Hint: maintain an extra array to the weighted quick-union data structure that stores for each root 𝚒 the large element in the connected component containing 𝚒

const UnionFind = (n) => {
    const idArray = Array.from(Array(n).keys())
    const szArray = Array.from(Array(n).keys()).map(i => 1))

    const root = (r) => {
        while(r !== idArray[r]){
            r = idArray[r];
        }
        return r;
    }

    return {
        union: (p, q) => {
            const i = root(p)
            const j = root(q)
            if (i === j){
                return
            }
            if(szArray[i] < szArray[j]){
                idArray[i] = j
                szArray[i] += szArray[j]
            }else{
                idArray[j] = i
                szArray[j] += szArray[i]
            }

        }
    }
}
