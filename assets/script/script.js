// Fechar o pop-up
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

// Mostrar o pop-up sempre que a página for carregada
window.onload = function() {
    document.getElementById('popup').style.display = 'block';
};

// Menu Hambúrguer
document.getElementById('hamburger').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});