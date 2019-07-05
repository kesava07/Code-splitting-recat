import React, { Component, createRef } from 'react'

export default class About extends Component {
    constructor() {
        super();
        this.inputFocus = createRef()
    };

    componentDidMount() {
        console.log(this.inputFocus);
        this.inputFocus.current.focus();
    };

    getInput = () => {
        alert(this.inputFocus.current.value);
    };

    render() {
        return (
            <div>
                <h1>About</h1>
                <input type="text" ref={this.inputFocus} />
                <button onClick={this.getInput}>Click here</button>
            </div>
        )
    }
}

