import Header from './components/Header';
import Nav from './components/Nav';
import Aside from './components/Aside';
import Main from './components/Main';
import Section from './components/Section';
import Footer from './components/Footer';
import Article from './components/Article';
import Title from './components/Title';
import Button from './components/Button';
import Paragraph from './components/Paragraph';
import PlayerVideo from './components/PlayerVideo';
const App = () => {
    return (
        <>

            <Header children="Header" />
            <Nav children="Menu" />
            <Aside>
                <PlayerVideo width="400px" height="280px" url="https://www.youtube.com/watch?v=7X8II6J-6mU" />
                <PlayerVideo width="400px" height="280px" url="https://www.youtube.com/watch?v=5Peo-ivmupE" />
            </Aside>
            <Main>
                <Section>
                    <Article>
                        <Header>
                            <Title className="mainTitle" children="Lorem Ipsum" sizeHeading={'h1'} />
                        </Header>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Maxime, error consequatur repudiandae accusantium quasi omnis numquam molestiae.Vero unde, neque maxime vel provident exercitationem quis ut ullam sequi vitae cupiditate!</Paragraph>
                        <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Unde quas autem nostrum at vero pariatur cumque, id adipisci fugit error placeat perferendis soluta modi ullam nihil suscipit molestiae ratione nesciunt.</Paragraph>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia, nisi commodi?Dolores nam facere laborum enim!Quae, quia dolore, omnis ullam corrupti commodi molestiae assumenda, maxime culpa dignissimos itaque cupiditate!</Paragraph>
                        <Footer>
                            <Paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident, nesciunt!
                            </Paragraph>
                        </Footer>
                        <Button children="Botão" kind="primary" />
                        <Button children="Botão" kind="secondary" />
                    </Article>
                </Section>
                <Section>
                    <Article>
                        <Header>
                            <Title className="mainTitle" children="Lorem Ipsum" sizeHeading={'h1'} />
                        </Header>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Maxime, error consequatur repudiandae accusantium quasi omnis numquam molestiae.Vero unde, neque maxime vel provident exercitationem quis ut ullam sequi vitae cupiditate!</Paragraph>
                        <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Unde quas autem nostrum at vero pariatur cumque, id adipisci fugit error placeat perferendis soluta modi ullam nihil suscipit molestiae ratione nesciunt.</Paragraph>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia, nisi commodi?Dolores nam facere laborum enim!Quae, quia dolore, omnis ullam corrupti commodi molestiae assumenda, maxime culpa dignissimos itaque cupiditate!</Paragraph>
                        <Footer>
                            <Paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident, nesciunt!
                            </Paragraph>
                        </Footer>
                        <Button children="Botão" kind="primary" />
                        <Button children="Botão" kind="secondary" />
                    </Article>
                </Section>
            </Main>
            <Footer>Footer</Footer>
        </>
    )
}
export default App;