//get the heigt of the container
var heightOfContainer = document.getElementById('firstContainer').offsetHeight;

//get the container where the heigt will be dynamically calculated
var containerGetsNewHeight = document.getElementsByClassName('keys')[0];
containerGetsNewHeight.style.height = `calc(100vh - ${heightOfContainer}px)`;





