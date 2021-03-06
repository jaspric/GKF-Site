$(document).ready(function() {
  var i = 1;

  $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Please input name and initiative. HP is optional.</h4></div></div>').insertAfter("#advanced").hide().fadeIn(3000);
                                                                                //initial alert

  $(document).on('click', '.btnClose', function() {                             //remove button
    $(this).parent().parent().remove();                                         //remove the row
      $('.globalinit').not(":first").removeClass("glow");                       //remove glow of everything not first
      $(".globalinit").first().addClass("glow");                                //glow top div
    });

  $('#initiative, #initname, #hp, #ac').keyup(function(e) {                     //if you press enter, click the add button
    if (e.keyCode == 13)
      $('#characterAdd').click();
  });

  $("#remAll").click(function() {                                               //when the remove button is clicked
    $(".globalrow").remove();                                                   //remove all added rows
  });

  $("#menuCollapse").click(function() {
    if ($("#initadd").is(':visible')){
    $("#initadd").slideUp();
    $(".page-header").slideUp();
  }else {
    $("#initadd").slideDown();
    $(".page-header").slideDown();
  }
  });

  $("#advancedOptions").click(function() {
    if ($("#advanced").is(':visible')){
    $("#advanced").slideUp();
  }else {
    $("#advanced").slideDown();
  }
  });

  $("#info").click(function() {
    if ($(".instructions").is(':visible')){
    $(".instructions").slideUp();
  }else {
    $(".instructions").slideDown();
  }
  });

  $("#autoRollInit").change(function(){
    if (!(this.checked)){
      $('#initiative').prop('disabled', false);
    }else{
      $('#initiative').val('');
      $('#initiative').prop('disabled', true);
    };
  });

  $("#characterAdd").click(function() {                                         //click function for add button

      var initname = $('#initname').val();
      var hpnum = $('#hp').val();
      var acnum = $('#ac').val();
      var numactors = $('#numActors').val();
      var initmod = $('#initMod').val();
      var initnum = $('#initiative').val();


      if ($('#autoRollInit').prop('checked')){                                  //if autoroll init is on

        console.log('Auto roll is checked');

        if (!(numactors == "")){                                                //if number of actors has value
          console.log('numactors is not null');

          if($.isNumeric(numactors)){                                           //make sure it's a number
            console.log('numactors is numeric');

            if((numactors > 0) && (numactors % 1 == 0)){                        //and a whole number
              console.log('numactors is divisible by 1');

              for(j = numactors; j > 0; j--){                                   //for every number of actor greater than 0, subtract 1 until 0.
                console.log("Adding multiple actors is working");
                var initplusmod = d20() + parseInt(initmod);
                i++;
                $($('<div class="row globalrow newinitrow' + i + '" data-index="' + initplusmod + '"></div>')).appendTo(".container");
                $('<div class="col-xs-12 col-md-offset-2 col-md-8 globalinit addedinit' + i + '"></div>').appendTo(".newinitrow" + i).hide().fadeIn(1000);
                $('<div class="col-xs-4 col-md-4 col-lg-4 text-left"><span><p>' + initplusmod + ' ' + initname + j + '</p></span></div><div class="col-xs-5 col-md-4 text-center hpdiv"><p><button id="minushp"><span class="glyphicon glyphicon-minus"></span></button><span id="hptag">' + hpnum + '</span><button id="addhp"><span class="glyphicon glyphicon-plus"></span></button></p></div><div class="col-xs-3 col-md-2 col-lg-2 text-left"><span><p>AC:' + acnum + '</p></span></div><div class="btnClose"><span class="glyphicon glyphicon-remove"></span></div>').appendTo(".addedinit" + i);
            };

          };
        };
      }else{                                                                    //if numactors is null
        var initplusmod = d20() + parseInt(initmod);
        i++;
        $($('<div class="row globalrow newinitrow' + i + '" data-index="' + initplusmod + '"></div>')).appendTo(".container");
        $('<div class="col-xs-12 col-md-offset-2 col-md-8 globalinit addedinit' + i + '"></div>').appendTo(".newinitrow" + i).hide().fadeIn(1000);
        $('<div class="col-xs-4 col-md-4 col-lg-4 text-left"><span><p>' + initplusmod + ' ' + initname + j + '</p></span></div><div class="col-xs-5 col-md-4 text-center hpdiv"><p><button id="minushp"><span class="glyphicon glyphicon-minus"></span></button><span id="hptag">' + hpnum + '</span><button id="addhp"><span class="glyphicon glyphicon-plus"></span></button></p></div><div class="col-xs-3 col-md-2 col-lg-2 text-left"><span><p>AC:' + acnum + '</p></span></div><div class="btnClose"><span class="glyphicon glyphicon-remove"></span></div>').appendTo(".addedinit" + i);
      }
      }

      else if (!($('#autoRollInit').prop('checked'))){                          //if autoroll init is off
        console.log('Auto roll is not checked');

        if (!(numactors == "")){                                                //if number of actors has value
          console.log('numactors is not null');

          if($.isNumeric(numactors)){                                           //make sure it's a number
            console.log('numactors is numeric');

            if((numactors > 0) && (numactors % 1 == 0)){                        //and a whole number
              console.log('numactors is divisible by 1');

              for(j = numactors; j > 0; j--){                                   //for every number of actor greater than 0, subtract 1 until 0.
                console.log("Adding multiple actors is working");
                var initplusmod = parseInt(initnum) + parseInt(initmod);
                i++;
                $($('<div class="row globalrow newinitrow' + i + '" data-index="' + initplusmod + '"></div>')).appendTo(".container");
                $('<div class="col-xs-12 col-md-offset-2 col-md-8 globalinit addedinit' + i + '"></div>').appendTo(".newinitrow" + i).hide().fadeIn(1000);
                $('<div class="col-xs-4 col-md-4 col-lg-4 text-left"><span><p>' + initplusmod + ' ' + initname + j + '</p></span></div><div class="col-xs-5 col-md-4 text-center hpdiv"><p><button id="minushp"><span class="glyphicon glyphicon-minus"></span></button><span id="hptag">' + hpnum + '</span><button id="addhp"><span class="glyphicon glyphicon-plus"></span></button></p></div><div class="col-xs-3 col-md-2 col-lg-2 text-left"><span><p>AC:' + acnum + '</p></span></div><div class="btnClose"><span class="glyphicon glyphicon-remove"></span></div>').appendTo(".addedinit" + i);
            };

          };
        };
      }else{                                                                    //if numactors is null
        var initplusmod = parseInt(initnum) + parseInt(initmod);
        i++;
        $($('<div class="row globalrow newinitrow' + i + '" data-index="' + initplusmod + '"></div>')).appendTo(".container");
        $('<div class="col-xs-12 col-md-offset-2 col-md-8 globalinit addedinit' + i + '"></div>').appendTo(".newinitrow" + i).hide().fadeIn(1000);
        $('<div class="col-xs-4 col-md-4 col-lg-4 text-left"><span><p>' + initplusmod + ' ' + initname + j + '</p></span></div><div class="col-xs-5 col-md-4 text-center hpdiv"><p><button id="minushp"><span class="glyphicon glyphicon-minus"></span></button><span id="hptag">' + hpnum + '</span><button id="addhp"><span class="glyphicon glyphicon-plus"></span></button></p></div><div class="col-xs-3 col-md-2 col-lg-2 text-left"><span><p>AC:' + acnum + '</p></span></div><div class="btnClose"><span class="glyphicon glyphicon-remove"></span></div>').appendTo(".addedinit" + i);
      }
    };

    } else {
    var initname = $('#initname').val();
    var initnum = $('#initiative').val();
    var hpnum = $('#hp').val();
    var acnum = $('#ac').val();

    //begin if else
    if (!initname || !initnum) {                                                //if name or initative are blank, then:
      $('.initalert').remove();
      $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Please input name and initiative.</h4></div></div>').insertAfter("#advanced").hide().fadeIn(1500);

    } else if (!($.isNumeric(hpnum)) && (!(hpnum == ""))) {                      //if hp is not numeric, then:
      $('.initalert').remove();
      $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Please enter a numeric value for HP.</h4></div></div>').insertAfter("#advanced").hide().fadeIn(1500);
      $('#hp').focus();

    } else if (!($.isNumeric(initnum)) && (!(initnum === NaN))) {               //if initative is not numeric, then:
      $('.initalert').remove();
      $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Please enter a numeric value for initiative.</h4></div></div>').insertAfter("#advanced").hide().fadeIn(1500);
      $('#initiative').focus();

    } else if (!($.isNumeric(acnum)) && (!(acnum == ""))) {                     //if AC is not numeric, then:
      $('.initalert').remove();
      $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Please enter a numeric value for AC.</h4></div></div>').insertAfter("#advanced").hide().fadeIn(1500);
      $('#AC').focus();

    } else {

      i++;
      $('.initalert').remove();                                                 //remove the alert

      $($('<div class="row globalrow newinitrow' + i + '" data-index="' + initnum + '"></div>')).appendTo(".container");
                                                                                //add a new row to the container

      $('<div class="col-xs-12 col-md-offset-2 col-md-8 globalinit addedinit' + i + '"></div>').appendTo(".newinitrow" + i).hide().fadeIn(1000);
                                                                                //add the box to the row

      $('<div class="col-xs-4 col-md-4 col-lg-4 text-left"><span><p>' + initnum + ' ' + initname + '</p></span></div><div class="col-xs-5 col-md-4 text-center hpdiv"><p><button id="minushp"><span class="glyphicon glyphicon-minus"></span></button><span id="hptag">' + hpnum + '</span><button id="addhp"><span class="glyphicon glyphicon-plus"></span></button></p></div><div class="col-xs-3 col-md-2 col-lg-2 text-left"><span><p>AC:' + acnum + '</p></span></div><div class="btnClose"><span class="glyphicon glyphicon-remove"></span></div>').appendTo(".addedinit" + i);
                                                                                //add the content to the box

      $('#initname').val('');                                                   //blank out inputs
      $('#initiative').val('');                                                 //blank out inputs
      $('#hp').val('');                                                         //blank out inputs
      $('#ac').val('');
      $('#initname').focus();                                                   //set focus to the Name input
    };                                                                          //end if else
  };

    $('.trackercontainer').append($('.globalrow').sort(function(b, a) {       //sort rows
      return $(a).data('index') - $(b).data('index');
    }));

    $('.globalinit').not(":first").removeClass("glow");                         //remove glow of everything not first
    $(".globalinit").first().addClass("glow");                                  //glow top div
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
