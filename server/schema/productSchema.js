const mongoose = require('mongoose')
const proschema = mongoose.Schema({
    name: {
        type: String,
        
    },
    brand: {
        type:String
    },
    price: {
        type:Number
    },
    storage: {
        type:Number
    },
    camera:{
        type:String
    },
    color: {
        type:String
    }
})

module.exports = mongoose.model('products',proschema)