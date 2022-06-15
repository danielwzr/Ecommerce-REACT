export default function ProductRow(props) {
    const { nome, estoque, valorCompra, valorVenda, index, edit, remove, editaEstoque, menosEstoque } = props;
    return <>
        <tr>
            <td>{nome}</td>
            <td>
                <button name={index} onClick={(e) => { menosEstoque(e, index) }}>-</button>
                <input style={{ width: "40px", textAlign: "center", marginRight: "4px" }} 
                onChange={(e) => { editaEstoque(e.target.value, index) }} 
                value={estoque}>
                </input>
                <button>+</button>
            </td>
            <td>R$ {valorCompra} </td>
            <td>R$ {valorVenda} </td>
            <td><button name={index} onClick={(e) => { edit(e) }}>Edit</button></td>
            <td><button name={index} onClick={(e) => { remove(e) }}>Remove</button></td>
        </tr>
    </>
}