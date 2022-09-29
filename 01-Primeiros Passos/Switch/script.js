// Switch é basicamente uma condicional com multiplos resultados

let profession = 'fiscal'

console.log('Profissão: ' + profession)

switch (profession) {
  case 'fiscal':
    console.log('Sua camisa será verde')

    break
  case 'bombeiro':
    console.log('Sua camisa será vermelha')

    break
  case 'policial':
    console.log('Sua camisa será azul')

    break
  default:
    console.log('Sua camisa será preta')
    break
}

// Caso a profissão seja "profissão", resultado do console.log referente a profissão.
// break serve para parar o código depois que o case foi atendido
// default é um resultado para caso nenhuma condição seja atendida
