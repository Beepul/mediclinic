$(document).ready(function () {
    $('.banner-carousel').owlCarousel({
        loop:true,
        margin:8,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            867:{
                items:2
            },
            1299:{
                items:3
            }
        }
    })

    $('.department-carousel').owlCarousel({
        loop:true,
        margin:28,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            867:{
                items:2
            },
            1170:{
                items:3
            }
        }
    })

    $('.team-carousel').owlCarousel({
        loop:true,
        margin:28,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            667:{
                items:2
            },
            1170:{
                items:3
            }
        }
    })
    $('.team-grid-carousel').owlCarousel({
        loop:true,
        margin:28,
        nav:true,
        items: 1
    })

   
        $('.testimonial-carousel').owlCarousel({
          loop: true,
          margin: 10,
          responsive: {
            0: {
              items: 1
            }
          }
        });
        $('.banner-five-carousel').owlCarousel({
            items: 1, 
            loop: true, 
            margin: 10, 
            nav: true, 
            autoplay: true,
            autoplayTimeout:3000,
        });
        $('.services-carousel').owlCarousel({
            items:3,
            margin: 28,
            responsive:{
                0:{
                    items:1
                },
                667:{
                    items:2
                },
                1170:{
                    items:3
                }
            }
        })
});
