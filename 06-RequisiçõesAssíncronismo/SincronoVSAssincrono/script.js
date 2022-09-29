// Sincrono executa o codigo linha a linha, onde só irá para a proxima linha quando anterior é executada 

// Assincrono não espera termina a linha anterior para executa a proxima

let nome = 'Lucas'
let idade = 27
let temperatura = Maquinhinha.pegarTemperatura()
let completo = nome + ' ' + idade // essa variavel foi executada dps de temperatura sem esperar q ela terminasse de pegar o valor da função pegarTemperatura, isso não aconteceria em um codigo sincrono

// Toda requisição interna é uma requisição assicrona 