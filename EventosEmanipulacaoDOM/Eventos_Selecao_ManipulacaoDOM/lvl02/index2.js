function clicar(){ 
    const list = document.querySelector('.list')
    const text = document.querySelector('.textInput')
    let newLi = document.createElement('li')
    newLi.innerText = text.value;
    list.appendChild(newLi)
    text.value = ""
}