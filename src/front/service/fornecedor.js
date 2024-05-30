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

// -----------------------

document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const idFornecedor = urlParams.get('id');

    if (idFornecedor) {
        try {
            const response = await fetch(`http://localhost:3333/fornecedor/${idFornecedor}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar fornecedor');
            }
            const fornecedor = await response.json();

            document.getElementById('edita_nome_fornecedor').value = fornecedor.nome;
            document.getElementById('edita_cnpj_fornecedor').value = fornecedor.cnpj;
            document.getElementById('edita_email_fornecedor').value = fornecedor.email;
            document.getElementById('edita_telefone_fornecedor').value = fornecedor.telefone;
            document.getElementById('edita_endereco_fornecedor').value = fornecedor.endereco;
            document.getElementById('edita_cidade_fornecedor_id').value = fornecedor.cidade_fornecedor_id;

            console.log(fornecedor)

        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao buscar fornecedor');
        }
    }
});

async function atualizaFornecedor() {
    const urlParams = new URLSearchParams(window.location.search);
    const idFornecedor = urlParams.get('id');

    const nome = document.getElementById('edita_nome_fornecedor').value;
    const cnpj = document.getElementById('edita_cnpj_fornecedor').value;
    const email = document.getElementById('edita_email_fornecedor').value;
    const telefone = document.getElementById('edita_telefone_fornecedor').value;
    const endereco = document.getElementById('edita_endereco_fornecedor').value;
    const cidade_fornecedor_id = document.getElementById('edita_cidade_fornecedor_id').value;

    const fornecedorAtualizado = {
        nome,
        cnpj,
        email,
        telefone,
        endereco,
        cidade_fornecedor_id
    };

    try {
        const response = await fetch(`http://localhost:3333/fornecedor/atualizar/${idFornecedor}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fornecedorAtualizado)
        });

        if (!response.ok) {
            throw new Error('Erro ao atualizar fornecedor');
        }

        alert('Fornecedor atualizado com sucesso!');
        window.location.href = 'lista_fornecedor.html';
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao atualizar fornecedor');
    }
}