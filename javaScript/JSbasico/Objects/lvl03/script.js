let pessoa = {
    nome: 'Bonieky',
    sobrenome: 'Lacerda',
    idade: 39,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}
console.log(pessoa.nomeCompleto())