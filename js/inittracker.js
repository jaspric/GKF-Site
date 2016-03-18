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
    $('.orcsay').remove();
    $('<div class="orcsay"><h4>Goblin say: I let slide this time, but only numbers in actors box! Or I get angry! </h4></div>').appendTo("#messages").hide().fadeIn(1500);
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
    $('.orcsay').remove();
    for(j = numactors; j > 0; j--){                                   //for every number of actor greater than 0, subtract 1 until 0.
      i++;
      var initplusmod = (d20() + parseInt(initmod, 10));
      console.log("Auto roll with actors is iniatiated.");
      $('<div class="actorcontainer globalactor' + i + '" data-index="' + initplusmod + '"><div>').appendTo("#allactors");
      $('<div class="actorhead"><div class="actormove"></div><div class="actorname"><h2>'+initname+j+'</h2></div><div class="close"></div></div><div class="actorbody"><div class="actorinit"><p>'+initplusmod+'</p></div><div class="actorhp"><p><button class="hpminus"></button><span id="hptag">'+hpnum+'</span><button class="hpplus"></button></p></div><div class="actorac"><p><span id="actag">'+acnum+'</span></p></div></div>').appendTo(".globalactor" + i).hide().fadeIn(1000);
    };
  };

  function autoRollNoActors(initmod, initname, hpnum, acnum){
    var initplusmod = (d20() + parseInt(initmod, 10));
    $('.orcsay').remove();
    i++;
    $('<div class="actorcontainer globalactor' + i + '" data-index="' + initplusmod + '"><div>').appendTo("#allactors");
    $('<div class="actorhead"><div class="actormove"></div><div class="actorname"><h2>'+initname+'</h2></div><div class="close"></div></div><div class="actorbody"><div class="actorinit"><p>'+initplusmod+'</p></div><div class="actorhp"><p><button class="hpminus"></button><span id="hptag">'+hpnum+'</span><button class="hpplus"></button></p></div><div class="actorac"><p><span id="actag">'+acnum+'</span></p></div></div>').appendTo(".globalactor" + i).hide().fadeIn(1000);
    $('#initname').val('');                                                   //blank out inputs
    $('#initiative').val('');                                                 //blank out inputs
    $('#hp').val('');                                                         //blank out inputs
    $('#ac').val('');
    $('#initname').focus();
  };

  function manualRollWithActors(init, initmod, initname, hpnum, acnum, numactors){
    $('.orcsay').remove();

    for(j = numactors; j > 0; j--){                                   //for every number of actor greater than 0, subtract 1 until 0.
      i++;
      var initplusmod = parseInt(init, 10) + parseInt(initmod, 10);
      $('<div class="actorcontainer globalactor' + i + '" data-index="' + initplusmod + '"><div>').appendTo("#allactors");
      $('<div class="actorhead"><div class="actormove"></div><div class="actorname"><h2>'+initname+j+'</h2></div><div class="close"></div></div><div class="actorbody"><div class="actorinit"><p>'+initplusmod+'</p></div><div class="actorhp"><p><button class="hpminus"></button><span id="hptag">'+hpnum+'</span><button class="hpplus"></button></p></div><div class="actorac"><p><span id="actag">'+acnum+'</span></p></div></div>').appendTo(".globalactor" + i).hide().fadeIn(1000);
    };
  };

  function manualRoll(init, initmod, initname, hpnum, acnum){
    var initplusmod = parseInt(init, 10) + parseInt(initmod, 10);
    $('.orcsay').remove();
    i++;
    $('<div class="actorcontainer globalactor' + i + '" data-index="' + initplusmod + '"><div>').appendTo("#allactors");
    $('<div class="actorhead"><div class="actormove"></div><div class="actorname"><h2>'+initname+'</h2></div><div class="close"></div></div><div class="actorbody"><div class="actorinit"><p>'+initplusmod+'</p></div><div class="actorhp"><p><button class="hpminus"></button><span id="hptag">'+hpnum+'</span><button class="hpplus"></button></p></div><div class="actorac"><p><span id="actag">'+acnum+'</span></p></div></div>').appendTo(".globalactor" + i).hide().fadeIn(1000);
    $('#initname').val('');                                                   //blank out inputs
    $('#initiative').val('');                                                 //blank out inputs
    $('#hp').val('');                                                         //blank out inputs
    $('#ac').val('');
    $('#initname').focus();
  };


  $(document).on('click', '.close', function() {                             //remove button
    $(this).parent().parent().remove();                                         //remove the row
    });

  $('#initiative, #initname, #hp, #ac, #initMod, #numActors').keyup(function(e) {                     //if you press enter, click the add button
    if (e.keyCode == 13)
      $('#characterAdd').click();
  });

  $("#remAll").click(function() {                                               //when the remove button is clicked
    $(".actorcontainer").remove();                                                   //remove all added rows
    $('.orcsay').remove();
  });

  $("#menuCollapse").click(function() {
    if ($("#inputarea").is(':visible')){
    $("#inputarea").slideUp();
  }else {
    $("#inputarea").slideDown();
  }
  });

  $(document).on('click', '.actormove', function() {
    console.log("this is working");
    $(this).parent().parent().find(".actorbody").slideToggle();
  });



  $("#allactors").sortable({
    disabled: true,
    revert: true,
    scroll: false
  });

  $(document).on('click', '#advancedOptions', function(){
    if ($('#allactors').sortable("option" ,"disabled")){
      $('#allactors').sortable("enable");
      $('.orcsay').remove();
      $('<div class="orcsay"><h4>Goblin say: players sortable!</h4></div>').appendTo("#messages").hide().fadeIn(1500);
    }else{
      $('#allactors').sortable('disable');
      $('.orcsay').remove();
      $('<div class="orcsay"><h4>Goblin say: players not sortable!</h4></div>').appendTo("#messages").hide().fadeIn(1500);
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
                  $('.orcsay').remove();
                  $('<div class="orcsay"><h4>Goblin say: Why you put NOT number in init box???</h4></div></div>').insertAfter("#messages").hide().fadeIn(1500);
                }
              }
            }else{
              if(autoInit()){
                autoRollNoActors(initmod, name, hp, ac);
              }else{
                if(initNumerical(init)){
                  manualRoll(init, initmod, name, hp, ac);
                }else{
                  $('.orcsay').remove();
                  $('<div class="orcsay"><h4>Goblin say: Why you put NOT number in init box???</h4></div>').appendTo("#messages").hide().fadeIn(1500);
                }
              }
            }
          }else{
            $('.orcsay').remove();
            $('<div class="orcsay"><h4>Goblin say: ONLY NUMBER IN INIT MOD BOX!!! How many times I have to say?? </h4></div>').appendTo("#messages").hide().fadeIn(1500);
          }
        }else{
          $('.orcsay').remove();
          $('<div class="orcsay"><h4>Goblin say: only number or nothing in AC!</h4></div>').appendTo("#messages").hide().fadeIn(1500);
        }
      }else{
        $('.orcsay').remove()
        $('<div class="orcsay"><h4>Goblin say: only number for HP or I smash!</h4></div>').appendTo("#messages").hide().fadeIn(1500);
      }
    }else{
        $('.orcsay').remove();
        $('<div class="orcsay"><h4>Goblin say: what the name?</h4></div>').appendTo("#messages").hide().fadeIn(1500);
    }
    $('#allactors').append($('.actorcontainer').sort(function(b, a) {           //sort rows
      return $(a).data('index') - $(b).data('index');
    }));
  });                                                                           //end character add button

  $(document).on('click', '#nextTurn', function(){                              //if the 'next' button is clicked
    if ($(".actorcontainer").length > 1 ){                                      //if there are more than 1 characters added
      $("#allactors").append($(".actorcontainer").first());                     //put the first row last
      $(".actorcontainer").first().hide().slideDown();
      console.log("Next turn successful.")
    }
  });

  $(document).on('click', '.hpplus', function() {                                //add HP button
    var hp = $(this).parent().find('#hptag').text();
    hp++;
    $(this).parent().find('#hptag').text(hp);
  });

  $(document).on('click', '.hpminus', function() {                              //minus HP button
    var hp = $(this).parent().find('#hptag').text();
    hp--;
    $(this).parent().find('#hptag').text(hp);
  });

  $(document).on('click', '#hptag, #actag', function() {                        //if #hptag is clicked
    $(this).attr('contentEditable', true);                                      //make it editable
  });

  $(document).on('keydown', '#hptag, #actag', function(e) {                                                //if a key is pressed in a div
      if (e.keyCode === 13) {                                                   //and that key is enter
        e.preventDefault();                                                     //prevent the default behaviour of return key pressed
        $(this).attr('contentEditable', false);                             //and make #hptag not editable
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
