// Loop em Arrays

let cores = [
    { nome: 'preto', qtd: 10 }, 
    { nome: 'azul', qtd: 20 },
    { nome: 'vermelho', qtd: 30 }
]
cores.push({nome: 'amarelo', qtd: 5 });

for (let n = 0; n < cores.length; n++) {
    console.log(cores[n])
}