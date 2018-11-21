import React, {Component} from 'react';
import './AppHeader.css'
import logo from '../assets/img/logo.png'
import Search from '../components/Search'


class AppHeader extends Component {
    render() {
        return (
            <header className="App-header">
                <div className='Logo'>
                    <img className='logo-img' src={logo} alt='Logo'/>
                </div>
                <Search/>
            </header>
        )

    }
}

export default AppHeader;