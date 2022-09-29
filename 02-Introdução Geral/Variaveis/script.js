// Variáveis são espaços de memória do computador destinados a dados que são manipulados e alterados durante a execução de um algoritmo. Logo, para que o resultado seja o esperado, é preciso considerar o tipo de dado que será armazenado e também definir o nome das variáveis

// Formas de declarar uma variavel

var idade = 90 // Não é uma boa pratica pois ela pode ser alterada globalmente no código, variáveis de var podem ser atualizadas e declaradas novamente dentro de seu escopo.

let anos = 90 // Equivalente a var, porém com let tem escopo de bloco, as variáveis de let podem ser atualizadas, mas não podem ser declaradas novamente.

const idades = 90 // As variáveis de const não podem ser atualizadas nem declaradas novamente.