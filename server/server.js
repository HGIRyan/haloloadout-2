const express = require('express')
const bodyParser = require('body-parser')
const config = require('./../config');
const controller = require('./controller')
const axios = require('axios')
const app = express();
app.use(bodyParser.json())

app.get('/api/loadout', controller.readLoadout)
app.delete('/api/loadout/:id', controller.deleteLoadoutItem)
app.post('/api/loadout', controller.addLoadoutItem)
// app.put()

const PORT = 3010
app.listen(PORT, ()=> {console.log(`Docked at port: ${PORT}`)})

