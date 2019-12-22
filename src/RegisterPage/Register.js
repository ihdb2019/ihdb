import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';



class RegisterPage extends Component {


    handleClick = (event) => {
        if (this.state.password !== this.state.passwordConfirm) {
            alert("Passwords do not match!")
        }
        else {
            console.log(event);
            console.log(this.state);
            let data = {
                USERNAME: this.state.username,
                PASSWORD: this.state.password,
                EMAIL:this.state.email
            }
            data = JSON.stringify(data);
            data = JSON.parse(data);
            console.log(data);
            axios.post("https://i2t0nkwc15.execute-api.us-east-2.amazonaws.com/new/register", data, { crossdomain: true }).then((res) => {


                console.log(res);



            })
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            email: ''
        }
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>


                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange={(event, newValue) => this.setState({ username: newValue })}
                        />
                        <br />
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br />
                        <TextField
                            type="password"
                            hintText="Confirm your Password"
                            floatingLabelText="Password Confirm"
                            onChange={(event, newValue) => this.setState({ passwordConfirm: newValue })}
                        />
                        <br />
                        <TextField

                            hintText="Enter your Email"
                            floatingLabelText="Email"
                            onChange={(event, newValue) => this.setState({ email: newValue })}
                        />
                        <br />
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 15,
};




export default RegisterPage;
