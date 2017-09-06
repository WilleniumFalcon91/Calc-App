import React from 'react'


class NumberButton extends React.Component {

    // constructor (props) {
    //     super(props);
    // }

    render () {
        return (
            <div>
                <button onClick={this._handleClick}>
                    {this.props.numberValue}
                </button>
            </div>
        )
    }

    _handleClick = (event) => {
        this.props.doClick(this.props.numberValue)
    }
    // const numberButtons = ({num
    // }) => (

    //     <div className="numbers">
    //         <button onClick={handleClick} numberValue={this.props.numberValue}></button>
    //     </div>
    // )        

}


export default NumberButton;