const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const optionsList = require('./data/options.json');
const config = require('../src/config');


let loadout = [
    {
        name: 'Assault Rifle',
        power: 80,
        firingMode: 'Automatic',
        capacity: '32 Rounds',
        faction: 'Human/UNSC',
        id: 1,
        img: 'https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/assault-rifle-72bb6004e7804715935013ca745cadb9.png'
    },
]
let secondary = [{
    name: 'Magnum',
    power: 72,
    firingMode: 'Semi-Automatic',
    capacity: '8 Rounds',
    faction: 'Human/UNSC',
    id: 2,
    img: 'https://vignette.wikia.nocookie.net/halo/images/7/7b/H5G_Render_Magnum-M6H2.png/revision/latest?cb=20150704094943'

}]
let grenade = [{
    name: 'Frag Grenade',
    power: 250,
    firingMode: 'Explosive',
    faction: 'Human/UNSC',
    id: 3,
    img: 'https://www.halopedia.org/images/thumb/9/91/H5G-M9.png/300px-H5G-M9.png'
}]
let loadout1 = [{
    message: 'Loadout 1'
}]
let spartan = ''
let spartan2 = ''

module.exports = {
    // Get / Read
    readLoadout: (req, res) => {
        console.log('PrimaryGet')
        res.status(200).send(loadout)
    },
    readSecondary: (req, res) => {
        console.log('SecondaryGet')
        res.status(200).send(secondary)
    },
    readGrenade: (req, res) => {
        console.log('GrenadeGet')
        res.status(200).send(grenade)
    },
    readAll: (req, res) => {
        console.log('Got Em Boss', res);
        res.status(200).send(optionsList)
    },
    readLoadout1: (req, res) => {
        console.log('Loadout1 Got')
        res.status(200).send(loadout1)
    },
    readSpartanImg: (req, res) => {
        console.log('Got the spartan')
        res.status(200).send(spartan)
    },
    // Delete 
    deleteLoadoutItem: (req, res) => {
        const deleteID = req.params.id;
        loadoutIndex = loadout.findIndex(loadout => loadout.id == deleteID)
        loadout.splice(loadoutIndex, 1)
        res.status(200).send(loadout)
    },
    deleteSecondaryItem: (req, res) => {
        const deleteSecondaryID = req.params.id;
        secondaryIndex = secondary.findIndex(secondary => secondary.id == deleteSecondaryID)
        secondary.splice(secondaryIndex, 1);
        res.status(200).send(secondary);
    },
    deleteGrenadeItem: (req, res) => {
        const deleteGrenadeId = req.params.id;
        grenadeIndex = grenade.findIndex(grenade => grenade.id == deleteGrenadeId)
        grenade.splice(grenadeIndex, 1);
        res.status(200).send(grenade)
    },
    // Add
    addLoadoutItem: (req, res) => {
        console.log('running add in server')
        const { name, img, id, power, capacity, faction, firingMode } = req.body;
        loadout.push({ name, img, id, power, capacity, faction, firingMode })
        res.status(200).send(loadout)
    },
    addSecondaryItem: (req, res) => {
        const { name, img, id, power, capacity, faction, firingMode } = req.body;
        secondary.push({ name, img, id, power, capacity, faction, firingMode });
        res.status(200).send(secondary);
    },
    addGrenadeItem: (req, res) => {
        const { name, img, id, power, faction, firingMode } = req.body;
        grenade.push({ name, img, id, power, faction, firingMode })
        res.status(200).send(grenade);
    },
    // Put
    updateLoadout1Name: (req, res) => {
        const { message } = req.body;
        loadout1 = message
        res.status(name).send(loadout1)
    },
    updateGamertag: (req, res) => {
        let { newGamertag } = req.body;
        spartan = newGamertag
        res.status(200).send(spartan)
    },
    getHaloImg: (req, res) => {
        console.log('running halo img')
        const primaryKey = config.primaryKey
        const haloApiHeader = config.haloApiHeader
        const statURL = config.baseStatURLHAPI
        const baseURLHAPI = config.baseURLHAPI
        console.log(haloApiHeader, primaryKey)
        axios({
            method: 'get',
            url: `https://www.haloapi.com/stats/h5/servicerecords/arena?players=${spartan}&seasonId=2323b76a-db98-4e03-aa37-e171cfbdd1a4
            `,
            headers: { 'Ocp-Apim-Subscription-Key': '8d6efc99289a4fec9623f728191d6421' }
        }).then(resp => {
            res.status(200).send(resp.data)
        })
    },
    updateGamertag2: (req, res) => {
        let { newGamertag } = req.body;
        spartan2 = newGamertag
        res.status(200).send(spartan2)
    },
    getHaloImg2: (req, res) => {
        console.log('running halo img')
        const primaryKey = config.primaryKey
        const haloApiHeader = config.haloApiHeader
        const statURL = config.baseStatURLHAPI
        const baseURLHAPI = config.baseURLHAPI
        console.log(haloApiHeader, primaryKey)
        axios({
            method: 'get',
            url: `https://www.haloapi.com/stats/h5/servicerecords/arena?players=${spartan2}&seasonId=2323b76a-db98-4e03-aa37-e171cfbdd1a4
            `,
            headers: { 'Ocp-Apim-Subscription-Key': '8d6efc99289a4fec9623f728191d6421' }
        }).then(resp => {
            res.status(200).send(resp.data)
        })
    },
    getSearch: (req, res) => {
        console.log('running halo img')
        const primaryKey = config.primaryKey
        const haloApiHeader = config.haloApiHeader
        console.log(haloApiHeader, primaryKey)
        axios({
            method: 'get',
            url: `https://www.haloapi.com/metadata/h5/metadata/weapons`,
            headers: { 'Ocp-Apim-Subscription-Key': '8d6efc99289a4fec9623f728191d6421' }
        }).then(resp => {
            res.status(200).send(resp.data)
        })
    }
}