import React from 'react';


const Property = (props) => {

    return (
        <div>
            <label>{props.name}</label>
            <button onClick={props.decClick}>-</button>
            <p>{props.value}</p>
            <button onClick={props.incClick}>+</button>
        </div>
    )
}

export default Property;