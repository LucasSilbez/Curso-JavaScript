// O evento onclick e evento teclado executa determinada funcionalidade quando um botão é clicado. Isso pode ocorrer quando um usuário envia um formulário, quando você altera determinado conteúdo na página da web e assim por diante. Você coloca a função em JavaScript que você quer executar dentro da tag de abertura do botão.

<button onclick="clicou()">Clique aqui</button> // HTML

function clicou() {
  alert('Olá')
}

// Um botão onde ao clique irá dizer "Olá" ao usuário