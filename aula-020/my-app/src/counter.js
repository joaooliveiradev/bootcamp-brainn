import styled from 'styled-components'
function Counter({ counter, setCounter, color }) {
    return (
        <>
            <h1 className="teste">{counter}</h1>
            <Input type="text" />
            <Button onClick={() => setCounter(c => c + 1)}>+</Button>
            <Button onClick={() => setCounter(c => c - 1)}>-</Button>
        </>
    )
}

const Input = styled.input`
    background-color: red;
    color: white;

    .teste{
        color: red;
    }
`
const Button = styled.button``
export default Counter