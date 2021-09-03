import Title from "./title";
import Paragraph from "./paragraph";
import Article from "./article";
const Post = ({ state }) => {
    const { postContent } = state;
    return (
        <>
            {postContent.map((post => (
                post.displayContent && (
                    <Article key={post.id} >
                        <Title sizeHeading="h1" className="ArticleTitle">{post.title}</Title>
                        <Paragraph className="postContent">{post.content}</Paragraph>
                    </Article>
                ))))}
        </>
    )
}
// postContent.map((post => (
//     <Article key={post.id} >
//         <Title sizeHeading="h1" className="ArticleTitle">{post.title}</Title>
//         <Paragraph className="postContent">{post.content}</Paragraph>
//     </Article>
// )))
export default Post;