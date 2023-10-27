function clicou() {
    const div = document.querySelector(".teste1")
    const ul = document.createElement("ul")
    const li = document.createElement("li")

    li.innerHTML = "Item ..."
    ul.append(li)
    div.before(ul)
}