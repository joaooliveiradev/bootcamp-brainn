function App() {
    return (
        <>
            <Title>Título</Title>
            <SideBar />
            <Content />
        </>
    )
}

function Title({ children }) {
    return (
        <h1>{children}</h1 >
    )
}

function Title2({ children }) {
    return (
        <h2>{children}</h2 >
    )
}

function SideBar() {
    return (
        <aside>
            <Title2>Sidebar</Title2>
        </aside>
    )
}

function Content() {
    return (
        <section>
            <h2>Conteúdo</h2>
            <p>Parágrafo</p>
        </section>
    )
}

export default App;