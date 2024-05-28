async function listaUsuario() {
    try {
        const response = await fetch('http://localhost:3333/usuario');
        if (!response.ok) {
            throw new Error('Erro ao buscar usuários');
        }
        const usuarios = await response.json();
        preencherTabela(usuarios);
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao buscar usuários');
    }
}

window.onload = listaUsuario;

function preencherTabela(usuarios) {
    const tabela = document.getElementById('listaUsuario').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados

    usuarios.forEach(usuario => {
        const linha = tabela.insertRow();
        linha.insertCell(0).textContent = usuario.id_usuario;
        linha.insertCell(1).textContent = usuario.nome;
        linha.insertCell(2).textContent = usuario.login_user;
        linha.insertCell(3).textContent = usuario.perfil;

        // Cria a célula com o botão de excluir
        const cellExcluir = linha.insertCell(4);
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.onclick = () => excluirUsuario(usuario.id_usuario);
        cellExcluir.appendChild(btnExcluir);

        // Segundo botão, editar
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => {window.location.href = `edita_usuario.html?id=${usuario.id_usuario}`};
        cellExcluir.appendChild(btnEditar);
    });
}

async function excluirUsuario(id_usuario) {
    try {
        const response = await fetch(`http://localhost:3333/usuario/excluir/${id_usuario}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Erro ao excluir usuário');
        }

        alert('Usuário excluído com sucesso');
        listaUsuario(); // Atualiza a tabela após a exclusão
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao excluir usuário');
    }
}