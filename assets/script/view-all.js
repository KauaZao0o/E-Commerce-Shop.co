function viewAll(type) {
    // Função para redirecionar ou carregar mais produtos
    if(type === 'new') {
        alert('Showing all New Arrivals');
        // window.location.href = 'new-arrivals.html';
    } else {
        alert('Showing all Top Selling');
        // window.location.href = 'top-selling.html';
    }
}