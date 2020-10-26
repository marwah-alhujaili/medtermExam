function coler(){

var coler=["Red", "Orange", "Yellow", "Green", "Light blue", "Blue", "White", "Gray", "Pink"];
var random_color = colors[Math.floor(Math.random()* 9) + 1];

for (var i = 0; i < coler.length; i++) {

  document.querySelector('div')[i].style.coler=random_color;
}

  }
