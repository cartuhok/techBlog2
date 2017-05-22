var viewportWidth = $(window).width();
var previousScroll = 0,
header = $('.hamburger').offset().top;

 function toggleNav() {
  document.body.classList.toggle('sidenav-active');  
  document.body.classList.toggle('noscroll');
};

 if( $(viewportWidth) > 600) {
    $('.hamburger').hide();
  };

 $(window).scroll(function() {
    var currentScroll = $(this).scrollTop();
     console.log(currentScroll + " and " + previousScroll + " and " + header);
       if(currentScroll > header && viewportWidth <= 600) {
        if (currentScroll > previousScroll) {
             $('.hamburger').fadeOut();
        } else {
               $('.hamburger').fadeIn();
               $('.hamburger').addClass('fixed');
          }
       } else {
             $('.hamburger').removeClass('fixed');   
        }
  previousScroll = currentScroll;
 });
    