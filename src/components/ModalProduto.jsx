function ModalProduto(props) {

    function handleSubmit(event){
        event.preventDefault();
        let nomeProduto = document.getElementById('nomeproduto').value;
        let unidades = parseFloat(document.getElementById('unidades').value);
        let valorCompra = parseFloat(document.getElementById('vcompra').value);
        let valorVenda = parseFloat(document.getElementById('vvenda').value);
        let array = props.produtos;
        array.push({nome: nomeProduto, estoque: unidades, valorCompra: valorCompra, valorVenda: valorVenda});
        props.setProdutos(array)
        props.setModalStatus(false)
        console.log(props.produtos);
    }

    return <div style={{ width: "50%", marginLeft: "25%" }}>
        <form onSubmit={handleSubmit}>
        <table style={{ width: "100%" }}>
            <tbody >
                <tr>
                    <td colSpan='2'>
                        <h3>Adicionar produto</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input placeholder="Nome do produto" required="true" id="nomeproduto"></input>
                    </td>
                    <td>
                        <input placeholder="Unidades" type="number" required="true" id="unidades"></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input placeholder="Valor de compra" type="number" required="true" id="vcompra"></input>
                    </td>
                    <td>
                        <input placeholder="Vaor de venda" type="number" require="true" id="vvenda"></input>
                    </td>
                </tr>
                <tr>
                    <td colSpan='2'>
                        <button style={{ marginTop: '12px' }} >Salvar</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </form>
    </div>
}

export { ModalProduto };