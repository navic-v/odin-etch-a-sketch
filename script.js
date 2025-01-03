const container = document.querySelector('.container');

// Creating 16x16 grid of square divs
let gridDimension = 16;
let numberOfSquareDivs = gridDimension * gridDimension;
for (let i = 1; i <= numberOfSquareDivs; i++ ) {
    container.innerHTML += `<div class="square"></div>`;
}

