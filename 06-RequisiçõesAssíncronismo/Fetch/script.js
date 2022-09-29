// Faz a requisição de uma API e tras uma resposta

const URL = 'http://swapi.dev/api/people/1'

fetch(URL)
  .then(res => {
    res.json().then(data => {
      const ul = document.getElementById('info')
      const li = document.createElement('li')
      const h4 = document.createElement('h4')
      h4.innerHTML = `${data.name}` // name seria onde esta armazenado Luke Skywalker na API
      ul.appendChild(li)
      li.appendChild(h4)
    })
  })
  .catch(err => console.error('Não foi possível achar a informação', err))

// Acima, está sendo buscado o nome Luke Skywalker na API de star wars

const urlAll = 'http://swapi.dev/api/people'

fetch(urlAll)
  .then(res => {
    res.json().then(data => {
      const chars = data.results

      return chars.map(char => {
        const ul = document.getElementById('info')
        const li = document.createElement('li')
        const h4 = document.createElement('h4')
        h4.innerHTML = `${char.name}`
        ul.appendChild(li)
        li.appendChild(h4)
      })
    })
  })

  .catch(err => console.error('Não foi possível achar a informação', err))

// Acima, está sendo buscado todos os nomes encontrados na API, mas com limitações onde está sendo apresentando apenas 10 de varios disponíveis