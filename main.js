const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers-container');

// New theme buttons
const lightThemeBtn = document.getElementById('light-theme-btn');
const darkThemeBtn = document.getElementById('dark-theme-btn');
const grayscaleThemeBtn = document.getElementById('grayscale-theme-btn');

// Function to set the theme
function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);

    // Update active class on buttons
    lightThemeBtn.classList.remove('active');
    darkThemeBtn.classList.remove('active');
    grayscaleThemeBtn.classList.remove('active');

    if (themeName === 'light') {
        lightThemeBtn.classList.add('active');
    } else if (themeName === 'dark') {
        darkThemeBtn.classList.add('active');
    } else if (themeName === 'grayscale') {
        grayscaleThemeBtn.classList.add('active');
    }
}

// Event listeners for the theme buttons
lightThemeBtn.addEventListener('click', () => setTheme('light'));
darkThemeBtn.addEventListener('click', () => setTheme('dark'));
grayscaleThemeBtn.addEventListener('click', () => setTheme('grayscale'));

// Check for saved theme in localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Default to light theme if no preference is saved
        setTheme('light');
    }
});

generateBtn.addEventListener('click', () => {
    generateLottoNumbers();
});

function generateLottoNumbers() {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        setTimeout(() => {
            const numberCircle = document.createElement('div');
            numberCircle.classList.add('number-circle');
            numberCircle.textContent = number;
            numberCircle.style.animationDelay = `${index * 100}ms`;
            numbersContainer.appendChild(numberCircle);
        }, index * 200);
    });
}
