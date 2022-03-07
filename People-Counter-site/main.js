let count = 0
let countEl= document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
    count += 1
    countEl.textContent = count
}
function clear(){
    let count=0
    countEl.textContent = 0
}
function save(){
    saveEl.textContent  += " " + count + " - "
    count = 0
    clear()
} 