import ReactDOM from 'react-dom';
function Title() {
    return (
        <>
            <h1>Hello World</h1>
            <span>Hello World</span>
        </>
    )
}
ReactDOM.render(<Title />, document.querySelector('#root'));
