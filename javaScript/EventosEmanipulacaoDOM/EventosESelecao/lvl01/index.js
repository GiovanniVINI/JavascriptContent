function clicou() { 
    return console.log("clicou no botao")
  }
  
  let botao = document.querySelector('.botao')
  botao.addEventListener('click', function(){
    clicou()
  })