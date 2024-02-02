const page1 = document.querySelector(".page-1")
const page2 = document.querySelector(".page-2")
const save = document.querySelector("#cookie")
const reset = document.querySelector("#btn")

function toggleClick(){
    page1.classList.toggle("hide")
    page2.classList.toggle("hide")
}

function primeClick(){
    toggleClick()

}

function secondClick(){
    toggleClick()
}
save.addEventListener("click", primeClick)
reset.addEventListener("click", secondClick)