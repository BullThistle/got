var dae = 0;
var hound = 0;
var jon = 0;
var tyr = 0;
var modal = document.getElementById('myModal');

function daeUp()
{
  dae = dae + 1;
}

function houndUp()
{
  hound = hound + 1;
}

function jonUp()
{
  jon = jon + 1;
}

function tyrUp()
{
  var top = Math.max(dae, hound, jon );
}

function getResult() {
  if(dae > hound || dae > jon || dae > tyr)
  {
    alert("You are The Daenerys Targaryen");
  }
  else if(hound > dae || hound > jon || hound > tyr)
  {
    alert("You are The Hound");
  }
  else if(jon > dae || jon > hound || hound > tyr)
  {
    alert("You are Jon Snow");
  }
  else
  {
    alert("You are Tyrion Lannister");
  }
}

$(document).ready(function()
{
  $('.dae').click(function () {
   document.getElementsByClassName("dae").innerHTML = daeUp();
  });

  $('.hound').click(function () {
   document.getElementsByClassName("hound").innerHTML = houndUp();
  });

  $('.jon').click(function () {
   document.getElementsByClassName("jon").innerHTML = jonUp();
  });

  $('.tyr').click(function () {
   document.getElementsByClassName("tyr").innerHTML = tyrUp();
  });


});
