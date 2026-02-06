const container = document.querySelector('.container');


const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');

sliderValue.textContent = slider.value;

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

createGrid(16);
