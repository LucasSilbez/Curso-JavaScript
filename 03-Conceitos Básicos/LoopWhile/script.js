// while é o mesmo que for porém se forma menos eficiente

let html = ''

let c = 1

while (c <= 10) {
  html += 'Numero: ' + c + '<br/>'
  c++ // necessário pois caso contrario terá um loop infinito e irá travar no navegador
}
