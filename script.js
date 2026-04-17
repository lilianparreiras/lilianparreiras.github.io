// Seleciona o botão do menu
const btnMenu = document.querySelector('.menu-mobile');
const nav = document.querySelector('.nav-links');

// Adiciona um "escutador" de clique
btnMenu.addEventListener('click', () => {
    // Adiciona ou remove a classe 'active' para mostrar/esconder o menu
    nav.classList.toggle('active');
});