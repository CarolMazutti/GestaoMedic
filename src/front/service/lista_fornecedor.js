async function listaFornecedor() {
    try {
        const response = await fetch('http://localhost:3333/fornecedor');
        if (!response.ok) {
            throw new Error('Erro ao buscar fornecedores');
        }
        const fornecedores = await response.json();
        preencherTabela(fornecedores);
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao buscar fornecedores');
    }
}

// Chama a função buscarProdutos quando a página carrega
window.onload = listaFornecedor;

function preencherTabela(fornecedores) {
    const tabela = document.getElementById('listaFornecedor').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados

    fornecedores.forEach(fornecedor => {
        const linha = tabela.insertRow();
        linha.insertCell(0).textContent = fornecedor.nome;
        linha.insertCell(1).textContent = fornecedor.cnpj;
        linha.insertCell(2).textContent = fornecedor.email;
        linha.insertCell(3).textContent = fornecedor.telefone;
        linha.insertCell(4).textContent = fornecedor.endereco;
        linha.insertCell(5).textContent = fornecedor.cidade_fornecedor_id;


        // Cria a célula com o botão de excluir
        const cellExcluir = linha.insertCell(6);
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.onclick = () => excluirFornecedor(fornecedor.id_fornecedor);
        cellExcluir.appendChild(btnExcluir);

        // Segundo botão, editar
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => {window.location.href = `edita_fornecedor.html?id=${fornecedor.id_fornecedor}`};
        cellExcluir.appendChild(btnEditar);
    });
}

async function excluirFornecedor(id_fornecedor) {
    try {
        const response = await fetch(`http://localhost:3333/fornecedor/excluir/${id_fornecedor}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Erro ao excluir fornecedor');
        }

        alert('Fornecedor excluído com sucesso');
        listaFornecedor(); // Atualiza a tabela após a exclusão
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao excluir fornecedor');
    }
}