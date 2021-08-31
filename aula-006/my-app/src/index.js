import ReactDOM from 'react-dom';
import React from 'react'
function Title({ text }) {
    return (
        <h1>{text}</h1>
    )
}
ReactDOM.render(<Title text="hello" />, document.querySelector('#root'));
