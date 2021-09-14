import styled from "styled-components";
import Title from "./title";
const StyledFooter = styled.footer`
    grid-area: footer;
    color: #fe5a00;
`
const Footer = () => (
    <StyledFooter>
        <Title as="h1" children="Rodapé Tudo Massa" />
    </StyledFooter>
)
export default Footer