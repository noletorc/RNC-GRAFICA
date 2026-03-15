
const produtos = [{"name": "Caneca", "type": "unit", "price": 35}, {"name": "Bloco", "type": "unit", "price": 6}, {"name": "Troféu", "type": "unit", "price": 120}, {"name": "Medalhas", "type": "unit", "price": 8}, {"name": "Canetas", "type": "unit", "price": 4}, {"name": "Copos", "type": "unit", "price": 5}, {"name": "Gravação", "type": "unit", "price": 10}, {"name": "Tirante", "type": "unit", "price": 15}, {"name": "Crachás", "type": "unit", "price": 12}, {"name": "Impressão Konica", "type": "unit", "price": 1}, {"name": "Impressão UV", "type": "unit", "price": 3}, {"name": "Cardápio", "type": "unit", "price": 20}, {"name": "Pulseira tecido", "type": "unit", "price": 6}, {"name": "Pulseira nylon", "type": "unit", "price": 4}, {"name": "Chaveiro acrílico", "type": "unit", "price": 7}, {"name": "Chaveiro metal", "type": "unit", "price": 8}, {"name": "Impressão 3D", "type": "unit", "price": 30}, {"name": "Agendas", "type": "unit", "price": 45}, {"name": "Blocos de serviço", "type": "unit", "price": 8}, {"name": "Caixa MDF", "type": "chapa", "price": 20}, {"name": "Corte MDF", "type": "chapa", "price": 5}, {"name": "Sublimação", "type": "unit", "price": 10}, {"name": "Placa PIX", "type": "unit", "price": 15}, {"name": "Adesivo", "type": "m2", "price": 120}, {"name": "Banner", "type": "m2", "price": 120}, {"name": "Lona", "type": "m2", "price": 110}, {"name": "PVC", "type": "m2", "price": 180}, {"name": "Acrílico", "type": "chapa", "price": 250}, {"name": "Couro Sintético", "type": "chapa", "price": 90}]

function addItem(){
let tb=document.querySelector("#itens tbody")
let tr=document.createElement("tr")

let sel='<select class="produto">'
produtos.forEach(p=>{sel+=`<option value="${p.name}" data-type="${p.type}" data-price="${p.price}">${p.name}</option>`})
sel+='</select>'

tr.innerHTML=`
<td>${sel}</td>
<td><input class="qtd" value="1"></td>
<td><input class="larg"></td>
<td><input class="alt"></td>
<td><input class="preco"></td>
<td><input class="tot"></td>`

tb.appendChild(tr)
tr.querySelectorAll("input,select").forEach(el=>el.addEventListener("input",()=>calc(tr)))
}

function calc(tr){
let prod=tr.querySelector(".produto")
let type=prod.selectedOptions[0].dataset.type
let basePrice=parseFloat(prod.selectedOptions[0].dataset.price)

let qtd=parseFloat(tr.querySelector(".qtd").value)||1
let larg=parseFloat(tr.querySelector(".larg").value)||0
let alt=parseFloat(tr.querySelector(".alt").value)||0
let preco=parseFloat(tr.querySelector(".preco").value)||basePrice

let total=0

if(type=="unit") total=qtd*preco

if(type=="m2"){
let m2=(larg/100)*(alt/100)
total=m2*qtd*preco
}

if(type=="chapa"){
let col=Math.floor(59/larg)
let lin=Math.floor(39/alt)
let porChapa=col*lin
let chapas=Math.ceil(qtd/porChapa)
total=chapas*preco
document.getElementById("info").innerText="Peças por chapa: "+porChapa+" | Chapas necessárias: "+chapas
}

tr.querySelector(".tot").value=total.toFixed(2)

if(type=="m2"){
let esp=0.03
let col=Math.floor(100/(larg+esp))
let lin=Math.floor(100/(alt+esp))
let cabem=col*lin
document.getElementById("info").innerText="Cabem "+cabem+" peças em 1m²"
}

calcRolo(larg)
}

function calcRolo(larg){
let rolo=document.getElementById("rolo")
if(!rolo||!larg)return
let largura=parseFloat(rolo.value)
let pecas=Math.floor(largura/larg)
document.getElementById("roloinfo").innerText="Cabem "+pecas+" peças na largura do rolo"
}
