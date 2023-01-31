function maiorDeIdade(age) {
    if (age >= 18) {
        return true
    } else {
        return false        
    }
}

let age = 21
let verification = maiorDeIdade(age)

if (verification === true) {
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')
}


