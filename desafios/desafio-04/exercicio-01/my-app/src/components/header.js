import styled from "styled-components";
import Title from "./title";
const StyledHeader = styled.header`
    grid-area: header;
    color: #fe5a00;
`
const Header = () => (
    <StyledHeader>
        <Title as="h1">Tudo Massa</Title>
    </StyledHeader>
)
export default Header