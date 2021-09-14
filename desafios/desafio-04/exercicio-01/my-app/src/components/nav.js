import styled from "styled-components";
import Title from "./title";
const StyledNav = styled.nav`
    grid-area: nav;
`
const Nav = () => (
    <StyledNav>
        <Title as="h2" children="Esse exercício foi muito Massa de fazer" />
    </StyledNav>
)
export default Nav