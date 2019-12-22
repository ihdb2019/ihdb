import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';


class Login extends Component {

  handleClick = (event) => {
   
    let data = {
      USERNAME: this.state.username,
      PASSWORD: this.state.password
    }
    data = JSON.stringify(data);
    data = JSON.parse(data);
  
    axios.post("https://i2t0nkwc15.execute-api.us-east-2.amazonaws.com/new/login", data, { crossdomain: true }).then((res) => {
    

      
      localStorage.setItem("usertype", res.data.body.Usertype);
      localStorage.setItem("username", res.data.body.Username);
      localStorage.setItem("token", res.data.body.TokenHash);
      localStorage.setItem("isLogin", true);
     
      if(res.data.body.Usertype==="audiophilemaster"){
        localStorage.setItem("audiophilemaster", true);
        localStorage.setItem("creator", false);

      }
      else if(  res.data.body.Usertype==="creator"){
        localStorage.setItem("audiophilemaster", true);
        localStorage.setItem("creator", true);
      }
      else{
        localStorage.setItem("audiophilemaster", false);
        
      }
      alert("Login Succesfull")


      window.location.reload();
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
export default Login;