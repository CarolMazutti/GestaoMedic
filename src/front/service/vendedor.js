async function inserirVendedor() {
    const usuario = document.getElementById("usuario_vendedor").value;
    const nome = document.getElementById("nome_vendedor").value;
    const cpf = document.getElementById("cpf_vendedor").value;

    if (usuario === "" || nome === "" || cpf === "") {
        alert ("Por favor, preencha todos os campos.");
        return;
    }

    const vendedor = {
        usuario_vendedor_id: usuario,
        nome: nome,
        cpf: cpf
    };

    try {
        const response = await fetch('http://localhost:3333/vendedor', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(vendedor)
        });

        if (!response.ok){
            throw new Error('Erro ao inserir vendedor');
        }

        alert('Vendedor inserido com sucesso');
        document.getElementById("vendedorForm").reset();
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao inserir vendedor');
    }
}

// -----------------------

document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const idVendedor = urlParams.get('id');

    if (idVendedor) {
        try {
            const response = await fetch(`http://localhost:3333/vendedor/${idVendedor}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar vendedor');
            }
            const vendedor = await response.json();

            document.getElementById('edita_usuario_vendedor').value = vendedor.usuario_vendedor_id;
            document.getElementById('edita_nome_vendedor').value = vendedor.nome;
            document.getElementById('edita_cpf_vendedor').value = vendedor.cpf;

            console.log(vendedor)

        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao buscar vendedor');
        }
    }
});

async function atualizaVendedor() {
    const urlParams = new URLSearchParams(window.location.search);
    const idVendedor = urlParams.get('id');

    const usuario_vendedor_id = document.getElementById('edita_usuario_vendedor').value;
    const nome = document.getElementById('edita_nome_vendedor').value;
    const cpf = document.getElementById('edita_cpf_vendedor').value;

    const vendedorAtualizado = {
        usuario_vendedor_id,
        nome,
        cpf
    };

    try {
        const response = await fetch(`http://localhost:3333/vendedor/atualizar/${idVendedor}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vendedorAtualizado)
        });

        if (!response.ok) {
            throw new Error('Erro ao atualizar vendedor');
        }

        alert('Vendedor atualizado com sucesso!');
        window.location.href = 'lista_vendedor.html';
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao atualizar vendedor');
    }
}