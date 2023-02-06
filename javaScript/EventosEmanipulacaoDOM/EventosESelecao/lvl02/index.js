// Adiciona um item no começo da lista

function clicou() {
    const teste = document.querySelector('.teste')
    const ul = teste.querySelector('ul')

    let newLi = document.createElement('li')
    newLi.innerHTML = 'Item adicionado'

    ul.prepend(newLi)
}

/* Forma não legal de utilizar, mas em coisas pequenas pode ser mais simples a resolução

function clicou() {
    const teste = document.querySelector('.teste')
    const ul = teste.querySelector('ul')

    ul.innerHTML += '<li>Item adicionado</li>'
} 
*/

/* Adiciona um item no final da lista

function clicou() {
    const teste = document.querySelector('.teste')
    const ul = teste.querySelector('ul')

    let newLi = document.createElement('li')
    newLi.innerHTML = 'Item adicionado'

    ul.appendChild(newLi)
} 
*/

/* Adiciona um texto no final da lista

function clicou() {
    const teste = document.querySelector('.teste')
    const ul = teste.querySelector('ul')

    ul.append('<li>Item adicionado</li>')
} 
*/

/* function clicou() {
    const teste = document.querySelector('.teste')
    const ul = teste.querySelector('ul')

    ul.children[0].innerHTML += '(alterado)'
} */

/* function clicou() {
    const teste = document.querySelector('.teste')
    const ul = teste.querySelector('ul')

    ul.children[0].innerHTML = 'Item Alterado'
} */

/* function clicou() {
    const teste = document.querySelector('.teste')
    const ul = teste.querySelector('ul')

    ul.innerHTML += '<li>Item Alterado</li>'
} */

/* function clicou() {
    const teste = document.querySelector('.teste')
    const ul = teste.querySelector('ul')

    ul.innerHTML = '<li>Item Alterado</li>'
} */ 

/* function clicou() {
    const teste = document.querySelector('.teste')
    const ul = teste.querySelector('ul')

    console.log(ul.innerHTML)
} */

/* function clicou() {
    const teste = document.querySelector('.teste')
    const ul = teste.querySelector('ul')
    
    console.log(ul)
} */

/* function clicou() {
    const teste = document.querySelector('.teste')
    console.log( teste.children[0].children)
} */

/* function clicou() {
    const teste = document.querySelector('.teste')
    console.log(teste.children)
} */

/* function clicou() {
    const teste = document.querySelector('.teste')
    console.log(teste)
} */
