function trocar () { // Essa função verifica se a class do button é preta, se sim irá remover o preto e adicionar o verde, caso contrario remove o verde e adiciona o preto
  if (document.querySelector('button').classList.contains('preto')) {
  document.querySelector('button').classList.remove('preto')
  document.querySelector('button').classList.add('verde')
  } else {
  document.querySelector('button').classList.remove('verde')
  document.querySelector('button').classList.add('preto')
  }
}

