const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

let loadout = [
    {
        type: 'primary',
        name: 'Assault Rifle',
        img: 'https://vignette.wikia.nocookie.net/alteredrp-halorp/images/f/f9/Halo_5_Assault_Rifle.png/revision/latest?cb=20151012160152',
        id: 1
    },
]

module.exports = {
    readLoadout: (req, res) => {
        console.log('loadout get')
        res.status(200).send(loadout)
    },
    deleteLoadoutItem: (req, res) => {
        const deleteID = req.params.id;
        loadoutIndex = loadout.findIndex(loadout => loadout.id == deleteID)
        loadout.splice(loadoutIndex, 1)
        res.status(200).send(loadout)
    },
    addLoadoutItem: (req, res) => {
        const { name, img, id } = req.body;
        loadout.push({ name, img, id })
        res.status(200).send(loadout)
    }
}