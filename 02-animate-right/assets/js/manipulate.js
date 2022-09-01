// el: element node object
// moves the element to the right by 100px over a duration of 1 second
export function animateRight(el) {
    el.style.position = 'relative';
    el.dataset.x = el.dataset.x || 0;

    setTimeout(() => {
        el.dataset.x = parseInt(el.dataset.x) + 100;
        el.style.left = el.dataset.x + 'px';
    }, 1000);
}
