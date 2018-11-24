const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

let loadout = [
    {
        name: 'Assault Rifle',
        power: 80,
        firingMode: 'Automatic',
        capacity: '32 Rounds',
        faction: 'Human/UNSC',
        id: 1,
        img: 'https://img.fireden.net/v/image/1476/91/1476915526627.png'
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
    firingMode:'Explosive',
    faction:'Human/UNSC',
    id:3,
    img: 'https://www.halopedia.org/images/thumb/9/91/H5G-M9.png/300px-H5G-M9.png'
}]

module.exports = {
    readLoadout: (req, res) => {
        console.log('PrimaryGet')
        res.status(200).send(loadout)
    },
    readSecondary:(req,res)=>{
        console.log('SecondaryGet')
        res.status(200).send(secondary)
    },
    readGrenade: (req,res) => {
        console.log('GrenadeGet')
        res.status(200).send(grenade)
    },
    deleteLoadoutItem: (req, res) => {
        const deleteID = req.params.id;
        loadoutIndex = loadout.findIndex(loadout => loadout.id == deleteID)
        loadout.splice(loadoutIndex, 1)
        res.status(200).send(loadout)
    },
    deleteSecondaryItem:(req,res) =>{
        const deleteSecondaryID = req.params.id;
        secondaryIndex = secondary.findIndex(secondary => secondary.id == deleteSecondaryID)
        secondary.splice(secondaryIndex, 1);
        res.status(200).send(secondary);
    },
    deleteGrenadeItem:(req,res)=>{
        const deleteGrenadeId = req.params.id;
        grenadeIndex = grenade.findIndex(grenade => grenade.id == deleteGrenadeId)
        grenade.splice(grenadeIndex, 1);
        res.status(200).send(grenade)
    },
    addLoadoutItem: (req, res) => {
        console.log('running add in server',)
        const { name, img, id, power, capacity, faction } = req.body;
        loadout.push({ name, img, id, power, capacity, faction })
        res.status(200).send(loadout)
    },
    addSecondaryItem: (req,res)=>{
      const { name, img, id, power, capacity, faction } = req.body;
      secondary.push({ name, img, id, power, capacity, faction });
      res.status(200).send(secondary);
    },
    updateGrenadeItem:(req,res)=>{
        console.log('this is req:',req.params)
        const {name, img, id, power, firingMode, faction } = req.body;
        const updateGrenadeId = req.params.id;
        grenadeIndex = grenade.findIndex(grenade => grenade.id == updateGrenadeId);
        grenade.splice(grenadeIndex, 1);
        grenade.push(req.body);

        // let grenade = grenade[grenadeIndex]
// console.log('log',grenade)
//         grenade[grenadeIndex] = {
//             name:name,
//             img:img,
//             id:id,
//             power:power,
//             firingMode:firingMode,
//             faction:faction    
//         }
        res.status(200).send(grenade);
    }
}