module.exports = {
    getProducts: (req, res, next) => {
        const db = req.app.get('db');
        
        db.get_products().then(products => {
            res.status(200).send(products)
        }).catch(err => console.log(err))
    },
    addProduct: (req, res, next) => {
        const db = req.app.get('db');
        const { image, product, price} =req.body;

        db.add_product([image, product, price]).then(products => {
            res.status(200).send(products)
        }).catch(err => console.log(err))
    },
    // updateProduct: (req, res, next) => {
    //     const db=req.app.get('db');
    //     db.update_product([req.body.email, req.params.id]).then(students => {
    //         res.status(200).send(products)
    //     }).catch(err => console.log(err))
    // }
}