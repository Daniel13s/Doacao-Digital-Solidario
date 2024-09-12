function clicar() {
    var menu = document.getElementById('menu')
    var sideBar = document.getElementById('sideBar')
    sideBar.style.width = '250px'
    var logo = document.getElementById('logo')
    sideBar.style.animation = 'sideBar'
    sideBar.style.animationDuration = '0.1s'
    sideBar.style.animationIterationCount = '1'
    logo.style.opacity = '100%'

    var doador = document.createElement('a')
    var enter = document.createElement('br')
    var img1 = document.createElement('img')
    var img2 = document.createElement('img')
    img1.setAttribute('src', 'image/lista.webp')
    doador.innerHTML = 'Quer ser um Doador?'
    doador.appendChild(img1)
    sideBar.appendChild(doador)
    sideBar.appendChild(enter)
    enter.setAttribute('id', 'enter')
    doador.setAttribute('href', 'https://docs.google.com/forms/d/e/1FAIpQLSe9i9OhKAFjvl1U8hVwQ-GZAW8_mhXza4deRLmrlmuGPmbmeg/viewform?usp=sf_link')
    doador.setAttribute('target', '_blank')
    doador.setAttribute('id', 'doador')
 
    var itens = document.createElement('a')
    img2.setAttribute('src', 'image/forms.webp')
    itens.innerHTML = 'Itens para Doação'
    itens.appendChild(img2)
    sideBar.appendChild(itens)
    itens.setAttribute('href', 'index.html')
    itens.setAttribute('target', '_blank')
    itens.setAttribute('id', 'itens')

    menu.setAttribute('onclick','fechou()')
}
function fechou() {
    var menu = document.getElementById('menu')
    var doador = document.getElementById('doador')
    sideBar.style.width = '0px'
    var enter = document.getElementById('enter')
    var logo = document.getElementById('logo')
    logo.style.opacity = '0'
    menu.setAttribute('onclick', 'clicar()')
    doador.parentNode.removeChild(doador)
    enter.parentNode.removeChild(enter)
    sideBar.style.animation = 'fechar'
    sideBar.style.animationDuration = '0.1s'
    sideBar.style.animationIterationCount = '1'
    
    var itens = document.getElementById('itens')
    itens.parentNode.removeChild(itens)

}