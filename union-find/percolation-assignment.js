// http://coursera.cs.princeton.edu/algs4/assignments/percolation.html

delete require.cache[require.resolve('./percolation-assignment')]

const Percolation = (n) => {
  const openArray = Array.from(Array(n * n ).keys()).map(i => false)
  const grid = Array.from(Array(n * n ).keys())
    // const grid = Array.from(Array(n * n ).keys()).map(i => 0).reduce((ar, it, i) => {
    //     const ix = Math.floor(i/n);
    //     if(!ar[ix]) {
    //         ar[ix] = [];
    //     }

    //     ar[ix].push(it);

    //     return ar;
  // }, [])

  const root = (r) => {
    while(r !== grid[r]){
      r = grid[r];
    }
    return r;
  }


    const union = (p, q) => {
      const i = root(p)
      const j = root(q)
      return grid[i] = j
    }

  const getSquareCoordinates = (row, col) => {
    return row * n - (n - (col -1))
  }

  const getSquare = (row, col) => {
    return grid[getSquareCoordinates(row, col)]
  }

  const open = (row, col) => {
    const currentSquare = getSquare(row, col)

    openArray[getSquareCoordinates(row, col)] = true

    const surroundingSquares = [getSquareCoordinates(row + 1, col), getSquareCoordinates(row-1, col), getSquareCoordinates(row, col - 1), getSquareCoordinates(row, col +1)]

    surroundingSquares.map((square) => {
      if(square && openArray[square]){
        union(currentSquare, square)
      }
    })

    }
  const isOpen = (row, col) =>{
    return openArray[getSquareCoordinates(row, col)]
  }
  const isFull = (row, col) =>{
    return openArray[getSquareCoordinates(row, col)]
  }
  const numberOfOpenSites = () => {
    return openArray.reduce((acc, val) => { if(val){ return acc + 1}else{return acc}}, 0)
  }
  const percolates = () => {
    const firstRow = grid.slice(0, n)
    const lastRow = grid.reduce((acc,x)=>{acc.unshift(x); return acc},[]).slice(0, n)
    return firstRow.reduce((acc, val) => {if(acc){ return acc} else { return lastRow.includes(val)}}, false)
  }

  const printState = () => {
    const zipped = grid.map((el, i) => [el, openArray[i]])
    const formatted = zipped.reduce((ar, it, i) => {
          const ix = Math.floor(i/n);
          if(!ar[ix]) {
              ar[ix] = [];
          }

          ar[ix].push(it);

          return ar;
      }, [])
    console.log(formatted)
  }

  const monteCarlo = () => {
    console.log("PERCOLATES", percolates())
    const randomRow = Math.floor(Math.random() * n) + 1
    const randomCol = Math.floor(Math.random() * n) + 1
    if(openArray[getSquareCoordinates(randomRow, randomCol)] === false){
      console.log(`coordinates: ${randomRow}, ${randomCol}`)
      open(randomRow, randomCol)
    }
    printState()
  }

  const main = () => {
    open(1,2)
    open(2,2)
    open(2,3)
    open(3,3)
    open(4,3)
    printState()
  }

    return {
      grid,
      openArray,
      open,
      isOpen,
      isFull,
      getSquare,
      numberOfOpenSites,
      main,
      printState,
      percolates,
      monteCarlo
    }
}

module.exports = Percolation

/* THIS SHOULDN'T BE POSSIBLE:
FROM:
   [ [ [ 0, false ], [ 1, true ], [ 2, false ], [ 3, true ] ],
   [ [ 4, false ], [ 1, true ], [ 6, false ], [ 7, false ] ],
   [ [ 8, false ], [ 9, false ], [ 10, false ], [ 11, false ] ],
   [ [ 12, false ], [ 13, false ], [ 14, false ], [ 15, false ] ] ]

TO:
coordinates: 2, 1
[ [ [ 0, false ], [ 1, true ], [ 2, false ], [ 1, true ] ],
[ [ 3, true ], [ 1, true ], [ 6, false ], [ 7, false ] ],
[ [ 8, false ], [ 9, false ], [ 10, false ], [ 11, false ] ],
[ [ 12, false ], [ 13, false ], [ 14, false ], [ 15, false ] ] ]
*/
