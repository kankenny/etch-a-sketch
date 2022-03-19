let gridContainer = document.querySelector('.grid');
let blackButton = document.querySelector('.black');
let grayButton = document.querySelector('.gray');
let rgbButton = document.querySelector('.rgb');
let eraserButton = document.querySelector('.eraser');
let clearButton = document.querySelector('.clear');
let resizeButton = document.querySelector('.resize');

function createBox(rows, columns){

    for (let i = 0; i < (rows * columns); i++){
        let box = document.createElement('div');
        gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        gridContainer.appendChild(box).classList.add('gridBox');
    }
}

function blackColor(){
    let gridBoxes = document.querySelectorAll('.gridBox');
    blackButton.addEventListener('click', () => {
        gridBoxes.forEach(gridBox => gridBox.addEventListener('mouseover', () =>{
            gridBox.style.background = 'black';
        }))
    })
}

function grayColor(){
    let gridBoxes = document.querySelectorAll('.gridBox');
    grayButton.addEventListener('click', () => {
        gridBoxes.forEach(gridBox => gridBox.addEventListener('mouseover', () =>{
            let rgb = Math.floor(Math.random() * 255);
            console.log('clicked');
            gridBox.style.background = `rgb(${rgb}, ${rgb}, ${rgb})`;
        }))
    })
}

function rgbColor(){
    let gridBoxes = document.querySelectorAll('.gridBox');
    rgbButton.addEventListener('click', () => {
        gridBoxes.forEach(gridBox => gridBox.addEventListener('mouseover', () =>{
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);

            gridBox.style.background = `rgb(${r}, ${g}, ${b})`;

        }))
    })
}

function eraser(){
    let gridBoxes = document.querySelectorAll('.gridBox');
    eraserButton.addEventListener('click', () => {
        gridBoxes.forEach(gridBox => gridBox.addEventListener('mouseover', () =>{
            gridBox.style.background = 'white';
        }))
    })
}

function clear(){
    let gridBoxes = document.querySelectorAll('.gridBox');
    clearButton.addEventListener('click', () => {
        for (let i = 0; i < gridBoxes.length; i++){
            gridBoxes[i].style.background = `white`;
        }
    })
}

function resize(){
    resizeButton.addEventListener('click', () => {
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.lastChild);
          }
        gridSize = slider.value;
        reset();
    })
}

function reset(){
    createBox(gridSize, gridSize);
    blackColor();
    grayColor();
    eraser();
    clear();
    rgbColor();
    resize();
}


/*credits to w3school*/
var slider = document.getElementById("myRange");
var output0 = document.getElementById("row-value");
var output1 = document.getElementById("column-value");

let gridSize = slider.value;

output0.textContent = gridSize;
output1.textContent = gridSize;

slider.oninput = function() {
  output0.innerHTML = this.value;
  output1.innerHTML = this.value;
}


createBox(gridSize, gridSize);
blackColor();
grayColor();
eraser();
clear();
rgbColor();
resize();