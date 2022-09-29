// Forma em que posso complementar um array com outro array

let numeros = [1, 2, 3, 4]

let outro = [...numeros, 5, 6, 7, 8]

// console.log(outro)

// O mesmo com objetos (normalmente mais usado):

let info = {
  nome: 'Lucas',
  sobrenome: 'Silva',
  idade: 27,
}

let maisInfo = {
  ...info,
  cidade: 'Santos',
  estado: 'São Paulo',
  pais: 'Brasil',
}

// console.log(maisInfo)

// Spread em funções:

function adicionarInfo(info) {
  let novasInfo = {
    ...info,
    cidade: 'Santos',
    estado: 'São Paulo',
  }
  return novasInfo
}

console.log(adicionarInfo({ nome: 'Lucas', sobrenome: 'Silva' }))