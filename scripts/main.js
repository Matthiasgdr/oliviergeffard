let natures = document.querySelector('.natures'), ville = document.querySelector('.ville'), danse = document.querySelector('.danse')

natures.addEventListener(
  "click",
  function(){
    let img = document.querySelectorAll('.imagesAquarelle img')
    let trois = document.querySelectorAll('.imagesAquarelle .trois')
    let naturesNames = oeuvres.natures
    for (var i = 0; i < img.length; i++) {
      img[i].setAttribute('src',``)
      img[i].setAttribute('alt',``)
      img[i].setAttribute('class',``)
      img[2].classList.add(`optional`)
    }
    for (var j = 0; j < 12; j++) {
      img[j].setAttribute('src',`../images/natures${j}.jpg`)
      img[j].setAttribute('alt',`peinture aquarelle`)
    }})

ville.addEventListener(
  "click",
  function(){
    let img = document.querySelectorAll('.imagesAquarelle img')
    let trois = document.querySelectorAll('.imagesAquarelle .trois')
    let villeNames = oeuvres.ville
    for (var i = 0; i < img.length; i++) {
      img[i].setAttribute('src',``)
      img[i].setAttribute('alt',``)
      img[i].setAttribute('class',``)
    }
    for (var j = 0; j < 4; j++) {
      img[0].setAttribute('class',`bigger`)
      img[j].setAttribute('src',`../images/ville${j}.jpg`)
      img[j].setAttribute('alt',`peinture aquarelle`)
    }
    for (var k = 4; k < 13; k++) {
    }
  })


danse.addEventListener(
  "click",
  function(){
    let img = document.querySelectorAll('.imagesAquarelle img')
    let trois = document.querySelectorAll('.imagesAquarelle .trois')
    let danseNames = oeuvres.danse
    for (var i = 0; i < img.length; i++) {
      img[i].setAttribute('src',``)
      img[i].setAttribute('alt',``)
      img[i].setAttribute('class',``)
    }
    for (var j = 0; j < 7; j++) {
      trois[j].setAttribute('class',``)
      trois[j].setAttribute('class',`trois`)
      img[j].setAttribute('src',`../images/danse${j}.jpg`)
      img[j].setAttribute('alt',`peinture aquarelle`)
    }
    for (var k = 7; k < 13; k++) {

    }})
