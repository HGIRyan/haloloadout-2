const express = require('express')
const bodyParser = require('body-parser')
const config = require('./../config');
const controller = require('./controller')
const axios = require('axios')
const app = express();
app.use(bodyParser.json())

app.get('/api/loadout', controller.readLoadout)
app.get('/api/secondary', controller.readSecondary)
app.get('/api/grenade',controller.readGrenade)
app.delete('/api/loadout/:id', controller.deleteLoadoutItem)
app.delete('/api/secondary/:id', controller.deleteSecondaryItem)
app.delete('/api/grenade/:id', controller.deleteGrenadeItem)
app.post('/api/loadout', controller.addLoadoutItem)
app.post('/api/secondary', controller.addSecondaryItem)
app.put('/api/grenade/:id', controller.updateGrenadeItem)

const PORT = 3010
app.listen(PORT, ()=> {console.log(`Docked at port: ${PORT}`)})

