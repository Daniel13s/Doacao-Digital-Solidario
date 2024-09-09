function clicar() {
    var menu = document.getElementById('menu')
    var sideBar = document.getElementById('sideBar')
    sideBar.style.opacity = '100%'
    sideBar.style.animation = 'sideBar'
    sideBar.style.animationDuration = '1s'
    sideBar.style.animationIterationCount = '1'

    var doador = document.createElement('a')
    var enter = document.createElement('br')
    doador.innerHTML = 'Quer ser um Doador?'
    sideBar.appendChild(doador)
    sideBar.appendChild(enter)
    enter.setAttribute('id', 'enter')
    doador.setAttribute('href', 'https://docs.google.com/forms/d/e/1FAIpQLSe9i9OhKAFjvl1U8hVwQ-GZAW8_mhXza4deRLmrlmuGPmbmeg/viewform?usp=sf_link')
    doador.setAttribute('target', '_blank')
    doador.setAttribute('id', 'doador')
 
    var itens = document.createElement('a')
    itens.innerHTML = 'Itens para Doação'
    sideBar.appendChild(itens)
    itens.setAttribute('href', 'index.html')
    itens.setAttribute('target', '_blank')
    itens.setAttribute('id', 'itens')

    menu.setAttribute('onclick','fechou()')
}
function fechou() {
    var menu = document.getElementById('menu')
    var doador = document.getElementById('doador')
    var enter = document.getElementById('enter')
    menu.setAttribute('onclick', 'clicar()')
    doador.parentNode.removeChild(doador)
    enter.parentNode.removeChild(enter)
    sideBar.style.opacity = '0%'
    
    var itens = document.getElementById('itens')
    itens.parentNode.removeChild(itens)

}