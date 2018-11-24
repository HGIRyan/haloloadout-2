import React, { Component } from 'react';
import axios from 'axios';
import PrimaryDrop from './PrimaryDrop';


class loadoutCurrent extends Component {
    constructor() {
        super()

        this.state = {
            loadoutCurrent: []
        }

        this.deleteLoadoutItem = this.deleteLoadoutItem.bind(this);
        this.addLoadoutItem = this.addLoadoutItem.bind(this);
    }

    componentDidMount() {
        axios.get('/api/loadout').then(response => {
            this.setState({
                loadoutCurrent: response.data
            })
        })
    }

    addLoadoutItem(primaryItem) {
        console.log('Dont put a plus', primaryItem)
        if (this.state.loadoutCurrent.length < 1) {
            console.log(primaryItem)
            axios.post('/api/loadout', primaryItem).then(response => {
                this.setState({
                    loadoutCurrent: response.data
                })
            })
        } else { alert('NO') }
    }

    deleteLoadoutItem(id) {
        axios.delete(`/api/loadout/${id}`).then(response => {
            this.setState({
                loadoutCurrent: response.data
            })
        })
    }
    // addLoadoutItem(primaryItem){
    //     console.log('HEHEYEYEYEYEYY' ,primaryItem)
    // }

    render() {
        let mappedLoadoutCurrent = this.state.loadoutCurrent.map(loadoutItem => {
            return (
                <div className='loadoutitem' key={loadoutItem.id}>
                    <img alt={loadoutItem.name} src={loadoutItem.img} />
                    <span><h2> {loadoutItem.name}</h2></span>
                    <button className='mainButton' onClick={() => this.deleteLoadoutItem(loadoutItem.id)}>Delete</button>
                </div>
            )
        })

        return (
            <div >
            <h2>Primary Weapon</h2>
            <div className='primaryBox'>
                <div className='wholeloadout'>
                    {mappedLoadoutCurrent}
                </div>
                <div className='primarySelect'>
                <PrimaryDrop addLoadoutFn={this.addLoadoutItem} />
                </div>
            </div>
            </div>
        )
    }
}
export default loadoutCurrent




// Because you have to do a update as well, Attempt to do an update with another item such as grenades or abilities.
