const container = document.querySelector('.container');
const sizeBtn = document.querySelector('button');

// Creating 16x16 grid of square divs
let gridDimension = 16;
let numberOfSquareDivs = gridDimension * gridDimension;
let sizeOfSquareDivs = 320 / gridDimension;
for (let i = 1; i <= numberOfSquareDivs; i++ ) {
    container.innerHTML += 
        `<div class="square" 
              id="div-${i}"
              style="height: ${sizeOfSquareDivs}px; width: ${sizeOfSquareDivs}px"></div>`;
}

sizeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let newDimension = Number(prompt('How many square per size do you want? (1 - 100)'));
    if (Number.isInteger(newDimension) && newDimension <= 100) {
        alert(newDimension);
    } else {
        alert('Enter the number from 1 to 100');
    }
})

// Set up a "hover" effect so that the grid divs change color when your mouse passes over them,
// leaving a (pixelated) trail through your grid like a pen would
container.addEventListener('mouseover', (event) => {
    const divId = `#${event.target.id}`;
    const target = document.querySelector(divId);
    target.classList.add('blue');
});

