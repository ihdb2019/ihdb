import React, { useState } from 'react';
import AdminPageButton from './AdminPageButton/AdminPageButton';
import axios from 'axios';
import Form from './workBox/Form/Form';
import './AdminPage.css'


function onAddHeadphoneButtonClickHandler (addingHeadphone, setAddingHeadphone, editingHeadphone, setEditingHeadphone, addingNews, setAddingNews, editingNews, setEditingNews, setData, setDataType) {
    setAddingHeadphone(!addingHeadphone);
    if (addingNews) setAddingNews(!addingNews);
    if (editingHeadphone) setEditingHeadphone(!editingHeadphone);
    if (editingNews) setEditingNews(!editingNews);
    if (addingHeadphone) {
        axios.get('https://r5j018428h.execute-api.us-east-2.amazonaws.com/test/getformheadphone', { crossdomain: true })
            .then(res => {
                var data = [...res.data.body.fields];
                var data_type = [...res.data.body.field_type];
                setData(data);
                setDataType(data_type);
            }
        )
    }

}
function onListHeadphoneButtonClickHandler(addingHeadphone, setAddingHeadphone, editingHeadphone, setEditingHeadphone, addingNews, setAddingNews, editingNews, setEditingNews) {
    setEditingHeadphone(!editingHeadphone);
    if (addingNews) setAddingNews(!addingNews);
    if (addingHeadphone) setAddingHeadphone(!addingHeadphone);
    if (editingNews) setEditingNews(!editingNews);


}
function onAddNewsButtonClickHandler(addingHeadphone, setAddingHeadphone, editingHeadphone, setEditingHeadphone, addingNews, setAddingNews, editingNews, setEditingNews, setData) {
    setAddingNews(!addingNews);
    if (addingHeadphone) setAddingHeadphone(!addingHeadphone);
    if (editingHeadphone) setEditingHeadphone(!editingHeadphone);
    if (editingNews) setEditingNews(!editingNews);
    if (addingNews) {
        axios.get('https://v8wg906jm2.execute-api.us-east-2.amazonaws.com/new/getformnews', { crossdomain: true })
            .then(res => {
                var data = [...res.data.body.fields];
                setData(data);
            }
        )
    }

}
function onListNewsButtonClickHandler(addingHeadphone, setAddingHeadphone, editingHeadphone, setEditingHeadphone, addingNews, setAddingNews, editingNews, setEditingNews) {
    setEditingNews(!editingNews);
    if (addingNews) setAddingNews(!addingNews);
    if (addingHeadphone) setAddingHeadphone(!addingHeadphone);
    if (editingHeadphone) setEditingHeadphone(!editingHeadphone);

}
function AdminPage() {

    const [addingHeadphone, setAddingHeadphone] = useState(false);
    const [editingHeadphone, setEditingHeadphone] = useState(false);
    const [addingNews, setAddingNews] = useState(false);
    const [editingNews, setEditingNews] = useState(false);
    const [news, setNews] = useState(false);
    const [headphone, setHeadphone] = useState(false);
    const [nothing, setNothing] = useState(true);
    const [data, setData] = useState([]);
    const [data_type, setDataType] = useState([]);



    return (
        <div className="container">
            <div className="box">

                <div className="news">
                    <AdminPageButton clicked={() => onAddNewsButtonClickHandler(addingHeadphone, setAddingHeadphone, editingHeadphone, setEditingHeadphone, addingNews, setAddingNews, editingNews, setEditingNews, setData)} >Add News</AdminPageButton>
                    <AdminPageButton clicked={() => onListNewsButtonClickHandler(addingHeadphone, setAddingHeadphone, editingHeadphone, setEditingHeadphone, addingNews, setAddingNews, editingNews, setEditingNews)} >List News</AdminPageButton>
                </div>
                <div className="headphone">
                    <AdminPageButton clicked={() => onAddHeadphoneButtonClickHandler(addingHeadphone, setAddingHeadphone, editingHeadphone, setEditingHeadphone, addingNews, setAddingNews, editingNews, setEditingNews, setData, setDataType)} >Add Headphone</AdminPageButton>
                    <AdminPageButton clicked={() => onListHeadphoneButtonClickHandler(addingHeadphone, setAddingHeadphone, editingHeadphone, setEditingHeadphone, addingNews, setAddingNews, editingNews, setEditingNews)} >List Headphone</AdminPageButton>
                </div>

                <Form editingHeadphone={editingHeadphone} addingHeadphone={addingHeadphone} editingNews={editingNews} addingNews={addingNews} data={data} data_type={data_type}></Form>
            </div>
        </div>
    )

}

export default AdminPage;