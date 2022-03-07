import { createGrid } from "./grid.js";

document.addEventListener("DOMContentLoaded",()=>{
    console.log("hello!");
    const grid = createGrid(null)
    console.table("grid",grid);
})