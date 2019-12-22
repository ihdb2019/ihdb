import React from 'react';


const NextPageButton=(props)=>(

    <div >
        <button className="mybutton" onClick={props.clicked}>{props.children}</button>
    </div>
);

export default NextPageButton;