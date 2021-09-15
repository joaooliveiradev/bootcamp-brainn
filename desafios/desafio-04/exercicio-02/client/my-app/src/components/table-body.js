import styled from "styled-components";
import TableErrorMessage from "./errormessage";
const TableRow = styled.tr`
        font-size: 15px;
        color: gray;
        line-height: 1.2;
        font-weight: unset;
        width: 150px;
        height: 100px;
`
const TableImage = styled.img`
    width: 170px;
    display: block;
    margin: 0 auto;
`
const TableElementColor = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${props => props.bgColor};
    border: 1px solid black;
`
const TableBody = ({ state }) => {
    const { cars, handleDelete } = state;
    return (
        <tbody>
            <TableErrorMessage cars={cars} />
            {cars.map((car) => (
                <TableRow key={car.id}>
                    <td><TableImage src={car.imagemURL} alt={`Carro ${car.modelo} Imagem`} /></td>
                    <td>{car.modelo}</td>
                    <td>{car.ano}</td>
                    <td>{car.placa}</td>
                    <td><TableElementColor bgColor={car.color} /></td>
                    <td><button onClick={() => handleDelete(car.id)}>Excluir</button></td>
                </TableRow>
            ))}
        </tbody>
    )

}

export default TableBody;