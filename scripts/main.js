let laVille = document.querySelector('.laVille'), laNature = document.querySelector('.laNature'), lArchitect = document.querySelector('.lArchitect'), lesCuriosites = document.querySelector('.lesCuriosites')

laVille.addEventListener(
  "click",
  function(){
    let img = document.querySelectorAll('.imagesAquarelle img')
    for (var i = 0; i < img.length; i++) {
      img[i].setAttribute('src',`../images/laville${i}.png`)
    }
  }
)
laNature.addEventListener(
  "click",
  function(){
    let img = document.querySelectorAll('.imagesAquarelle img')
    for (var i = 0; i < img.length; i++) {
      img[i].setAttribute('src',`../images/lanature${i}.png`)
    }
  }
)
lArchitect.addEventListener(
  "click",
  function(){
    let img = document.querySelectorAll('.imagesAquarelle img')
    for (var i = 0; i < img.length; i++) {
      img[i].setAttribute('src',`../images/larchitect${i}.png`)
    }
  }
)
lesCuriosites.addEventListener(
  "click",
  function(){
    let img = document.querySelectorAll('.imagesAquarelle img')
    for (var i = 0; i < img.length; i++) {
      img[i].setAttribute('src',`../images/lescurio${i}.png`)
    }
  }
)
