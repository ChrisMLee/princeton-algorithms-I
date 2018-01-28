/*
  Social network connectivity. Given a social network containing n members and a log file containing m timestamps at which times pairs of members formed friendships, design an algorithm to determine the earliest time at which all members are connected (i.e., every member is a friend of a friend of a friend ... of a friend). Assume that the log file is sorted by timestamp and that friendship is an equivalence relation. The running time of your algorithm should be mlogn or better and use extra space proportional to n.
*/

const members = [1,2,3,4,5,6,7]

const logFile = [
    {pair: [1,4], timestamp: 1},
    {pair: [2,4], timestamp: 2},
    {pair: [3,7], timestamp: 3}
]

// root = find
const root = (idArray, r) => {
/*
  arr = [0,1,3,5,4,5]
  root(arr, 2)
  2 !== arr[2]
  r = arr[2] (3)

  3 !== arr[3]
  r = arr[3] (5)

  5 == 5
  return 5
*/
    while(r !== idArray[r]){
        r = idArray[r];
    }
    return r;
}

const connected = (idArray, p,q) => root(idArray, p) == root(idArray, q)

const union = (idArray, p, q) => {
    const i = root(p)
    const j = root(q)
    return idArray[i] = j
}

const idArray = Array.from(Array(n).keys())

const allConnected = (idArray) =>{
    let seen = {}
    const uniqueItems = idArray.filter((id) => seen.hasOwnProperty(id) ? false : (seen[id] = true) )
    return uniqueItems.length === 1
}

const getFirstConnectedTimestamp = (mems, log) => {
    if(allConnected(mems)){
        // return the timestamp
        return log[0]
    }else{
        const currentLogEntry = log[0]
        const updated = union(currentLogEntry.pair[0], currentLogEntry.pair[1])
        return getFirstConnectedTimestamp(updated, log.slice(1, log.length))
    }
}
