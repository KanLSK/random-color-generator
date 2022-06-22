const container = document.querySelector('.container');
const body = document.querySelector('body');
const tileLeft = document.querySelector('.tile-left');
const tileRight = document.querySelector('.tile-right');

function randomNumber(number) {
    return Math.floor(Math.random() * number)
}

function randomColor() {
    let bgColor = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`
    return bgColor
}


container.addEventListener('click', (e) => {
    e.target.style.backgroundColor = randomColor()
    e.target.textContent = `${randomColor()}`
})
