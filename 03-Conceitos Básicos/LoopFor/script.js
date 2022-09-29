// É uma forma de rodar o mesmo codigo varias vezes em uma especie de loop

// A forma de usar é um pouco similar ao IF

// for loop:

let texto = ''

// (let i = 0; i < = 50; i++): essas 3 etapas são: 1-criação da variavel,2-condição, ou seja, i< =50 é "se for menor ou igual a 50",3-execução onde o i++ esta fazendo a variavel sempre somar +1 e nisso gera um loop que criar basicamente uma contagem

for (let i = 0; i <= 50; i++) {
  texto = texto + i + '<br/>'
}

// for loop array:

let carros = ['fusca', 'palio', 'uno']

let html = '<ul>'

for (let i in carros) {
  html += '<li>' + carros[1] + '</li>'
}

html += '</ul>'
