import React from 'react';







const InputField =(props)=>{

return <input index={props.index} value={props.value} onChange={props.changed} placeholder={props.placeholder}></input>
}

export default InputField;