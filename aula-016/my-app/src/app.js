import { useEffect } from "react";
const url = 'https://ws.apicep.com/cep.json?code=[CEP]';
function App() {
    useEffect(() => {
        async function getCep() {
            console.log('buscando cep...:');
            const response = await fetch(url.replace('[CEP]', '12570-000'));
            const json = await response.json();
            console.log('cep:', json);
        }
        getCep();
    })
    return (
        <>
            <button>BuscaCEP</button>
        </>
    )
}
export default App;