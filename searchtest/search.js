$(document).ready(function(){

    $("#search").on("keyup", function(){
      var searchVal = $("#search").val();
      var regex = new RegExp("\\b("+searchVal+")\\w+", "i");
      var output = "";
      count = 1

      if(searchVal.length > 1){
        $.getJSON("data/spellData.json", function(data){

          $.each(data.spells, function(key, val){
            if (val.name.search(regex) != -1){
              output += '<li><a href="#" class="taLink">' + val.name + '</a></li>';
              count++;
            }
            return count < 6;
          });

          $("#typeahead").empty();
          $(output).appendTo("#typeahead");

        });
      }

      if(searchVal.length <2){
        $("#typeahead").empty();
      }



    });

    $(document).on("click", "#typeahead li a", function(event){
      event.preventDefault;
      var taval = $(this).text();
      console.log("this is working");
      $("#search").val(taval);
      $("#typeahead").empty();
    });

});
