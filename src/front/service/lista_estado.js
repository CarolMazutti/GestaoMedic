async function listaEstado() {
    try {
        const response = await fetch('http://localhost:3333/estado');
        if (!response.ok) {
            throw new Error('Erro ao buscar estados');
        }
        const estados = await response.json();
        preencherTabela(estados);
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao buscar estados');
    }
}

window.onload = listaEstado;

function preencherTabela(estados) {
    const tabela = document.getElementById('listaEstado').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados

    estados.forEach(estado => {
        const linha = tabela.insertRow();
        linha.insertCell(0).textContent = estado.nome;
        linha.insertCell(1).textContent = estado.uf;

        // Cria a célula com o botão de excluir
        const cellExcluir = linha.insertCell(2);
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.onclick = () => excluirEstado(estado.id_estado);
        cellExcluir.appendChild(btnExcluir);

        // Segundo botão, editar
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => {window.location.href = `edita_estado.html?id=${estado.id_estado}`};
        cellExcluir.appendChild(btnEditar);
    });
}

async function excluirEstado(id_estado) {
    try {
        const response = await fetch(`http://localhost:3333/estado/excluir/${id_estado}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Erro ao excluir estado');
        }

        alert('Estado excluída com sucesso');
        listaEstado(); // Atualiza a tabela após a exclusão
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao excluir estado');
    }
}