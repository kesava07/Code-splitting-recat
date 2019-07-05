import React, { Component } from 'react'

export default class FallBack extends Component {
    state = {
        hasError: false
    };

    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Some thing went wrong here</h1>
                </div>
            )
        }
        return this.props.children;
    }
}
