// Formas de verificar dimensões (só funciona no console do navegador)

document.querySelector('.texto').offsetWidth // mostra a largura do elemento

document.querySelector('.texto').offsetHeight // mostra a altura do elemento

// Caso seja adicionado por exemplo um padding, irá aumentar a area
// O mesmo vale até mesmo para adicionar uma pequena borda

document.querySelector('.texto').clientWidth // mostra a largura do elemento, excluindo o scroll bar
document.querySelector('.texto').clientHeight // mostra a largura do elemento, excluindo o scroll bar

document.querySelector('.texto').scrollWidth // mostra a largura do elemento, porém o tamanho real incluindo o texto
document.querySelector('.texto').scrollHeight // mostra a largura do elemento, porém o tamanho real incluindo o texto