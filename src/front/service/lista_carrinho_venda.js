async function listaCarrinho_venda() {
    try {
        const response = await fetch('http://localhost:3333/carrinho_venda');
        if (!response.ok) {
            throw new Error('Erro ao buscar vendas');
        }
        const carrinho_venda = await response.json();
        preencherTabela(carrinho_venda);
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao buscar vendas');
    }
}

window.onload = listaCarrinho_venda;

function preencherTabela(carrinho_venda) {
    const tabela = document.getElementById('listaCarrinho_venda').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados

    carrinho_venda.forEach(carrinho_venda => {
        const linha = tabela.insertRow();
        linha.insertCell(0).textContent = carrinho_venda.usuario_carrinho_id;
        linha.insertCell(1).textContent = carrinho_venda.produto_carrinho_id;
        linha.insertCell(2).textContent = carrinho_venda.quantidade;
        linha.insertCell(3).textContent = carrinho_venda.valor_unitario;
        linha.insertCell(4).textContent = carrinho_venda.valor_total;
        linha.insertCell(5).textContent = carrinho_venda.data_venda;
        linha.insertCell(6).textContent = carrinho_venda.condicao_de_pagamento;

        // Cria a célula com o botão de excluir
        const cellExcluir = linha.insertCell(7);
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.onclick = () => excluirCarrinho_venda(carrinho_venda.id_carrinho_venda);
        cellExcluir.appendChild(btnExcluir);

        // Segundo botão, editar
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => {window.location.href = `edita_carrinho_venda.html?id=${carrinho_venda.id_carrinho_venda}`};
        cellExcluir.appendChild(btnEditar);
    });
}

async function excluirCarrinho_venda(id_carrinho_venda) {
    try {
        const response = await fetch(`http://localhost:3333/carrinho_venda/excluir/${id_carrinho_venda}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Erro ao excluir venda');
        }

        alert('Venda excluída com sucesso');
        listaCarrinho_venda(); // Atualiza a tabela após a exclusão
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao excluir venda');
    }
}