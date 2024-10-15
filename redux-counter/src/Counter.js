import React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap'; // Bootstrap components

class Counter extends React.Component {

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    reset = () => {
        this.props.dispatch({ type: 'RESET' });
    }
    
    render() {
        return (
            <div className="mt-5">
    <div className="justify-content-center">
        <div>
            <h2>Counter</h2>
            <div className="border p-3 bg-info">
                <span className="d-block text-center mb-3">{this.props.count}</span>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);
