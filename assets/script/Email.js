

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Lógica para processar os dados do formulário (se necessário)
    console.log("Formulário enviado!");

    // Exibe mensagem
    alert(`Obrigado por se inscrever! Você receberá nossas últimas ofertas no e-mail: ${email}`);
  });