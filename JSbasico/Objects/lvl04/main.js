let cores = [
    { nome: 'preto', qtd: 10 }, 
    { nome: 'azul', qtd: 20 },
    { nome: 'vermelho', qtd: 30 }
]

for (cor in cores) {
    console.log('Nome: ' + cores[cor].nome.toUpperCase() + ' - ' + 'Quantidade: ' + cores[cor].qtd)
}
