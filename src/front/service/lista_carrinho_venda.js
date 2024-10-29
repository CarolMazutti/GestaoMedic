async function listaCarrinho_venda() {
    try {
        const response = await fetch('http://localhost:3333/listarCarrinho_venda');
        if (!response.ok) {
            throw new Error('Erro ao vendas');
        }
        const cidades = await response.json();
        preencherTabela(listaCarrinho);
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao buscar vendas');
    }
}

window.onload = listaCarrinho;

function preencherTabela(listaCarrinho) {
    const tabela = document.getElementById('listaCarrinho').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados

    listaCarrinho.forEach(listaCarrinho => {
        const linha = tabela.insertRow();
        linha.insertCell(0).textContent = listaCarrinho.usuario_carrinho_id;
        linha.insertCell(1).textContent = listaCarrinho.produto_carrinho_id;
        linha.insertCell(2).textContent = listaCarrinho.quantidade;
        linha.insertCell(3).textContent = listaCarrinho.data_venda;
        linha.insertCell(4).textContent = listaCarrinho.valor_unitario;
        linha.insertCell(5).textContent = listaCarrinho.condicao_de_pagamento;
        linha.insertCell(6).textContent = listaCarrinho.valor_total;

        // Cria a célula com o botão de excluir
        const cellExcluir = linha.insertCell(2);
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.onclick = () => excluirCarrinho(listaCarrinho.id_carrinho_venda);
        cellExcluir.appendChild(btnExcluir);

        // Segundo botão, editar
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => {window.location.href = `edita_cidade.html?id=${listaCarrinho.id_carrinho_venda}`};
        cellExcluir.appendChild(btnEditar);
    });
}

async function excluirCidade(id_cidade) {
    try {
        const response = await fetch(`http://localhost:3333/cidade/excluir/${id_cidade}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Erro ao excluir cidade');
        }

        alert('Cidade excluída com sucesso');
        listaCidade(); // Atualiza a tabela após a exclusão
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao excluir cidade');
    }
}