$('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused){
        $(this).children(".video").get(0).play();   
        $(this).children(".playpause").children().fadeOut();
      }else{$(this).children(".video").get(0).pause();
    $(this).children(".playpause").children().fadeIn();
      }
  });
  $('video').on('ended',function(){
    $(".playpause").children().fadeIn();
  });