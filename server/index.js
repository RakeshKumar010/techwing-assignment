const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const productSchema = require('./schema/productSchema')
dotenv.config({ path: './config.env' })
const PORT = process.env.PORT || 8000; 
app.use(cors())
app.use(express.json())
require('./db/connect')

app.get('/',async (req, res) => {
    let product = await productSchema.find()
    res.send(product)
})
app.post('/add',async (req, res) => {
    let product = new productSchema(req.body)
    product = await product.save()
    res.send(product)
})

app.get('/product/:id', async(req, res) => {
    let product = await productSchema.findOne({_id:req.params.id})
    res.send(product)
})

app.listen(PORT, () => {
    console.log('Server is Open at http://localhost:'+PORT)
})