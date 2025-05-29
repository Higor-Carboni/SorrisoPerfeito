document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Validação do formulário
document.getElementById('formContato').addEventListener('submit', function(e) {
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const mensagem = document.getElementById('mensagem');

  if (!nome.value.trim() || !email.value.trim() || !mensagem.value.trim()) {
    alert('Por favor, preencha todos os campos antes de enviar.');
    e.preventDefault();
  }
});
