const body = document.querySelector('body');
const navToggle = document.querySelectorAll('.navbar__toggle');

navToggle.forEach(btn => {
    btn.addEventListener('click', () => {
        body.classList.toggle('slide-navbar');
    })
})