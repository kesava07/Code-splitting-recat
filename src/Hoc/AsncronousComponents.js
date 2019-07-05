import React from 'react';

const AsyncComponent = (Wrapper) => {
    return class NewComponent extends React.Component {
        state = {
            component: null
        }

        componentDidMount() {
            // console.log(Wrapper)
            Wrapper()
                .then(cmp => {
                    // console.log(cmp.default);
                    this.setState({ component: cmp.default })
                })
        }

        render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
};

export default AsyncComponent;