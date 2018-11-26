import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            message: ''
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
    messageChange(value){
        this.setState({message: value})
      }
    render() {
        return (
          <div className="name">
           <input type='text' onChange={(event)=>{this.messageChange(event.target.value)}}></input>
           <h1>{this.state.message}</h1>
          </div>
        );
      }
    

    // componentDidMount() {
    //     axios.get('/api/loadout1').then(response => {
    //         console.log('gotem', response.data)
    //         this.setState({
    //             message: response.data
    //         })
    //     })
    // }
    // messageChange(message) {
    //     axios.put('/api/loadout1', {message}).then(response => {
    //         this.setState({
    //             message: response.data
    //         });
    //         axios.get('/api/loadout1').then(response => {
    //             console.log('gotem', response.data)
    //             this.setState({
    //                 message: response.data
    //             })
    //         })
    //     })
    // }
    // render() {
    //         return (
    //             <div>
    //                 <input className='name' type='text' onChange={(event) => this.messageChange(event.target.value)} ></input>
    //             </div>
    //         )
    //     // return (
    //     //     <div className="input">
    //     //         {messageCurrent}
    //     //         <h3>{this.state.message}</h3>
    //     //     </div>
    //     // );
    // }
}