import { useEffect, useState } from "react";
function getCepUrl(cep) {
    return `https://ws.apicep.com/cep.json?code=[CEP]`
        .replace('[CEP]', cep)
}
function App() {
    const [counter, setCounter] = useState(0);
    const [cep, setCep] = useState(null);

    useEffect(() => {
        console.log('use effect app')
        function searchCep() {
            if (cep === null) {
                return
            }
            fetch(getCepUrl(cep))
                .then(response => response.json())
                .then(response => console.log('CEP: ', response));
        }
        searchCep();
        return () => {
            console.log('clean app');
        }
    }, [cep])

    return (
        <>
            <Counter counter={counter} setCounter={setCounter} />
            <Cep setCep={setCep} />
        </>
    )
}
function Counter({ counter, setCounter }) {
    return (
        <>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(c => c + 1)}>+</button>
            <button onClick={() => setCounter(c => c - 1)}>-</button>
        </>
    )
}
function Cep({ setCep }) {
    function handleSubmit(e) {
        e.preventDefault();
        setCep(e.target.elements.campoCep.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="campoCep" />
                <button type="submit">BuscaCEP</button>
            </form>
        </>
    )
}

export default App;