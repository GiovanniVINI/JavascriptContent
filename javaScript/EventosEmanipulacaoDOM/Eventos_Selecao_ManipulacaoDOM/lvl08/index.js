function soltou(e) {
  console.log(e.code)
  console.log(e.key)
}

const input = document.querySelector('input')
input.addEventListener('keyup', soltou)