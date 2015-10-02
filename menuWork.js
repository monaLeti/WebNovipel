
var need = document.getElementById('need');
var textNeed = document.getElementById('needExplanation');
//var new = document.getElementById('need');

need.onmouseover = function (){
 need.style.marginBottom = "5%";
 textNeed.innerHTML = "The device, which is made up of body friendly materials, is inserted into the vagina. With the specially designed NoviPel sensorsystem, all muscle activity is monitored and analyzed wirelessly. \nThe data is then autonomously verified as correct or incorrect. This enables the user to be able to train and convey the pelvic floor muscles in a novel way. All of this data is collected locally on your private smart device, and is therefore only shared with you";
}

need.onmouseout = function (){
  need.style.marginBottom= "5%";
  textNeed.innerHTML ="";
}
