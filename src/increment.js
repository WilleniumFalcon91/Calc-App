import React from 'react'

// class Increment extends React.Component {
    const addButton = ({
        handleClick
    }) => (
        <button onClick={handleClick}>+</button>
    )
    // render () {
    //     return (
    //         <div className="addButton">
    //             <p className="buttonSymbol">+</p>
    //         </div>
    //     )
    // }
// }

export default addButton;