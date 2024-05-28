async function listaProduto() {
    try {
        const response = await fetch('http://localhost:3333/produto');
        if (!response.ok) {
            throw new Error('Erro ao buscar produtos');
        }
        const produtos = await response.json();
        preencherTabela(produtos);
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao buscar produtos');
    }
}

// Chama a função buscarProdutos quando a página carrega
window.onload = listaProduto;

function preencherTabela(produtos) {
    const tabela = document.getElementById('listaProduto').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados

    produtos.forEach(produto => {
        const linha = tabela.insertRow();
        linha.insertCell(0).textContent = produto.id_produto;
        linha.insertCell(1).textContent = produto.nome;
        linha.insertCell(2).textContent = produto.descricao;
        linha.insertCell(3).textContent = produto.preco;
        linha.insertCell(4).textContent = produto.quantidade;
        linha.insertCell(5).textContent = produto.fornecedor_produto_id;


        // Cria a célula com o botão de excluir
        const cellExcluir = linha.insertCell(6);
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.onclick = () => excluirProduto(produto.id_produto);
        cellExcluir.appendChild(btnExcluir);
    });
}

async function excluirProduto(id_produto) {
    try {
        const response = await fetch(`http://localhost:3333/produto/excluir/${id_produto}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Erro ao excluir produto1');
        }

        alert('Produto excluído com sucesso');
        listaProduto(); // Atualiza a tabela após a exclusão
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao excluir produto2');
    }
}