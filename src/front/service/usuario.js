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
