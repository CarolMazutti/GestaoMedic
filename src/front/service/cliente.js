async function inserirCliente() {
    const nome = document.getElementById("nome_cliente").value;
    const cpf = document.getElementById("cpf_cliente").value;
    const email = document.getElementById("email_cliente").value;
    const telefone = document.getElementById("telefone_cliente").value;
    const endereco = document.getElementById("endereco_cliente").value;
    const cidade = document.getElementById("cidade_cliente").value;

    if (nome === "" || cpf === "" || email === "" || telefone === "" || endereco === "" || cidade === "") {
        alert ("Por favor, preencha todos os campos.");
        return;
    }

    const cliente = {
        nome: nome,
        cpf: cpf,
        email: email,
        telefone: telefone,
        endereco: endereco,
        cidade_cliente_id: cidade
    };

    try {
        const response = await fetch('http://localhost:3333/cliente', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });

        if (!response.ok){
            throw new Error('Erro ao inserir cliente');
        }

        alert('Cliente inserido com sucesso');
        document.getElementById("clienteForm").reset();
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao inserir cliente');
    }
}

// -----------------------

document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const idCliente = urlParams.get('id');

    if (idCliente) {
        try {
            const response = await fetch(`http://localhost:3333/cliente/${idCliente}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar cliente');
            }
            const cliente = await response.json();

            document.getElementById('edita_nome_cliente').value = cliente.nome;
            document.getElementById('edita_cpf_cliente').value = cliente.cpf;
            document.getElementById('edita_email_cliente').value = cliente.email;
            document.getElementById('edita_telefone_cliente').value = cliente.telefone;
            document.getElementById('edita_endereco_cliente').value = cliente.endereco;
            document.getElementById('edita_cidade_cliente_id').value = cliente.cidade_cliente_id;

            console.log(cliente)

        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao buscar cliente');
        }
    }
});

async function atualizaCliente() {
    const urlParams = new URLSearchParams(window.location.search);
    const idCliente = urlParams.get('id');

    const nome = document.getElementById("edita_nome_cliente").value;
    const cpf = document.getElementById("edita_cpf_cliente").value;
    const email = document.getElementById("edita_email_cliente").value;
    const telefone = document.getElementById("edita_telefone_cliente").value;
    const endereco = document.getElementById("edita_endereco_cliente").value;
    const cidade_cliente_id = document.getElementById("edita_cidade_cliente_id").value;

    const clienteAtualizado = {
        nome,
        cpf,
        email,
        telefone,
        endereco,
        cidade_cliente_id
    };

    try {
        const response = await fetch(`http://localhost:3333/cliente/atualizar/${idCliente}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clienteAtualizado)
        });

        if (!response.ok) {
            throw new Error('Erro ao atualizar cliente');
        }

        alert('Cliente atualizado com sucesso!');
        window.location.href = 'lista_cliente.html';
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao atualizar cliente');
    }
}