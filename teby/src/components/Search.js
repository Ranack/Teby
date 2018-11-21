import React, {Component} from 'react';
import './Search.css'

class Search extends Component {
    render() {
        return (
            <div className="container">
                <input type="text" placeholder="Search..."/>
                <div className="search"/>
            </div>
        )
    }
}

export default Search;