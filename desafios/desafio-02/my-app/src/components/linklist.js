import Title from "./title";
const LinkList = ({ posts, className }) => {
    return (
        <ul className={className}>
            {posts.map((post) => (
                <li key={post.id} >
                    <a href="/"><Title sizeHeading="h1" className={className}>{post.title}</Title></a>
                </li>
            ))}
        </ul >
    )
}
export default LinkList;