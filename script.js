const container = document.querySelector('.container');

// Creating 16x16 grid of square divs
let gridDimension = 16;
let numberOfSquareDivs = gridDimension * gridDimension;
for (let i = 1; i <= numberOfSquareDivs; i++ ) {
    container.innerHTML += `<div class="square" id="div-${i}"></div>`;
}

// Set up a "hover" effect so that the grid divs change color when your mouse passes over them,
// leaving a (pixelated) trail through your grid like a pen would
container.addEventListener('mouseover', (event) => {
    const divId = `#${event.target.id}`;
    const target = document.querySelector(divId);
    target.classList.add('blue');
});

