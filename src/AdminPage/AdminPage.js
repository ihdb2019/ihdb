import React, { useState } from 'react';
import AdminPageButton from './AdminPageButton/AdminPageButton';
import axios from 'axios';
import Form from './workBox/Form/Form';


function onAddHeadphoneButtonClickHandler(setAdding,setData,setDataType,adding)  {
    setAdding(!adding); 
    if(adding){
    axios.get('https://r5j018428h.execute-api.us-east-2.amazonaws.com/test/getformheadphone',{ crossdomain: true })

      .then(res => {
       
        
        
        console.log(res.data);
        var data=[...res.data.body.fields];
        var data_type=[...res.data.body.field_type];
        console.log(data);
        setData(data);
        setDataType(data_type);}
      )}
      
}
function onListHeadphoneButtonClickHandler  (setEditing,editing)  {
    setEditing(!editing);
    

}
function onAddNewsButtonClickHandler  ()  {
    alert("am cocugu egehan2");

}
function onListNewsButtonClickHandler () {
    alert("am cocugu egehan3");

}
function AdminPage ()  {
   
    const[adding ,setAdding] = useState(false);
    const[editing ,setEditing] = useState(false);
    const[news ,setNews] = useState(false);
    const[headphone ,setHeadphone] = useState(false);
    const[nothing ,setNothing] = useState(true);
    const[data,setData]=useState([]);
    const[data_type,setDataType]=useState([]);
   
    
    
        return (
        <div>
            <AdminPageButton clicked={()=>onAddHeadphoneButtonClickHandler(setAdding,setData,setDataType,adding)} >Add Headphone</AdminPageButton>
            <AdminPageButton clicked={()=>onListHeadphoneButtonClickHandler(setEditing,editing)} >List Headphone</AdminPageButton>
            <AdminPageButton clicked={onAddNewsButtonClickHandler} >Add News</AdminPageButton>
            <AdminPageButton clicked={onListNewsButtonClickHandler} >List News</AdminPageButton>
            
            <Form editing={editing} adding={adding} data={data} data_type={data_type}></Form>
            
        </div>
        )
    
}

export default AdminPage;