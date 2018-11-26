import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';




class Search extends Component {
    state = {
        query: '',
        results: []
    }

    getInfo = () => {
        axios.get('/api/halometadata')
            .then(({ data }) => {
                this.setState({
                    results: data.data
                })
            })
    }

    handleInputChange = () => {
        this.setState({
            results: this.search.value
        }, () => {
            if (this.state.results && this.state.results.length > 1) {
                if (this.state.results.length % 2 === 0) {
                    this.getInfo()
                }
            } else if (!this.state.results) {
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
                
                
            </form>
        )
    }
}

export default Search
