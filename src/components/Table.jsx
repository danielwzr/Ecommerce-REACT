import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody";
import { ModalProduto } from "./ModalProduto";
import { useState } from "react";
import Button from "./Button.jsx";

export function Table() {
  const [produtos, setProdutos] = useState([
    { nome: "Switch Red", estoque: 100, valorCompra: 0.7, valorVenda: 2.5 },
    { nome: "Switch Blue", estoque: 140, valorCompra: 0.8, valorVenda: 2.5 },
    { nome: "Switch Brown", estoque: 110, valorCompra: 0.7, valorVenda: 2.5 },
    { nome: "Switch Green", estoque: 80, valorCompra: 0.7, valorVenda: 2.5 },
    { nome: "Escova teclado", estoque: 6, valorCompra: 12, valorVenda: 25 },
  ]);

  let totalGasto = 0;
  let totalRetorno = 0;
  produtos.forEach((produto) => {
    let investimento = parseFloat(produto.estoque * produto.valorCompra);
    totalGasto += investimento;

    let retorno = produto.estoque * produto.valorVenda;
    totalRetorno += retorno;
  });

  function editaEstoque(unidades, productIndex) {
    let array = [...produtos];
    array[productIndex].estoque = parseFloat(unidades);
    setProdutos(array);
  }

  function remove(event) {
    let row = event.target.name;
    let array = [...produtos];
    array.splice(row, 1);
    setProdutos(array);
  }

  function edit(event) {
    let row = parseInt(event.target.name) + 1;
    console.log("editing " + row + "ª linha");
  }

  function botaoEstoque(event) {
    let row = event.target.name;
    let signal = event.target.innerHTML;
    let array = [...produtos];

    signal === "-" && array[row].estoque--;
    signal === "+" && array[row].estoque++;

    setProdutos(array);
  }

  const [modalStatus, setModalStatus] = useState(false);
  function showModal() {
    modalStatus === false ? setModalStatus(true) : setModalStatus(false);
    console.log(modalStatus);
  }

  return (
    <>
      <TableHeader totalGasto={totalGasto} totalRetorno={totalRetorno} />
      <TableBody
        produtos={produtos}
        remove={remove}
        edit={edit}
        editaEstoque={editaEstoque}
        botaoEstoque={botaoEstoque}
      />
      <Button
        style={{ marginTop: "40px" }}
        onClick={() => {
          showModal();
        }}
        texto="Adicionar produto"
      />

      {modalStatus === true ? (
        <ModalProduto
          produtos={produtos}
          setProdutos={setProdutos}
          setModalStatus={setModalStatus}
        />
      ) : null}
    </>
  );
}
