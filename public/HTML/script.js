function atualizarRelogio() {
  // Cria um novo objeto Date com a data e hora atuais
  const dataAtual = new Date();

  // Obtém o elemento p com o id "relogio"
  const elementoRelogio = document.getElementById('relogio');

  // Converte a data e hora para uma string formatada para a localidade do usuário
  elementoRelogio.innerHTML = dataAtual.toLocaleString();
}

// Atualiza o relógio a cada segundo (1000 milissegundos)
setInterval(atualizarRelogio, 1000);

// Executa a função uma vez ao carregar a página para evitar um atraso inicial
atualizarRelogio();


// fim do relogio

// carrossel de imagens
document.addEventListener('DOMContentLoaded', () => {
    const slideContainer = document.querySelector('.carousel-slide');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.querySelectorAll('.indicator');

    let currentIndex = 0;
    let slideWidth = slides[0].clientWidth;

    // Função para atualizar a posição do carrossel
    function updateCarousel() {
        slideContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
        updateIndicators();
    }

    // Função para atualizar os indicadores
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // Evento para o botão "Próximo" (AGORA CORRIGIDO PARA AVANÇAR)
    nextBtn.addEventListener('click', () => {
        currentIndex++; // Aumenta o índice (avança para o próximo slide visualmente)
        if (currentIndex >= slides.length) {
            currentIndex = 0; // Volta para o primeiro slide
        }
        updateCarousel();
    });

    // Evento para o botão "Anterior" (AGORA CORRIGIDO PARA RETROCEDER)
    prevBtn.addEventListener('click', () => {
        currentIndex--; // Diminui o índice (volta para o slide anterior visualmente)
        if (currentIndex < 0) {
            currentIndex = slides.length - 1; // Vai para o último slide
        }
        updateCarousel();
    });

    // Evento para os indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

     // Opcional: Auto-play
    setInterval(() => {
    nextBtn.click();
    }, 8000); // Muda de slide a cada 8 segundos
});

// NOVO: Função para deslogar e limpar a flag de sessão (Adicionada na correção anterior)
function doLogoff(event) {
    event.preventDefault(); // Evita a navegação de links com href="#"
    sessionStorage.removeItem('isLoggedIn'); // Limpa a flag de login
    window.location.href = "index.html"; // Redireciona para a página inicial (não logada)
}