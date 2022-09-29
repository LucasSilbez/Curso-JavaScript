// O evento onclick e evento teclado executa determinada funcionalidade quando um botão é clicado. Isso pode ocorrer quando um usuário envia um formulário, quando você altera determinado conteúdo na página da web e assim por diante. Você coloca a função em JavaScript que você quer executar dentro da tag de abertura do botão.

// posso declarar este evento no html com o nome de onkey (onkeyup, down, etc) por exemplo

// * html:

//html: <input onkeyup="digitou()"></input>

//JS:

function digitou() {
  console.log('exemplo')
}

// Acima, fiz uma função em js para retornar o console exemplo, e executei ela no html para ser executada ao clicar/digitar

// é preferivel que seja usado onkeyup, pois onkeydown irá continuar executando a função caso fica com a tecla apertada 

