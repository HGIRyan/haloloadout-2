const express = require('express')
const bodyParser = require('body-parser')
const config = require('./../config');
const controller = require('./controller')
const axios = require('axios')
const app = express();
app.use(bodyParser.json())

// Get
app.get('/api/loadout', controller.readLoadout)
app.get('/api/secondary', controller.readSecondary)
app.get('/api/grenade', controller.readGrenade)
app.get('/api/all', controller.readAll)
app.get('/api/loadout1', controller.readLoadout1)

// Delete
app.delete('/api/loadout/:id', controller.deleteLoadoutItem)
app.delete('/api/secondary/:id', controller.deleteSecondaryItem)
app.delete('/api/grenade/:id', controller.deleteGrenadeItem)

// Add
app.post('/api/loadout', controller.addLoadoutItem)
app.post('/api/secondary', controller.addSecondaryItem)
app.post('/api/grenade', controller.addGrenadeItem)

// Update
app.put('/api/loadout1', controller.updateLoadout1Name)



const PORT = 3010
app.listen(PORT, () => { console.log(`Docked at port: ${PORT}`) })

