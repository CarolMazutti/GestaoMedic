// Pega o id da URL
document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const idProduto = urlParams.get('id');

    if (idProduto) {
        try {
            const response = await fetch(`http://localhost:3333/produto/${idProduto}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar dados do produto');
            }

            const produto = await response.json();

            // Preenche o formulário com os dados do produto
            document.getElementById('edita_nome_produto').value = produto.nome;
            document.getElementById('edita_descricao_produto').value = produto.descricao;
            document.getElementById('edita_preco_produto').value = produto.preco;
            document.getElementById('edita_quantidade_produto').value = produto.quantidade;
            document.getElementById('edita_fornecedor_produto').value = produto.fornecedor_produto_id;
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao buscar dados do produto');
        }
    }
});


async function atualizaProduto() {
    const urlParams = new URLSearchParams(window.location.search);
    const idProduto = urlParams.get('id');

    const produto = {
        nome: document.getElementById('edita_nome_produto').value,
        descricao: document.getElementById('edita_descricao_produto').value,
        preco: document.getElementById('edita_preco_produto').value,
        quantidade: document.getElementById('edita_quantidade_produto').value,
        fornecedor_produto_id: document.getElementById('edita_fornecedor_produto').value
    };

    try {
        const response = await fetch(`http://localhost:3333/produto/atualizar/${idProduto}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        });

        if (!response.ok) {
            throw new Error('Erro ao atualizar produto');
        }

        alert('Produto atualizado com sucesso');
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao atualizar produto');
    }
}