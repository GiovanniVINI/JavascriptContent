// Difereça entre == e ===

let age = '18' // String

// == A verificação é mais liberal 
if (age == 18) {    // 
    console.log('Maior de idade ')
}

// === A verificação é mais restrita

if (age === 18) { // É o mesmo valor mas não é do mesmo tipo 
    console.log('Maior de idade ') // Não passará pela verificação
}