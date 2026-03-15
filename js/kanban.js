
function criarCard(nome){

let card=document.createElement("div")

card.className="card"
card.innerText=nome

card.draggable=true

card.ondragstart=e=>{
e.dataTransfer.setData("text",nome)
}

return card
}

document.addEventListener("DOMContentLoaded",()=>{

document.querySelectorAll(".coluna").forEach(col=>{

col.ondragover=e=>e.preventDefault()

col.ondrop=e=>{
let nome=e.dataTransfer.getData("text")
col.appendChild(criarCard(nome))
}

})

})
