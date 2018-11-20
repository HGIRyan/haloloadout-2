import React, { Component } from 'react';
import './loadoutList.css';
import LoadoutList from './LoadoutList';

export default class PrimaryDrop extends Component {
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

        if (!this.dropdownMenu.contains(event.target)) {

            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });

        }
    }

    render() {
        return (
            <div>
                <button className='mainButton' onClick={this.showMenu}>
                    Select Primary
        </button>

                {
                    this.state.showMenu
                        ? (
                            <div
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}>

                                <button id='button' ><LoadoutList addLoadoutItemFn={this.addLoadoutItem} /> Primary </button>
                                
                                
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}