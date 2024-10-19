// Função para enviar requisição de login para o servidor
async function login(event) {

    // event.preventDefault();

    const loginInput = document.getElementById('login-input');
    const senhaInput = document.getElementById('senha-input');

    if (loginInput.value === "" || senhaInput.value === "") {
        alert ("Por favor, preencha todos os campos.");
        return;
    }


    const loginValue = loginInput.value;
    const senhaValue = senhaInput.value;

    try {
        const response = await fetch('http://localhost:3333/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: loginValue,
                senha: senhaValue
            })
        });

        const data = await response.json(); // Lê a resposta JSON

        if (response.ok) {
            // Login realizado com sucesso, redirecionar para a página de destino
            window.location.href = '/inicio';
        } 
        else if (response.status === 401) {
            // Mostrar mensagem de credencial inválida
            alert(data.mensagem);
        }
        else if (response.status === 500){
            // Erro interno
            alert(data.mensagem);
        }
    } catch (error) {
        console.log("Erro: ", error);
    }
}

// Adicionar evento de click ao botão de login
document.getElementById('btn-entrar').addEventListener('click', login);