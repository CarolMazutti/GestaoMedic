async function listaCliente() {
    try {
        const response = await fetch('http://localhost:3333/cliente');
        if (!response.ok) {
            throw new Error('Erro ao buscar clientes');
        }
        const clientes = await response.json();
        preencherTabela(clientes);
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao buscar clientes');
    }
}

window.onload = listaCliente;

function preencherTabela(clientes) {
    const tabela = document.getElementById('listaCliente').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados

    clientes.forEach(cliente => {
        const linha = tabela.insertRow();
        linha.insertCell(0).textContent = cliente.nome;
        linha.insertCell(1).textContent = cliente.cpf;
        linha.insertCell(2).textContent = cliente.email;
        linha.insertCell(3).textContent = cliente.telefone;
        linha.insertCell(4).textContent = cliente.endereco;
        linha.insertCell(5).textContent = cliente.cidade_cliente_id;


        // Cria a célula com o botão de excluir
        const cellExcluir = linha.insertCell(6);
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.onclick = () => excluirCliente(cliente.id_cliente);
        cellExcluir.appendChild(btnExcluir);

        // Segundo botão, editar
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => {window.location.href = `edita_cliente.html?id=${cliente.id_cliente}`};
        cellExcluir.appendChild(btnEditar);
    });
}

async function excluirCliente(id_cliente) {
    try {
        const response = await fetch(`http://localhost:3333/cliente/excluir/${id_cliente}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Erro ao excluir cliente');
        }

        alert('Cliente excluído com sucesso');
        listaCliente(); // Atualiza a tabela após a exclusão
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao excluir cliente');
    }
}