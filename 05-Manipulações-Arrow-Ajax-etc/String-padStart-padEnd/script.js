let telefone = '5'

console.log(telefone.padEnd(9, '*')) // essa funcionalidade faz com que eu exija que seja preenchido por exemplo 9 caracteres e caso não seja conforme exemplo acima onde só preenchi o 5, o restante será completado com o * (não precisa ser o *, pode ser qualquer coisa)

// Obs: isso serve pra qualquer tipo de situação não só numero, posso usar para frase, etc

// padStart faz o mesmo mas incluindo os caracteres na esquerda e não na direita

// Exemplo de uma forma funcional para isso:

let cartao = '1234567891011'

let lastDigits = cartao.slice(-4) // aqui deixei apenas os 4 ultimos digitos do cartão

let cartaoMascarado = lastDigits.padStart(13, '*') // aqui completei o restante dos caracteres do cartão com * 

console.log('Este é o seu cartão? ' + cartaoMascarado)

// forma padrão encontrada em site para mantem a segurança dos dados do usuario e ao mesmo tempo alto completar ou confirmar dados