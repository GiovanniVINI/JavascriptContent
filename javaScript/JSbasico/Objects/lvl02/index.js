let pessoa = {
    nome: 'Ana',
    idade: 20,
    carros: [
        { marca: 'Ford', modelo: 'Mustang' },
        { marca: 'Porsche', modelo: 'Cayenne' } 
    ]
}

console.log(`${pessoa.nome} possuí um veículo da ${pessoa.carros[0].marca} do modelo ${pessoa.carros[0].modelo}`)
