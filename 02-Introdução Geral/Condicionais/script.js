// A estrutura condicional if permite ao JavaScript executar um trecho de código somente se uma determinada condição for verdadeira.

// Exemplo:

var hora = 9

if (hora < 12) {
  console.log('Bom dia!')
} else {
  console.log('Olá')
}

// "Se a hora for menor que 12, informe Bom dia, caso contrário, diga Olá"

// Posso informar diversos if na mesma situação

// Posso utilizar else if conforme abaixo, junção das duas condicionais

if (hora < 12) {
  console.log('Bom dia!')
} else if (hora <18) {
  console.log('Boa tarde')
} else if (hora <= 23) {
  console.log('Boa noite')
}

// Se a hora for menor que 12, bom dia. Se a hora for menor que 18, boa tarde. Se a hora for menor que 23, boa noite

// Fazer duas condições em apenas um "if"

if (hora >= 12 && hora <18) {
  console.log('Boa tarde')
}

// Se hora for maior que 12 E menor que 18

if (hora == 12 || hora ==18) {
  console.log('você está na hora do rush')
}

// Se hora for igual a 12 OU igual a 18