$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '734357658',
        limit: 5,
        resolution: 'standard_resolution',
        accessToken: '734357658.1677ed0.f7a4cd98f3ff48fc8ccbac1043d75b1a',
        sortBy: 'most-recent',
        template: '<div class="col lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
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
