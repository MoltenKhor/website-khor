function switchVisibility(name){
  var spacer = document.getElementById(name);
  var allSpacers = document.body.getElementsByClassName('about');
  for(var i = 0; i<allSpacers.length; i++){
    allSpacers[i].style.visibility = "hidden";
  }
    spacer.style.visibility = "visible";

}
