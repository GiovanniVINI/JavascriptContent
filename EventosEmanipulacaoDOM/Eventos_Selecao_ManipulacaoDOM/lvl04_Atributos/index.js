function clicou() {
    const input = document.querySelector('input')
    const botao = document.querySelector('.botao')

    if(input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text')
        botao.innerText = "Ocultar senha"
    } else {
        input.setAttribute('type', 'password')
        botao.innerText = "Mostrar senha"
    }
}

/* function clicou() {
    const input = document.querySelector('input')
    if (input.getAttribute('type') === 'text'){
        input.setAttribute('type', 'password')
    } else {
        input.setAttribute('type', 'text')
    }
} */

/* function clicou() {
    const input = document.querySelector('input')

    if (input.hasAttribute('placeholder')) {
        console.log('Tem placeholder SIM')
    } else {
        console.log('Não tem placeholder')
    }
} */

/* function clicou() {
    const input = document.querySelector('input')

    console.log(input.getAttribute('type'))
    console.log(input.getAttribute('placeholder'))
} */