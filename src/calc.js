import React from 'react' 
import Display from './display.js'
import Increment from './increment.js'
import Decrement from './subtract.js'
import NumberButton from "./numbers.js"

class Calculator extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            value: 0,
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
                    handleClick={this._addNumber}
                />
                <Decrement 
                    handleClick={this._minusNumber}
                />
                
                <NumberButton numberValue={0}
                    doClick={this._takeNumberInput}
                />
                <NumberButton numberValue={1}
                    doClick={this._takeNumberInput}
                />
                <NumberButton numberValue={2}
                    doClick={this._takeNumberInput}
                />
                <NumberButton numberValue={3}
                    doClick={this._takeNumberInput}
                />
                <NumberButton numberValue={4}
                    doClick={this._takeNumberInput}
                />
                <NumberButton numberValue={5}
                    doClick={this._takeNumberInput}
                />
                <NumberButton numberValue={6}
                    doClick={this._takeNumberInput}
                />
                <NumberButton numberValue={7}
                    doClick={this._takeNumberInput}
                />
                <NumberButton numberValue={8}
                    doClick={this._takeNumberInput}
                />
                <NumberButton numberValue={9}
                    doClick={this._takeNumberInput}
                />

                
            </div>
        );
    }

    _addNumber = () => {
        const newValue = this.state.value + 1;
        this.setState({
            value: newValue
        });
    }
    _minusNumber = () => {
        const newValue = this.state.value - 1;
        this.setState({
            value: newValue
        });
    }
    // _numberValue = (num) => {
    //     debugger;
    //     const newValue = this.state.value + num;
    //     this.setState({
    //         value: newValue
    //     });
    // }
    _takeNumberInput = (num) => {
        this.setState({
            value: num
        })
    }
}

export default Calculator;