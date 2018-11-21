import React, {Component} from 'react';
import './App.css';
import AppHeader from './components/header/AppHeader'
import ArticlesLine from "./components/body/ArticlesLine";

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
                    .then(data => this.setState({articlesXboxOne: data.articles}));
            });

        fetch('https://newsapi.org/v2/everything?q=ps4&language=fr&sortBy=publishedAt&apiKey=380aefcae6f84f9e80f21cea73f42741')
            .then(response => {
                response.json()
                    .then(data => this.setState({articlesPs4: data.articles}));
            });

        fetch('https://newsapi.org/v2/everything?q=switch&language=fr&sortBy=publishedAt&apiKey=380aefcae6f84f9e80f21cea73f42741')
            .then(response => {
                response.json()
                    .then(data => this.setState({articlesSwitch: data.articles}));
            });
    }

    render() {
        console.log(this.articlesXboxOne);
        return (
            <div className="App">
                <AppHeader/>
                <h1>Actualité autour des jeux vidéos</h1>
                <ArticlesLine data={this.state.articlesXboxOne}/>
                <ArticlesLine data={this.state.articlesPs4}/>
                <ArticlesLine data={this.state.articlesSwitch}/>
            </div>
        );
    }
}

export default App;
