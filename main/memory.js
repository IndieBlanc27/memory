import { createGrid } from "./grid.js";

document.addEventListener("DOMContentLoaded",()=>{
    console.log("hello!");
    const grid = createGrid(null)
    console.table("grid",grid);
})

function memory(firstCard, secondCard){
    if(firstCard == secondCard)
        return true
    else
        return false
}
export { memory }

function click(id){
    var images = ["image0.jpeg", "image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg", "image6.jpeg", "image7.jpeg", "image8.jpeg", "image9.jpeg"]
    var image = document.getElementById(id);
    var attribute = image.getAttribute("src");
    if(attribute == "./images/back.jpeg")
        attribute = "./images/"+ Math.floor(Math.random()*images.length);
    else
        attribute = "./images/back.jpeg"
    image.setAttribute("src", attribute)	
}