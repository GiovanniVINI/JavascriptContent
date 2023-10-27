const input = document.querySelector(".input")
const botao = document.querySelector(".botao")
function clicou(){
   input.setAttribute('type', input.getAttribute('type') === 'text' ? 'password' : 'text')
   botao.innerText = input.getAttribute('type') === 'text' ? 'Ocultar senha' : 'Mostrar senha'
}