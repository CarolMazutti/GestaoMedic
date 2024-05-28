async function listaCidade() {
    try {
        const response = await fetch('http://localhost:3333/cidade');
        if (!response.ok) {
            throw new Error('Erro ao buscar cidades');
        }
        const cidades = await response.json();
        preencherTabela(cidades);
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao buscar cidades');
    }
}

window.onload = listaCidade;

function preencherTabela(cidades) {
    const tabela = document.getElementById('listaCidade').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados

    cidades.forEach(cidade => {
        const linha = tabela.insertRow();
        linha.insertCell(0).textContent = cidade.nome_cidade;
        linha.insertCell(1).textContent = cidade.estado_cidade_id;

        // Cria a célula com o botão de excluir
        const cellExcluir = linha.insertCell(2);
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.onclick = () => excluirCidade(cidade.id_cidade);
        cellExcluir.appendChild(btnExcluir);

        // Segundo botão, editar
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => {window.location.href = `edita_cidade.html?id=${cidade.id_cidade}`};
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