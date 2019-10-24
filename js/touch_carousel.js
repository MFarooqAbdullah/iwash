(function($) {
  
    "use strict";
    
    /* Testimonials Carousel 
    ========================================================*/
    var owl = $("#testimonials");
      owl.owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        items: 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTablet: [767,1],
        itemsTabletSmall: [480,1],
        itemsMobile : [479,1],
      });   
  
    /* 
     Touch Owl Carousel
     ========================================================================== */
      var owl = $(".touch-slider");
      owl.owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        items: 4,
        itemsDesktopSmall: [1024, 4],
        itemsTablet: [600, 2],
        itemsMobile: [479, 1]
      });
  
      $('.touch-slider').find('.owl-prev').html('<i class="lni-arrow-left"></i>');
      $('.touch-slider').find('.owl-next').html('<i class="lni-arrow-right"></i>');
  
     
   
    
  
  }(jQuery));
  
  