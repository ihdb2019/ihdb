import React from 'react';
import './AdminPageButton.css'

const AdminPageButton=(props)=>(

    <div >
        <button className="mybutton" onClick={props.clicked}>{props.children}</button>
    </div>
);

export default AdminPageButton;