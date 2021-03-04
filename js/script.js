$(document).ready(function(){
    $('#slides').superslides({
        animation:'fade',
        play:5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Recent Graduate.", "JAVA Developer.", "Web Developer."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items:4,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    })

    var skillsTopOffset = $(".skillSection").offset().top;
    
    $(window).scroll(function() {

        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: '#b09e59',
                scaleColor: false,
                lineWidth: 5,
                size: 152,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

        }

    });

});