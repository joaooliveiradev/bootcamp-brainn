const LinkList = ({ posts, handleClick, className }) => {
    return (
        <ul className={className}>
            {posts.map((post) => (
                < li key={post.id} >
                    <a href="/" onClick={(e) => handleClick(e, post.id)}>{post.title}</a>
                </li>
            ))
            }
        </ul >
    )
}
export default LinkList;
