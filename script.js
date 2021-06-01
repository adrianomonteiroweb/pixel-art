if (window.attachEvent) {
  window.attachEvent('onload', palettesColors);
} else {
  if(window.onload) {
      var curronload = window.onload;
      var newonload = function(evt) {
          curronload(evt);
          palettesColors(evt);
      };
      window.onload = newonload;
  } else {
      window.onload = palettesColors;
  }
}

function palettesColors () {
  let colorsDefinitions = ['black', 'red', 'blue', 'green'];
  let divsPalettes = document.getElementsByClassName("color");
  for (let i = 0; i < divsPalettes.length; i += 1) {
    divsPalettes[i].style.backgroundColor = colorsDefinitions[i];
  }
}
