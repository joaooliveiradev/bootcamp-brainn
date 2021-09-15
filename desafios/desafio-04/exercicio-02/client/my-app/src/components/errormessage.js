import styled from "styled-components"
const TableErrorMessageStyled = styled.tr`
    text-align: center;
`
const TableErrorMessage = ({ cars }) => {
    return (
        <TableErrorMessageStyled>
            {cars.length === 0 && (
                <td colSpan={6}>
                    <h1>Nenhum carro cadastrado ou encontrado!</h1>
                </td>
            )}
        </TableErrorMessageStyled>
    )
}
export default TableErrorMessage