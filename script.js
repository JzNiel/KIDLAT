const categories = [
    { images: ['image/math.jpg'], answer: 'math' },
    { images: ['image/genetics.jpg'], answer: 'genetics' },
    { images: ['image/biology.jpg'], answer: 'biology' },
    { images: ['image/addition.jpg'], answer: 'addition' },
    { images: ['image/measure.jpg'], answer: 'measure' },
    { images: ['image/science.jpg'], answer: 'science' },
    { images: ['image/disease.jpg'], answer: 'disease' },
    { images: ['image/micro.jpg'], answer: 'micro' },
    { images: ['image/physics.jpg'], answer: 'physics' },
    { images: ['image/chemical.jpg'], answer: 'chemical' },
];

let currentCategoryIndex = 0;
let score = 0;
let timer;

function startGame() {
    displayImages();
    startTimer();
}

function displayImages() {
    const imagesContainer = document.getElementById('images-container');
    imagesContainer.innerHTML = '';

    const currentCategory = categories[currentCategoryIndex];

    // Display images
    currentCategory.images.forEach((image, index) => {
        const imgContainer = document.createElement('div');
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgContainer.appendChild(imgElement);

        // Display jumbled letters under each image
        const jumbledLetters = shuffleArray(currentCategory.answer.split('')).join('');
        const jumbledLettersElement = document.createElement('p');
        jumbledLettersElement.textContent = `Hint: ${jumbledLetters}`;
        imgContainer.appendChild(jumbledLettersElement);

        imagesContainer.appendChild(imgContainer);
    });
}

function checkGuess() {
    const userGuess = document.getElementById('guess-input').value.toLowerCase();
    const currentCategory = categories[currentCategoryIndex];

    if (userGuess === currentCategory.answer) {
        document.getElementById('result').textContent = 'Correct!';
        score += 10; // Adjust the scoring logic as needed
        document.getElementById('score').textContent = `Score: ${score}`;
        nextCategory();
    } else {
        document.getElementById('result').textContent = 'Incorrect. Try again.';
    }
}

function nextCategory() {
    currentCategoryIndex = (currentCategoryIndex + 1) % categories.length;
    displayImages();
    document.getElementById('result').textContent = '';
    document.getElementById('guess-input').value = '';
}

// function startTimer() {
//     let seconds = 60;
//     timer = setInterval(function () {
//         seconds--;
//         const minutes = Math.floor(seconds / 60);
//         const remainingSeconds = seconds % 60;

//         document.getElementById('timer').textContent = `Time remaining: ${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;

//         if (seconds <= 0) {
//             clearInterval(timer);
//             document.getElementById('timer').textContent = 'Time\'s up!';
//             nextCategory(); // Move to the next category when the timer runs out
//         }
//     }, 1000);
// }

// Helper function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Start the game when the page loads
document.addEventListener('DOMContentLoaded', startGame);