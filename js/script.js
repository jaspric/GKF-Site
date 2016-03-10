$(document).ready(function() {
  $(".dropdown").hover(function(){
    $(this).children('.sub-nav').slideDown();
  },
    function(){
      $(this).children('.sub-nav').slideUp();
    });
});
