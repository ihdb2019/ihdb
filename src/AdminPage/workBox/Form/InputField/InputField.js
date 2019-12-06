import React from 'react';







const InputField =(props)=>{

return <input onChange={props.changed} placeholder={props.placeholder}></input>
}

export default InputField;