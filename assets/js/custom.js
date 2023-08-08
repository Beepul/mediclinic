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
        });
        $('.partner-carousel').owlCarousel({
            items:3,
            margin: 28,
            dots: false,
            responsive:{
                0:{
                    items:1
                },
                667:{
                    items:2
                },
                867:{
                    items:3
                },
                1170:{
                    items:4
                }
            }
        });
        $('.services-grid-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsive: {
              0: {
                items: 1
              }
            }
          });
          

          const priceCarousel = $("#price-carousel");
      const monthlyBtn = $("#monthlyBtn");
      const yearlyBtn = $("#yearlyBtn");

      // Initialize Owl Carousel
      priceCarousel.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false, // Disable default dots
        responsive: {
          0: {
            items: 1
          }
        }
      });

      // Handle Monthly button click
      monthlyBtn.on('click', function() {
        priceCarousel.trigger('to.owl.carousel', 0);
        monthlyBtn.addClass('active');
        yearlyBtn.removeClass('active');
      });

      // Handle Yearly button click
      yearlyBtn.on('click', function() {
        priceCarousel.trigger('to.owl.carousel', 1);
        yearlyBtn.addClass('active');
        monthlyBtn.removeClass('active');
      });
});
