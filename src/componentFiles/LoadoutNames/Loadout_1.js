import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            message: []
        }
        this.messageChange = this.messageChange.bind(this)
    }
    componentDidMount() {
        axios.get('/api/loadout1').then(response => {
            console.log('gotem', response.data)
            this.setState({
                message: response.data
            })
        })
    }
    messageChange(message) {
        axios.put('/api/loadout1', message).then(response => {
            this.setState({
                message: response.data
            })
        })
    }
    render() {
        let messageCurrent = this.state.message.map(message => {
            return (
                <div key={message}>
                    <input className='name' type='text' onChange={() => this.messageChange(message)} ></input>
                </div>
            )
        })
        return (
            <div className="input">
                {messageCurrent}
                <h3>{this.state.message}</h3>
            </div>
        );
    }
}