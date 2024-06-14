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

const urlParams = new URLSearchParams(window.location.search);
const source = urlParams.get('username');

const referralMessage = document.getElementById('referral-message');

if (source) {
    referralMessage.textContent = `Вас пригласил ${source}`;
} else {
    referralMessage.textContent = ``;
}

const referralNameInput = document.getElementById('referral-name');
const generateLinkButton = document.getElementById('generate-link');
const referralLinkInput = document.getElementById('referral-link');
const copyLinkButton = document.getElementById('copy-link');

generateLinkButton.addEventListener('click', () => {
    const name = referralNameInput.value.trim();
    if (name) {
        const referralLink = `${window.location.origin}${window.location.pathname}?милашка=${encodeURIComponent(name)}`;
        referralLinkInput.value = referralLink;
    } else {
        alert('Пожалуйста, введите ваше имя.');
    }
});

copyLinkButton.addEventListener('click', () => {
    if (referralLinkInput.value) {
        referralLinkInput.select();
        document.execCommand('copy');
        alert('Ссылка скопирована в буфер обмена!');
    } else {
        alert('Сначала сгенерируйте ссылку.');
    }
});
