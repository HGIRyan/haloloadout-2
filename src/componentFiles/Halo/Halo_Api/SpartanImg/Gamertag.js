import React, { Component } from 'react';
import ajax from 'ajax';
import config from '../../../../config';

export default class Gamertag extends Component {
    constructor() {
        super();
        this.state = {
            spartanImg: '',
            player: 'heyguysimryan',
        }
    }



    componentDidMount() {
        const primaryKey = config.primaryKey
        fetch({
            url: `https://www.haloapi.com/profile/h5/profiles/${this.state.player}/spartan?`,
            beforeSend: function (xhrObj) {
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", { primaryKey });
            },
            type: "GET",
            // Request body
            data: "{body}",
        })
    }
    render() {
        return (
            <div>
                {this.state.spartanImg}
            </div>

        )
    }

}
