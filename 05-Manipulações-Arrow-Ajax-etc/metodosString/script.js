// Metodos de manipular uma string:

let nome = 'Lucas Bezerra'

console.log(nome.length) // mostra quando caracteres tem na variavel

console.log(nome,indexOf('Bezerra')) // mostra a posição que começa o texto descrito, caso n exista irá retornar -1


// Como extrair partes de uma string:

let info = nome.slice(0, 10) // pega uma parte da string, ou seja, está informando do 0 ao 10 caracteres, e ignorando os seguintes

let info2 = nome.substring(0, 10) // mesmo funcionamento, porém no slice posso colocar numero negativo, e os negativos irá pegar os ultimos numeros, por exemplo, se for -2,  irá trazer o ra do bezerra

let info3 = nome.substr(8, 3) // irá pegar o primeiro parametro para selecionar a partir de, como os outros, e o segundo parametro irá definir quantos caracteres irá pegar (tbm funciona numeros negativos) 

// substr é o mais util pois faz tudos que os outros dois faz


// Substituir texto em uma string

let sub = nome.replace('Bezerra', 'Silva') // pegou o bezerra e substituiu por silva
// Obs: ele está informando um novo resultado, mas não substituindo de fato, pois o novo resultado está armazenado na variavel sub e não na propria variavel nome
// Iria de fato substituir caso:
// nome = nome.replace('Bezerra', 'Silva')

let sub2 = nome.toUpperCase() // deixa toda a string maiuscula

let sub3 = nome.toLowerCase() // deixa a string minuscula

let sub4 = nome.trim() // retira todos os espaços inuteis da string

let sub5 = nome.charAt(3) // mostra qual é o caractere que está nessa posição

let sub6 = nome[3] // faz o mesmo que o charAt, forma mais atual pós ecma 5

let sub7 = nome.split(' ') // divide a string localizando o caractere do parametro, e um array, por exemplo, se a string for Lucas da Silva Bezerra, e eu por de parametro do caractere espaço, sera retornado {'Lucas', 'da', 'Silva', 'Bezerra'}, ou array com cada nome, cada local onde a espaço, dividindo
