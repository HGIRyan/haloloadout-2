import React, { Component } from 'react';
import axios from 'axios';


export default class GrenadeDemo extends Component {
    constructor() {
        super();
        this.state = {
            grenadeCurrent: []
        }
    }

    getGranade() {
        axios.put('/api/grenade/1').then(response => {
            console.log(response.data)
        })
    }

   
    render() {
            return (
               <button onClick={_=>this.getGranade()}>
                   hello there
               </button>
            )
        }
    

}