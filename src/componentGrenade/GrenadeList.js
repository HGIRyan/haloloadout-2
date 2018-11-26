import React, { Component } from 'react';


class GrenadeList extends Component {
    constructor() {
        super();
        this.state = {
            grenades: [{
                name: 'Frag Grenade',
                power: 250,
                firingMode: 'Explosive',
                faction: 'Human/UNSC',
                id: 3,
                img: 'https://www.halopedia.org/images/thumb/9/91/H5G-M9.png/300px-H5G-M9.png'
            }, {
                name: 'Plasma Grenade',
                power: 250,
                firingMode: 'Explosive',
                faction: 'Alien/Coven',
                id: 2,
                img: 'https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/plasma-grenade-e63ed2a67258459882ea3d73ca173237.png'
            }, {
                name: 'Splinter Grenade',
                power: 250,
                firingMode: 'Explosive',
                faction: 'Promethan',
                id: 1,
                img: 'https://www.halopedia.org/images/thumb/0/0f/Splinter_Grenade.png/300px-Splinter_Grenade.png'
            }]
        }
    }
    addItemHandler(grenadeItemData) {
        let { addGrenadeFn } = this.props;
        addGrenadeFn(grenadeItemData);
    }
    render() {
        let mappedGrenade = this.state.grenades.map(grenade => {
            return (
                <div className='individualGrenade' key={grenade.id}>
                    <img className='individualGrenadeImg' alt={grenade.name} src={grenade.img} />
                    <span>{grenade.name}</span>
                    <button className='mainButton' onClick={() => this.addItemHandler(grenade)}>Add</button>
                </div>
            )
        })
        return (
            <div className='allGrenade'>
                {mappedGrenade}
            </div>
        )
    }
}
export default GrenadeList