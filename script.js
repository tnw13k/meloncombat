document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const counter = document.getElementById('counter');
    const button = document.getElementById('clickButton');
    const animationToggle = document.getElementById('animationToggle');
    const targetClicks = 100000;

    button.addEventListener('click', () => {
        count++;
        counter.textContent = count;

        if (count >= targetClicks) {
            alert('Congratulations! You have reached 100000 clicks!');
        }
    });

    animationToggle.addEventListener('change', () => {
        if (animationToggle.checked) {
            button.classList.add('animate');
        } else {
            button.classList.remove('animate');
        }
    });

    if (animationToggle.checked) {
        button.classList.add('animate');
    } else {
        button.classList.remove('animate');
    }
});