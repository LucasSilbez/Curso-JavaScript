// Condicional dupla

// Caso eu faça varias condifionais, varios if normais, pode acontecer de ser executado varias opções, por exemplo no exemplo abaixo onde caso eu tivesse declarado da forma mais basica, ai informar idade 14 iria apresentar que é uma criança e também é um adulto.

// Com a condicional dupla conforme exemplo abaixo (else if) quando uma condição for executada, irá ignorar as outras, pois a principal foi satisfeita

let idade = 14

if (idade <= 18) {
  console.log('Você é uma criança')
} else if (idade >= 18 && idade < 60) {
  console.log('Você é um adulto')
} else if (idade >= 60) {
  console.log('Você é um idoso')
}
