import { createGrid } from "./grid.js";
import delay from "./delay.js";

document.addEventListener("DOMContentLoaded",()=>{
    var images = [
        {src:"image1.jpeg", count: 0},
        {src:"image2.jpeg", count: 0},
        {src:"image0.jpeg", count: 0},
        {src:"image3.jpeg", count: 0},
        {src:"image4.jpeg", count: 0},
        {src:"image5.jpeg", count: 0},
        {src:"image6.jpeg", count: 0},
        {src:"image7.jpeg", count: 0},
        {src:"image8.jpeg", count: 0},
        {src:"image9.jpeg", count: 0}
    ];
    const grid = createGrid(images);
    console.table("grid",grid);

    let cells = document.getElementsByClassName("carte");
    for(let i=0; i<cells.length; i++){
        cells[i].addEventListener('click', () => {
            var attribute = cells[i].src;
            var position = cells[i].id;
            var row = position.substring(4,5);
            var column = position[position.length-1];
            var image = searchCard(grid, row, column);
            cells[i].src = "./images/"+ image;
            delay(1000).then(()=>{
                cells[i].src = "images/back.jpeg"
            })
        })        
    };
})

function memory(firstCard, secondCard){
    if(firstCard == secondCard)
        return true
    else
        return false
}
export { memory }

function searchCard(grid, row, column){
    let image = grid[row][column];
    return image.value;
}