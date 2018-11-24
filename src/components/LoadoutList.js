import React, { Component } from 'react';

class LoadoutList extends Component {
    constructor() {
        super();
        this.state = {
            primaryWeapon: [{
                name: 'Assault Rifle',
                power: 80,
                firingMode: 'Automatic',
                capacity: '32 Rounds',
                faction: 'Human/UNSC',
                id: 1,
                img: 'https://img.fireden.net/v/image/1476/91/1476915526627.png'
            }, {
                name: 'Battle Rifle',
                power: 105,
                firingMode: 'Burst',
                capacity: '36 Rounds',
                faction: 'Human/UNSC',
                id: 2,
                img: 'https://i.pinimg.com/originals/ee/be/7e/eebe7e18e2f25da0b45c4bd0fb6b8a7c.png'
            }, {
                name: 'DMR',
                power: 105,
                firingMode: 'Semi-Automatic',
                capacity: '14 Rounds',
                faction: 'Human/UNSC',
                id: 3,
                img: 'https://content.halocdn.com/media/Default/games/halo-5-guardians/media/renders/h5-guardians-render-dmr-fd67bcd0619349eb8d4d135678efac4f.png'
            }, {
                name: 'SMG',
                power: 98,
                firingMode: 'Automatic',
                capacity: '60 Rounds',
                faction: 'Human/UNSC',
                id: 4,
                img: 'https://vignette.wikia.nocookie.net/halo/images/b/b9/H5G_Render_SMG.png/revision/latest?cb=20150618235810'
            }, {
                name: 'Carbine',
                power: 100,
                firingMode: 'Semi-Automatic',
                capacity: '18 Rounds',
                faction: 'Alien/Covenant',
                id: 5,
                img: 'https://vignette.wikia.nocookie.net/halo/images/d/d6/H5G_Render_Carbine.png/revision/latest?cb=20150615212054'
            }, {
                name: 'Needler',
                power: 100,
                firingMode: 'Automatic',
                capacity: '22 Shards',
                faction: 'Alien/Covenent',
                id: 6,
                img: 'https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/needler-5690d414b19a4b2d83be15baaffa2fe9.png'
            },
            ],
        }
    }
    addItemHandler(primaryItemData) {
        let { addLoadoutItemFn } = this.props;
        addLoadoutItemFn(primaryItemData)
    }

    render() {

        let mappedPrimaryWeapon = this.state.primaryWeapon.map(primary => {

            return (
                <div className='individualPrimary' key={primary.id}>
                    <img className='individualPrimaryImg' alt={primary.name} src={primary.img} />
                    <span>{primary.name}</span>
                    <button className='mainButton' onClick={() => this.addItemHandler(primary)}>Add</button>
                </div>
            )
        })
        return (
            <div className='allPrimary'>
                {mappedPrimaryWeapon}
            </div>
        )
    }
}
export default LoadoutList