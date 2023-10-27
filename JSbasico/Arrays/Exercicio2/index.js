// 1. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente

function recebeNumeros(){
    let numeros = [100, 50]
    numeros.sort(function(a, b) {
        return a - b;
    })
    console.log(numeros)
    
}

recebeNumeros()
