// Descontruindo objeto

let pessoa = {
  nome: 'Lucas',
  sobrenome: 'Bezerra',
  idade: 27,
  social: {
    facebook: 'Lucas Bezerra',
    instagram: 'Lucas Silbez',
  },
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`
  }

}

let { nome, sobrenome, idade } = pessoa // dessa forma estou pegando os itens do objeto para serem usados de alguma forma, cada um deles se transformou em uma variavel. Descontrução de objeto

// Caso necessário posso mudar o nome da variavel criada a partir do objeto, exemplo: let { nome:novoNome, sobrenome, idade } = pessoa

// let {facebook, instagram} = pessoa.social // pega os objetos do objeto dentro desde

// let { nome, idade, social:{instagram} } = pessoa // pega os objetos e tbm os objetos dentro do objeto social

