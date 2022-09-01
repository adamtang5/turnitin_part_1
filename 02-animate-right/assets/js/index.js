import { animateRight } from './manipulate.js';

window.onload = () => {
    const moveButton = document.getElementById('move');
    const circle = document.getElementById('circle');
    moveButton.addEventListener('click', () => animateRight(circle));
};
