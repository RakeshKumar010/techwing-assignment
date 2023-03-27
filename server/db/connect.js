const mongoose = require('mongoose')

const DATABASE = process.env.URL;
mongoose.connect(DATABASE).then(() => {
    console.log('database is connected')
}).catch((err) => {
    console.log('database is not connected and Error:- '+err)
})