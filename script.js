// Seleciona o botão do menu
const btnMenu = document.querySelector('.menu-mobile');
const nav = document.querySelector('.nav-links');

// Adiciona um "escutador" de clique
btnMenu.addEventListener('click', () => {
    // Adiciona ou remove a classe 'active' para mostrar/esconder o menu
    nav.classList.toggle('active');
});

btnMenu.addEventListener('click', () => {
    console.log("O botão foi clicado!"); // Isso vai aparecer no console do F12
    menuList.classList.toggle('active');
});