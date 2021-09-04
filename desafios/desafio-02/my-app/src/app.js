import Header from './components/header';
import Nav from './components/nav';
import Aside from './components/aside';
import Main from './components/main';
import Footer from './components/footer';
import Title from './components/title';
import LinkList from './components/link-list';
import Section from './components/section';
import Article from './components/article';
import Post from './components/post';
import { useState } from 'react';
const posts = [
    {
        id: 1,
        title: 'Panqueca de Carne Moída',
        content:
            <>
                <ul className="postList">
                    <Title sizeHeading="h3">Ingredientes</Title>
                    <li><Title sizeHeading="h3">Massa</Title></li>
                    <li>1 e 1/2 xícara (chá) de farinha de trigo</li>
                    <li>1 xícara (chá) de leite</li>
                    <li>2 ovos</li>
                    <li>4 colheres (sopa) de óleo</li>
                    <li>sal a gosto</li>
                    <li><Title sizeHeading="h3">Recheio</Title></li>
                    <li>300 g de carne moída</li>
                    <li>2 colheres (sopa) de cebola picada ou ralada</li>
                    <li>1/2 tomate cortado em cubos</li>
                    <li>1/2 lata de extrato de tomate</li>
                    <li>1 caixa de creme de leite</li>
                    <li>queijo ralado a gosto</li>
                    <Title sizeHeading="h3">Modo de preparo</Title>
                    <li><Title sizeHeading="h4">Massa</Title></li>
                    <li>1º - Bata no liquidificador os ovos, o leite, o óleo, e acrescente a farinha de trigo aos poucos.</li>
                    <li>2º - Após acrescentar toda a farinha de trigo, adicione sal a gosto.</li>
                    <li>3º - Misture a massa até obter uma consistência cremosa.</li>
                    <li>4º - Faça movimentos circulares para que a massa se espalhe por toda a frigideira.</li>
                    <li>5º - Espere até a massa soltar do fundo e vire a massa para fritar do outro lado.</li>
                    <li>6º - Com um papel-toalha, espalhe óleo por toda a frigideira e despeje uma concha de massa.</li>
                    <li><Title sizeHeading="h4">Recheio</Title></li>
                    <li>7º - Em uma panela, doure a cebola com o óleo e acrescente a carne.</li>
                    <li>8º - Deixe cozinhar até que saia água da carne, diminua o fogo e tampe.</li>
                    <li>9º - Acrescente o tomate picado e tampe novamente.</li>
                    <li>10º - Deixe cozinhar por mais 3 minutos e misture.</li>
                    <li>11º - Acrescente o extrato de tomate e temperos a gosto.</li>
                    <li>12º - Deixe cozinhar por mais 10 minutos.</li>
                    <li>13º - Quando o molho engrossar, desligue o fogo.</li>
                    <li>14º - Deixe esfriar o molho, acrescente o creme de leite e misture bem.</li>
                    <li>15º - Quando estiver bem homogêneo, leve novamente ao fogo e deixe cozinhar em fogo baixo por mais 5 minutos.</li>
                    <li><Title sizeHeading="h4">Montagem</Title></li>
                    <li>17º - Recheie a panqueca com uma fatia de mussarela, uma porção de carne e enrole.</li>
                    <li>18º - Faça esse processo com todas as panquecas.</li>
                    <li>19º - Despeje um pouco de caldo no fundo de um refratário, para untar</li>
                    <li>19º - Disponha as panquecas já prontas no refratário e despeje sobre elas o restante do molho.</li>
                    <li>19º - Polvilhe queijo ralado sobre as panquecas.</li>
                    <li>20º - Leve ao forno para gratinar, em fogo médio, por 20 minutos ou até que o queijo esteja derretido.</li>
                </ul>
            </>
        ,
    },
    {
        id: 2,
        title: 'Macarrão cremoso de panela de pressão',
        content: <>
            <ul className="postList">
                <Title sizeHeading="h2">Ingredientes</Title>
                <li>500 g macarrão tipo penne.</li>
                <li>1 lata de molho de tomate pronto.</li>
                <li>2 medidas da lata de agua.</li>
                <li>200 g de presunto picado.</li>
                <li>200 g de queijo mussarela picado.</li>
                <li>250 g de queijo cremoso.</li>
                <li>2 cubos de caldo de legumes.</li>
                <Title sizeHeading="h2">Modo de preparo</Title>
                <li>1º - Coloque a agua, o molho de tomate, o caldo de legumes e o presunto na panela de pressão. Aguarde ferver, acrescente o macarrão e tampe a panela.</li>
                <li>2º - Assim que pegar pressão desligue o fogo e aguarde sair a pressão completamente.</li>
                <li>3º - Abra e acrescente a mussarela e o queijo cremoso misture bem e sirva quente.</li>
            </ul>
        </>,
    },
    {
        id: 3,
        title: 'Pão de Queijo melhor comida clica para ver',
        content:
            <>
                <ul className="postList">
                    <Title sizeHeading="h2">Ingredientes</Title>
                    <li>800 g de polvilho azedo.</li>
                    <li>1 xícara de água.</li>
                    <li>1 xícara de leite.</li>
                    <li>1/2 xícara de óleo.</li>
                    <li>2 ovos.</li>
                    <li>100 g de queijo parmesão ralado.</li>
                    <li>sal a gosto.</li>
                    <Title sizeHeading="h2">Modo de preparo</Title>
                    <li>1º - Em uma panela, ferva a água e acrescente o leite, o óleo e o sal.</li>
                    <li>2º - Adicione o polvilho aos poucos até dar liga. Pode ser que você não precise usar os 800g, então coloque devagar e sove a massa até soltar da mão: esse é o ponto.</li>
                    <li>3º - Quando a massa estiver morna, acrescente o queijo parmesão, os ovos e misture bem.</li>
                    <li>4º - Unte as mãos e enrole bolinhas de 2 cm de diâmetro.</li>
                    <li>5º - Disponha as bolinhas em uma assadeira untada com óleo, deixando um espaço entre elas.</li>
                    <li>6º - Asse em forno médio (180º C), preaquecido, por cerca de 40 minutos.</li>
                </ul>
            </>
        ,
    }
]
const App = () => {
    const [title, setTitle] = useState(posts[0].title)
    const [content, setContent] = useState(posts[0].content)
    return (
        <>
            <Header><Title sizeHeading="h1">TudoMassa</Title></Header>
            <Nav><Title sizeHeading="h2">Esse exercício foi muito Massa de fazer</Title></Nav>
            <Aside>
                <LinkList posts={posts} className="LinksList" />
            </Aside>
            <Main>
                <Section>
                    <Article>
                        <Post state={{ title, content }} />
                    </Article>
                </Section>
            </Main>
            <Footer>Footer</Footer>
        </>
    )
}
export default App;