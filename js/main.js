jQuery(document).ready(function($){

  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  
  var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if ((prevScrollpos > currentScrollPos) || (currentScrollPos < 20)) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.opacity = "1";
      } else {
        document.getElementById("navbar").style.top = "-100px";
        document.getElementById("navbar").style.opacity = "0";
      }
      prevScrollpos = currentScrollPos;
    }

    // Cambia el color del menu según el fondo
    $(window).scroll(function() {
      if (Array.prototype.some.call($('.bg-black'), function(element) {
        scrollPosition = $(window).scrollTop();
        //elementTop = $(element).offset().top - $('header').height();
        elementTop = $(element).offset().top;
        elementBottom = $(element).outerHeight() + elementTop;
        if ((scrollPosition > elementTop && scrollPosition < elementBottom) || (scrollPosition == 0)) {
          return true;
        }
        else {
          return false;
        }
      })) {
		  if(jQuery('header nav.nav--black').length > 0){
			  jQuery('header nav').removeClass('nav--black');
		  }
		  jQuery('header nav').addClass('nav--white');

      } else {
		  if(jQuery('header nav.nav--white').length > 0){
			  jQuery('nav').removeClass('nav--white');
		  }
		  jQuery('header nav').addClass('nav--black');
      }
    });

    // Función del Burger Menu -> SlideToggle
    $(".burger-menu").click(function(){
      $(".burger-menu").toggleClass("closet");
      $(".menu-ui-sm").toggleClass("active");
    });

}); // Final de jQuery