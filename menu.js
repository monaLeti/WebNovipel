var c = document.getElementById('howWorks');
var n = document.getElementById('need');
var l = document.getElementById('newsLetter');
var te = document.getElementById('team');
var textHow =document.getElementById('howWorksExplanation');
var textNeed =document.getElementById('needExplanation');
var textNew =document.getElementById('newsExplanation');
var textTeam = document.getElementById('teamExplanation');
//HowWors hover --> Everything gets compacted
if(c!=null){
  c.onmouseover = function (){
    textHow.innerHTML = "The device, which is made up of body friendly materials, is inserted into the vagina. With the specially designed NoviPel sensorsystem, all muscle activity is monitored and analyzed wirelessly. \nThe data is then autonomously verified as correct or incorrect. This enables the user to be able to train and convey the pelvic floor muscles in a novel way. <br>All of this data is collected locally on your private smart device, and is therefore only shared with you";
    textHow.style.marginBottom="5%";

  }

  c.onmouseout = function(){
    textHow.style.marginBottom="0%";
    textHow.innerHTML="";
  }
}
if(n!=null){
  n.onmouseover = function (){
    textNeed.innerHTML = "NoviPel are always looking for co-operators. Are you a professional practitioner, investor or maybe just interested in getting toknow us better; dont hesistate to get in contact today!";
    textNeed.style.marginBottom="5%";
  }
  n.onmouseout = function(){
    textNeed.style.marginBottom="0%";
    textNeed.innerHTML="";
  }
}
if(l!=null){
  l.onmouseover = function (){
    textNew.innerHTML = "Check up on the current status and workshops of NoviPel here.<br>Read our previous and current newsletters";
    textNew.style.marginBottom="5%";
  }
  l.onmouseout = function(){
    textNew.style.marginBottom="0%";
    textNew.innerHTML ="";
  }
}
if(te!=null){
  te.onmouseover = function (){
    textTeam.innerHTML ="The team behind NoviPel."
  }
  te.onmouseout = function(){
    textTeam.innerHTML ="";
  }
}
