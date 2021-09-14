import styled from "styled-components";
const StyledArticle = styled.article`
     text-align: center;
     .articleTitle {
         font-size: 32px;
     }
`
const Article = ({ children }) => (
    <StyledArticle>
        {children}
    </StyledArticle>
)
export default Article;