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
