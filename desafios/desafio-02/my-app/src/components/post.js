import Title from "./title";
import React from "react";
import PostContent from './post-content';
const Post = ({ state }) => {
    const { title, content } = state;
    return (
        <>
            <Title sizeHeading="h1" className="ArticleTitle">{title}</Title>
            <PostContent>{content}</PostContent>
        </>
    )
}
export default Post;