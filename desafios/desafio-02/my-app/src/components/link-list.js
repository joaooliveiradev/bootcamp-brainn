const LinkList = ({ posts, className }) => {
    return (
        <ul className={className}>
            {posts.map((post) => (
                < li key={post.id} >
                    <a href="/">{post.title}</a>
                </li>
            ))
            }
        </ul >
    )
}
export default LinkList;
