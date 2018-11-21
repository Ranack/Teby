import React, {Component} from 'react';
import './App.css';
import AppHeader from './components/AppHeader'
import Body from './components/Body'


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            articlesPs4: [],
            articlesXboxOne: [],
            articlesSwitch: [],
        }
    }

    componentWillMount() {
        fetch('https://newsapi.org/v2/everything?q=xbox-one&language=fr&sortBy=publishedAt&apiKey=380aefcae6f84f9e80f21cea73f42741')
            .then(response => {
                response.json()
                    .then(data => this.setState({articlesXboxOne: data}));


            });
        fetch('https://newsapi.org/v2/everything?q=ps4&language=fr&sortBy=publishedAt&apiKey=380aefcae6f84f9e80f21cea73f42741')
            .then(response => {
                response.json()
                    .then(data => this.setState({articlesPs4: data}));


            });
        fetch('https://newsapi.org/v2/everything?q=switch&language=fr&sortBy=publishedAt&apiKey=380aefcae6f84f9e80f21cea73f42741')
            .then(response => {
                response.json()
                    .then(data => this.setState({articlesSwitch: data}));


            });
    }

    render() {
        console.log(this.articlesXboxOne);
        return (
            <div className="App">
                <AppHeader/>
                <Body />
            </div>
        );
    }
}

export default App;
