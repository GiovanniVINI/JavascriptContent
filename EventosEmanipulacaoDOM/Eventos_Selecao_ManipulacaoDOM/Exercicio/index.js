/* Solução Exercicio
const input = document.querySelector('input')
const ul = document.querySelector('ul')

input.addEventListener('keyup', function(e) {
  if (e.code === 'Enter') {
    const newLi = document.createElement('li')
    newLi.innerText = input.value
    ul.append(newLi)
    input.value = ''
  }

})  
*/

// Solução Professor

// Elementos
const input = document.querySelector('input')
const lista = document.querySelector('ul')

// Funções
function handleKeyUp(e) {
  if (e.key === 'Enter') {
    // Adicionar elemento LI na lista
    const newLi = document.createElement('li')
    newLi.innerText = input.value
    lista.append(newLi)

    // Limpar o campo de texto
    input.value =  ''
  }
}

// Eventos
input.addEventListener('keyup', handleKeyUp)




