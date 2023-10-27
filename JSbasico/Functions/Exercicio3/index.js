// Forma 2

function validar(usuario, senha) {
    if (usuario === 'pedro' && senha === 123) {
        console.log('Acesso concedito')
    } else {
        console.log('Acesso negado')
    }
    return validar
  }
  
  let usuario = 'pedro'
  let senha = 123
  let login = validar(usuario, senha)