window.onload = function () {
  function palettesColors() {
    const colorsDefinitions = ['black', 'red', 'blue', 'green'];
    const divsPalettes = document.getElementsByClassName('color');
    for (let i = 0; i < divsPalettes.length; i += 1) {
      divsPalettes[i].style.backgroundColor = colorsDefinitions[i];
      divsPalettes[i].id = colorsDefinitions[i];
    }
    const selected = document.getElementById('black');
    selected.classList.add('selected');
  }
  palettesColors();

  function createInitialPixelBoard() {
    let value = 5;
    const widthBoard = document.querySelector('#pixel-board');
    let dynamicWidth = 40 * (value + 0.5);
    dynamicWidth = dynamicWidth.toString();
    widthBoard.style.width = dynamicWidth+"px";
    let boards = value * value;
    for (let i = 1; i <= boards; i += 1) {
      let divLine = document.getElementById('pixel-board');
      let divColumn = document.createElement('div');
      divColumn.id = "id-div-column-"+i;
      divColumn.className = "pixel";
      divLine.appendChild(divColumn);
    }
  }
  createInitialPixelBoard();

  function createPixelBoard() {
    const list = document.querySelectorAll('.pixel');
    for (let i = 0; i < list.length; i += 1) {
      const deleteItems = document.getElementById(list[i].id).remove();
    }
    let valueInput = document.querySelector('#board-size');
    let value = parseInt(valueInput.value);
    if (value < 5 || value > 50) {
      alert('Permitidos apenas números de 5 a 50.');
      window.location.reload(false);
    } else if (!value) {
      alert('Board inválido!');
      window.location.reload(false);
    } else {
      const widthBoard = document.querySelector('#pixel-board');
      let dynamicWidth = 40 * (value + 0.5);
      dynamicWidth = dynamicWidth.toString();
      widthBoard.style.width = dynamicWidth+"px";
      let boards = value * value;
      for (let i = 1; i <= boards; i += 1) {
        let divLine = document.getElementById('pixel-board');
        let divColumn = document.createElement('div');
        divColumn.id = "id-div-column-"+i;
        divColumn.className = "pixel";
        divLine.appendChild(divColumn);
      }
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
  waitEvent();

  function toDesign(pixel) {
    let colorSelected = document.querySelector('.selected');
    let design = document.getElementById(pixel);
    design.style.backgroundColor = colorSelected.id;
  }

  function waitEventToColor() {
    let eventColor = document.getElementById("pixel-board");
    eventColor.addEventListener("click", function(i){toDesign(i.target.id)}, false);
  }
  waitEventToColor();

  function controls(control){
    let boards = document.querySelectorAll('.pixel');
    if (control === 'clear-board') {
      let creaningUp = document.querySelectorAll('.pixel');
      for (let i = 0; i < boards.length; i += 1) {
        creaningUp[i].style.backgroundColor = "white";
      }
    }
  }

  function waitControls() {
    let eventControl = document.getElementById("controls");
    eventControl.addEventListener("click", function(i){controls(i.target.id)}, false);
  }
  waitControls();

  function waitRedefine() {
    let redefineBoard = document.getElementById("generate-board");
    redefineBoard.addEventListener("click", createPixelBoard, false);

  }
  waitRedefine();
}