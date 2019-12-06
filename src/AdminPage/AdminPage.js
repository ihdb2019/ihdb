import React, { useState } from 'react';
import AdminPageButton from './AdminPageButton/AdminPageButton';
import axios from 'axios';
import Form from './workBox/Form/Form';


function onAddHeadphoneButtonClickHandler(setAdding,setData,setDataType)  {
    
    axios.get('https://r5j018428h.execute-api.us-east-2.amazonaws.com/test/getformheadphone',{ crossdomain: true })

      .then(res => {
       
        
        setAdding(true);
        var data=[...res.data.body.fields];
        var data_type=[...res.data.body.field_type];
        console.log(data);
        setData(data);
        setDataType(data_type);
      })
}
function onListHeadphoneButtonClickHandler  ()  {
    alert("am cocugu egehan1");

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
            <AdminPageButton clicked={(data)=>onAddHeadphoneButtonClickHandler(setAdding,setData,setDataType)} >Add Headphone</AdminPageButton>
            <AdminPageButton clicked={onListHeadphoneButtonClickHandler} >List Headphone</AdminPageButton>
            <AdminPageButton clicked={onAddNewsButtonClickHandler} >Add News</AdminPageButton>
            <AdminPageButton clicked={onListNewsButtonClickHandler} >List News</AdminPageButton>
            
            <Form adding={adding} data={data} data_type={data_type}></Form>
            
        </div>
        )
    
}

export default AdminPage;