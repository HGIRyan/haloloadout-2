import React, { Component } from 'react';
import axios from 'axios';
import GrenadeDrop from './GrenadeDrop';


export default class GrenadeCurrent extends Component {
    constructor() {
        super();

        this.state = {
            grenadeCurrent: []
        }

        this.deleteGrenadeItem = this.deleteGrenadeItem.bind(this);
        this.addGrenadeItem = this.addGrenadeItem.bind(this)
    }
    componentDidMount() {
        axios.get('/api/grenade').then(response => {
            console.log('arr',response.data)
            this.setState({
                grenadeCurrent: response.data
            })
        })
    }
    addGrenadeItem(id) {
        console.log('Grenade');
        if (this.state.grenadeCurrent.length < 1) {
            axios.put(`/api/grenade/${id}`).then(response => {
                this.setState({
                    grenadeCurrent: response.data
                })
            })
        } else { alert('NO') }
    }
    deleteGrenadeItem(id) {
        axios.delete(`/api/grenade/${id}`).then(response => {
            this.setState({
                grenadeCurrent: response.data
            })
        })
    }
    render() {
        let mappedGrenadeCurrent = this.state.grenadeCurrent.map(grenadeItem => {
            return (
                <div className='grenadeItem' key={grenadeItem.id}>
                    <img alt={grenadeItem.name} src={grenadeItem.img} />
                    <span><h2>{grenadeItem.name}</h2></span>
                    <button className='mainButton' onClick={() => this.deleteGrenadeItem(grenadeItem.id)}>Delete</button>
                </div>
            )
        })
        return (
            <div>
                <h2> Grenade </h2>
                <div className='primaryBox'>
                    <div className='wholeLoadout'>
                        {mappedGrenadeCurrent}
                    </div>
                    <GrenadeDrop addGrenadeFn={this.addGrenadeItem} />
                </div>
            </div>
        )
    }
}