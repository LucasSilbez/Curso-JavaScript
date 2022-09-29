// É uma forma de usar promise de forma mais simples, onde ao inves de utilizar o codigo them, será usado conforme exemplo abaixo

async function loadPosts() {
  document.getElementById('posts').innerHTML = 'Carregando...'

  let req = await fetch('https://jsonplaceholder.typicode.com/posts')
  let json = await req.json()
  montarBlog(json)
}

// Declarando a função com a palavra async, digo que se trata de uma função async await. Ao informar o await em cada variavel faço com que a variavel req execute "espere" e depois execute a variavel json e "espere" dnv