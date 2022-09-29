// Arrow function/função anonima é uma função em forma de flecha, é uma forma mais moderna de declarar função que veio junto ao EC6

const somar = (x, y) => { // o => que informa que trata-se de uma função
  return x + y
}

const somar2 = (x, y) => x + y // opção em que posso declarar sem o {}, onde após o arrow qualquer coisa q eu colocar será identificado como o return

const letrasNoNome = nome => nome.length // opção que posso declarar sem o (), mas é valido apenas se tiver apenas um parametro

// Obs: arrow function não existe o objeto this