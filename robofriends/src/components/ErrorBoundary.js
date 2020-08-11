import React, { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(){
        this.setState ({hasError: true});
    }

    /**
     * As this is the wrapping component. Returning children means anything
     * that this component wraps.
     */
    render() {
        if(this.state.hasError) {
            return <h>Ooops. That is not good.</h>
        }
        return this.props.children;
    }
}


export default ErrorBoundary;