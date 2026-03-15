
function calcularM2(larg, alt, qtd, preco){
let m2 = (larg*alt)/10000
m2 += m2*0.01
return m2*qtd*preco
}

function calcularChapa(){

let larg=document.getElementById("largChapa").value
let alt=document.getElementById("altChapa").value
let qtd=document.getElementById("qtdChapa").value

let porLinha = Math.floor(59/larg)
let porColuna = Math.floor(39/alt)

let pecas = porLinha*porColuna

let chapas = Math.ceil(qtd/pecas)

document.getElementById("resultadoChapa").innerText=
"Peças por chapa: "+pecas+" | Chapas necessárias: "+chapas

}
