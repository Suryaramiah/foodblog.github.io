
$(document).ready(function(){

    $('.js--section-feature').waypoints(function(direction){
    
        if (direction== "down") {
            $('nav').addClass('sticky');
        }

        else {
            $('nav').removeClass('sticky');
        }

    });


    // var waypoint = new Waypoint({
    //         element: document.getElementById('px-offset-waypoint'),
    //         handler: function(direction) {
    //           notify('I am 20px from the top of the window')
    //         },
    //         offset: 20 
    //       })


});

