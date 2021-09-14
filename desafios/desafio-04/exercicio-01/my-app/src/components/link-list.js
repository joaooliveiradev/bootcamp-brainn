import styled from "styled-components";
import ListItem from "./link-item";
const StyledLinkList = styled.ul`
    list-style: none;
`
const LinkList = ({ state }) => {
    return (
        <StyledLinkList>
            <ListItem state={state} />
        </StyledLinkList>
    )
}
export default LinkList;
