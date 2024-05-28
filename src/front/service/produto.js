async function inserirProduto() {
    const nome = document.getElementById("nome_produto").value;
    const descricao = document.getElementById("descricao_produto").value;
    const preco = document.getElementById("preco_produto").value;
    const quantidade = document.getElementById("quantidade_produto").value;
    const fornecedor_produto = document.getElementById("fornecedor_produto").value;

    if (nome === "" || descricao === "" || preco === "" || quantidade === "" || fornecedor_produto === "") {
        alert ("Por favor, preencha todos os campos.");
        return;
    }

    const produto = {
        nome: nome,
        descricao: descricao,
        preco: preco,
        quantidade: quantidade,
        fornecedor_produto_id: fornecedor_produto
    };

    try {
        const response = await fetch('http://localhost:3333/produto', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(produto)
        });

        if (!response.ok){
            throw new Error('Erro ao inserir produto');
        }

        alert('Produto inserido com sucesso');
        document.getElementById("produtoForm").reset();
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao inserir produto');
    }
}

// -----------------------

document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const idProduto = urlParams.get('id');

    if (idProduto) {
        try {
            const response = await fetch(`http://localhost:3333/produto/${idProduto}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar produto');
            }
            const produto = await response.json();

            document.getElementById('edita_nome_produto').value = produto.nome;
            document.getElementById('edita_descricao_produto').value = produto.descricao;
            document.getElementById('edita_preco_produto').value = produto.preco;
            document.getElementById('edita_quantidade_produto').value = produto.quantidade;
            document.getElementById('edita_fornecedor_produto').value = produto.fornecedor_produto_id;

            console.log(produto)

        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao buscar produto');
        }
    }
});

async function atualizaProduto() {
    const urlParams = new URLSearchParams(window.location.search);
    const idProduto = urlParams.get('id');

    const nome = document.getElementById('edita_nome_produto').value;
    const descricao = document.getElementById('edita_descricao_produto').value;
    const preco = document.getElementById('edita_preco_produto').value;
    const quantidade = document.getElementById('edita_quantidade_produto').value;
    const fornecedor_produto_id = document.getElementById('edita_fornecedor_produto').value;

    const produtoAtualizado = {
        nome,
        descricao,
        preco,
        quantidade,
        fornecedor_produto_id
    };

    try {
        const response = await fetch(`http://localhost:3333/produto/atualizar/${idProduto}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produtoAtualizado)
        });

        if (!response.ok) {
            throw new Error('Erro ao atualizar produto');
        }

        alert('Produto atualizado com sucesso!');
        window.location.href = 'lista_produto.html';
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao atualizar produto');
    }
}
