import Title from "./title";
import React from "react";
import PostContent from './post-content';
import styled from "styled-components";
const StyledPost = styled.article`
    text-align: center;
    ul {
        list-style: none;
        font-size: 16px;
    }
`
const Post = ({ state }) => {
    const { title, content } = state;
    return (
        <StyledPost>
            <Title as="h1">{title}</Title>
            <PostContent>{content}</PostContent>
        </StyledPost>
    )
}
export default Post;