export default function ProductRow(props) {
    const { nome, estoque, valorCompra, valorVenda, index, edit, remove, editaEstoque, botaoEstoque } = props;
    return <>
        <tr>
            <td>{nome}</td>
            <td>
                {/*  <button name={index} onClick={(e) => { botaoEstoque(e) }}>-</button>  */}
                <input style={{ width: "55px", textAlign: "center", marginRight: "4px" }}
                    onChange={(e) => { editaEstoque(e.target.value, index) }}
                    type="number"
                    value={estoque}>
                </input>
                {/* <button name={index} onClick={(e)=>{ botaoEstoque(e) }}>+</button> */}
            </td>
            <td>R$ {valorCompra} </td>
            <td>R$ {valorVenda} </td>
            <td><button name={index} onClick={(e) => { edit(e) }}>Edit</button></td>
            <td><button name={index} onClick={(e) => { remove(e) }}>Remove</button></td>
        </tr>
    </>
}