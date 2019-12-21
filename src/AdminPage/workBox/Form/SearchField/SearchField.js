import React from 'react';
import './SearchField.css'






const SearchField =(props)=>{

return <input className="searchbutton" index={props.index} value={props.value} onChange={props.changed} placeholder={props.placeholder}></input>
}

export default SearchField;