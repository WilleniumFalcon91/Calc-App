import React from 'react'

class Display extends React.Component {

    constructor (props) {
    super(props);
    this.state = {
        value: 0
    };
}
    render () {
        return (
            <div>
                <p>
                    {this.props.value}
                </p>
            </div>
        )
    }

    
}

export default Display;