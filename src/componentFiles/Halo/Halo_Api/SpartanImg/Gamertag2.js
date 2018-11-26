import React, { Component } from 'react';
// import config from '../../../../config';
import axios from 'axios';

export default class Gamertag extends Component {
    constructor() {
        super();
        this.state = {
            spartanStat: '',
            player: '',
        }

    }
    inputValue(val) {
        this.setState({ player: val })
    }

    gamertagChange() {
        let playerTag = { newGamertag: this.state.player }
        axios.put('/api/gamertag2', playerTag).then(resp => {
            this.setState({
                player: resp.data
            });
            axios.get(`/api/haloimg2`).then(resp => {
                this.setState({
                    spartanStat: resp.data
                })
            })
        })
    }

    render() {
        //  {if(){},else if(){}}
        return (
            <div >
                <input   className='input' onChange={(event) => { this.inputValue(event.target.value) }}></input>
                <button  className='mainButton'  onClick={() => this.gamertagChange()}>Search</button>
                {console.log(this.state.spartanStat.Results)}

                <div>
                <p>Spartan Rank: <p className='stats'>{this.state.spartanStat.Results ? this.state.spartanStat.Results[0].Result.SpartanRank : null}</p></p>
                    <p>Total Kills: <p className='stats'> {this.state.spartanStat.Results ? this.state.spartanStat.Results[0].Result.ArenaStats.TotalKills : null}</p></p>
                    <p>Total Deaths: <p className='stats'>{this.state.spartanStat.Results ? this.state.spartanStat.Results[0].Result.ArenaStats.TotalDeaths : null}</p></p>
                    <p className='invisible'> _</p>
                    <p>KD: <p className='stats'>{this.state.spartanStat.Results ? ((this.state.spartanStat.Results[0].Result.ArenaStats.TotalKills) / (this.state.spartanStat.Results[0].Result.ArenaStats.TotalDeaths)).toFixed(2) : null}</p></p>
                    <p className='invisible'> _</p>
                    <p>Total Games Won: <p className='stats'>{this.state.spartanStat.Results ? this.state.spartanStat.Results[0].Result.ArenaStats.TotalGamesWon : null}</p></p>
                    <p>Total Games Lost: <p className='stats'>{this.state.spartanStat.Results ? this.state.spartanStat.Results[0].Result.ArenaStats.TotalGamesLost : null}</p></p>
                    <p className='invisible'> _</p>
                    <p>Win/Loss: <p className='stats'>{this.state.spartanStat.Results ? ((this.state.spartanStat.Results[0].Result.ArenaStats.TotalGamesWon) / (this.state.spartanStat.Results[0].Result.ArenaStats.TotalGamesLost)).toFixed(2) : null}</p></p>
                    <p className='invisible'> _</p>
                    <p><p className='stats'>{this.state.spartanStat.Results ? ((this.state.spartanStat.Results[0].Result.ArenaStats.TotalKills) / (this.state.spartanStat.Results[0].Result.ArenaStats.TotalDeaths)).toFixed(2)>=1? "Wow, You're Good!" :'Wow, You Suck' : null}</p></p>
                </div>
                 

            </div>

        )
    }


}
