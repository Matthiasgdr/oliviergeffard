$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '6421824497',
        limit: 5,
        resolution: 'standard_resolution',
        accessToken: '6421824497.1677ed0.f6525f9bf5dc42f697b1e6e80b9142d5',
        sortBy: 'most-recent',
        template: '<div class="instaimg"><div class="squaring"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div></div>',
    });


    userFeed.run();


    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });




});

document.addEventListener("scroll", function() {
  let text = document.querySelectorAll('div[class$=_text]'),
      scroll = document.querySelector('html').scrollTop
  for (let i = 0;i<text.length;i++)
  {
    text[i].style.transform = `translateY(${scroll * .20}px)`
    console.log(scroll)
  }
})
