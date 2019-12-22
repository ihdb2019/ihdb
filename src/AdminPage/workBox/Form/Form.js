import React, { Component } from 'react';
import CancelButton from './CancelButton/CancelButton';
import SubmitButton from './SubmitButton/SubmitButton';
import SubmitButton2 from './SubmitButton2/SubmitButton2';
import InputField from './InputField/InputField';
import SearchField from './SearchField/SearchField';



import axios from 'axios';
import { DropdownList } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';

import EditBox from '../EditBox/EditBox';
import './Form.css'
class Form extends Component {

        state = {
                data: [],
                search: "",
                editFormData: [],
                editBox: false,
                a: false,
                b: false
        }
        onSubmitButtonClickHandler = (mode) => {
                if (mode) {
                        let data = {
                                "WHOADDED": this.state.data[0],
                                "HEADPHONENAME": this.state.data[1],
                                "HEADPHONEBRAND": this.state.data[2],
                                "HEADPHONEREVIEW": this.state.data[3],
                                "HEADPHONEPRICE": this.state.data[4],
                                "SOUNDQUALITY": this.state.data[5],
                                "SOUNDTYPE": this.state.data[6],
                                "DURABILITY": this.state.data[7],
                                "DRIVERCOUNT": this.state.data[8],
                                "DRIVERTYPE": this.state.data[9],
                                "EAR": this.state.data[10]
                        }
                        data = JSON.stringify(data);
                        axios.post("https://ebn17mlebi.execute-api.us-east-2.amazonaws.com/test/addheadphone", data, { crossdomain: true })
                                .then((response) => {
                                        alert(response.data);
                                })
                }
                else {
                        let data = {
                                "WHOADDED": this.state.data[0],
                                "HEADER": this.state.data[1],
                                "TEXT": this.state.data[2],
                        }
                        data = JSON.stringify(data);
                        axios.post("https://v8wg906jm2.execute-api.us-east-2.amazonaws.com/new/addnews", data, { crossdomain: true })
                                .then((response) => {

                                })
                }

        }
        onSearchSubmitButtonClickHandler = (mode) => {
                var data2 = { 'searchstring': this.state.search }
                var tmparray = [];
                this.setState({ a: true });
                this.setState({ b: false });
                console.log(this.state.a);

                console.log(data2);
                if (mode) {
                        axios.get("https://ebn17mlebi.execute-api.us-east-2.amazonaws.com/test/searchmodelbrand", { params: data2 }, { crossdomain: true }).then((res) => {
                                console.log(res)
                                tmparray = [...res.data];
                                this.setState({ editFormData: tmparray });
                                this.setState({ editBox: true });
                        })
                }
                else {
                        axios.get("https://v8wg906jm2.execute-api.us-east-2.amazonaws.com/test/searchnews", { params: data2 }, { crossdomain: true }).then((res) => {
                                console.log(res)
                                tmparray = [...res.data];
                                this.setState({ editFormData: tmparray });
                                this.setState({ editBox: true });
                        })
                }

        }
        onInputFieldChangeHandler = (i, e) => {
                var data = [...this.state.data];
                //data[i]=e.target.value;       
                data[i] = e.target.value;
                this.setState({ data: data });
        }
        onSearchFieldChange = (e) => {
                this.setState({ search: e.target.value });

        }
        onDropDownChangeHandler = (i, value) => {
                var data = [...this.state.data];
                //data[i]=e.target.value;       
                data[i] = value;
                this.setState({ data: data });
        }
        createHeadphoneComponent = (i, data, data_type) => {
                let options_dropdown = ['very bad', 'bad', 'average', 'good', 'very good'];
                let options_soundtype = ['bass', 'balanced', 'v-shaped'];
                let options_ear = ['in-ear', 'over-ear', 'on-ear'];


                if (data_type === "input") {
                        return (<InputField key={i} placeholder={data} changed={(e) => this.onInputFieldChangeHandler(i, e)}></InputField>);
                }
                else if (data_type === "soundtype") {
                        return (<DropdownList key={i} data={options_soundtype} onChange={(value) => this.onDropDownChangeHandler(i, value)} placeholder={data}></DropdownList>)
                }
                else if (data_type === "ear") {
                        return (<DropdownList key={i} data={options_ear} onChange={(value) => this.onDropDownChangeHandler(i, value)} placeholder={data}></DropdownList>)
                }
                else {
                        return (<DropdownList key={i} data={options_dropdown} onChange={(value) => this.onDropDownChangeHandler(i, value)} placeholder={data}></DropdownList>)
                }


        }
        createNewsComponent = (i, data) => {
                return (<InputField key={i} placeholder={data} changed={(e) => this.onInputFieldChangeHandler(i, e)}></InputField>);
        }




        render() {

                var element;
                var addingHeadphone, editingHeadphone, addingNews, editingNews;
                addingHeadphone = this.props.addingHeadphone;
                editingHeadphone = this.props.editingHeadphone;
                addingNews = this.props.addingNews;
                editingNews = this.props.editingNews;

                return (
                        addingHeadphone ? (
                                <div>
                                        {this.props.data.map((item, i) => {
                                                element = this.createHeadphoneComponent(i, item, this.props.data_type[i])
                                                return element;
                                        })}
                                        <SubmitButton2 clicked={() => this.onSubmitButtonClickHandler(true)}></SubmitButton2>
                                </div>
                        ) :

                                editingHeadphone ? (
                                        <div className="editform">
                                                <SearchField changed={(e) => this.onSearchFieldChange(e)} placeholder="Search"></SearchField>
                                                <div className="submitbut">

                                                <SubmitButton2 clicked={() => this.onSearchSubmitButtonClickHandler(true)} ></SubmitButton2>
                                        </div> <div>{this.state.editBox ? <EditBox a={this.state.a} b={this.state.b} data={this.state.editFormData} editingNews={editingNews} editingHeadphone={editingHeadphone}></EditBox> : null}
                                        </div>
                                </div >
                        ) :
                addingNews ? (
                        <div>
                                {this.props.data.map((item, i) => {
                                        element = this.createNewsComponent(i, item)
                                        return element;
                                })}
                                <SubmitButton clicked={() => this.onSubmitButtonClickHandler(false)}></SubmitButton>
                        </div>
                ) :
                        editingNews ? (
                                <div className="editform">
                                        <SearchField changed={(e) => this.onSearchFieldChange(e)} placeholder="Search"></SearchField>
                                        <div className="submitbut">
                                        <SubmitButton2 clicked={() => this.onSearchSubmitButtonClickHandler(false)} ></SubmitButton2>
                                        </div> <div>{this.state.editBox ? <EditBox a={this.state.a} b={this.state.b} data={this.state.editFormData} editingNews={editingNews} editingHeadphone={editingHeadphone}></EditBox> : null}
                                        </div>
                                </div>
                        ) : null

                        
                )

        }
}

export default Form;