// Condicional ternario é basicamente um if usado em apenas uma linha

// ? é como o if
// : é como else

// No exemplo hipotetico abaixo, está sendo verificado se a pessoa em um "membro", se sim (true), o frete será 2 reais, se não for (false) o frete será 10 reais

let isMember = true

let shipping = isMember ? 2 : 10

console.log(isMember ? 'Você é membro' : 'Você não é membro')

console.log('Frete: ' + shipping)

// Outro exemplo:

let age = 90
let isAdult = age >= 18 ? 'Sim' : 'Não' // a idade é maior que 18? retorne a mensagem Sim. Não é maior que 18? retorne a mensagem Não

console.log(isAdult)

// É uma boa pratica usar parenteses na condicional ternaria conforme exemplo
