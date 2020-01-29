const mongoose = require('mongoose')

    
const configDb = () => {
        mongoose.connect('mongodb://localhost:27017/MyContacts', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
                .then(() => {
                    console.log('Connected to DB')
                })
                .catch((err) => {
                    console.log(err)
                })
}        

    module.exports = configDb
