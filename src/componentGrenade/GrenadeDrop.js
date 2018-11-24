import React, { Component } from 'react';
import GrenadeList from './GrenadeList';


export default class GrenadeDrop extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false,
        };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    showMenu(event) {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }
    closeMenu(event) {
        if (!this.dropDownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }
    addGrenadeItem(grenadeItem) {
        this.props.addGrenadeFn(grenadeItem)
        console.log('Running Grenade', grenadeItem)
    }
    render() {
        return (
            <div>
                <button className='mainButton' onClick={this.showMenu}>Select Grenade</button>
                {this.state.showMenu ? (<div className='menu' ref={(element) => { this.dropDownMenu = element }}>
                    <GrenadeList addGrenadeFn={e => this.addGrenadeItem(e)} />

                </div>) :
                    (null)}
            </div>
        );
    }
}