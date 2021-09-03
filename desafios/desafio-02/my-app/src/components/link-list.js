import Title from "./title";
const LinkList = ({ state, handleClick, className }) => {
    const { postContent } = state;
    return (
        <ul className={className}>
            {postContent.map((post) => (
                <li key={post.id}>
                    <a href="/" onClick={(e) => handleClick(e, post.id, post.displayContent)}><Title sizeHeading="h1" className="LinksTitle">{post.title}</Title></a>
                </li>
            ))}
        </ul>
    )
}
export default LinkList;
