import React, { Component } from 'react';
import InputField from '../Form/InputField/InputField'
import axios from 'axios';
import SubmitButton from '../Form/SubmitButton/SubmitButton'
import { DropdownList } from 'react-widgets';


class EditBox extends Component {
    
    state = {
        editData: [],
        EXNAME:"",
        EXHEADER:""

    }
    onInputFieldChangeHandler = (index, e) => {
        let tmp = [...this.state.editData]
        var data = e.target.value;
        tmp[index] = data;
        this.setState({ editData: tmp });
    }
    onDropDownChangeHandler = (event, index) => {

        let tmp = [...this.state.editData]
        console.log(tmp);
        tmp[index] = event;
        this.setState({ editData: tmp });


    }
    onSubmitButtonClickHandler = () => {
        let data = {
            "WHOADDED" :this.state.editData[0],
            "HEADPHONENAME":this.state.editData[1],
            "HEADPHONEBRAND":this.state.editData[2],
            "HEADPHONEREVIEW":this.state.editData[3],
            "HEADPHONEPRICE":this.state.editData[4],
            "SOUNDQUALITY":this.state.editData[5],
            "SOUNDTYPE":this.state.editData[6],
            "DURABILITY":this.state.editData[7],
            "DRIVERCOUNT":this.state.editData[8],
            "DRIVERTYPE":this.state.editData[9],
            "EAR":this.state.editData[10],
            "EXNAME":this.state.EXNAME

        }
        data=JSON.stringify(data);
        

        
        axios.post("https://awy9jz88zl.execute-api.us-east-2.amazonaws.com/test/",data, { crossdomain: true })
            .then((response) => {
                alert(response.data);
            })


    }

    onSubmitButtonClickHandlerNews = () => {
        let data = {
            "HEADER" : this.state.editData[0],
            "TEXT" : this.state.editData[1],
            "WHOADDED" : this.state.editData[2],
            "EXHEADER":this.state.EXHEADER
        }
        data=JSON.stringify(data);
        axios.post("https://v8wg906jm2.execute-api.us-east-2.amazonaws.com/new/addnews",data, { crossdomain: true })
            .then((response) => {
                alert(response.data);
        })
    }

    onEditButtonClickHandler = (e) => {
        var data = { 'HEADPHONENAME': e.target.value }
        var tmparray = [];
        axios.get("https://ntil8jqgpk.execute-api.us-east-2.amazonaws.com/getHeadphoneByBrand", { params: data }, { crossdomain: true }).then((res) => {


            tmparray.push(res.data.WHOADDED);//text
            tmparray.push(res.data.HEADPHONENAME);//text
            this.setState({EXNAME:res.data.HEADPHONENAME});
            tmparray.push(res.data.HEADPHONEBRAND);//text
            tmparray.push(res.data.HEADPHONEREVIEW);//text
            tmparray.push(res.data.HEADPHONEPRICE);//dr-7
            tmparray.push(res.data.SOUNDQUALITY);//dr-6
            tmparray.push(res.data.SOUNDTYPE);//dr-5
            tmparray.push(res.data.DURABILITY);//dr-4
            tmparray.push(res.data.DRIVERCOUNT);//text
            tmparray.push(res.data.DRIVERTYPE);//text
            tmparray.push(res.data.EAR);//dr

            for (let j = 0; j < tmparray.length; j++) {
                if (j === tmparray.length - 1) {
                    if (tmparray[j] === 1 || tmparray[j] === "in-ear") {
                        tmparray[j] = "in-ear";

                    }
                    else if (tmparray[j] === 2 || tmparray[j] === "over-ear") {
                        tmparray[j] = "over-ear";

                    }

                    else {
                        tmparray[j] = "on-ear";
                    }


                }
                else if (j === tmparray.length - 5) {
                    if (tmparray[j] === 1 || tmparray[j] === "bass") {
                        tmparray[j] = "bass";
                    }
                    else if (tmparray[j] === 2 || tmparray[j] === "balanced") {
                        tmparray[j] = "balanced";

                    }

                    else {
                        tmparray[j] = "v-shaped";
                    }

                }
                else if (j > tmparray.length - 8 && j < tmparray.length - 3) {

                    if (tmparray[j] === 1) {
                        tmparray[j] = "very bad";
                    }
                    else if (tmparray[j] === 2) {
                        tmparray[j] = "bad";

                    }
                    else if (tmparray[j] === 3) {
                        tmparray[j] = "average";

                    }
                    else if (tmparray[j] === 4) {
                        tmparray[j] = "good";

                    }
                    else if (tmparray[j] === 5) {
                        tmparray[j] = "very good";

                    }

                }

            }
            this.setState({ editData: [...tmparray] });

        })


    }

