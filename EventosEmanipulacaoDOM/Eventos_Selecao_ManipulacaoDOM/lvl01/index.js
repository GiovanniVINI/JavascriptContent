function clicou() {
    console.log('Clicou no botão');
}

// Outra forma, sem definir a função no Html
// let botao = document.querySelector(".botao")
// botao.addEventListener("click", function() {
//     clicou();
// })

// Outra forma, sem definir a função no Html
// let botao = document.querySelector(".botao")
// botao.addEventListener("click", clicou)

//Usando arrow function
// Outra forma, sem definir a função no Html
// let botao = document.querySelector(".botao")
// botao.addEventListener("click", () => {
//     clicou();
// })

// Forma na mesma linha
document.querySelector(".botao").addEventListener("click", () =>{
    clicou()
})




