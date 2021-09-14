import { useEffect, useState } from "react";
import Counter from "./counter";
import Cep from "./cep";
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
export default App;