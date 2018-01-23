//$(document).ready(function() {
//$('.nav').localScroll();




  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDeault();
    $('body,html').animate({                //$('body,html').animate({width:50/Css-property}, duration/how long it will take)
      scrollTop: $(this.hash).offset().top
    }, 1000 );
    console.log(scrollbarLocation);


//  })

//})
