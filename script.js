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


JavaScript
const usuarioGithub = "seu-usuario";
const repoGithub = "nome-do-repositorio";

function abrirDiario() {
  document.getElementById("modal-diario").style.display = "block";
  carregarPosts();
}

function fecharDiario() {
  document.getElementById("modal-diario").style.display = "none";
}

async function carregarPosts() {
  const container = document.getElementById("conteudo-diario");
  
  try {
    // 1. Busca a lista de arquivos dentro da pasta 'diario' no GitHub
    const resposta = await fetch(`https://api.github.com/repos/${usuarioGithub}/${repoGithub}/contents/diario`);
    if (!resposta.ok) throw new Error("Não foi possível carregar a lista de posts.");
    
    const arquivos = await resposta.json();
    
    // Filtra para garantir que estamos pegando apenas arquivos .html
    const arquivosHtml = arquivos.filter(arq => arq.name.endsWith('.html'));
    
    if (arquivosHtml.length === 0) {
      container.innerHTML = "<p>Nenhuma entrada encontrada no diário ainda.</p>";
      return;
    }

    // Limpa o "Carregando..."
    container.innerHTML = "";

    // 2. Para cada arquivo encontrado, busca o conteúdo real dele
    // Inverte a ordem (.reverse()) para que o post mais recente apareça primeiro
    for (const arquivo of arquivosHtml.reverse()) {
      const resConteudo = await fetch(arquivo.download_url);
      const textoHtml = await resConteudo.text();
      
      // Cria um elemento visual para o post
      const divPost = document.createElement("div");
      divPost.className = "post-diario";
      
      // Injeta o HTML gerado pelo Decap CMS diretamente aqui
      divPost.innerHTML = textoHtml;
      
      container.appendChild(divPost);
    }

  } catch (erro) {
    console.error(erro);
    container.innerHTML = "<p>Erro ao carregar o diário. Tente novamente mais tarde.</p>";
  }
}
