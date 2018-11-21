import React, { Component } from 'react';

import SecondaryList from './SecondaryList';

export default class SecondaryDrop extends Component {
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
    addSecondaryItem(secondaryItem) {
        this.props.addSecondaryFn(secondaryItem)
        console.log('Running Secondary Item', secondaryItem)
    }
    render() {
        return (
            <div>
                <button className='mainButton' onClick={this.showMenu}>Select Secondary</button>
                {this.state.showMenu ? (<div className='menu' ref={(element) => { this.dropDownMenu = element }}>
                    <SecondaryList addSecondaryFn={e => this.addSecondaryItem(e)} />

                </div>) :
                    (null)}
            </div>
        );
    }
}