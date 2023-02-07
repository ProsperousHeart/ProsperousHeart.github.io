import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props); // allows access to the props
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            console.log("error", this.state.props);
            return <h1> Oops, that is not good</h1>;
        }
        return this.props.children
    }
}

export default ErrorBoundary;
