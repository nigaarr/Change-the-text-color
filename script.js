// Function to change the color of the greeting text
function changeColor() {
    var greeting = document.getElementById('greeting');
    var randomColor = getRandomColor(); // Call getRandomColor function
    greeting.style.color = randomColor;
}

// Event listener for the button click
document.getElementById('colorButton').addEventListener('click', changeColor);

// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}