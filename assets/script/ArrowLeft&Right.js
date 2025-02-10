document.addEventListener("DOMContentLoaded", function () {
    const commentsContainer = document.querySelector(".comments-container");
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");
    const allComments = document.querySelectorAll('.comment');
    let currentCommentIndex = 0;

    // Função para verificar se é mobile
    function isMobile() {
        return window.matchMedia("(max-width: 768px)").matches;
    }

    // Atualiza a exibição dos comentários
    function updateComments() {
        allComments.forEach((comment, index) => {
            if (isMobile()) {
                comment.style.display = index === currentCommentIndex ? 'block' : 'none';
            } else {
                comment.style.display = 'block';
            }
        });
    }

    // Navegação mobile
    function handleMobileNavigation(direction) {
        if (direction === 'right') {
            currentCommentIndex = (currentCommentIndex + 1) % allComments.length;
        } else {
            currentCommentIndex = (currentCommentIndex - 1 + allComments.length) % allComments.length;
        }
        updateComments();
    }

    // Navegação desktop
    function handleDesktopNavigation(direction) {
        const scrollAmount = direction === 'right' ? commentsContainer.offsetWidth : -commentsContainer.offsetWidth;
        commentsContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    // Handler geral de navegação
    function handleNavigation(direction) {
        if (isMobile()) {
            handleMobileNavigation(direction);
        } else {
            handleDesktopNavigation(direction);
        }
    }

    // Event listeners
    arrowLeft.addEventListener('click', () => handleNavigation('left'));
    arrowRight.addEventListener('click', () => handleNavigation('right'));

    // Atualizar ao redimensionar
    window.addEventListener('resize', () => {
        if (!isMobile()) {
            currentCommentIndex = 0;
        }
        updateComments();
    });

    // Inicialização
    updateComments();
});