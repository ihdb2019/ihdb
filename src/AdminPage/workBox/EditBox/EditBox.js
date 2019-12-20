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
        var data = [...this.state.editData];
        //data[i]=e.target.value;       
        data[i] = e.target.value;
        this.setState({ editData: data });




    }
    onDropDownChangeHandler = (i, value) => {
        var data = [...this.state.editData];
        //data[i]=e.target.value;       
        data[i] = value;
        this.setState({ editData: data });
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

            console.log(tmparray);
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
            for (var i = 0; i < tmpdata.length; i++) {
                if (i === tmpdata.length - 1) {
                    if (tmpdata[i] === 1) {
                        tmpdata[i] = "in-ear";

                    }
                    else if (tmpdata[i] === 2) {
                        tmpdata[i] = "over-ear";

                    }

                    else {
                        tmpdata[i] = "on-ear";
                    }
                    elements2.push(<DropdownList key={i} value={tmpdata[i]} data={options_ear} onChange={(value) => this.onDropDownChangeHandler(i, value)} placeholder={tmpdata[i]}></DropdownList>);
                }
                else if (i === tmpdata.length - 5) {
                    if (tmpdata[i] === 1) {
                        tmpdata[i] = "bass";
                    }
                    else if (tmpdata[i] === 2) {
                        tmpdata[i] = "balanced";

                    }

                    else {
                        tmpdata[i] = "v-shaped";
                    }
                    elements2.push(<DropdownList key={i} value={tmpdata[i]} data={options_soundtype} onChange={(value) => this.onDropDownChangeHandler(i, value)} placeholder={tmpdata[i]}></DropdownList>);
                }
                else if (typeof (tmpdata[i] === "number")) {
                    if (tmpdata[i] === 1) {
                        tmpdata[i] = "very bad";
                    }
                    else if (tmpdata[i] === 2) {
                        tmpdata[i] = "bad";

                    }
                    else if (tmpdata[i] === 3) {
                        tmpdata[i] = "average";

                    }
                    else if (tmpdata[i] === 4) {
                        tmpdata[i] = "good";

                    }
                    else if (tmpdata[i] === 5) {
                        tmpdata[i] = "very good";

                    }
                    elements2.push(<InputField key={i} value={tmpdata[i]} placeholder={tmpdata[i]} changed={(e) => this.onInputFieldChangeHandler(i, e)}></InputField>)
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