/* 
    Calcule a porcentagem entre 2 números.
    Exemplo: 25% de 40 é 10 
    Formula da porcentagem (y / x) * 100

    let x = 40 
    let y = 10
    let pct = calcPct(x, y)
    console.log(`${pct} de ${x} é ${y}`)
*/

function percent(n1, n2) { 
    return (n2 / n1) * 100;
}

let x = 50
let y = 5
let pct = percent(x, y)
console.log(`${pct}% de ${x} é ${y}`)