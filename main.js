document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersContainer = document.getElementById('numbers-container');

    generateBtn.addEventListener('click', () => {
        // Disable button during animation
        generateBtn.disabled = true;
        
        // Clear previous numbers
        numbersContainer.innerHTML = '';
        
        const numbers = generateLottoNumbers();
        
        // Render numbers with delay
        numbers.forEach((num, index) => {
            setTimeout(() => {
                const ball = createBallElement(num);
                numbersContainer.appendChild(ball);
                
                // Trigger animation
                setTimeout(() => ball.classList.add('show'), 10);
                
                // Re-enable button after last ball is shown
                if (index === numbers.length - 1) {
                    setTimeout(() => {
                        generateBtn.disabled = false;
                    }, 500);
                }
            }, index * 200);
        });
    });

    function generateLottoNumbers() {
        const numbers = [];
        while (numbers.length < 6) {
            const randomNum = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(randomNum)) {
                numbers.push(randomNum);
            }
        }
        return numbers.sort((a, b) => a - b);
    }

    function createBallElement(num) {
        const ball = document.createElement('div');
        ball.className = 'number-circle';
        ball.innerText = num;
        
        // Assign color class based on number range
        if (num <= 10) ball.classList.add('ball-range-1');
        else if (num <= 20) ball.classList.add('ball-range-2');
        else if (num <= 30) ball.classList.add('ball-range-3');
        else if (num <= 40) ball.classList.add('ball-range-4');
        else ball.classList.add('ball-range-5');
        
        return ball;
    }
});
