var c = document.getElementById('howWorks');
var n = document.getElementById('need');
var l = document.getElementById('newsLetter');
var te = document.getElementById('team');
var textHow =document.getElementById('howWorksExplanation');
var textNeed =document.getElementById('needExplanation');
var textNew =document.getElementById('newsExplanation');
//HowWors hover --> Everything gets compacted
c.onmouseover = function (){

  c.style.marginBottom="5%"; //Distance between the text and the botton
  n.style.marginTop="15%";
  l.style.marginTop="15%";
  te.style.marginTop="15%";
  textHow.innerHTML = "The device, which is made up of body friendly materials, is inserted into the vagina. With the specially designed NoviPel sensorsystem, all muscle activity is monitored and analyzed wirelessly. \nThe data is then autonomously verified as correct or incorrect. This enables the user to be able to train and convey the pelvic floor muscles in a novel way. All of this data is collected locally on your private smart device, and is therefore only shared with you";
}
c.onmouseout = function(){

  c.style.marginBottom="0%";
  n.style.marginTop="10%";
  l.style.marginTop="10%";
  te.style.marginTop="10%";
  textHow.innerHTML="";
}

n.onmouseover = function (){
  n.style.marginBottom="5%";
  textNeed.innerHTML = "The device, which is made up of body friendly materials, is inserted into the vagina. With the specially designed NoviPel sensorsystem, all muscle activity is monitored and analyzed wirelessly. \nThe data is then autonomously verified as correct or incorrect. This enables the user to be able to train and convey the pelvic floor muscles in a novel way. All of this data is collected locally on your private smart device, and is therefore only shared with you";

}
n.onmouseout = function(){
  n.style.marginBottom="0%";
  textNeed.innerHTML="";
}


l.onmouseover = function (){
  l.style.marginBottom="5%";
  textNew.innerHTML = "The device, which is made up of body friendly materials, is inserted into the vagina. With the specially designed NoviPel sensorsystem, all muscle activity is monitored and analyzed wirelessly. \nThe data is then autonomously verified as correct or incorrect. This enables the user to be able to train and convey the pelvic floor muscles in a novel way. All of this data is collected locally on your private smart device, and is therefore only shared with you";
}
l.onmouseout = function(){
  l.style.marginBottom="0%";
  textNew.innerHTML ="";
}


te.onmouseover = function (){
  te.style.marginBottom="50%";
}
te.onmouseout = function(){
  te.style.marginBottom="0%";
}
