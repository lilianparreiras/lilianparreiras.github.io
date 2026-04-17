const btn = document.querySelector('.menu-mobile');
const menu = document.querySelector('nav ul');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Seleciona os elementos da splash screen
const splash = document.getElementById('splash-screen');
const btnEntrar = document.getElementById('entrar-site');

if (btnEntrar) {
    btnEntrar.addEventListener('click', () => {
        splash.classList.add('hidden-splash');
    });
}