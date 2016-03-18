

$(document).ready(function() {
/*
  //search typeahead
    $("#search-gkf").on("keyup", function(){
      var searchVal = $("#search-gkf").val();
      var regex = new RegExp(searchVal, "i");
      var output = "";
      count = 1

      if(searchVal.length > 1){
        console.log("working...");
        header('Content-type: application/json');
        $.getJSON("data/spellData.json", function(data){
          header('Content-type: application/json');
          console.log("Got the data.");

          $.each(data.spells, function(key, val){

            if (val.name.search(regex) != -1){
              output += '<li><a href="#" class="taLink">' + val.name + '</a></li>';
              count++;
            }

            return count < 6;

          });
          console.log(output);
          $("#typeahead").empty();
          $(output).appendTo("#typeahead");

        })
        .done(function(data){
          console.log("Got the data");
        })
        .fail(function(data, textStatus, error){
          console.log("Status: " + textStatus + ", error: " +error);
        })
        .always(function(data){
          console.log("Complete")
        });
      }

      if(searchVal.length <2){
        $("#typeahead").empty();
      }

    });

   typeahead fill on click
    $(document).on("click", "#typeahead li a", function(event){
      event.preventDefault;
      var taval = $(this).text();
      console.log("this is working");
      $("#search-gkf").val(taval);
      $("#typeahead").empty();
    });
  */
  /*

  var hash = window.location.hash;
  var href = $('a[href="'+hash+'"]').attr('dest');
  $('.body-container').load(href);


  $(window).on('hashchange', function(){
    var hash = window.location.hash;
    var href = $('a[href="'+hash+'"]').attr('dest');
    $('.body-container').load(href);
  })

  */

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
