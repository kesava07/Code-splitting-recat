import React from 'react';

const CounterHoc = (Wrapper, incrementCount) => {
    return class NewComponent extends React.Component {

        state = {
            count: 0
        }
        handleCount = () => this.setState({ count: this.state.count + incrementCount });

        render() {
            console.log(this.props);
            return (
                <React.Fragment>
                    <Wrapper
                        count={this.state.count}
                        handleCount={this.handleCount}
                        {...this.props}
                    />
                </React.Fragment>
            )
        }
    }
};

export default CounterHoc;