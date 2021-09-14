import style from './cep.module.css';
function Cep({ setCep }) {
    function handleSubmit(e) {
        e.preventDefault();
        setCep(e.target.elements.campoCep.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="campoCep" className={style.input} />
                <button type="submit">BuscaCEP</button>
            </form>
        </>
    )
}
export default Cep;