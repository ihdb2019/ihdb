import React, { Component } from 'react';
import InputField from '../Form/InputField/InputField'
import axios from 'axios';
import { render } from 'react-dom';
import { DropdownList } from 'react-widgets';


class EditBox extends Component {

    state = {
        editData: []
    }
    onInputFieldChangeHandler = (i, e) => {
        var data = e.target.value;
        
        console.log("this is data");
        console.log(data);
        console.log("this is state");
        console.log(this.state.editData);
        this.state.editData[e.target.placeholder]=data;
        this.forceUpdate();        //data[i]=e.target.value;       
        
    
        
    }
    onDropDownChangeHandler = (i, e) => {
          
        
        console.log(i);
    }
    onEditButtonClickHandler = (e) => {
        var data = { 'HEADPHONENAME': e.target.value }
        var tmparray = [];
        axios.get("https://ntil8jqgpk.execute-api.us-east-2.amazonaws.com/getHeadphoneByBrand", { params: data }, { crossdomain: true }).then((res) => {


            tmparray.push(res.data.WHOADDED);
            tmparray.push(res.data.HEADPHONENAME);
            tmparray.push(res.data.HEADPHONEBRAND);
            tmparray.push(res.data.HEADPHONEREVIEW);
            tmparray.push(res.data.HEADPHONEPRICE);
            tmparray.push(res.data.SOUNDQUALITY);
            tmparray.push(res.data.SOUNDTYPE);
            tmparray.push(res.data.DURABILITY);
            tmparray.push(res.data.DRIVERCOUNT);
            tmparray.push(res.data.DRIVERTYPE);
            tmparray.push(res.data.EAR);

            
            this.setState({ editData: [...tmparray] });

        })


    }



    render() {
        console.log(this.props);
        var elements = [];

        for (var i = 0; i < this.props.data.length; i++) {
            elements.push(<div key={i}>
                <InputField key={i + 1} placeholder={this.props.data[i].HEADPHONENAME}></InputField>
                <InputField key={i + 2} placeholder={this.props.data[i].HEADPHONEBRAND}></InputField>
                <button key={i + 3} value={this.props.data[i].HEADPHONENAME} onClick={(e) => this.onEditButtonClickHandler(e)}></button>
            </div>)

        }
        var elements2 = [];
        let options_dropdown = ['very bad', 'bad', 'average', 'good', 'very good'];
        let options_soundtype = ['bass', 'balanced', 'v-shaped'];
        let options_ear = ['in-ear', 'over-ear', 'on-ear'];
        if (this.state.editData.length > 0) {
            var tmpdata = [...this.state.editData];
            
            for (var j = 0; j < tmpdata.length; j++) {
                if (j === tmpdata.length - 1) {
                    if (tmpdata[j] === 1) {
                        tmpdata[j] = "in-ear";

                    }
                    else if (tmpdata[j] === 2) {
                        tmpdata[j] = "over-ear";

                    }

                    else {
                        tmpdata[j] = "on-ear";
                    }
                    elements2.push(<DropdownList key={j} value={tmpdata[j]} data={options_ear} onChange={(placeholder) => this.onDropDownChangeHandler(j, placeholder)} placeholder={j}></DropdownList>);
                }
                else if (j === tmpdata.length - 5) {
                    if (tmpdata[j] === 1) {
                        tmpdata[j] = "bass";
                    }
                    else if (tmpdata[j] === 2) {
                        tmpdata[j] = "balanced";

                    }

                    else {
                        tmpdata[j] = "v-shaped";
                    }
                    elements2.push(<DropdownList key={j} value={tmpdata[j]} data={options_soundtype} onChange={(e) => this.onDropDownChangeHandler(j, e)} placeholder={j}></DropdownList>);
                }
                else if (typeof (tmpdata[j] === "number")) {
                    if (tmpdata[j] === 1) {
                        tmpdata[j] = "very bad";
                    }
                    else if (tmpdata[j] === 2) {
                        tmpdata[j] = "bad";

                    }
                    else if (tmpdata[j] === 3) {
                        tmpdata[j] = "average";

                    }
                    else if (tmpdata[j] === 4) {
                        tmpdata[j] = "good";

                    }
                    else if (tmpdata[j] === 5) {
                        tmpdata[j] = "very good";

                    }
                    elements2.push(<InputField index={j} key={j} value={tmpdata[j]} placeholder={j} changed={(e) => this.onInputFieldChangeHandler(j, e)}></InputField>)
                }
                else {

                }
            }

        }

        return (
            <div>
                {elements}
                {elements2}

            </div>
        )
    }

}

export default EditBox;