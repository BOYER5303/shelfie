const express = require ('express');
const {} = require('./controller');
require('dotenv').config();
const massive = require('massive');

const app = express();
const {getProducts, addProduct, updateProduct} = require('./controller');

app.use(express.json());

const {CONNECTION_STRING} = process.env;

massive({connectionString: CONNECTION_STRING, ssl: {rejectUnauthorized: false}});

app.get('/api/get_products', getProducts)
app.post('/api/add_product', addProduct)
//app.put('/api/update_product/:id', updateProduct)


const port = 3001;

app.listen(port, () => (console.log(`listening on port ${port}`)))