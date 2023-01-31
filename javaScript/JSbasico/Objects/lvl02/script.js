// Acessando e alterando Objetos

let card = {
    nome: 'Dragão branco de Olhos Azuis',
    resumo: 'Este dragão lendário é uma poderosa máquina de destruição. Praticamente invencível, muito poucos enfrentaram esta magnífica criatura e viveram para contar a história.',
    tipo: 'Dragão / Normal',
    olhos: ['Azuis'], 
    caracteristicas: {
        atributo: 'Luz',
        nivel: 8,
        ataque: 3000,
        defesa: 2500
    }
}

card.nome = 'Dragão Negro de Olhos Vermelhos'

console.log('Carta: ' + card.nome)
card.olhos.push('Vermelhos')
console.log(`Cor dos olhos: ${card.olhos[1]}`)