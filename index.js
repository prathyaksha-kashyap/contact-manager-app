const express = require('express')
const app = express()
const port = 3005

const configDb = require('./config/database')
const { router } = require('./config/routes')
const cors = require('cors')

configDb()
app.use(cors())  
app.use(express.json())

app.get('/', (req,res) => {
    res.send('Welcome to the Contacts Managing App')
})

app.use('/', router)

app.listen(port, () => {
    console.log('listening to the port', port)
})
