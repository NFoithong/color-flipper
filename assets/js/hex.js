const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    // #f15025
    let hexColor = '#';
    // set up loop to get random 6 digits hex
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()] //hexColor = hexColor + hex[0]
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}