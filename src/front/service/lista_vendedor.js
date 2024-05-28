async function listaVendedor() {
    try {
        const response = await fetch('http://localhost:3333/vendedor');
        if (!response.ok) {
            throw new Error('Erro ao buscar vendedores');
        }
        const vendedores = await response.json();
        preencherTabela(vendedores);
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao buscar vendedores');
    }
}

// Chama a função buscarProdutos quando a página carrega
window.onload = listaVendedor;

function preencherTabela(vendedores) {
    const tabela = document.getElementById('listaVendedor').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados

    vendedores.forEach(vendedor => {
        const linha = tabela.insertRow();
        linha.insertCell(0).textContent = vendedor.id_vendedor;
        linha.insertCell(1).textContent = vendedor.usuario_vendedor_id;
        linha.insertCell(2).textContent = vendedor.nome;
        linha.insertCell(3).textContent = vendedor.cpf;


        // Cria a célula com o botão de excluir
        const cellExcluir = linha.insertCell(4);
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.onclick = () => excluirVendedor(vendedor.id_vendedor);
        cellExcluir.appendChild(btnExcluir);

        // Segundo botão, editar
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => {window.location.href = `edita_vendedor.html?id=${vendedor.id_vendedor}`};
        cellExcluir.appendChild(btnEditar);
    });
}

async function excluirVendedor(id_vendedor) {
    try {
        const response = await fetch(`http://localhost:3333/vendedor/excluir/${id_vendedor}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Erro ao excluir produto');
        }

        alert('Vendedor excluído com sucesso');
        listaVendedor(); // Atualiza a tabela após a exclusão
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao excluir vendedor');
    }
}