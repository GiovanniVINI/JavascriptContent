let itens = document.querySelectorAll("li")
let listaDeItens = document.querySelector("ul")
let teste = document.querySelector(".teste")


console.log(teste.children[0].children)
console.log(listaDeItens.children)
console.log(itens)

itens[0].innerText = "Item alterado"

function clicou() {
    console.log("clicou")
}
let botao = document.querySelector(".botao")
botao.addEventListener("click", () => {
    clicou();
})