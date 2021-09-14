import styled from "styled-components";
import LinkList from "./link-list";
const StyledAside = styled.aside`
    grid-area: aside;
    width: 100%;
    height: 100%;
`
const Aside = ({ state }) => {
    return (
        <StyledAside >
            <LinkList state={state} />
        </StyledAside>
    )
}
export default Aside