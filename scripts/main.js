let natures = document.querySelector('.natures'), ville = document.querySelector('.ville'), danse = document.querySelector('.danse')
let naturesHover = oeuvres.natures
let villeHover = oeuvres.ville
let danseHover = oeuvres.danse
let textGalery = document.querySelectorAll('.imagesAquarelle .line .hover .galery_text p')

natures.addEventListener(
  "click",
  function(){
    let img = document.querySelectorAll('.imagesAquarelle img')
    let naturesNames = oeuvres.natures
    let current = document.querySelector('.current')
    let divs = document.querySelectorAll('.empty')
    for (var i = 0; i < img.length; i++) {
      img[i].setAttribute('src',``)
      img[i].setAttribute('alt',``)
      img[i].setAttribute('class',``)
      img[2].classList.add(`optional`)
    }
    for (var j = 0; j < 12; j++) {
      img[j].setAttribute('src',`../images/natures${j}.jpg`)
      img[j].setAttribute('alt',`peinture aquarelle`)
      /*******change le nom des oeuvres en hover*******/
      textGalery[j].innerHTML = `${naturesHover[j]}`
    }
    for (var k = 0; k < divs.length; k++) {
      divs[k].classList.remove('empty')
    }
    img[3].style.height = '450px'
    img[4].style.height = '450px'
    img[5].style.height = '450px'
    current.classList.remove('current')
    natures.firstChild.classList.add('current')
  })

ville.addEventListener(
  "click",
  function(){
    let img = document.querySelectorAll('.imagesAquarelle img')
    let villeNames = oeuvres.ville
    let current = document.querySelector('.current')
    let lines = document.querySelectorAll('.line')
    for (var i = 0; i < img.length; i++) {
      img[i].setAttribute('src',``)
      img[i].setAttribute('alt',``)
      img[i].setAttribute('class',``)
    }
    for (var j = 1; j < 5; j++) {
      img[j].setAttribute('src',`../images/ville${j}.jpg`)
      img[j].setAttribute('alt',`peinture aquarelle`)
      /*******change le nom des oeuvres en hover*******/
      textGalery[j].innerHTML = `${villeHover[j]}`
    }
    lines[2].classList.add('empty')
    lines[3].classList.add('empty')
    current.classList.remove('current')
    ville.firstChild.classList.add('current')
  })


danse.addEventListener(
  "click",
  function(){
    let img = document.querySelectorAll('.imagesAquarelle img')
    let danseNames = oeuvres.danse
    let current = document.querySelector('.current')
    let lines = document.querySelectorAll('.line')
    for (var i = 0; i < img.length; i++) {
      img[i].setAttribute('src',``)
      img[i].setAttribute('alt',``)
      img[i].setAttribute('class',``)
    }
    for (var j = 0; j < 7; j++) {
      img[j].setAttribute('src',`../images/danse${j}.jpg`)
      img[j].setAttribute('alt',`peinture aquarelle`)
      /*******change le nom des oeuvres en hover*******/
      textGalery[j].innerHTML = `${danseHover[j]}`
    }
    if (lines[2].classList.contains('empty')) {
      lines[2].classList.remove('empty')
    }
    img[3].style.height = '400px'
    img[4].style.height = '400px'
    img[5].style.height = '400px'
    lines[3].classList.add('empty')
    current.classList.remove('current')
    danse.firstChild.classList.add('current')})
