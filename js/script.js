$(document).ready(function() {
//ajax navigation
  var hash = window.location.hash;
  var href = $('a[href="'+hash+'"]').attr('dest');
  $('.body-container').load(href);

//ajax nav for
  $(window).on('hashchange', function(){
    var hash = window.location.hash;
    var href = $('a[href="'+hash+'"]').attr('dest');
    $('.body-container').load(href);
  })

//slide function for dropdown menus
  $(".dropdown").hover(function(){
    $(this).children('.sub-nav').slideDown();
  },
    function(){
      $(this).children('.sub-nav').slideUp();
    });

//slide menu down for phone menu
  $("#menu-toggle").click(function(){
    $(".navbar-full").animate({height: 'toggle'}, 300);
  });

});
