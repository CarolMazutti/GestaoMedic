// Função assíncrona para inserir um novo cliente
async function inserirCliente() {
    // Obtendo os valores dos campos de entrada do formulário
    const nome = document.getElementById("nome_cliente").value;
    const cpf = document.getElementById("cpf_cliente").value;
    const email = document.getElementById("email_cliente").value;
    const telefone = document.getElementById("telefone_cliente").value;
    const endereco = document.getElementById("endereco_cliente").value;
    const cidade = document.getElementById("cidade_cliente").value;

    // Verificando se todos os campos foram preenchidos
    if (nome === "" || cpf === "" || email === "" || telefone === "" || endereco === "" || cidade === "") {
        alert ("Por favor, preencha todos os campos.");
        return;
    }

    // Criando um objeto cliente com os dados obtidos
    const cliente = {
        nome: nome,
        cpf: cpf,
        email: email,
        telefone: telefone,
        endereco: endereco,
        cidade_cliente_id: cidade
    };

    try {
        // Enviando uma solicitação POST para inserir o cliente
        const response = await fetch('http://localhost:3333/cliente', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });

        // Verificando se a resposta foi bem-sucedida
        if (!response.ok){
            throw new Error('Erro ao inserir cliente');
        }

        // Exibindo uma mensagem de sucesso e resetando o formulário
        alert('Cliente inserido com sucesso');
        document.getElementById("clienteForm").reset();
    } catch (error) {
        // Exibindo uma mensagem de erro no console e um alerta
        console.error('Erro:', error);
        alert('Erro ao inserir cliente');
    }
}

// -----------------------

// Evento que ocorre quando o documento foi totalmente carregado
document.addEventListener('DOMContentLoaded', async function() {
    // Obtendo o parâmetro "id" da URL
    const urlParams = new URLSearchParams(window.location.search);
    const idCliente = urlParams.get('id');

    // Se o "id" estiver presente, busca os dados do cliente correspondente
    if (idCliente) {
        try {
            const response = await fetch(`http://localhost:3333/cliente/${idCliente}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar cliente');
            }
            const cliente = await response.json();

            // Preenchendo o formulário com os dados do cliente
            document.getElementById('edita_nome_cliente').value = cliente.nome;
            document.getElementById('edita_cpf_cliente').value = cliente.cpf;
            document.getElementById('edita_email_cliente').value = cliente.email;
            document.getElementById('edita_telefone_cliente').value = cliente.telefone;
            document.getElementById('edita_endereco_cliente').value = cliente.endereco;
            document.getElementById('edita_cidade_cliente_id').value = cliente.cidade_cliente_id;

            console.log(cliente)

        } catch (error) {
            // Exibindo uma mensagem de erro no console e um alerta
            console.error('Erro:', error);
            alert('Erro ao buscar cliente');
        }
    }
});

// Função assíncrona para atualizar os dados de um cliente
async function atualizaCliente() {
    // Obtendo o parâmetro "id" da URL
    const urlParams = new URLSearchParams(window.location.search);
    const idCliente = urlParams.get('id');

    // Obtendo os valores dos campos de entrada do formulário de edição
    const nome = document.getElementById("edita_nome_cliente").value;
    const cpf = document.getElementById("edita_cpf_cliente").value;
    const email = document.getElementById("edita_email_cliente").value;
    const telefone = document.getElementById("edita_telefone_cliente").value;
    const endereco = document.getElementById("edita_endereco_cliente").value;
    const cidade_cliente_id = document.getElementById("edita_cidade_cliente_id").value;

    // Criando um objeto com os dados atualizados do cliente
    const clienteAtualizado = {
        nome,
        cpf,
        email,
        telefone,
        endereco,
        cidade_cliente_id
    };

    try {
        // Enviando uma solicitação PUT para atualizar o cliente
        const response = await fetch(`http://localhost:3333/cliente/atualizar/${idCliente}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clienteAtualizado)
        });

        // Verificando se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao atualizar cliente');
        }

        // Exibindo uma mensagem de sucesso e redirecionando para a página de lista de clientes
        alert('Cliente atualizado com sucesso!');
        window.location.href = 'lista_cliente.html';
    } catch (error) {
        // Exibindo uma mensagem de erro no console e um alerta
        console.error('Erro:', error);
        alert('Erro ao atualizar cliente');
    }
}