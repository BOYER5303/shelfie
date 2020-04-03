const express = require ('express');

require('dotenv').config();
const massive = require('massive');

const app = express();
const {getProducts, addProduct, updateProduct} = require('./controller');

app.use(express.json());

const {CONNECTION_STRING, SERVER_PORT} = process.env;

massive(CONNECTION_STRING).then( db => {
    console.log('connected to db')
    app.set('db', db)
})

app.get('/api/products', getProducts)
app.post('/api/add_product', addProduct)
//app.put('/api/update_product/:id', updateProduct)




app.listen(SERVER_PORT, () => (console.log(`listening on port ${SERVER_PORT}`)))