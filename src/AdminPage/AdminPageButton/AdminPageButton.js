import React from 'react';


const AdminPageButton=(props)=>(

    <div>
        <button onClick={props.clicked}>{props.children}</button>
    </div>
);

export default AdminPageButton;