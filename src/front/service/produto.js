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

// -----------------------------------------------

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
        linha.insertCell(6).innerHTML = '<input type="button" onClick="alterarProduto(produto)"/>' + "\n" + '<input type="button" onClick="excluirProduto()"/>';
    });
}

async function alterarProduto(produto){
    
}

async  function  excluirProduto(id_produto){
    try {
        const response = await fetch('http://localhost:3333/produto/excluir/' + id_produto);
        if (!response.ok) {
            throw new Error('Erro ao excluir produto');
        }
        const produtos = await response.json();
        preencherTabela(produtos);
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao se comunicar com a rota produto/excluir');
    }
}


// Chama a função buscarProdutos quando a página carrega
window.onload = listaProduto;


async function deleteProduto(id_produto) {
    try {
        const response = await fetch(`/api/products/${id_produto}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            fetchProducts();
        } else {
            console.error('Falha ao deletar produto: ', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao deletar produto: ', error);
    }
}