// Variável de escopo global

let count = 0;

function add() {
    //let count = 0  // Variável de escopo local
    count++;
}

add()

console.log(count);