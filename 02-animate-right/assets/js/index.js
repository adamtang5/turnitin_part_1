import { animateRight } from './manipulate.js';

window.onload = () => {
    const moveCircleButton = document.getElementById('move-circle');
    const circle = document.getElementById('circle');
    moveCircleButton.addEventListener('click', () => animateRight(circle));
    const moveSquareButton = document.getElementById('move-square');
    const square = document.getElementById('square');
    moveSquareButton.addEventListener('click', () => animateRight(square));
};
