// É possível criar mais de uma condicional dentro do mesmo if, sem que eu precise ficar criando varios if e else dentro de uma mesma condição
// Através do && e ||

// && significa basicamente E
// || significa OU

// Abaixo exemplo de como usar essa funcionalidade

let idade = 90

if (idade >= 18 && idade < 60) {
  // o console só irá aparecer se as condições forem atendidas
  console.log('Você é um adulto')
}
