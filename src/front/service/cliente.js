async function inserirCliente() {
    const nome = document.getElementById("nome_cliente").value;
    const cpf = document.getElementById("cpf_cliente").value;
    const email = document.getElementById("email_cliente").value;
    const telefone = document.getElementById("telefone_cliente").value;
    const endereco = document.getElementById("endereco_cliente").value;
    const cidade = document.getElementById("cidade_cliente").value;

    if (nome === "" || cpf === "" || email === "" || telefone === "" || endereco === "" || cidade === "") {
        alert ("Por favor, preencha todos os campos.");
        return;
    }

    const cliente = {
        nome: nome,
        cpf: cpf,
        email: email,
        telefone: telefone,
        endereco: endereco,
        cidade_cliente_id: cidade
    };

    try {
        const response = await fetch('http://localhost:3333/cliente', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });

        if (!response.ok){
            throw new Error('Erro ao inserir cliente');
        }

        alert('Cliente inserido com sucesso');
        document.getElementById("clienteForm").reset();
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao inserir cliente');
    }
}
