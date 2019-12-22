import React from 'react';
import './InputField.css'






const InputField = (props) => {

    return (<div className="mydiv"> <input className="myinput" index={props.index} value={props.value} onChange={props.changed} placeholder={props.placeholder}></input>
    </div>)
}

export default InputField;