import styled from "styled-components"
const StyledListItem = styled.li`
    color: black;
    a {
        color: black;
        cursor: pointer;
        text-decoration: none;
        font-size: 24px;
        display: block;
        margin: 20px 0px;
    }
`
const ListItem = ({ state }) => {
    const { posts, handlePost } = state;
    return (
        posts.map((post) => (
            <StyledListItem key={post.id}>
                <a href="/" onClick={(e) => handlePost(e, post.id)}>{post.title}</a>
            </StyledListItem>
        ))
    )
}
export default ListItem;