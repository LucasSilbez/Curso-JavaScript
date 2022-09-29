document.querySelector('.texto').scrollTop // mostra a posição do scroll

document.querySelector('.texto').scrollLeft // mostra a posição do scroll horizontal

document.querySelector('.texto').scrollTo(0,0) // mudando a posição do scroll

window.scrollY // posição do scroll de toda a tela (scrollY ou scrollX)


//Essa função faz com que o botão criado tenha o comportamento de fazer o scroll da tela ir para o começo
function subirTela() {
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth' //efeito que faz com que o scroll suba suavemente
  })
}

/*
Poderia ser feito dessa forma, sem o scroll suave
function subirTela() {
  window.scrollTo(0,0)
}
*/


