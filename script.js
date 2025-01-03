const container = document.querySelector('.container');
const sizeBtn = document.querySelector('button');


const createGrid = (number) => {
    container.innerHTML = "";
    const gridDimension = number;
    const numberOfSquareDivs = gridDimension * gridDimension;
    const sizeOfSquareDivs = 640 / gridDimension;
    for (let i = 1; i <= numberOfSquareDivs; i++ ) {
        container.innerHTML += 
            `<div class="square" 
                  id="div-${i}"
                  style="height: ${sizeOfSquareDivs}px; width: ${sizeOfSquareDivs}px"></div>`;
    }
}

sizeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let newDimension = Number(prompt('How many square per size do you want? (1 - 64)'));
    if (Number.isInteger(newDimension) && newDimension <= 100) {
        createGrid(newDimension);
    } else {
        alert('Enter the number from 1 to 64');
    }
})

// Set up a "hover" effect so that the grid divs change color when your mouse passes over them,
// leaving a (pixelated) trail through your grid like a pen would
container.addEventListener('mouseover', (event) => {
    const divId = `#${event.target.id}`;
    const target = document.querySelector(divId);
    target.classList.add('blue');
});

// Creating 16x16 grid of square divs
createGrid(16);

