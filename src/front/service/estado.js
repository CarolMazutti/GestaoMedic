async function inserirEstado() {
    const nome = document.getElementById("nome_estado").value;
    const uf = document.getElementById("uf_estado").value;

    if (nome === "" || uf === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const estado = {
        nome: nome,
        uf: uf
    };

    try {
        const response = await fetch('http://localhost:3333/estado', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(estado)
        });

        if (!response.ok) {
            throw new Error('Erro ao inserir estado');
        }

        alert('Estado inserido com sucesso');
        document.getElementById("estadoForm").reset();
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao inserir estado');
    }
}

// -----------------------

document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const idEstado = urlParams.get('id');

    if (idEstado) {
        try {
            const response = await fetch(`http://localhost:3333/estado/${idEstado}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar estado');
            }
            const estado = await response.json();

            document.getElementById('edita_nome_estado').value = estado.nome;
            document.getElementById('edita_uf_estado').value = estado.uf;

            console.log(estado)

        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao buscar estado');
        }
    }
});

async function atualizaEstado() {
    const urlParams = new URLSearchParams(window.location.search);
    const idEstado = urlParams.get('id');

    const nome = document.getElementById('edita_nome_estado').value;
    const uf = document.getElementById('edita_uf_estado').value;

    const estadoAtualizado = {
        nome,
        uf
    };

    try {
        const response = await fetch(`http://localhost:3333/estado/atualizar/${idEstado}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(estadoAtualizado)
        });

        if (!response.ok) {
            throw new Error('Erro ao atualizar estado');
        }

        alert('Estado atualizado com sucesso!');
        window.location.href = 'lista_estado.html';
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao atualizar estado');
    }
}