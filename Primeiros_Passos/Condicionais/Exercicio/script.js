/* Substitua o @ pela condicional correta para que o resultado seja TRUE

    let x = 10
    let y = 5
    console.log (x @ 5)

*/
//  Resposta:
    let x = 10
    let y = 5
    console.log (x > y) // True

/* Substitua o @ pela condicional coorreta para que o resultado seja FALSE

    let w = '10'
    let z = 10
    console.log(w @ z)
    
*/
//  Resposta:
    let w = '10'
    let z = 10
    console.log(w === z) // False

/* Substitua o @ pela condicional correta para que o resultado seja TRUE

    let a = 10
    let b = 5
    console.log(a @ b)
    
*/
//  Resposta:
    let a = 10
    let b = 5
    // Formas: 
    console.log(a > b) // True
    console.log(a != b) // True

/*  Crie uma condicional para verificar se o preço da 
    carne está barato ou caro. PS: Até 45 está barato

    let preco = 40.3
*/

    var price = 40.3
    var priceStatus = price > 45

    if (priceStatus === true) {
        console.log('O preço da carne está caro')
    } else {
        console.log('O preço da carne está barato')
    }

    // Outro método

    var price = 40.3
    
    if (price >= 45) {
        console.log('O preço da carne está caro')
    } else {
        console.log('O preço da carne está barato')
    }