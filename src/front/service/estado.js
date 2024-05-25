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
