function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');

function randomizeStartPosition(boxes) {
    [redBox, blueBox, greenBox].forEach(box => {
        const x = getRandomInt(-20, 20);
        const y = getRandomInt(-20, 20);

        box.style.left = x;
        box.style.top = y;
    });
}

window.randomizeStartPosition = randomizeStartPosition;

const firstTarget = document.querySelector('ul.targets li:nth-child(1)');
const secondTarget = document.querySelector('ul.targets li:nth-child(2)');
const thirdTarget = document.querySelector('ul.targets li:nth-child(3)');

setInterval(() => {
    targetFulfilled(redBox, firstTarget, {x: 20, y: 300});
    targetFulfilled(blueBox, secondTarget, {x: 400, y: 300});
    targetFulfilled(greenBox, thirdTarget, {x: 400, y: 20});
}, 10);

function targetFulfilled(box, targetBox, fulfilledPosition) {
    const renderedPosition = box.getBoundingClientRect();
    
    if (renderedPosition.left === fulfilledPosition.x && renderedPosition.top === fulfilledPosition.y) {
        targetBox.classList.add('fulfilled');
    }
}

function moveBox(boxToMove, newPosition) {
    return new Promise((resolve) => {
        boxToMove.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
        setTimeout(resolve, 1000);
    });
}

window.moveBox = moveBox;
