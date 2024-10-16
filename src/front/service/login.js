// Função para enviar requisição de login para o servidor
async function login() {
    const loginInput = document.getElementById('login-input');
    const senhaInput = document.getElementById('senha-input');
  
    const loginValue = loginInput.value;
    const senhaValue = senhaInput.value;
  
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login: loginValue,
          senha: senhaValue
        })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Login realizado com sucesso, redirecionar para página de destino
        window.location.href = '/dashboard';
      } else {
        // Mostrar mensagem de erro
        alert(data.mensagem);
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  // Adicionar evento de click ao botão de login
  document.getElementById('btn-entrar').addEventListener('click', login);