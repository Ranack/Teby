import React, {Component} from 'react';
import Articles from "./components/Articles";


class ArticlesLine extends Component {
    render() {
        return (
            <div>
                {this.props.data.map(el => {
                    return <Articles data={el.articles}/>
                })
                }
            </div>
        )

    }
}

export default ArticlesLine;