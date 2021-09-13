import { post, get, deleteCars } from './http/index';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';

import Form from "./components/form";
import Table from "./components/table";

//jogar os dados na table
//no map dosxz dados na table fazer um elemento q vai disparar o delete depois e excluir

const baseURL = 'http://localhost:3001/api/';

const App = () => {
    const [cars, setCars] = useState([]);
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
    }

    async function asyncDeleteCars(clickId) {
        await deleteCars(`${baseURL}`, { deleteId: clickId });
        getCars();
        /*
        usei get cars aqui mas preciso receberr um array de volta como resultado e setar no estado, ai o use effect será 
        executado o get será usado nele, get cars não pode ficar aqui arrumar

        commit apenas para pausa para faculdade
        */
    }
    useEffect(() => {
        getCars();
    }, [])
    return (
        <>
            <Form handleSubmit={postCars} />
            <Table cars={cars} handleDelete={asyncDeleteCars} />
        </>
    )
}


export default App;