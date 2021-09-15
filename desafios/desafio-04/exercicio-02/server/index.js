const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./routes/index')

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api', routes);


app.listen(3001, () => {
    console.log(`Server funcionando na porta 3001`)
});
