const products = require('../products.json')

module.exports = {
    getProducts: (req, res) => {
        
        const {price} = req.query

        // console.log(typeof parseInt(price))

        if(price) {
            const items = products.filter((element) => element.price >= +price)
            return res.status(200).send(items)
        } else {
        res.status(200).send(products)
        }
    },

    getSingleProduct: (req, res) => {
        const {product_id} = req.params

        // console.log(product_id)
        
        const product = products.find(element => element.id === +product_id)

        if(product){
            res.status(200).send(product)
        } else {
            res.status(500).send("Item not in list")
        }
    }
}