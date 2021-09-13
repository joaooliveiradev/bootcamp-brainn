const express = require('express');
const router = express.Router();
let cars = {}
router.get('/', (req, res) => {
    res.json(Object.values(cars));
});
router.post('/', (req, res) => {
    cars[req.body.id] = {
        id: req.body.id,
        imagemURL: req.body.imagemURL,
        modelo: req.body.modelo,
        ano: req.body.ano,
        placa: req.body.placa,
        color: req.body.color
    }
    res.json({ message: `O carro da placa ${req.body.placa} foi cadastrado com sucesso!` });
});

router.delete('/', (req, res) => {
    delete cars[req.body.deleteId];
    res.json({ message: `Id ${req.body.deleteId} excluido com sucesso!` })
})

module.exports = router
