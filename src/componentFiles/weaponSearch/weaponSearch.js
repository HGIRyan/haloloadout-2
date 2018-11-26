import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import Primary from '../../components/LoadoutList';
import Secondary from '../../componentSecondary/SecondaryList';
import Grenade from '../../componentGrenade/GrenadeList';



class Search extends Component {
    state = {
        query: '',
        results: []
    }

    getInfo = () => {
        axios.get('/api/all')
            .then(({ data }) => {
                this.setState({
                    results: data.data
                })
            })
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            } else if (!this.state.query) {
            }
        })
    }

    render() {
        return (
            <form>
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <Primary results={this.state.results} />
                <Secondary results={this.state.results} />
                <Grenade results={this.state.results} />
                
            </form>
        )
    }
}

export default Search
