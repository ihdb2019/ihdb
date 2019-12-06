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
                data: []
        }

        onSubmitButtonClickHandler = () => {

                axios.post("https://awy9jz88zl.execute-api.us-east-2.amazonaws.com/test/", this.state.data, { crossdomain: true })
                        .then((response) => {
                                alert(response.data);
                        })

        }
        onInputFieldChangeHandler = (i, e) => {
                var data = [...this.state.data];
                //data[i]=e.target.value;       
                data[i] = e.target.value;
                this.setState({ data: data });




        }
        onDropDownChangeHandler= (i,value)=>{
                var data = [...this.state.data];
                //data[i]=e.target.value;       
                data[i] = value;
                this.setState({ data: data });
        }
        createComponent=(i,data,data_type)=>{
                let options_dropdown = ['very bad', 'bad', 'average', 'good','very good'];
                let options_soundtype = ['bass', 'balanced', 'v-shaped'];
                let options_ear = ['in-ear', 'over-ear', 'on-ear'];
                console.log("asd")
                
                                if(data_type==="input"){
                                        return  (<InputField key={i} placeholder={data} changed={(e) => this.onInputFieldChangeHandler(i, e)}></InputField>);
                                }
                                else if(data_type==="soundtype"){
                                        return (<DropdownList key={i} data={options_soundtype} onChange={(value)=>this.onDropDownChangeHandler(i,value)} placeholder={data}></DropdownList>)
                                }
                                else if(data_type==="ear"){
                                        return (<DropdownList key={i}  data={options_ear} onChange={(value)=>this.onDropDownChangeHandler(i,value)} placeholder={data}></DropdownList>)
                                }
                                else {
                                        return (<DropdownList key={i}  data={options_dropdown} onChange={(value)=>this.onDropDownChangeHandler(i,value)} placeholder={data}></DropdownList>)
                                }

                      
        }
                

        
        render() {
               
                var element;

                
                
                return (
                        
                        <div>
                                
                               {this.props.data.map((item,i)=>{
                                       element=this.createComponent(i,item,this.props.data_type[i])
                                       return element;
                               })}
                                <SubmitButton clicked={this.onSubmitButtonClickHandler}></SubmitButton>
                                
                        </div>

                )

        }
}

export default Form;