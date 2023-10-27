const nav = document.querySelector("nav")
const itensNav = document.querySelector(".itens")
const main = document.querySelector("main")
const button = document.querySelector("button")

nav.style.display = 'flex'
nav.style.flexDirection = 'row'
nav.style.justifyContent = 'space-between'
nav.style.alignItems = 'center'
nav.style.fontWeight = '700'
nav.style.padding = '20px'

itensNav.style.listStyle = 'none'
itensNav.style.display = 'flex'
itensNav.style.flexDirection = 'row'
itensNav.style.padding = '0'

main.style.display = 'flex'
main.style.flexDirection = 'column'
main.style.textAlign = 'justify'
main.style.padding = '30px'
main.style.alignItems = 'center'
main.style.gap = '30px'

button.style.padding = '5px'
button.style.margin = '10px'
button.addEventListener('click', ()=>{
    let header = document.querySelector("header")
    let body = document.querySelector('body')
    header.style.backgroundColor = '#252525'
    header.style.color = '#f8f8f8'
    header.style.borderBottomLeftRadius = '5px'
    header.style.borderBottomRightRadius = '5px'
    body.style.backgroundColor = 'gray'
})



