async function inserirCidade() {
    const nome = document.getElementById("nome_cidade").value;
    const estadoId = document.getElementById("select_estado").value;

    if (nome === "" || estadoId === "") {
        alert ("Por favor, preencha todos os campos.");
        return;
    }

    const cidade = {
        nome_cidade: nome,
        estado_cidade_id: estadoId
    };

    try {
        const response = await fetch('http://localhost:3333/cidade', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(cidade)
        });

        if (!response.ok){
            throw new Error('Erro ao inserir fornecedor');
        }

        alert('Cidade inserida com sucesso');
        document.getElementById("cidadeForm").reset();
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao inserir cidade');
    }
}

// -----------------------

document.addEventListener('DOMContentLoaded', carregarEstados, async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const idCidade = urlParams.get('id');

    if (idCidade) {
        try {
            const response = await fetch(`http://localhost:3333/cidade/${idCidade}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar cidade');
            }
            const cidade = await response.json();

            document.getElementById('edita_nome_cidade').value = cidade.nome_cidade;
            document.getElementById('edita_estado_cidade').value = cidade.estado_cidade_id;

            console.log(cidade)

        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao buscar cidade');
        }
    }
});

async function carregarEstados() {
    try {
        const response =  await fetch('http://localhost:3333/estado');
        if (!response.ok){
            throw new Error('Erro ao buscar estados');
        }

        const estados = await response.json();
        const select_estado = document.getElementById('select_estado');

        // Adiciona a opção padrão
        const opcaoDefault = document.createElement("option");
        opcaoDefault.value = ""; // Valor vazio para indicar que nada foi selecionado
        opcaoDefault.textContent = "Selecione o estado"; // Texto da opção padrão
        select_estado.appendChild(opcaoDefault);

        estados.forEach(estado => {
            const opcao = document.createElement("option");
            opcao.value = estado.id_estado
            opcao.textContent = estado.nome
            select_estado.appendChild(opcao);
        });

    } catch (error) {
        console.error("erro: ", error)
        alert("Erro ao buscar estados")
    }
}



async function atualizaCidade() {
    const urlParams = new URLSearchParams(window.location.search);
    const idCidade = urlParams.get('id');

    const nome_cidade = document.getElementById('edita_nome_cidade').value;
    const estado_cidade_id = document.getElementById('edita_estado_cidade').value;

    const cidadeAtualizado = {
        nome_cidade,
        estado_cidade_id
    };

    try {
        const response = await fetch(`http://localhost:3333/cidade/atualizar/${idCidade}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cidadeAtualizado)
        });

        if (!response.ok) {
            throw new Error('Erro ao atualizar cidade');
        }

        alert('Cidade atualizada com sucesso!');
        window.location.href = 'lista_cidade.html';
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao atualizar cidade');
    }
}