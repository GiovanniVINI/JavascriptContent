function clicar() {
    let ul = document.querySelector("ul")
    let newLi = document.createElement("li")
    newLi.innerHTML += "<strong>Item adicionado</strong>"
    ul.prepend(newLi)
}