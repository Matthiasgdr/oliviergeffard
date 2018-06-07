let send = document.querySelector('#mail')

send.addEventListener(
  "click",
  function(){
    let name = document.getElementById('name').value
    let surname = document.getElementById('surname').value
    let clientmail = document.getElementById('inputmail').value
    let date
    if (document.getElementById('contactChoice1').checked) {
     date = document.getElementById('contactChoice1').nextSibling.nextSibling.innerHTML
    }
    else if (document.getElementById('contactChoice2').checked) {
      date = document.getElementById('contactChoice2').nextSibling.nextSibling.innerHTML
    }
    else if (document.getElementById('contactChoice3').checked) {
      date = document.getElementById('contactChoice3').nextSibling.nextSibling.innerHTML
    }


    send.setAttribute('href',`mailto:olivier@geffard.fr?subject=Prise de cours mail&body=Bonjour,%0D%0A %0D%0A Je m'appelle ${name} ${surname}.%0D%0A Je souhaite prendre un cours le ${date}.%0D%0A Voici mon mail : ${clientmail}`)
  }
)
