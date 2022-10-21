
const gridContainer = document.querySelector('.gridContainer');

createGrid(16);

function createGrid(num){
    for (let i = 1; i < num; i++){
        const grid = document.createElement('div');
        grid.classList.add('row');
        grid.textContent = i;
        gridContainer.appendChild(grid);
        for (let j = 1; j < num; j++){
            const grid = document.createElement('div');
            grid.classList.add('column');
            grid.textContent = j;
            gridContainer.appendChild(grid);
        }
    }
}