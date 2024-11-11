async function inserirContas_a_pagar() {
    // Coletar dados do formulário
    const numeroNFe = document.getElementById("numeroNFe").value;
    const valorNFe = document.getElementById("valorNFe").value;
    const fornecedor = document.getElementById("fornecedor").value;
    const dataVencimento = document.getElementById("dataVencimento").value;
    const parcela = document.getElementById("parcela").value;

    // Validar dados
    if (
        numeroNFe === "" ||
        valorNFe === "" ||
        fornecedor === "" ||
        dataVencimento === "" ||
        parcela === ""
    ) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Preparar dados para envio
    const contas_a_pagar = {
        fornecedor_contas_pagar_id: fornecedor,
        valor: valorNFe,
        data_vencimento: dataVencimento,
        parcela: parcela,
        nfe: numeroNFe,
    };

    try {
        // Requisição para inserir conta a pagar
        const response = await fetch("http://localhost:3333/contas_a_pagar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(contas_a_pagar),
        });

        const data = await response.json();

        if (response.ok) {
        alert("Conta a pagar inserida com sucesso");
        // Limpar o formulário
        limparFormulario();
        // Aqui você pode adicionar código para atualizar a interface ou redirecionar o usuário
        } else {
        if (response.status === 400) {
            alert("Erro ao inserir conta a pagar: " + data.message);
        } else if (response.status === 500) {
            alert("Erro interno do servidor: " + data.message);
        } else {
            alert("Erro desconhecido ao inserir conta a pagar");
        }
        }
    } catch (error) {
        console.log(response);
        console.error("Erro ao processar a inserção da conta a pagar:", error);
        alert(
        "Ocorreu um erro ao processar a conta a pagar. Por favor, tente novamente."
        );
    }
}

function limparFormulario() {
  document.getElementById("numeroNFe").value = "";
  document.getElementById("valorNFe").value = "";
  document.getElementById("fornecedor").value = "";
  document.getElementById("dataVencimento").value = "";
  document.getElementById("parcela").value = "";
}
