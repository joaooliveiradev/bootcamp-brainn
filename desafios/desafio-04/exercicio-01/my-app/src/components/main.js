import styled from "styled-components";
import Section from './section';
import Post from './post';
const StyledMain = styled.main`
    width: 100%;
    height: 100%;
`
const Main = ({ state }) => {
    const { title, content } = state;
    return (
        <StyledMain>
            <Section>
                <Post state={{ title, content }} />
            </Section>
        </StyledMain>
    )
}
export default Main