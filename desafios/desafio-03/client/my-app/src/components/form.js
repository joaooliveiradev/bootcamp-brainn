const Form = ({ handleSubmit }) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="imagemURL">
                    URL da Imagem:
                    <input type="text" name="imagemURL" />
                </label>
                <label htmlFor="modelo">
                    Modelo:
                    <input type="text" name="modelo" />
                </label>
                <label htmlFor="ano">
                    Ano:
                    <input type="text" name="ano" />
                </label>
                <label htmlFor="placa">
                    Placa:
                    <input type="text" name="placa" />
                </label>
                <label htmlFor="color">
                    Color:
                    <input type="color" name="color" />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}
export default Form
