import React, { Component } from 'react';
import CancelButton from './CancelButton/CancelButton';
import SubmitButton from './SubmitButton/SubmitButton';
import InputField from './InputField/InputField';
import Label from './Label/Label';
import axios from 'axios';
import { DropdownList } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';

class Form extends Component {

        state = {
                data: []
        }

        onSubmitButtonClickHandler = () => {

                axios.post("https://awy9jz88zl.execute-api.us-east-2.amazonaws.com/test/", this.state.data, { crossdomain: true })
                        .then((response) => {
                                console.log(response);
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
        
                

        
        render() {
               
                let options = ['very bad', 'bad', 'average', 'good','very good'];
                console.log(this.props.data_type);
                return (
                        
                        <div>
                                
                                {       
                                       
                                        this.props.data ? (this.props.data.map((item, i) =>

                                                (      this.props.data_type[i]?
                                                        (<InputField key={i} placeholder={item} changed={(e) => this.onInputFieldChangeHandler(i, e)}></InputField>)  :
                                                        (<DropdownList data={options} onChange={(value)=>this.onDropDownChangeHandler(i,value)} placeholder={item}></DropdownList>)
                                                        

                                                )
                                                
                                        )) : null

                                }
                                <SubmitButton clicked={this.onSubmitButtonClickHandler}></SubmitButton>
                        </div>

                )

        }
}

export default Form;