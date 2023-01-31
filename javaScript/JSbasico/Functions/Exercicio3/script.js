/*
    Crie uma função que valide usuário e senha
    Usuário correto: pedro
    Senha correta: 123
*/

// Forma 1

function validar(usuario, senha) {
    if (usuario === 'pedro' && senha === 123) {
        return true;
    } else {
        return false;
    }
}

var usuario = 'pedro'
var senha = 123
var validacao = validar(usuario, senha)
if (validacao) {
    console.log('Acesso concedido')
} else {
    console.log('Acesso negado')
}