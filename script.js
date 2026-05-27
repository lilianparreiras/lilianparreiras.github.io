document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LÓGICA DA SPLASH SCREEN (Porta de Entrada) ---
    const splash = document.getElementById('splash-screen');
    const btnEntrar = document.getElementById('entrar-site');

    if (splash && btnEntrar) {
        // Verifica se o usuário já clicou em "Entrar" nesta sessão
        if (sessionStorage.getItem('visitou')) {
            // Se já visitou, remove a splash imediatamente para não empurrar o título
            splash.style.display = 'none';
        } else {
            // Se é a primeira vez, configura o clique do botão
            btnEntrar.addEventListener('click', () => {
                splash.classList.add('hidden-splash');
                sessionStorage.setItem('visitou', 'true');
                
                // Remove do fluxo após a animação de sumir (0.6s)
                setTimeout(() => {
                    splash.style.display = 'none';
                }, 600);
            });
        }
    }

    // --- 2. LÓGICA DO MENU MOBILE ---
    const btnMenu = document.querySelector('.menu-mobile');
    const menuLista = document.querySelector('nav ul');

    if (btnMenu && menuLista) {
        btnMenu.addEventListener('click', () => {
            menuLista.classList.toggle('active');
            btnMenu.classList.toggle('open'); // Para você animar o ícone se quiser
        });
    }

    // --- 3. TRATAMENTO DE IMAGENS QUEBRADAS ---
    // Útil se algum caminho de foto do seu portfólio mudar
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            this.style.display = 'none';
        };
    });

});