    onEditButtonClickHandlerEditNews = (e) => {
        var data = { 'searchstring': e.target.value }
        var tmparray = [];
        axios.get("https://v8wg906jm2.execute-api.us-east-2.amazonaws.com/test/searchnews", { params: data }, { crossdomain: true }).then((res) => {
            tmparray.push(res.data[0].HEADER);
            tmparray.push(res.data[0].TEXT);
            tmparray.push(res.data[0].WHOADDED);
            this.setState({EXHEADER:res.data[0].HEADER});
            this.setState({ editData: [...tmparray] });
        });
    }

    render() {

        var elements = [];
        if(this.props.editingHeadphone){

        for (var i = 0; i < this.props.data.length; i++) {
            elements.push(<div key={i}>
                <label key={i + 1}>{this.props.data[i].HEADPHONENAME}</label>
                <label key={i + 2}>{this.props.data[i].HEADPHONEBRAND}</label>
                <button key={i + 3} value={this.props.data[i].HEADPHONENAME} onClick={(e) => this.onEditButtonClickHandler(e)}></button>
            </div>)

        }
        var elements2 = [];
        let options_dropdown = ['very bad', 'bad', 'average', 'good', 'very good'];
        let options_soundtype = ['bass', 'balanced', 'v-shaped'];
        let options_ear = ['in-ear', 'over-ear', 'on-ear'];
        if (this.state.editData) {
            if (this.state.editData.length > 0) {
                var tmpdata = [...this.state.editData];


                for (let j = 0; j < tmpdata.length; j++) {
                    if (j === tmpdata.length - 1) {
                        elements2.push(<DropdownList key={j} value={tmpdata[j]} data={options_ear} onChange={value => this.onDropDownChangeHandler(value, j)} ></DropdownList>);
                    }
                    else if (j === tmpdata.length - 5) {

                        elements2.push(<DropdownList key={j} value={tmpdata[j]} data={options_soundtype} onChange={(value) => this.onDropDownChangeHandler(value, j)}></DropdownList>);
                    }
                    else if (j > tmpdata.length - 8 && j < tmpdata.length - 3) {
                        elements2.push(<DropdownList key={j} value={tmpdata[j]} data={options_dropdown} onChange={(value) => this.onDropDownChangeHandler(value, j)}></DropdownList>)
                    }
                    else {
                        elements2.push(<InputField index={j} key={j} value={tmpdata[j]} placeholder={j} changed={(e) => this.onInputFieldChangeHandler(j, e)}></InputField>)
                    }
                }

                elements2.push(<SubmitButton clicked={this.onSubmitButtonClickHandler}></SubmitButton>)

            }
        }
        }
        else if(this.props.editingNews){
            elements.push(<div key='35'>
                <label>{this.props.data[0].HEADER}</label>
                <button value={this.props.data[0].HEADER} onClick={(e) => this.onEditButtonClickHandlerEditNews(e)}></button>
            </div>);
            var elements2 = [];
            if (this.state.editData) {
                if (this.state.editData.length > 0) {
                    var tmpdata = [...this.state.editData];
                    for (let j = 0; j < tmpdata.length; j++) {
                        elements2.push(<InputField key={j} value={tmpdata[j]} placeholder={tmpdata[j]} changed={(e) => this.onInputFieldChangeHandler(j, e)}></InputField>);
                    }
                    elements2.push(<SubmitButton key='78' clicked={this.onSubmitButtonClickHandlerNews}></SubmitButton>)
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