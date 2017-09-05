import React from 'react' 
import Display from './display.js'
import Increment from './increment.js'

class Calculator extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            value: 0
        };
    }
    render () {
        return (
            <div className="calculator">
                <Display />
                <div className="display">
                    <p className="value">
                        {this.state.value}
                    </p>
                </div>
                <Increment 
                    handleClick={this._changeNumber}
                />
            </div>
        );
    }

    _changeNumber = () => {
        const newValue = this.state.value + 1;
        this.setState({
            value: newValue
        });
    }
}

export default Calculator;