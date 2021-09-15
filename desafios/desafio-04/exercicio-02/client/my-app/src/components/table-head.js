import styled from "styled-components";
const StyledHead = styled.tr`
    color: #fff;
    background-color: #343a40;
    border-color: #454d55;
    height: 60px;
`
const TableHead = () => (
    <thead>
        <StyledHead>
            <th>Imagem</th>
            <th>Marca / Modelo</th>
            <th>Ano</th>
            <th>Placa</th>
            <th>Cor</th>
            <th>Ação</th>
        </StyledHead>
    </thead>
)
export default TableHead;