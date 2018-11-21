import React, { Component } from 'react';
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
    // handleSelection(name,img,id){
    //     console.log('Info from parent', name,img,id)
    //     // this.addLoadoutItemFn(name,img,id)
    // }
    addLoadoutItem(primaryItem) {
        this.props.addLoadoutFn(primaryItem)
        console.log('Running at loadout Item:', primaryItem)

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
                                <LoadoutList addLoadoutItemFn={e => this.addLoadoutItem(e)} />

                                {/* <LoadoutList /> */}
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