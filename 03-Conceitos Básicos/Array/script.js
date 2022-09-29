// Array é basicamente uma variavel que eu posso armazenar varios valores

// Exemplo:

let motos = ['Mirage', 'Horizon', 'vblade', 'virago']

// Caso eu queira apenas um item da lista:

console.log(motos[1]) // Horizon, pois em JS a contagem começa do 0

// Posso armazenar até mesmo uma função dentro de um array, ou até mesmo um array dentro de array

// Caso eu armazene um array dentro de array, cada array será um item, com itens dentro, e para chamar um item será conforme abaixo

let ingrediantes = [
  ['uva', 'maça', 'pera']
  ['arroz', 'macarrão']
]

console.log(ingredientes[1][0]) // Estou chamando o segundo array e depois o primeiro item dele