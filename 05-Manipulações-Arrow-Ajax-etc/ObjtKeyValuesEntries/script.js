let lista = ['ovo', 'macarrão', 'feijão', 'pipoca']

console.log(Object.keys(lista)) // dessa forma irá retornar um array com os indices (numeração) de cada item

console.log(Object.entries(lista)) // dessa forma irá retornar um array, e dentro desse array terá varios array. O resultado será que cada item será convertido em um array onde os items serão por exemplo: 0 : ovo , 1 : macarrão, será um pequeno array com o nome do item e o indice

// As mesmas funcionalidades acima servem para objetos 