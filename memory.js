document.addEventListener("DOMContentLoaded",()=>{
    console.log("hello!");
})

function memory(firstCard, secondCard){
    if(firstCard == secondCard){
        return true
    } else {
        return false
    }
}
export { memory }