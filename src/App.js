import './App.css';
import { useState } from 'react';
import ProductRow from './components/ProductRow';

function App() {

  const [produtos, setProdutos] = useState([{ nome: 'Switch Red', estoque: 100, valorCompra: 0.7, valorVenda: 2.7 },
  { nome: 'Switch Blue', estoque: 140, valorCompra: 0.8, valorVenda: 2.7 },
  { nome: 'Switch Brown', estoque: 110, valorCompra: 0.7, valorVenda: 2.7 },
  { nome: 'Switch Green', estoque: 80, valorCompra: 0.7, valorVenda: 2.7 },
  { nome: 'Escova teclado', estoque: 6, valorCompra: 12, valorVenda: 25 }]);

  let totalGasto = 0;
  let totalRetorno = 0;
  produtos.forEach((produto) => {
    let investimento = parseFloat(produto.estoque * produto.valorCompra);
    totalGasto += investimento;

    let retorno = produto.estoque * produto.valorVenda;
    totalRetorno += retorno;
  })

  function editaEstoque(unidades, productIndex){
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
    console.log('editing ' + row + 'ª linha');
  }

  function menosEstoque(event) {
    let row = event.target.name;
    let array = [...produtos];
    
    //array.filter((produto)=>{produto.estoque===100});
    console.log(array);
  }

  return (
    <div className="App">
      <h1>Estoque</h1>
      <table style={{ width: "70%", marginLeft: "15%" }}>
        <tbody>
          <tr><td>Valor total gasto</td><td>Valor total estimado em vendas</td></tr>
          <tr><td>R$ {totalGasto.toFixed(0) }</td><td>R$ {totalRetorno.toFixed(0) }</td></tr>
        </tbody>
      </table>
      <table style={{ width: "80%", marginLeft: "10%" }}>
        <tbody>
          <tr>
            <td>Produto</td>
            <td>Unidades em estoque</td>
            <td>Valor compra</td>
            <td>Valor venda (estimado)</td>
            <td>Editar</td>
            <td>Remover</td>
          </tr>
          {
            produtos.map((produto, index) => {
              const { nome, estoque, valorCompra, valorVenda } = produto;
              return <ProductRow
                nome={nome}
                estoque={estoque}
                valorCompra={valorCompra}
                valorVenda={valorVenda}
                key={index} index={index}
                remove={remove}
                edit={edit}
                editaEstoque={editaEstoque}
                menosEstoque={menosEstoque}
              />
            })
          }
        </tbody>
      </table>
      <button style={{ marginTop: "40px" }}>Adicionar produto</button>
    </div>
  );
}

export default App;
