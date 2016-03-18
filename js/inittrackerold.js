$(document).ready(function() {
  var i = 1;

  function d20() {
    return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  };

  function nameCheck(name){
	if (name) {
		console.log("Name checks out.");
		return true;
	} else if(!name) {
		console.log("Name is blank.");
		return false;
	};
};

function hpNumerical(hp){
	if (((hp != "") && ($.isNumeric(hp))) || (hp == "")){
		console.log("HP checks out.");
		return true;
	}else{
		console.log("HP is not blank and not numeric.")
		return false;
	};
};

function acNumerical(ac){
	if ((!(ac == "") && ($.isNumeric(ac))) || (ac == "")){
		console.log("AC checks out.");
		return true;
	}else{
		console.log("AC is not blank and not numeric.")
		return false;
	};
};

function initModNumerical(initmod){
	if ((!(initmod == "") && ($.isNumeric(initmod))) || (initmod == "")){
		console.log("Initiative Mod checks out.");
		return true;
	}else{
		console.log("Initiative Mod is not blank and not numeric.")
		return false;
	};
};

function numActors(numactors){
	if ((numactors != "") && ($.isNumeric(numactors))){
		console.log("Number of actors is not blank, and is numeric.");
		return true;
	}else if (numactors == ""){
		console.log("Number of actors is blank.");
		return false;
	}else{
		console.log("Number of actors is not blank, and not numeric.");
	};
};

function autoInit(){
  if($('#autoRollInit').prop('checked')){
    console.log('Auto Roll Init is checked.')
    return true;
  } else{
    console.log('Auto Roll Init is NOT checked')
    return false;
  };
};

function initNumerical(init){
	if (!(init == "") && ($.isNumeric(init))){
		console.log("Initiative checks out.");
		return true;
	}else{
		console.log("Initiative is blank and/or not numeric.")
		return false;
	};
};

  function autoRollWithActors(initmod, initname, hpnum, acnum, numactors){
    $('.initalert').remove();
    for(j = numactors; j > 0; j--){                                   //for every number of actor greater than 0, subtract 1 until 0.
      i++;
      var initplusmod = (d20() + parseInt(initmod, 10));
      $($('<div class="row globalrow newinitrow' + i + '" data-index="' + initplusmod + '"></div>')).appendTo(".initcontainer");
      $('<div class="col-xs-12 col-md-offset-2 col-md-8 globalinit addedinit' + i + '"></div>').appendTo(".newinitrow" + i).hide().fadeIn(1000);
      $('<div class="col-xs-4 col-md-4 col-lg-4 text-left"><span><p>' + initplusmod + ' ' + initname + j + '</p></span></div><div class="col-xs-5 col-md-4 text-center hpdiv"><p><button id="minushp"><span class="glyphicon glyphicon-minus"></span></button><span id="hptag">' + hpnum + '</span><button id="addhp"><span class="glyphicon glyphicon-plus"></span></button></p></div><div class="col-xs-3 col-md-2 col-lg-2 text-left"><span><p>AC:' + acnum + '</p></span></div><div class="btnClose"><span class="glyphicon glyphicon-remove"></span></div>').appendTo(".addedinit" + i);
    };
  };

  function autoRollNoActors(initmod, initname, hpnum, acnum){
    var initplusmod = (d20() + parseInt(initmod, 10));
    $('.initalert').remove();
    i++;
    $($('<div class="row globalrow newinitrow' + i + '" data-index="' + initplusmod + '"></div>')).appendTo(".initcontainer");
    $('<div class="col-xs-12 col-md-offset-2 col-md-8 globalinit addedinit' + i + '"></div>').appendTo(".newinitrow" + i).hide().fadeIn(1000);
    $('<div class="col-xs-4 col-md-4 col-lg-4 text-left"><span><p>' + initplusmod + ' ' + initname + '</p></span></div><div class="col-xs-5 col-md-4 text-center hpdiv"><p><button id="minushp"><span class="glyphicon glyphicon-minus"></span></button><span id="hptag">' + hpnum + '</span><button id="addhp"><span class="glyphicon glyphicon-plus"></span></button></p></div><div class="col-xs-3 col-md-2 col-lg-2 text-left"><span><p>AC:' + acnum + '</p></span></div><div class="btnClose"><span class="glyphicon glyphicon-remove"></span></div>').appendTo(".addedinit" + i);
    $('#initname').val('');                                                   //blank out inputs
    $('#initiative').val('');                                                 //blank out inputs
    $('#hp').val('');                                                         //blank out inputs
    $('#ac').val('');
    $('#initname').focus();
  };

  function manualRollWithActors(init, initmod, initname, hpnum, acnum, numactors){
    $('.initalert').remove();

    for(j = numactors; j > 0; j--){                                   //for every number of actor greater than 0, subtract 1 until 0.
      i++;
      var initplusmod = parseInt(init, 10) + parseInt(initmod, 10);
      $($('<div class="row globalrow newinitrow' + i + '" data-index="' + initplusmod + '"></div>')).appendTo(".initcontainer");
      $('<div class="col-xs-12 col-md-offset-2 col-md-8 globalinit addedinit' + i + '"></div>').appendTo(".newinitrow" + i).hide().fadeIn(1000);
      $('<div class="col-xs-4 col-md-4 col-lg-4 text-left"><span><p>' + initplusmod + ' ' + initname + j + '</p></span></div><div class="col-xs-5 col-md-4 text-center hpdiv"><p><button id="minushp"><span class="glyphicon glyphicon-minus"></span></button><span id="hptag">' + hpnum + '</span><button id="addhp"><span class="glyphicon glyphicon-plus"></span></button></p></div><div class="col-xs-3 col-md-2 col-lg-2 text-left"><span><p>AC:' + acnum + '</p></span></div><div class="btnClose"><span class="glyphicon glyphicon-remove"></span></div>').appendTo(".addedinit" + i);
    };
  };

  function manualRoll(init, initmod, initname, hpnum, acnum){
    var initplusmod = parseInt(init, 10) + parseInt(initmod, 10);
    $('.initalert').remove();
    i++;
    $($('<div class="row globalrow newinitrow' + i + '" data-index="' + initplusmod + '"></div>')).appendTo(".initcontainer");
    $('<div class="col-xs-12 col-md-offset-2 col-md-8 globalinit addedinit' + i + '"></div>').appendTo(".newinitrow" + i).hide().fadeIn(1000);
    $('<div class="col-xs-4 col-md-4 col-lg-4 text-left"><span><p>' + initplusmod + ' ' + initname + '</p></span></div><div class="col-xs-5 col-md-4 text-center hpdiv"><p><button id="minushp"><span class="glyphicon glyphicon-minus"></span></button><span id="hptag">' + hpnum + '</span><button id="addhp"><span class="glyphicon glyphicon-plus"></span></button></p></div><div class="col-xs-3 col-md-2 col-lg-2 text-left"><span><p>AC:' + acnum + '</p></span></div><div class="btnClose"><span class="glyphicon glyphicon-remove"></span></div>').appendTo(".addedinit" + i);
    $('#initname').val('');                                                   //blank out inputs
    $('#initiative').val('');                                                 //blank out inputs
    $('#hp').val('');                                                         //blank out inputs
    $('#ac').val('');
    $('#initname').focus();
  };


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
    $('.initalert').remove();
  });

  $("#menuCollapse").click(function() {
    if ($("#initadd").is(':visible')){
    $("#initadd").slideUp();
    $("#advanced").slideUp();
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
    $("#initMod").val('');
    $("#numActors").val('');
    $("#autoRollInit").prop('checked', false);
  }
  $('#initiative').prop('disabled', false);
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

  $("#characterAdd").click(function() {                                        //click function for add button

    var name = $('#initname').val();
    var init = $('#initiative').val();
    var hp = $('#hp').val();
    var ac = $('#ac').val();
    var initmod = $('#initMod').val();
    var actors = $('#numActors').val();

    if(initmod == ""){
      initmod = 0;
    };
    initmod = parseInt(initmod, 10);

    if(nameCheck(name)){
      if(hpNumerical(hp)){
        if(acNumerical(ac)){
          if(initModNumerical(initmod)){
            if(numActors(actors)){
              if(autoInit()){
                autoRollWithActors(initmod, name, hp, ac, actors);
              }else{
                if(initNumerical(init)){
                  manualRollWithActors(init, initmod, name, hp, ac, actors);
                }else{
                  $('.initalert').remove();
                  $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Orc say: Why you put NOT number in init box???</h4></div></div>').insertAfter("#advanced").hide().fadeIn(1500);
                }
              }
            }else{
              if(autoInit()){
                autoRollNoActors(initmod, name, hp, ac);
              }else{
                if(initNumerical(init)){
                  manualRoll(init, initmod, name, hp, ac);
                }else{
                  $('.initalert').remove();
                  $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Orc say: Why you put NOT number in init box???</h4></div></div>').insertAfter("#advanced").hide().fadeIn(1500);
                }
              }
            }
          }else{
            $('.initalert').remove();
            $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Orc say: ONLY NUMBER IN INIT BOX!!! How many times I have to say?? </h4></div></div>').insertAfter("#advanced").hide().fadeIn(1500);
          }
        }else{
          $('.initalert').remove();
          $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Orc say: only number or nothing in AC!</h4></div></div>').insertAfter("#advanced").hide().fadeIn(1500);
        }
      }else{
        $('.initalert').remove()
        $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Orc say: only number for HP or I smash!</h4></div></div>').insertAfter("#advanced").hide().fadeIn(1500);
      }
    }else{
        $('.initalert').remove();
        $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Orc say: what the name?</h4></div></div>').insertAfter("#advanced").hide().fadeIn(1500);
    }
    $('.trackercontainer').append($('.globalrow').sort(function(b, a) {       //sort rows
      return $(a).data('index') - $(b).data('index');
    }));

    $('.globalinit').not(":first").removeClass("glow");                       //remove glow of everything not first
    $(".globalinit").first().addClass("glow");
  });                                                                           //end character add button

  $(document).on('click', '#nextTurn', function(){                              //if the 'next' button is clicked
    if ($(".globalrow").length > 1 ){                                           //if there are more than 1 characters added
      $(".trackercontainer").append($(".globalrow").first());                   //put the first row last
      $(".globalrow").last().hide().slideDown();                                //hide, then slide the last character into the first position
      $('.globalinit').not(":first").removeClass("glow");                       //remove glow of everything thats not first
      $(".globalinit").first().addClass("glow");                                //glow the top div
      console.log("Next turn successful.")
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
