// Introdução aos Objetos

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

console.log(`Carta: ${card.nome}`)
console.log(`Tipo: ${card.tipo}`)
console.log(`Breve resumo: ${card.resumo}`)
console.log(`Cor dos olhos: ${card.olhos[0]}`)
console.log(`Atributo: ${card.caracteristicas.atributo}`)