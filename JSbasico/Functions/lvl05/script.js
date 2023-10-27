// Como usar Arrow Functions

// Function normal

function soma(a, b) {
    return a + b;
}
console.log(soma(2, 3));

// Arrow Function

// Exemplo 1

var sobrenome = (sob) => {
    let nomeCompleto = `Bonieky ${sob}`
    return nomeCompleto;
}
console.log(sobrenome('Lacerda'))

// Exemplo 2

var sobrenome = (sob) => {
    return `Bonieky ${sob}`
}
console.log(sobrenome('Lacerda'))

// Exemplo 3 

var sobrenome = (sob) => `Bonieky ${sob}`
console.log(sobrenome('Lacerda'))

// Exemplo 4

var sobrenome = sob => `Bonieky ${sob}`
console.log(sobrenome('Lacerda'))
