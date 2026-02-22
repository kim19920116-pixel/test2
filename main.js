const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers-container');
const themeToggle = document.getElementById('theme-toggle');

// Function to set the theme
function setTheme(isDark) {
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.checked = true;
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.checked = false;
    }
}

// Event listener for the theme toggle
themeToggle.addEventListener('change', () => {
    const isDark = themeToggle.checked;
    setTheme(isDark);
    localStorage.setItem('darkTheme', isDark);
});

// Check for saved theme in localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('darkTheme');
    // If there is a saved theme, use it. Otherwise, check system preference.
    if (savedTheme !== null) {
        setTheme(savedTheme === 'true');
    } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark);
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
