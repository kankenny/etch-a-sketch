let gridContainer = document.querySelector('.grid');

function createBox(rows, columns){

    for (let i = 0; i < (rows * columns); i++){
        let box = document.createElement('div');
        gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        gridContainer.appendChild(box).classList.add('gridBox');
    }

    

}

createBox(16, 16);

console.log('hello');