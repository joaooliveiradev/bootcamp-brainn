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
                    {cars.length === 0 && (
                        <tr>
                            <td colSpan={6}>Nenhum carro encontrado</td>
                        </tr>
                    )}
                    {cars.map((car) => (
                        <tr key={car.id}>
                            <td><img className="carImage" src={car.imagemURL} alt="imagem Carro" /></td>
                            <td>{car.modelo}</td>
                            <td>{car.ano}</td>
                            <td>{car.placa}</td>
                            <td><div style={{
                                width: '100px',
                                height: '100px',
                                backgroundColor: car.color
                            }} /></td>
                            <td><button onClick={() => handleDelete(car.id)}>Excluir</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}
export default Table;