
function abrirPagina(id){

document.querySelectorAll(".pagina").forEach(p=>p.style.display="none")

document.getElementById(id).style.display="block"

}

document.addEventListener("DOMContentLoaded",()=>{
abrirPagina("orcamentos")
})

function addItem(){

let row=document.createElement("tr")

row.innerHTML=`
<td>
<select class="produto">
${produtos.map(p=>`<option>${p.nome}</option>`).join("")}
</select>
</td>

<td><input class="qtd"></td>
<td><input class="larg"></td>
<td><input class="alt"></td>
<td><input class="preco"></td>
<td class="total"></td>
`

document.getElementById("tabelaItens").appendChild(row)

}
