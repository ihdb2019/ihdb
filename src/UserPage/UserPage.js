import React, { Component } from 'react';
import axios from 'axios';
class UserPage extends Component {
    componentWillMount(){
        var mystate={
            Username:"ege",
            Usertype:"admin",
            email:"ege",
            price:5,
            soundquality:5,
            bass:5,
            treble:5,
            durabilty:5
        }
        this.setState({state:mystate})
    }

    render() {
            console.log(this.state)
        return <p>ahmet</p>
    }

}

export default UserPage;