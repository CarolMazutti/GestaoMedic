async function inserirCarrinho_venda() {
    // Coletar dados do formulário
    const usuario = document.getElementById("usuario").value;
    const cliente = document.getElementById("cliente").value;
    const produto = document.getElementById("produto").value;
    const quantidade = document.getElementById("quantidade").value;
    const valorUnitario = document.getElementById("valorUnitario").value;
    const valorTotal = document.getElementById("valorTotal").value;
    const dataVenda = document.getElementById("dataVenda").value;
    const condicaoPagamento = document.getElementById("condicaoPagamento").value;

    // Validar dados
    if (
        usuario === "" ||
        produto === "" ||
        quantidade === "" ||
        valorUnitario === "" ||
        valorTotal === "" ||
        dataVenda === "" ||
        condicaoPagamento === ""
    ) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Preparar dados para envio
    const carrinho_venda = {
        usuario_carrinho_id: usuario,
        cliente: cliente,
        produto_carrinho_id: produto,
        quantidade: quantidade,
        data_venda: dataVenda,
        valor_unitario: valorUnitario,
        condicao_de_pagamento: condicaoPagamento,
        valor_total: valorTotal,
    };

    console.log("carrinho: ", carrinho_venda);

    try {
        // Primeira requisição (Inserir Venda)
        const response = await fetch("http://localhost:3333/carrinho_venda", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(carrinho_venda),
        });

        const data = await response.json();

        // Aqui verifico se a resposta da primeira requisição foi bem-sucedida
        if (response.ok) {
            // Segunda requisição (Registrar Movimentação)
            const response_registrar = await fetch("http://localhost:3333/registrar_movimentacao", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                id_produto: produto,
                tipo_movimentacao: "VENDA",
                quantidade: quantidade,
                }),
            });

            // Aqui verifico se a resposta da segunda requisição foi bem-sucedida
            if (response_registrar.ok) {
                // Limpar o formulário após a venda bem-sucedida
                limparFormulario();
                // Redirecionar ou atualizar a página conforme necessário
                alert("Venda realizada com sucesso!");

                return;
        } else {
            alert(
            "Erro ao registrar movimentação: " +
                "\nMensagem: " +
                data.message +
                "\nErro: " +
                data.error
            );
        }
        return;

        } else {
        if (response.status === 400) {
            alert("Erro ao realizar a venda: " + data.message);
        } else if (response.status === 500) {
            alert("Erro interno do servidor: " + data.message);
        }
        }
    } catch (error) {
        console.error("Erro ao processar a venda:", error);
        alert("Ocorreu um erro ao processar a venda. Por favor, tente novamente.");
    }
}
function limparFormulario() {
  document.getElementById("usuario").value = "";
  document.getElementById("cliente").value = "";
  document.getElementById("produto").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("desconto").value = "";
  document.getElementById("valorUnitario").value = "";
  document.getElementById("valorTotal").value = "";
  document.getElementById("dataVenda").value = new Date()
    .toISOString()
    .split("T")[0];
  document.getElementById("condicaoPagamento").value = "";
}

document.addEventListener("DOMContentLoaded", async function () {
  const urlParams = new URLSearchParams(window.location.search);
  const id_carrinho_venda = urlParams.get("id");

  if (id_carrinho_venda) {
    try {
      const response = await fetch(
        `http://localhost:3333/carrinho_venda/${id_carrinho_venda}`
      );
      if (!response.ok) {
        throw new Error("Erro ao buscar venda");
      }
      const carrinho_venda = await response.json();

      document.getElementById("edita_usuario").value =
        carrinho_venda.usuario_carrinho_id;
      document.getElementById("edita_cliente").value = carrinho_venda.cliente;
      document.getElementById("edita_produto").value =
        carrinho_venda.produto_carrinho_id;
      document.getElementById("edita_quantidade").value =
        carrinho_venda.quantidade;
      document.getElementById("edita_valorUnitario").value =
        carrinho_venda.valor_unitario;
      document.getElementById("edita_valorTotal").value =
        carrinho_venda.valor_total;
      document.getElementById("edita_dataVenda").value =
        carrinho_venda.data_venda;
      document.getElementById("edita_condicaoPagamento").value =
        carrinho_venda.condicao_de_pagamento;

      console.log(carrinho_venda);
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao buscar venda");
    }
  }
});

async function atualizaCarrinho_venda() {
  const urlParams = new URLSearchParams(window.location.search);
  const id_carrinho_venda = urlParams.get("id");

  const usuario_carrinho_id = document.getElementById("edita_usuario").value;
  const cliente = document.getElementById("edita_cliente").value;
  const produto_carrinho_id = document.getElementById("edita_produto").value;
  const quantidade = document.getElementById("edita_quantidade").value;
  const valor_unitario = document.getElementById("edita_valorUnitario").value;
  const valor_total = document.getElementById("edita_valorTotal").value;
  const data_venda = document.getElementById("edita_dataVenda").value;
  const condicao_de_pagamento = document.getElementById(
    "edita_condicaoPagamento"
  ).value;

  const carrinho_vendaAtualizado = {
    usuario_carrinho_id,
    cliente,
    produto_carrinho_id,
    quantidade,
    data_venda,
    valor_unitario,
    condicao_de_pagamento,
    valor_total,
  };

  try {
    const response = await fetch(
      `http://localhost:3333/carrinho_venda/atualizar/${id_carrinho_venda}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carrinho_vendaAtualizado),
      }
    );

    console.log("Atualizado:", carrinho_vendaAtualizado);
    if (!response.ok) {
      throw new Error("Erro ao atualizar venda");
    }

    alert("Venda atualizada com sucesso!");
    window.location.href = "lista_carrinho_venda.html";
  } catch (error) {
    console.error("Erro:", error);
    alert("Erro ao atualizar venda");
  }
}
