import { useState } from "react";
function App() {
    const [inputValue, setinputValue] = useState("");
    console.log('inputValue (estado): ', inputValue);

    function handleChange(e) {
        console.log('input value:', e.target.value);
        setinputValue(e.target.value.replace(/\D+/g, ""))
    }
    return (
        <form>
            <input value={inputValue} onChange={handleChange} type="text" />
            <button type="submit">Enviar</button>
        </form>
    )
}
export default App;