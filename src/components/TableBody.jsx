import ProductRow from "./ProductRow";

export default function (props) {
    let { produtos, remove, edit, editaEstoque, botaoEstoque } = props;

    return (
        <>
            <table style={{ width: "80%", marginLeft: "10%", marginTop: '40px' }} >
                <tbody id="contentTable">
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
                                botaoEstoque={botaoEstoque}
                            />
                        })
                    }
                </tbody>
            </table>
        </>
    )
}