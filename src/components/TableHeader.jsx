export default function TableHeader(props) {
    let {totalGasto, totalRetorno} = props;
    
    return (
        <>
            <table style={{ width: "70%", marginLeft: "15%" }}>
                <tbody>
                    <tr><td>Valor total gasto</td><td>Valor total estimado em vendas</td></tr>
                    <tr><td>R$ {totalGasto.toFixed(0)}</td><td>R$ {totalRetorno.toFixed(0)}</td></tr>
                </tbody>
            </table>
        </>
    )
}