var heightOfContainer = document.getElementById('firstContainer').offsetHeight;

var containerGetsNewHeight = document.getElementsByClassName('keys')[0];
containerGetsNewHeight.style.height = `calc(100vh - ${heightOfContainer}px)`;