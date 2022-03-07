function createGrid(images) {
    const grid = []
    for (let i = 0; i < 5; i++) {
        const row = []
        for (let j = 0; j < 4; j++) {
            let img = images[Math.floor(Math.random()*images.length)];
            while(img.count >= 2){
                img = images[Math.floor(Math.random()*images.length)];
            }
            row.push({visible:false,face:'back', value: img.src})
            img.count = img.count + 1;
        }
        grid.push(row);      
    }
    return grid;
}

export {createGrid}