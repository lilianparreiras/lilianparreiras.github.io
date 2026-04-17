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

// Procura todas as imagens do site e, se der erro, esconde o elemento
document.querySelectorAll('img').forEach(function(img) {
    img.onerror = function() {
        this.style.display = 'none';
    };
});