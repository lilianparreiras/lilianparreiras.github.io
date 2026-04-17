const btn = document.querySelector('.menu-mobile');
const menu = document.querySelector('nav ul');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});