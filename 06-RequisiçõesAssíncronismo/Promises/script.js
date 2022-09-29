// Promises é quando fazemos uma requisição assincrona onde terá um resultado temporário ou uma promessa em que terá um resultado, nunca terá o resultado ou terá ele daqui a algum tempo

function pegarTemperatura() {
  return new Promise(function (resolve, reject) {
    console.log('pegando temperatura...')

    setTimeout(function () {
      resolve('40 na sombra')
    }, 2000)
  })
}

// Usando a promise

let temp = pegarTemperatura()
temp.then(function (resultado) {
  console.log('Temperatura: ' + resultado)
})

// Acima estou executando a função pegarTemperatura e no temp.then fiz um callback onde pego o valor de resolve através do parametro resultado

// sobre como o parametro resultado consegue pegar o valor de resolve, segue respostas do instrutor da b7web:

/*
Bom, na verdade não era para gente entender mesmo, isso é um detalhe de implementação interno da promise, e como ela é um objeto que respeita os princípios do encapsulamento e da abstração os detalhes de implementação não precisam ser conhecidos por nós que somos usuários desse objeto, nós só precisamos conhecer a parte pública dele que é a parte que a gente usa, um bom objeto funciona dessa forma.

E apesar de só os engenheiros do Google ou da Mozilla souberem como eles fizeram isso, não é como se a gente não pudesse chutar como isso é feito, afinal já existiam bibliotecas que implementavam o conceito de promises antes do JS ter elas como um objeto oficial. E seria algo mais ou menos assim como descreve esse artigo aqui: https://medium.com/swlh/implement-a-simple-promise-in-javascript-20c9705f197a
Se você não entender, relaxa é difícil mesmo, mas a ideia básica é que o valor do resolve é guardado em uma propriedade do objeto promise, e quando o estado dela muda de pending para fullfiled (ou seja o resolved foi chamado) ou para rejected (ou seja o reject foi chamado), ele chama a função que você passou como parâmetro do then/catch que também é guardada em outra propriedade privada da promise passando o valor que foi guardado na propriedade que recebeu o valor do resolve/reject como parâmetro da função que foi recebida no then/catch.
*/

// No básico o resultado de 'resolve' que estava no parametro da função da promise foi para o parametro resultado que estava no then



// Um exemplo real de um promise seria solicitar um returno do usuário e o meu codigo não saberá quando será informado algo pelo usuário. Promises seria uma forma mais moderna que callback


