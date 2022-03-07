function createGrid(randomSeed) {
    const grid = []
    for (let i = 0; i < 5; i++) {
        const row = []
        for (let j = 0; j < 4; j++) {
            row.push({visible:false,face:'back'})
        }
        grid.push(row)      
    }
    return grid
}

export {createGrid}