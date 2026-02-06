const container = document.querySelector('.container');


const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');

slider.addEventListener('input', function() {
    clearGrid();
    sliderValue.textContent = slider.value;
    createGrid(sliderValue.textContent);
});

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


