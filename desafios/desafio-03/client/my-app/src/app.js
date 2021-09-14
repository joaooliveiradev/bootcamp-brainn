import { post, get, deleteCars } from './http/index';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';

import Form from "./components/form";
import Table from "./components/table";

const baseURL = 'http://localhost:3001/api/';

const App = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        getCars();
    }, [])
    async function getCars() {
        const result = await get(`${baseURL}`);
        setCars(result);
    }
    async function postCars(e) {
        e.preventDefault();
        function getValue(field) {
            return e.target.elements[field].value
        }
        const dataCars = { id: uuidv4(), imagemURL: getValue('imagemURL'), modelo: getValue('modelo'), ano: getValue('ano'), placa: getValue('placa'), color: getValue('color') }
        await post(`${baseURL}`, dataCars);
        setCars((prevState) => [
            ...prevState,
            dataCars
        ]);
        e.target.reset();
    }
    async function asyncDeleteCars(clickId) {
        const result = await deleteCars(`${baseURL}`, { deleteId: clickId });
        setCars(result);
    }
    return (
        <>
            <Form handleSubmit={postCars} />
            <Table cars={cars} handleDelete={asyncDeleteCars} />
        </>
    )
}


export default App;