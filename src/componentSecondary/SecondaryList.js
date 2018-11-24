import React, { Component } from 'react';


class SecondaryList extends Component {
    constructor() {
        super();
        this.state = {
            SecondaryWeapon: [{
                name: 'Boltshot',
                power: 60,
                firingMode: 'Semi-Automatic',
                capacity: '12 Ionized Particles',
                faction: 'Promethean',
                id: 1,
                img: 'https://vignette.wikia.nocookie.net/halo/images/b/bb/Boltshot_Render_with_weapon_skin.png/revision/latest?cb=20120816125558'
            }, {
                name: 'Magnum',
                power: 72,
                firingMode: 'Semi-Automatic',
                capacity: '8 Rounds',
                faction: 'Human/UNSC',
                id: 2,
                img: 'https://vignette.wikia.nocookie.net/halo/images/7/7b/H5G_Render_Magnum-M6H2.png/revision/latest?cb=20150704094943'
            }, {
                name: 'Plasma Pistol',
                power: 63,
                firingMode: 'Charged',
                capacity: '100 Units',
                faction: 'Alien/Covenant',
                id: 3,
                img: 'https://vignette.wikia.nocookie.net/halo/images/2/20/H5G_Render_T54DPlasmaPistol.png/revision/latest?cb=20160406114115'
            }]
        }
    }
    addItemHandler(SecondaryItemData){
        let { addSecondaryFn } = this.props;
        addSecondaryFn(SecondaryItemData);
    }
    render(){
        let mappedSecondaryWeapon = this.state.SecondaryWeapon.map(secondary =>{
            return (
                <div className='individualSecondary' key={secondary.id}>
                    <img className='individualSecondaryImg' alt={secondary.name} src={secondary.img}/>
                    <span>{secondary.name}</span>
                    <button className='mainButton' onClick={()=> this.addItemHandler(secondary)}>Add</button>
                </div>
            )
        })
        return (
            <div className='allSecondary'>
                {mappedSecondaryWeapon}
            </div>
        )
    }
}
export default SecondaryList