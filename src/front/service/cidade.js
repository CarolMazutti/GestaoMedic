async function inserirCidade() {
    const nome = document.getElementById("nome_cidade").value;
    const estado = document.getElementById("estado_cidade").value;

    if (nome === "" || estado === "") {
        alert ("Por favor, preencha todos os campos.");
        return;
    }

    const cidade = {
        nome_cidade: nome,
        estado_cidade_id: estado
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
