// Selecionando elementos do HTML dentro do JS

// Selecionar através do ID:

document.getElementById('exemplo').innerHTML = 'Silva' // Estou alterando o nome Lucas por Silva

// Obs: o inner seria "dentro", ou seja, dentro dele posso inserir qlqr coisa, até mesmo uma nova tag

// Obs 2: posso ter apenas 1 id com o mesmo nome

// Selecionando através da class:

document.getElementsByClassName('exemplo2')

// Obs: ao contrario do ID, class eu posso ter varias com o mesmo nome (seria criado um array com todas as class)

document.getElementsByClassName('exemplo2')[0].innerHTML -
  'Exemplo de varios elementos com a mesma class, onde escolho qual eu quero através do array'

// Selecionar através da tag:

document.getElementsByTagName('button')

// Também será gerado um array caso tenha varias tags do mesmo tipo

// Selecionar através do nome do item

document.getElementsByName('exemplo nome')
