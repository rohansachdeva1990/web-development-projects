/*
    Our Very First Component
*/

import React, { Component } from 'react';
import './Hello.css'

class Hello extends Component {

    render() {
        return (
            <div className ="f1 tc">
                <h1>Hello World</h1>
                <p>{this.props.greeting}</p>
            </div>
        );

    }
}

const Hello2 = (props) => {
    return (
        <div className ="f1 tc">
            <h1>Hello World</h1>
            <p>{props.greeting}</p>
        </div>
    );
}


export default Hello2;
// export default Hello2;

