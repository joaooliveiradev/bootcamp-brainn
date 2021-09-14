import { useEffect, useState } from "react";
import Counter from "./counter";
import Cep from "./cep";

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: gray;
    }
`

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
            <GlobalStyle />
            <Counter counter={counter} setCounter={setCounter} />
            <Cep setCep={setCep} color="blue" />
        </>
    )
}
export default App;