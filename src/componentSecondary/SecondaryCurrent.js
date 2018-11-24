import React, { Component } from 'react';
import axios from 'axios';
import SecondaryDrop from './SecondaryDrop';


class SecondaryCurrent extends Component {
    constructor() {
        super();
        this.state = {
            SecondaryCurrent: []
        }
        this.deleteSecondaryItem = this.deleteSecondaryItem.bind(this);
        this.addSecondaryItem = this.addSecondaryItem.bind(this);
    }
    componentDidMount() {
        axios.get('/api/secondary').then(response => {
            this.setState({
                SecondaryCurrent: response.data
            })
        })
    }
    addSecondaryItem(secondaryItem) {
        console.log('Put a plus', secondaryItem);
        if (this.state.SecondaryCurrent.length < 1) {
            axios.post('/api/secondary', secondaryItem).then(response => {
                this.setState({
                    SecondaryCurrent: response.data
                })
            })
        } else { alert('NO') }
    }
    deleteSecondaryItem(id) {
        axios.delete(`/api/secondary/${id}`).then(response => {
            this.setState({
                SecondaryCurrent: response.data
            })
        })
    }
    render() {
        let mappedSecondaryCurrent = this.state.SecondaryCurrent.map(secondaryItem => {
            return (
                <div className='secondaryItem' key={secondaryItem.id}>
                    <img alt={secondaryItem.name} src={secondaryItem.img} />
                    <span><h2>{secondaryItem.name}</h2></span>
                    <button className='mainButton' onClick={() => this.deleteSecondaryItem(secondaryItem.id)}>Delete</button>
                </div>
            )
        })
        return (
            <div>
                <h2>Secondary Weapon</h2>
                <div className='primaryBox'>
                    <div className='wholeloadout'>
                        {mappedSecondaryCurrent}
                    </div>
                    <SecondaryDrop addSecondaryFn={this.addSecondaryItem} />
                </div>
            </div>
        )
    }
}
export default SecondaryCurrent