// 1. No array abaixo, qual o número que pega a Ferrari 
let carros = [
    'BMW',
    'Ferrari',
    'Mercedes'
]
console.log('------------------------------------------------')
console.log('Exercício 1.')
console.log(carros)
console.log(`Escolhido: ${carros[1]}`)

// 2. Troque a Ferrari por Audi

console.log('------------------------------------------------')
console.log('Exercício 2.')
console.log('Lista com Audi: ')
carros.push('Audi')
console.log(carros)
console.log(`Escolhido: ${carros[3]}`)

// 3. Adicione Volvo a lista

console.log('------------------------------------------------')
console.log('Exercício 3.')
console.log('Lista com Volvo')
carros.push('Volvo')
console.log(carros)
console.log(`Escolhido: ${carros[4]}`)

// 4. Exiba quantos itens possuem no array

console.log('------------------------------------------------')
console.log('Exercício 4.')
console.log(`Há ${carros.length} itens na lista`)