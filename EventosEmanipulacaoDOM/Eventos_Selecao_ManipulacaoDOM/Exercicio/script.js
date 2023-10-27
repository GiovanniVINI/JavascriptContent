const input = document.querySelector("input")
const ul = document.querySelector("ul")

input.addEventListener('keydown', (e)=>{
    if (e.key == 'Enter') {
        const inputValue = input.value;
        const newLi = document.createElement("li");
        newLi.innerHTML = inputValue;
        ul.append(newLi);
        input.value = ''
    } 
})
