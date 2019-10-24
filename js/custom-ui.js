 

// JavaScript Document OLD
var wwd = $(window).width();
var wht = $(window).height();
 

$(document).ready(function(){
	
/////Home Page  popupWrap

	$(document).on('click','.j-downLoadPopupBtn',function(){
		$('.j-downLoadPopup').show();
	});
	$('.overLay').click(function(){
		$(this).closest('.popupContainer').hide();
	});
	$('.custListBtn').click(function(){
		$(this).closest('.custAccord').find('.custListWrap').removeClass('active');
		$(this).closest('.custListWrap').addClass('active');
	});
	$('.mobileMenuBtn').click(function(){
		$('em',this).toggle();
		$(this).closest('.navDiv').find('nav').toggle();
	});
	$('.menDD').click(function(){
		$(this).toggleClass('active');
	});
	if($(window).width() < 1020){
		$('.ListToolTipDiv').click(function(){
		$('.ListToolTipDiv').removeClass('active')
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}
		else{
			$(this).addClass('active');			
		}
	});
	}
	///// Blog Page
	
	$('.custDDBtn').click(function(){
		$(this).closest('.custDD').toggleClass('active');
	});
	
	$('.custDDListD a').click(function(){
		$(this).closest('.custDD').find('.custDDBtnTxt').html($(this).html());
		$(this).closest('.custDD').removeClass('active');
	});
	
	
///// SVG Function
	$('.svg-ico').each(function(){
		var svgCode = $(this).attr('data-svg');
		if(svgCollection[svgCode]) {
			$(this).html(svgCollection[svgCode]);
		}
	});
	////////////////Sticky header
	$(window).scroll(function () { $(window).scrollTop() > 20 ? $('body').addClass('transparent') : $('body').removeClass('transparent') });
 	


	
	
});

 
////////////////Window realse then call a function within
    var delay = (function(){
      var timer = 0;
      return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
      };
    })();

     $(window).resize(function() {
        delay(function(){
 		//////////
			
        }, 500);
    });

 
