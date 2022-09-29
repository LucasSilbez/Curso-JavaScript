// Metodos de manipular um array

let lista = ['ovo', 'farinha', 'corante', 'massa']

let lista2 = ['Prato', 'Liquidificador', 'Forno']

let res = lista.toString() // transforma o array em uma string organizada, com virgula em uma frase

let res2 = lista.join('-') // Junta o array em uma string separada pelo item q utilizei para separação, no caso - 

let res3 = lista.indexOf('Corante') // encontra a posição que se encontra o item do array descrito, no caso deste exemplo será 2

lista.pop() // remove o ultimo item o array

lista.shift() // remove o primeiro item do array

lista.push('Leite') // Adiciona um item novo o array

lista[0] = 'ovos' // Altera um item do array (caso eu coloque um item que não existe ele irá criar um novo)

delete lista[2] // exclui um item o array porem manter o slot, deixando ele como empty

lista.splice(1, 1) // remove o item o array sem deixar slot, o primeiro numero do parametro informa a partir de qual item será removido algo, e no segundo numero do parametro informa até qual item haverá remoção, no caso sendo 1 1 irá remover apenas o farinha

let res4 = lista.concat(lista2) // irá fundir 2 arrays diferentes

lista.sort() // irá ordenar os itens do array em ordem alfabetica

lista.reverse() // inverte a ordem dos itens do array

//-----------------------------------------------------

let lista3 = [45, 4, 9, 16, 25]
let lista4 = []

lista4 = lista3.map(function(item) { 
  return item * 2
})

// Acima foi criado um array, e depois um array vazio e então foi criado uma variavel com o nome do arrau vazio e dentro dela = lista3.map() que é uma função que irá mapear o array que existe valores, e dentro dessa função eu posso estabelecer algo para ser usado no meu array vazio, no caso foi return item * 2, e isso multiplicou por 2 todos os itens do primeiro array e o resultado foi integrado dentro do array vazio, que agora não está mais (90, 8, 18, 32, 50)

lista4 = lista3.filter(function(item){
  if(item < 20) {
     return true
  } else {
     return false
  }
})

// Acima filtra os itens do array dentro de uma função, no caso acima foi filtrado apenas os itens menores do que 20

lista4 = lista3.every(function(item){
  if(item > 50){
     return true
  } else {
     return false
  }
})

// Acima verificar a condição para returnar true ou false, no caso está verificando se os itens são maiores do que 50, não retorna outro array nem nada do tipo, apenas um boolean (lista3.some faz o mesmo, mas n verifica todos e sim ao menos um, ou seja, se pelo menos um deles for maior que 50 dará true)


/*
Bonus:
return (item > 50)? true : false
forma mais simples de verificar a condição
*/

lista4 = lista3.find(function(item){
    return (item > 40)? true : false
})

// Acima, procura o primeiro item o array com as condicões especificadas

lista4 = lista3.findIndex(function(item){
  return (item > 40)? true : false
})

// Acima, procura o primeiro item o array com as condicões especificadas, e retorna a posição dele
