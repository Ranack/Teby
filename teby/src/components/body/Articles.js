import React, {Component} from 'react';

class Articles extends Component {
    render() {
        return (
           <div>
               <img src={this.props.data.urlToImage}/>
               <h1>{this.props.data.title}</h1>
           </div>
        )

    }
}

export default Articles;