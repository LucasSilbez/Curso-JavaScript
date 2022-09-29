// Objetos são similares a array, a diferença é que array é uma listagem numerada, e objeto é nomeada

// Obs: é necessário que um objeto termine sempre com virgula para ir para o proximo

// Exemplo:

let carros = {
  nome: 'Uno',
  modelo: 'Fiat',
  peso: '800kg',
  ligar: function () {
    console.log('Ligando o ' + this.modelo) // está sendo criado uma função e pegando o objeto atraés de this
  }
}

// Para acessar o nome:

console.log(carros.nome)

// this: refere ao proprio elemento que esta sendo usado no contexto e tbm dentro de um objeto

carros.ligar()

// Posso por um objeto dentro de um array:

let moto = [
  { nome: 'Dafra', modelo: 'Horizon' },
  { nome: 'Sundown', modelo: 'V-Blade' },
  { nome: 'Kasinski', modelo: 'Mirage' }
]

// Acessando modelo:

console.log(moto[2].modelo) // Mirage
