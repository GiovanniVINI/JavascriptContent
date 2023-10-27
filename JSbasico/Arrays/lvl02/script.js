// Array receita de bolo 

let cakeRecipe = [
    'chocolate',
    'ovos',
    'leite',
    'fermento'
]

cakeRecipe.push('margarina') // Adicionara o ingrediente a receita 
cakeRecipe.pop() // Remove o último ingrediente adicionado
cakeRecipe.shift() // Remove o primeiro ingrediente adicionado

console.log(cakeRecipe)
console.log(`Total de ingredientes: ${cakeRecipe.length}`)
