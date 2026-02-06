const container = document.querySelector('.container');


const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');
const clearButton = document.querySelector('.clear');  
let isMouseDown = false;


document.addEventListener('mouseup', function() {
    isMouseDown = false;
});

document.addEventListener('mousedown', function() {
    isMouseDown = true;
});

clearButton.addEventListener('click', function() {
    clearGrid();
    createGrid(slider.value);
});
createGrid(slider.value);

slider.addEventListener('input', function() {
    clearGrid();
    sliderValue.textContent = slider.value;
    createGrid(slider.value);
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
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
    cell.addEventListener('mouseover', function() {
        if (isMouseDown) {
            let color = document.querySelector('#color-select').value;
            if (color === 'random') {
                color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            }
            cell.style.backgroundColor = `${color}`;
        }
    });
});



}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

