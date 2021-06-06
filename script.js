window.onload = function () {
  function palettesColors() {
    const colorsDefinitions = ['red', 'blue', 'yellow', 'brown', 'green'];
    const colorsDefinitions2 = ['purple', 'pink', 'grey'];
    const divsPalettes = document.getElementsByClassName('color');
    const controlColors = [];
    for (let i = 0; i < divsPalettes.length; i += 1) {
      if (i < 1) {
        divsPalettes[0].style.backgroundColor = 'black';
        divsPalettes[0].id = 'black';
      } else {
        const n = Math.floor(Math.random() * colorsDefinitions.length);
        const n2 = Math.floor(Math.random() * colorsDefinitions2.length);
        if (controlColors.indexOf(colorsDefinitions[n]) === -1) {
          controlColors.push(colorsDefinitions[n]);
          divsPalettes[i].style.backgroundColor = colorsDefinitions[n];
          divsPalettes[i].id = colorsDefinitions[n];
        } else if (controlColors.indexOf(colorsDefinitions2[n2]) === -1) {
          controlColors.push(colorsDefinitions2[n2]);
          divsPalettes[i].style.backgroundColor = colorsDefinitions2[n2];
          divsPalettes[i].id = colorsDefinitions2[n2];
        }
      }
    }
    const selected = document.getElementById('black');
    selected.classList.add('selected');
  }
  palettesColors();

  function createInitialPixelBoard() {
    const value = 5;
    const widthBoard = document.querySelector('#pixel-board');
    let dynamicWidth = 40 * (value + 0.5);
    dynamicWidth = dynamicWidth.toString();
    widthBoard.style.width = dynamicWidth + 'px';
    const boards = value * value;
    for (let i = 1; i <= boards; i += 1) {
      const divLine = document.getElementById('pixel-board');
      const divColumn = document.createElement('div');
      divColumn.id = 'id-div-column-' + i;
      divColumn.className = 'pixel';
      divLine.appendChild(divColumn);
    }
  }
  createInitialPixelBoard();

  function createPixelBoard() {
    const list = document.querySelectorAll('.pixel');
    for (let i = 0; i < list.length; i += 1) {
      const deleteItems = document.getElementById(list[i].id);
      deleteItems.remove();
    }
    const valueInput = document.querySelector('#board-size');
    const value = parseInt(valueInput.value);
    if (value < 5) {
      alert('Permitidos apenas números de 5 a 50.');
      value = 5;
    } else if (value > 50) {
      alert('Permitidos apenas números de 5 a 50.');
      value = 50;
    } else if (!value) {
      alert('Board inválido!');
      window.location.reload(false);
    }
    const widthBoard = document.querySelector('#pixel-board');
    let dynamicWidth = 40 * (value + 0.5);
    dynamicWidth = dynamicWidth.toString();
    widthBoard.style.width = dynamicWidth + 'px';
    const boards = value * value;
    for (let i = 1; i <= boards; i += 1) {
      const divLine = document.getElementById('pixel-board');
      const divColumn = document.createElement('div');
      divColumn.id = 'id-div-column-' + i;
      divColumn.className = 'pixel';
      divLine.appendChild(divColumn);
    }
  }
  
  function modifyColorSelected(color) {
    const removeClass = document.querySelector('.selected');
    removeClass.classList.remove('selected');
    const selected = document.getElementById(color);
    selected.classList.add('selected');
  }

  function waitEvent() {
    let eventColor = document.getElementById('color-palette');
    eventColor.addEventListener('click', function(i){modifyColorSelected(i.target.id)}, false);
  }
  waitEvent();

  function toDesign(pixel) {
    let colorSelected = document.querySelector('.selected');
    let design = document.getElementById(pixel);
    design.style.backgroundColor = colorSelected.id;
  }

  function waitEventToColor() {
    let eventColor = document.getElementById('pixel-board');
    eventColor.addEventListener('click', function(i){toDesign(i.target.id)}, false);
  }
  waitEventToColor();

  function controls(control){
    let boards = document.querySelectorAll('.pixel');
    if (control === 'clear-board') {
      let creaningUp = document.querySelectorAll('.pixel');
      for (let i = 0; i < boards.length; i += 1) {
        creaningUp[i].style.backgroundColor = 'white';
      }
    }
  }

  function waitControls() {
    let eventControl = document.getElementById('controls');
    eventControl.addEventListener('click', function(i){controls(i.target.id)}, false);
  }
  waitControls();

  function waitRedefine() {
    let redefineBoard = document.getElementById('generate-board');
    redefineBoard.addEventListener('click', createPixelBoard, false);

  }
  waitRedefine();
}