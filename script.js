window.onload = function () {

  palettesColors();
  createLinePixelBoard();
  createColumnPixelBoard();
  waitEvent();
  waitEventToColor();
  waitControls() 

  function palettesColors () {
    let colorsDefinitions = ['black', 'red', 'blue', 'green'];
    let divsPalettes = document.getElementsByClassName("color");
    for (let i = 0; i < divsPalettes.length; i += 1) {
      divsPalettes[i].style.backgroundColor = colorsDefinitions[i];
      divsPalettes[i].id = colorsDefinitions[i];
    }
    let selected = document.getElementById('black');
    selected.classList.add("selected");
  }

  function createLinePixelBoard() {
    let pixelBoardDiv = document.getElementById('pixel-board');
    let divLine = document.createElement('div');
    divLine.id = "id-div-line";
    divLine.className = "id-div-line";
    pixelBoardDiv.appendChild(divLine);
  }

  function createColumnPixelBoard() {
    let boards = 25;
    for (let i = 1; i <= boards; i += 1) {
      let divLine = document.getElementById('pixel-board');
      let divColumn = document.createElement('div');
      divColumn.id = "id-div-column-"+i;
      divColumn.className = "pixel";
      divLine.appendChild(divColumn);
    }
  }
  
  function modifyColorSelected(color) {
    let removeClass = document.querySelector('.selected');
    removeClass.classList.remove("selected");
    let selected = document.getElementById(color);
    selected.classList.add("selected");
  }

  function waitEvent() {
    let eventColor = document.getElementById("color-palette");
    eventColor.addEventListener("click", function(i){modifyColorSelected(i.target.id)}, false);
  }

  function toDesign(pixel) {
    let colorSelected = document.querySelector('.selected');
    let design = document.getElementById(pixel);
    design.style.backgroundColor = colorSelected.id;
  }

  function waitEventToColor() {
    let eventColor = document.getElementById("pixel-board");
    eventColor.addEventListener("click", function(i){toDesign(i.target.id)}, false);
  }

  function controls(control){
    let boards = 25;
    if (control === 'clear-board') {
      let creaningUp = document.querySelectorAll('.pixel');
      for (let i = 0; i < boards; i += 1) {
        creaningUp[i].style.backgroundColor = "white";
      }
    }
  }

  function waitControls() {
    let eventControl = document.getElementById("controls");
    eventControl.addEventListener("click", function(i){controls(i.target.id)}, false);
  }
}