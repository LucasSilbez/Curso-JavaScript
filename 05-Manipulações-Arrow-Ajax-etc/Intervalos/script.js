let timer // criei a função vazia para que seja possivel utilizar fora do scopo da função comecar()

function comecar() {
  timer = setInterval(showTime, 1000) // informo o valor da função criada no scopo global
}

function parar() {
  clearInterval(timer) // utilizo a função como parametro para a função onde faz com que o relogio pare
}




function showTime() {
  let d = new Date()
  let h = d.getHours()
  let m = d.getMinutes()
  let s = d.getSeconds()
  let txt = h + ':' + m + ':' + s

  document.querySelector('.demo').innerHTML = txt
}

// a função acima apresenta a hora, minutos e segundo atual

// let timer = setInterval(showTime, 1000) // essa função faz com que a função anterior que apresenta a hora atual, atualize a cada 1 segundo, assim então mostrando um relogio funcional sem o tempo travado. O 1000 é equivalente a 1 segundo 



// setTimeout:

setTimeout(function () {
  alert('teste')
}, 2000)

// A função acima faz com que seja estabelecido um tempo para que algo seja executado, por exemplo o alert, onde acima após 2 segundo irá apresentar a mensagem teste