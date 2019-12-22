import React from 'react';


const FirstPageButton=(props)=>(

    <div >
        <button className="mybutton" onClick={props.clicked}>{props.children}</button>
    </div>
);

export default FirstPageButton;