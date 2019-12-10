import React, { Component } from 'react';
import CancelButton from './CancelButton/CancelButton';
import SubmitButton from './SubmitButton/SubmitButton';
import InputField from './InputField/InputField';
import Label from './Label/Label';
import axios from 'axios';
import { DropdownList } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';
import { thisExpression } from '@babel/types';

class Form extends Component {

        state = {
                data: [],
                search: ""
        }

        onSubmitButtonClickHandler = () => {

                axios.post("https://awy9jz88zl.execute-api.us-east-2.amazonaws.com/test/", this.state.data, { crossdomain: true })
                        .then((response) => {
                                alert(response.data);
                        })

        }
        onSearchSubmitButtonClickHandler = () => {
                var data2= {'searchstring':this.state.search}
                console.log(data2);
                
                axios.get("https://r5j018428h.execute-api.us-east-2.amazonaws.com/delirmetesti/getformheadphone",{params:data2},{ crossdomain: true }).then((res) => {

                        alert(JSON.stringify(res.data[0]));
                })
        }
        onInputFieldChangeHandler = (i, e) => {
                var data = [...this.state.data];
                //data[i]=e.target.value;       
                data[i] = e.target.value;
                this.setState({ data: data });




        }
        onSearchFieldChange = (e) => {
                this.setState({search:e.target.value});
                
        }
        onDropDownChangeHandler = (i, value) => {
                var data = [...this.state.data];
                //data[i]=e.target.value;       
                data[i] = value;
                this.setState({ data: data });
        }
        createComponent = (i, data, data_type) => {
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



        render() {

                var element;
                var adding, editing;

                adding = this.props.adding;
                editing = this.props.editing;
                console.log(editing);
                return (
                        adding ? (
                                <div>

                                        {this.props.data.map((item, i) => {
                                                element = this.createComponent(i, item, this.props.data_type[i])
                                                return element;
                                        })}
                                        <SubmitButton clicked={this.onSubmitButtonClickHandler}></SubmitButton>

                                </div>
                        ) :

                                editing ? (<div>
                                        <InputField changed={(e)=>this.onSearchFieldChange(e)} placeholder="Search"></InputField>
                                        <SubmitButton clicked={this.onSearchSubmitButtonClickHandler}></SubmitButton>
                                </div>) : null
                )

        }
}

export default Form;