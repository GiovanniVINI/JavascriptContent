// Lista com BMW, Ferrari e Mercedes
let carros = ['BMW', 'Ferrari', 'Mercedes']
let x = 1
console.log(`1. ${carros[x]}`)
console.log(carros)

// Lista com BMW, Audi e Mercedes, o valor substituido foi Ferrari
carros[1] = 'Audi'
console.log(carros)

// Lista com Subaru, o valor substituido foi BMW
carros.splice(0,1, 'Subaru')
console.log(carros)