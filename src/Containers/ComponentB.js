import React, { Component } from 'react';
import WithCounter from '../Hoc/WithCounter';

class ComponentB extends Component {

    render() {
        const { count, handleCount, name } = this.props;
        return (
            <div>
                <h1>Component B</h1>
                <button onMouseOver={handleCount}> {name} Hovered {count} times </button>
            </div>
        )
    }
}
export default WithCounter(ComponentB , 10)
