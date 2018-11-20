import React, { Component } from 'react';
import axios from 'axios';
import './loadoutCurrent.css';
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
    addLoadoutItem(name, img, id) {
        if (this.state.loadoutCurrent.length < 1) {
            axios.post('/api/loadout', { name, img, id })
                .then(response => { this.setState({ loadoutCurrent: response.data }) })
        } else { alert('Only 1 weapon in each section, make sure to delete current  weapon before adding another') }
    }
    deleteLoadoutItem(id) {
        axios.delete(`/api/loadout/${id}`).then(response => {
            this.setState({ loadoutCurrent: response.data })
        })
    }
    render() {
        let mappedLoadoutCurrent = this.state.loadoutCurrent.map(loadoutItem => {
            return (
                <div className='loadoutitem' key={loadoutItem.id}>
                    <img alt={loadoutItem.name} src={loadoutItem.img} />
                    <span>{loadoutItem.name}</span>
                    <button onClick={() => this.deleteLoadoutItem(loadoutItem.id)}>Delete</button>
                </div>
            )
        })
        return (
            <div>
                <PrimaryDrop/>
                <h2>Primary Weapon</h2>
                <div className='wholeloadout'>
                    {mappedLoadoutCurrent}
                </div>
            </div>
        )
    }
}
export default loadoutCurrent