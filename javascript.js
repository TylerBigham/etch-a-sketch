
const gridContainer = document.querySelector('.gridContainer');
const resetButton = document.querySelector('.reset');
//const range = document.getElementById("myRange");

getInput();

/*range.oninput = function() {
    location.reload();
    createGrid(range.value);
}*/

const reloadPage = () => {
    location.reload();
}

resetButton.addEventListener('click', reloadPage);

function getInput(){
    let gridSize = prompt("Enter grid size 10 - 100");
    if (gridSize >= 10 && gridSize <= 100){
        createGrid(gridSize);
    }else{
        getInput();
    }
}

function createGrid(num){
    for (let i = 0; i < num; i++){
        const grid = document.createElement('div');
        grid.classList.add('row');
        gridContainer.appendChild(grid);
        for (let j = 0; j < num; j++){
            const column = document.createElement('div');
            column.classList.add('column');
            column.textContent = '';
            grid.appendChild(column);
        }
    }
}
