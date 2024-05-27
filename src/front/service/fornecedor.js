async function inserirFornecedor() {
    const nome = document.getElementById("nome_fornecedor").value;
    const cnpj = document.getElementById("cnpj_fornecedor").value;
    const email = document.getElementById("email_fornecedor").value;
    const telefone = document.getElementById("telefone_fornecedor").value;
    const endereco = document.getElementById("endereco_fornecedor").value;
    const cidade = document.getElementById("cidade_fornecedor").value;

    if (nome === "" || cnpj === "" || email === "" || telefone === "" || endereco === "" || cidade === "") {
        alert ("Por favor, preencha todos os campos.");
        return;
    }

    const fornecedor = {
        nome: nome,
        cnpj: cnpj,
        email: email,
        telefone: telefone,
        endereco: endereco,
        cidade_fornecedor_id: cidade
    };

    try {
        const response = await fetch('http://localhost:3333/fornecedor', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(fornecedor)
        });

        if (!response.ok){
            throw new Error('Erro ao inserir fornecedor');
        }

        alert('Fornecedor inserido com sucesso');
        document.getElementById("fornecedorForm").reset();
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao inserir fornecedor');
    }
}
