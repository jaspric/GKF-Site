$(document).ready(function() {
});
  function d20() {
    return Math.floor(Math.random() * (20 - 1 + 1) + 1);
  };

  function nameCheck(){
    if (!initname){
      $('.initalert').remove();
      $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Please input name.</h4></div></div>').insertAfter("#advanced").hide().fadeIn(1500);
      return false;
    } else {
      return true;
    }
  };

  function initCheck(){
    if (!($.isNumeric(initnum)) && (!(initnum === NaN)) && (!initnum)){
      $('.initalert').remove();
      $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Please enter a numeric value for initiative.</h4></div></div>').insertAfter("#advanced").hide().fadeIn(1500);
      $('#initiative').focus();
      return false;
    }
  };

  function hpCheck(){
    if (!($.isNumeric(hpnum)) && (!(hpnum == ""))){
      $('.initalert').remove();
      $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Please enter a numeric value for HP.</h4></div></div>').insertAfter("#advanced").hide().fadeIn(1500);
      $('#hp').focus();
      return false;
    }else{
        return true;
      };
  };

  function autoInitCheck(){
    if ($('#autoRollInit').prop('checked')){
      return true;
    }else if(!($('#autoRollInit').prop('checked'))){
        return false;
    };
  };

  function advancedCheck(){
    if ($("#advanced").is(':visible')){
      return true;
    }else{
      return false;
    }
  }

  function actorsCheck(){
    if (!(numactors == "") && ($.isNumeric(numactors)) && ((numactors > 0) && (numactors % 1 == 0))){
      return true;
    }else{
      return false;
    }
  };

  function acNumericCheck(){
    if (!($.isNumeric(acnum)) && (!(acnum == ""))){
      $('.initalert').remove();
      $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Please enter a numeric value for AC.</h4></div></div>').insertAfter("#advanced").hide().fadeIn(1500);
      $('#AC').focus();
    }
  };

  function autoRollWithActors(){
    $('.initalert').remove();
    for(j = numactors; j > 0; j--){                                   //for every number of actor greater than 0, subtract 1 until 0.
      var initplusmod = d20() + parseInt(initmod);
      i++;
      $($('<div class="row globalrow newinitrow' + i + '" data-index="' + initplusmod + '"></div>')).appendTo(".container");
      $('<div class="col-xs-12 col-md-offset-2 col-md-8 globalinit addedinit' + i + '"></div>').appendTo(".newinitrow" + i).hide().fadeIn(1000);
      $('<div class="col-xs-4 col-md-4 col-lg-4 text-left"><span><p>' + initplusmod + ' ' + initname + j + '</p></span></div><div class="col-xs-5 col-md-4 text-center hpdiv"><p><button id="minushp"><span class="glyphicon glyphicon-minus"></span></button><span id="hptag">' + hpnum + '</span><button id="addhp"><span class="glyphicon glyphicon-plus"></span></button></p></div><div class="col-xs-3 col-md-2 col-lg-2 text-left"><span><p>AC:' + acnum + '</p></span></div><div class="btnClose"><span class="glyphicon glyphicon-remove"></span></div>').appendTo(".addedinit" + i);
    };
  };

  function autoRollNoActors(){
    $('.initalert').remove();
    var initplusmod = d20() + parseInt(initmod);
    i++;
    $($('<div class="row globalrow newinitrow' + i + '" data-index="' + initplusmod + '"></div>')).appendTo(".container");
    $('<div class="col-xs-12 col-md-offset-2 col-md-8 globalinit addedinit' + i + '"></div>').appendTo(".newinitrow" + i).hide().fadeIn(1000);
    $('<div class="col-xs-4 col-md-4 col-lg-4 text-left"><span><p>' + initplusmod + ' ' + initname + j + '</p></span></div><div class="col-xs-5 col-md-4 text-center hpdiv"><p><button id="minushp"><span class="glyphicon glyphicon-minus"></span></button><span id="hptag">' + hpnum + '</span><button id="addhp"><span class="glyphicon glyphicon-plus"></span></button></p></div><div class="col-xs-3 col-md-2 col-lg-2 text-left"><span><p>AC:' + acnum + '</p></span></div><div class="btnClose"><span class="glyphicon glyphicon-remove"></span></div>').appendTo(".addedinit" + i);
    $('#initname').val('');                                                   //blank out inputs
    $('#initiative').val('');                                                 //blank out inputs
    $('#hp').val('');                                                         //blank out inputs
    $('#ac').val('');
    $('#initname').focus();
  };

  function manualRollWithActors(){
    $('.initalert').remove();
    for(j = numactors; j > 0; j--){                                   //for every number of actor greater than 0, subtract 1 until 0.
      var initplusmod = parseInt(initnum) + parseInt(initmod);
      i++;
      $($('<div class="row globalrow newinitrow' + i + '" data-index="' + initplusmod + '"></div>')).appendTo(".container");
      $('<div class="col-xs-12 col-md-offset-2 col-md-8 globalinit addedinit' + i + '"></div>').appendTo(".newinitrow" + i).hide().fadeIn(1000);
      $('<div class="col-xs-4 col-md-4 col-lg-4 text-left"><span><p>' + initplusmod + ' ' + initname + j + '</p></span></div><div class="col-xs-5 col-md-4 text-center hpdiv"><p><button id="minushp"><span class="glyphicon glyphicon-minus"></span></button><span id="hptag">' + hpnum + '</span><button id="addhp"><span class="glyphicon glyphicon-plus"></span></button></p></div><div class="col-xs-3 col-md-2 col-lg-2 text-left"><span><p>AC:' + acnum + '</p></span></div><div class="btnClose"><span class="glyphicon glyphicon-remove"></span></div>').appendTo(".addedinit" + i);
    };
  };

  function manualRoll(){
    i++;
    $('.initalert').remove();                                                   //remove the alert
    $($('<div class="row globalrow newinitrow' + i + '" data-index="' + initnum + '"></div>')).appendTo(".container");
    $('<div class="col-xs-12 col-md-offset-2 col-md-8 globalinit addedinit' + i + '"></div>').appendTo(".newinitrow" + i).hide().fadeIn(1000);
    $('<div class="col-xs-4 col-md-4 col-lg-4 text-left"><span><p>' + initnum + ' ' + initname + '</p></span></div><div class="col-xs-5 col-md-4 text-center hpdiv"><p><button id="minushp"><span class="glyphicon glyphicon-minus"></span></button><span id="hptag">' + hpnum + '</span><button id="addhp"><span class="glyphicon glyphicon-plus"></span></button></p></div><div class="col-xs-3 col-md-2 col-lg-2 text-left"><span><p>AC:' + acnum + '</p></span></div><div class="btnClose"><span class="glyphicon glyphicon-remove"></span></div>').appendTo(".addedinit" + i);
    $('#initname').val('');                                                   //blank out inputs
    $('#initiative').val('');                                                 //blank out inputs
    $('#hp').val('');                                                         //blank out inputs
    $('#ac').val('');
    $('#initname').focus();
  };
