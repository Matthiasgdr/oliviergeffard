let natures = document.querySelector('.natures'), ville = document.querySelector('.ville'), danse = document.querySelector('.danse')

natures.addEventListener(
  "click",
  function(){
    let img = document.querySelectorAll('.imagesAquarelle img')
    for (var i = 0; i < img.length; i++) {
      img[i].setAttribute('src',``)
      img[i].setAttribute('alt',``)
    }
    for (var j = 0; j < 12; j++) {
      img[j].setAttribute('src',`../images/natures${j}.jpg`)
      img[j].setAttribute('alt',`peinture aquarelle`)      
    }
  }
)
ville.addEventListener(
  "click",
  function(){
    let img = document.querySelectorAll('.imagesAquarelle img')
    for (var i = 0; i < img.length; i++) {
      img[i].setAttribute('src',``)
      img[i].setAttribute('alt',``)
    }
    for (var j = 0; j < 4; j++) {
      img[j].setAttribute('src',`../images/ville${j}.jpg`)
      img[j].setAttribute('alt',`peinture aquarelle`)
    }
  }
)
danse.addEventListener(
  "click",
  function(){
    let img = document.querySelectorAll('.imagesAquarelle img')
    for (var i = 0; i < img.length; i++) {
      img[i].setAttribute('src',``)
      img[i].setAttribute('alt',``)
    }
    for (var j = 0; j < 7; j++) {
      img[j].setAttribute('src',`../images/danse${j}.jpg`)
      img[j].setAttribute('alt',`peinture aquarelle`)
    }
  }
)
