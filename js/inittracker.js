$(document).ready(function() {
  var i = 1;
  $('<div class="col-xs-6 col-md-4 initalert text-center"><h4>Please input name and initiative. HP is optional.</h4></div>').appendTo('#initadd').hide().fadeIn(3000);
                                                                                //initial alert

  $(document).on('click', '.btnClose', function() {                             //remove button
    $(this).parent().parent().fadeOut(1000, function() {
      $(this).remove();
      $('.globalinit').not(":first").removeClass("glow");                       //remove glow of everything not first
      $(".globalinit").first().addClass("glow");                                //glow top div
    });

  });

  $('#initiative, #initname, #hp').keyup(function(e) {                          //if you press enter, click the add button
    if (e.keyCode == 13)
      $('#characterAdd').click();
  });

  $("#characterAdd").click(function() {                                         //click function for add button

    var initname = $('#initname').val();
    var initnum = $('#initiative').val();
    var hpnum = $('#hp').val();

    //begin if else
    if (!initname || !initnum) {                                                //if name or initative are blank, then:
      $('.initalert').remove();
      $('<div class="col-xs-6 col-md-4 initalert text-center"><h4>Please input name and initiative.</h4></div>').appendTo('#initadd').hide().fadeIn(1500);

    } else if (!($.isNumeric(hpnum)) && (!(hpnum == ""))) {                      //if hp is not numeric, then:
      $('.initalert').remove();
      $('<div class="col-xs-6 col-md-4 initalert text-center"><h4>Please enter a numeric value for HP.</h4></div>').appendTo('#initadd').hide().fadeIn(1500);
      $('#hp').focus();

    } else if (!($.isNumeric(initnum)) && (!(initnum === NaN))) {               //if initative is not numeric, then:
      $('.initalert').remove();
      $('<div class="col-xs-6 col-md-4 initalert text-center"><h4>Please enter a numeric value for initiative.</h4></div>').appendTo('#initadd').hide().fadeIn(1500);
      $('#initiative').focus();

    } else {

      i++;
      $('.initalert').remove();                                                 //remove the alert

      $($('<div class="row globalrow newinitrow' + i + '" data-index="' + initnum + '"></div>')).appendTo(".container");
                                                                                //add a new row to the container

      $('<div class="col-xs-12 col-md-offset-2 col-md-8 globalinit addedinit' + i + '"></div>').appendTo(".newinitrow" + i).hide().fadeIn(1000);
                                                                                //add the box to the row

      $('<div class="col-xs-5 col-md-6 nametag inittag"><span><p>' + initnum + ' ' + initname + '</p></span></div><div class="col-xs-5 col-md-4 text-left"><span><p></span><span class="glyphicon glyphicon-minus" id="minushp"> </span><span id="hptag">' + hpnum + '</span><span class="glyphicon glyphicon-plus" id="addhp"></span></p></div><div class="btnClose"><span class="glyphicon glyphicon-remove"></span></div>').appendTo(".addedinit" + i);
                                                                                //add the content to the box

      $('#initname').val('');                                                   //blank out inputs
      $('#initiative').val('');                                                 //blank out inputs
      $('#hp').val('');                                                         //blank out inputs

      $('.trackercontainer').append($('.globalrow').sort(function(b, a) {       //sort rows
        return $(a).data('index') - $(b).data('index');
      }));

      $('.globalinit').not(":first").removeClass("glow");                       //remove glow of everything not first
      $(".globalinit").first().addClass("glow");                                //glow top div
      $('#initname').focus();                                                   //set focus to the Name input
    };                                                                          //end if else
  });                                                                           //end character add button

  $(document).on('click', '#nextTurn', function(){                              //if the 'next' button is clicked
    if ($(".globalrow").length > 1 ){                                           //if there are more than 1 characters added
      $(".trackercontainer").append($(".globalrow").first());                   //put the first row last
      $(".globalrow").last().hide().slideDown();                                //hide, then slide the last character into the first position
      $('.globalinit').not(":first").removeClass("glow");                       //remove glow of everything thats not first
      $(".globalinit").first().addClass("glow");                                //glow the top div
    }
  });

  $(document).on('click', '#addhp', function() {                                //add HP button
    var hp = $(this).parent().find('#hptag').text();
    hp++;
    $(this).parent().find('#hptag').text(hp);
  });

  $(document).on('click', '#minushp', function() {                              //minus HP button
    var hp = $(this).parent().find('#hptag').text();
    hp--;
    $(this).parent().find('#hptag').text(hp);
  });

  $(document).on('click', '#hptag', function() {                                //if #hptag is clicked
    $(this).attr('contentEditable', true);                                      //make it editable
  });

  $(document).on('keydown', '#hptag', function(e) {                                                //if a key is pressed in a div
      if (e.keyCode === 13) {                                                   //and that key is enter
        e.preventDefault();                                                     //prevent the default behaviour of return key pressed
        $('#hptag').attr('contentEditable', false);                             //and make #hptag not editable
      } else if (e.keyCode !== 48 &&
               e.keyCode !== 49 &&
               e.keyCode !== 50 &&
               e.keyCode !== 51 &&
               e.keyCode !== 52 &&
               e.keyCode !== 53 &&
               e.keyCode !== 54 &&
               e.keyCode !== 55 &&
               e.keyCode !== 56 &&
               e.keyCode !== 57 &&
               e.keyCode !== 96 &&
               e.keyCode !== 97 &&
               e.keyCode !== 98 &&
               e.keyCode !== 99 &&
               e.keyCode !== 100 &&
               e.keyCode !== 101 &&
               e.keyCode !== 102 &&
               e.keyCode !== 103 &&
               e.keyCode !== 104 &&
               e.keyCode !== 105 &&
               e.keyCode !== 8 &&
               e.keyCode !== 46 &&
               e.keyCode !== 37 &&
               e.keyCode !== 38 &&
               e.keyCode !== 39 &&
               e.keyCode !== 40
             ){
               e.preventDefault();
             }
    });
});
