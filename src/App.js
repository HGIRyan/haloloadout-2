import React, { Component } from 'react';
import './reset.css'
import './App.css';
import LoadoutCurrent from './components/LoadoutCurrent';
import SecondaryCurrent from './componentSecondary/SecondaryCurrent';
import GrenadeCurrent from './componentGrenade/GrenadeCurrent';
import Subscribe from './Subscribe';
import SpartanImg from './componentFiles/Halo/Halo_Api/SpartanImg/Gamertag'
// import Loadout1 from './componentFiles/LoadoutNames/Loadout_1'
// import Search from './componentFiles/weaponSearch/weaponSearch';




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='header'>
          <div className='logo'><img className='logo' alt='Halo Logo' src='https://mbtskoudsalg.com/images/halo-logo-png-6.png' /> </div>
          <div className='headerLetter'> <img className='headerLetter' alt='Header Letter' src='https://images.cooltext.com/5223207.png' />  </div>
          <Subscribe/>
          {/* <Search/> */}
        </div>
        <div className='loadoutSelection'>
          {/* <Loadout1/> */}
          <h3>Loadout 2</h3>
          <h3>Loadout 3</h3>
        </div>
        <div className='mainMiddle'>
          <div className='primary'><LoadoutCurrent /></div>
          <div className='secondary'><SecondaryCurrent /></div>
          <div className='grenade'><GrenadeCurrent/></div>
        </div>
        <div className='bottom'>
          <div className='spartanDisplay'> <SpartanImg/> </div>
          <div className='stats'></div>
        </div>
        <div className='spacer' />
      </div>
    );
  }
}

export default App;
