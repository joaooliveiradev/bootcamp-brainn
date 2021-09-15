import styled from "styled-components";
const StyledForm = styled.form`
    display: flex;
    flex-flow: row;
    align-items: center;
    padding: 10px;
    justify-content: center;


`
const Label = styled.label`
    display: block;
    padding: 0 20px;
`
const Form = ({ handleSubmit }) => {
    return (
        <>
            <StyledForm onSubmit={handleSubmit}>
                <Label htmlFor="imagemURL">
                    URL da Imagem:
                    <input type="text" name="imagemURL" />
                </Label>
                <Label htmlFor="modelo">
                    Modelo:
                    <input type="text" name="modelo" />
                </Label>
                <Label htmlFor="ano">
                    Ano:
                    <input type="text" name="ano" />
                </Label>
                <Label htmlFor="placa">
                    Placa:
                    <input type="text" name="placa" />
                </Label>
                <Label htmlFor="color">
                    Color:
                    <input type="color" name="color" />
                </Label>
                <button type="submit">Cadastrar</button>
            </StyledForm>
        </>
    )
}
export default Form
