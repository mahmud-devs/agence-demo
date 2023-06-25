$(function(){
  // ---------slick slider---------
    $('.xyz').slick({
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        arrows: false,
        dots : true
      });


      // ----------bottom to top----------

      $(".bottom_to_top").click(function(){
        $("body,html").animate({scrollTop:0},1000)
      });

      $(window).scroll(function(){
        let scroll = $(this).scrollTop()
        console.log(scroll);
        if(scroll > 400){
            $(".bottom_to_top").fadeIn(600)
        }else{
            $(".bottom_to_top").fadeOut(600)
        }
        if(scroll > 200){
            $(".nav").addClass("fixed")
        }else{
            $(".nav").removeClass("fixed")
        }
    });

    // --------mixit up-----------


    // var containerEl1 = document.querySelector('.work_item_mix');
    // var mixer1 = mixitup(containerEl1, {
    //   animation: {
    //     duration: 500
    //   }
    // });

    var mixer = mixitup('.work_item_mix', {
      controls: {
          toggleLogic: 'and'
      }
  });
    
});
