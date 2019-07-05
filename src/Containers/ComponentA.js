import React, { Component } from 'react';
import WithCounter from '../Hoc/WithCounter';

class ComponentA extends Component {
    render() {
        const { count, handleCount, name } = this.props;

        return (
            <div>
                <h1>Component A</h1>
                <button onClick={handleCount}> {name} Clicked {count} times</button>
            </div>
        )
    }
};
export default WithCounter(ComponentA, 5);