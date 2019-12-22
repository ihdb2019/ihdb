import React, { Component } from 'react';
import axios from 'axios';
class Headphone extends Component{
    constructor(props) {
        super(props);
        var coolVar = window.location.href;
        var partsArray = coolVar.split('/');
        var desired = partsArray[partsArray.length - 1]
        var data = { 'HEADPHONENAME': desired  }
        axios.get("https://ntil8jqgpk.execute-api.us-east-2.amazonaws.com/getHeadphoneByBrand", { params: data }, { crossdomain: true }).then((res) => {
            console.log(res)
   
    })}
render(){
   
    return <p>{window.location.href}</p>
}

}

export default Headphone;