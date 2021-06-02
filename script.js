if (window.attachEvent) {
  window.attachEvent('onload', general);
} else {
  if(window.onload) {
      var curronload = window.onload;
      var newonload = function(evt) {
          curronload(evt);
          general(evt);
          
      };
      window.onload = newonload;
  } else {
      window.onload = general;
  }
}

function general () {
  palettesColors();
  createTablePixelBoard();
  createLinePixelBoard();
  createColumnPixelBoard();
  createDivs();
}

function palettesColors () {
  let colorsDefinitions = ['black', 'red', 'blue', 'green'];
  let divsPalettes = document.getElementsByClassName("color");
  for (let i = 0; i < divsPalettes.length; i += 1) {
    divsPalettes[i].style.backgroundColor = colorsDefinitions[i];
  }
}

function createTablePixelBoard() {
  let pixelFrame = document.createElement('div');
  pixelFrame.className = "pixel";
  let newTable = document.createElement('table');
  newTable.id = "id-table";
  let board = document.getElementById('pixel-board');
  board.appendChild(newTable);
}

function createLinePixelBoard() {
  let heightBoard = 5;
  let table = document.getElementById('id-table');
  for (let i = 1; i<= heightBoard; i += 1) {
    let tr = document.createElement('tr');
    tr.id = "id-tr-"+i;
    tr.className = "id-tr";
    table.appendChild(tr);
  }
}

function createColumnPixelBoard() {
  let widthBoard = 5;
  for (let i = 1; i <= widthBoard; i += 1) {
    let tr = document.getElementById('id-tr-'+i);
    for (let i2 = 1; i2 <= widthBoard; i2 += 1) {
      let td = document.createElement('td');
      td.id = "id-td-"+i+i2;
      td.className = "id-td";
      tr.appendChild(td);
    }
  }
}

function createDivs() {
  let widthBoard = 5;
  for (let i = 1; i <= widthBoard; i += 1) {
    for (let i2 = 1; i2 <= widthBoard; i2 += 1) {
      let td = document.getElementById('id-td-'+i+i2);
      let divs = document.createElement('div');
      divs.id = "id-div-"+i;
      divs.className = "pixel";
      td.appendChild(divs);
    }
  }
}
