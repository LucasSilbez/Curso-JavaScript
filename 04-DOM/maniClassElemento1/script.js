function verde() {
  document.querySelector('#exemplo').classList.remove('vermelho') // isso esta fazendo com que não fique sobrepondo as cores, e sim trocando, pois na div exemplo fica as 3 cores na class, msm não seja visto pelo usuário
  document.querySelector('#exemplo').classList.remove('azul')

  document.querySelector('#exemplo').classList.add('verde') // classList vai retornar o objeto que controla as classes daquele elemento especifico, e depois podendo trabalhar com ele
  // esta sendo selecionado o id exemplo, e o classlist.add('verde') está basicamente retornando a class verde criada no css
}

function vermelho() {
  document.querySelector('#exemplo').classList.remove('verde')
  document.querySelector('#exemplo').classList.remove('azul')
  document.querySelector('#exemplo').classList.add('vermelho')
}

function azul() {
  document.querySelector('#exemplo').classList.remove('verde')
  document.querySelector('#exemplo').classList.remove('vermelho')
  document.querySelector('#exemplo').classList.add('azul')
}