async function inserirUsuario() {
    const nome = document.getElementById("nome_usuario").value;
    const login = document.getElementById("login_usuario").value;
    const senha = document.getElementById("senha_usuario").value;
    const perfil = document.getElementById("perfil_usuario").value;

    if (nome === "" || login === "" || senha === "" || perfil === "") {
        alert ("Por favor, preencha todos os campos.");
        return;
    }

    const usuario = {
        nome: nome,
        login_user: login,
        senha_user: senha,
        perfil: perfil
    };

    try {
        const response = await fetch('http://localhost:3333/usuario', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });

        if (!response.ok){
            throw new Error('Erro ao inserir usuário');
        }

        alert('Usuário inserido com sucesso');
        document.getElementById("usuarioForm").reset();
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao inserir usuário');
    }
}

// -----------------------

document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const idUsuario = urlParams.get('id');

    if (idUsuario) {
        try {
            const response = await fetch(`http://localhost:3333/usuario/${idUsuario}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar usuário');
            }
            const usuario = await response.json();

            document.getElementById('edita_nome_usuario').value = usuario.nome;
            document.getElementById('edita_login_usuario').value = usuario.login_user;
            document.getElementById('edita_perfil_usuario').value = usuario.perfil;

            console.log(usuario)

        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao buscar usuario');
        }
    }
});

async function atualizaUsuario() {
    const urlParams = new URLSearchParams(window.location.search);
    const idUsuario = urlParams.get('id');

    const nome = document.getElementById('edita_nome_usuario').value;
    const login_user = document.getElementById('edita_login_usuario').value;
    const perfil = document.getElementById('edita_perfil_usuario').value;

    const usuarioAtualizado = {
        nome,
        login_user,
        perfil
    };

    try {
        const response = await fetch(`http://localhost:3333/usuario/atualizar/${idUsuario}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuarioAtualizado)
        });

        if (!response.ok) {
            throw new Error('Erro ao atualizar usuário');
        }

        alert('Usuário atualizado com sucesso!');
        window.location.href = 'lista_usuario.html';
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao atualizar usuário');
    }
}