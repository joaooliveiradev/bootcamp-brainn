const Table = ({ cars, handleDelete }) => {
    return (
        <>
            <table border="1">
                <thead>
                    <tr>
                        <th>Imagem</th>
                        <th>Marca / Modelo</th>
                        <th>Ano</th>
                        <th>Placa</th>
                        <th>Cor</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car) => (
                        <tr key={car.id}>
                            <td>{car.imagemURL}</td>
                            <td>{car.modelo}</td>
                            <td>{car.ano}</td>
                            <td>{car.placa}</td>
                            <td><div style={{ backgroundColor: car.color }}>{car.color}</div></td>
                            <td><button onClick={() => handleDelete(car.id)}>Excluir</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}
export default Table;