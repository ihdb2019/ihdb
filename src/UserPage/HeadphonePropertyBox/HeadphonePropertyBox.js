import React, { Component } from 'react';
import Property from './Property/Property';
import axios from 'axios';


class HeadphonePropertyBox extends Component {

    constructor(props) {
        super(props);
        let username = localStorage.getItem("username");
        let data = { 'username': username };
        axios.get(" https://wg9q0c0t66.execute-api.us-east-2.amazonaws.com/one/deneme", { params: data }, { crossdomain: true }).then((res) => {
            console.log(res)
            this.setState({bass:res.data.BASS});
            this.setState({treble:res.data.TREBLE});
            this.setState({durability:res.data.DURABILITY});
            this.setState({price:res.data.PRICE});
            this.setState({soundquality:res.data.SOUNDQUALITY});
            let max=30;
            let point=max- res.data.PRICE - res.data.SOUNDQUALITY - res.data.BASS - res.data.TREBLE - res.data.DURABILITY;
            this.setState({maxPoint:max});
            this.setState({pointsRemaining:point});

             
     })
      }
    state = {

        bass:0,
        treble: 0,
        durability: 0,
        price: 0,
        soundquality: 0,
        maxPoint: 0,
        pointsRemaining: 0


    }
    onIncreaseButtonClickHandler = (type) => {
        if (this.state.pointsRemaining > 0) {
            let tmp;
            if (type === 1) {
                tmp = this.state.price;
                tmp++;
                this.setState({ price: tmp })
            }
            else if (type === 2) {
                tmp = this.state.soundquality;
                tmp++;
                this.setState({ soundquality: tmp })
            }
            else if (type === 3) {
                tmp = this.state.bass;
                tmp++;
                this.setState({ bass: tmp })
            }
            else if (type === 4) {
                tmp = this.state.treble;
                tmp++;
                this.setState({ treble: tmp })
            }
            else if (type === 5) {
                let tmp = this.state.durability;
                tmp++;
                this.setState({ durability: tmp })
            }
            let point = this.state.pointsRemaining;
            point--;
            this.setState({ pointsRemaining: point });
        }
    }
    onDecreaseButtonClickHandler = (type) => {
        if (this.state.pointsRemaining < 30) {
            let tmp;
            if (type === 1) {
                tmp = this.state.price;
                if (tmp > 0) {
                    tmp--;
                    this.setState({ price: tmp }); let point = this.state.pointsRemaining;
                    point++;
                    this.setState({ pointsRemaining: point });
                }
            }
            else if (type === 2) {
                tmp = this.state.soundquality;
                if (tmp > 0) {
                    tmp--;
                    this.setState({ soundquality: tmp }); let point = this.state.pointsRemaining;
                    point++;
                    this.setState({ pointsRemaining: point });
                }
            }
            else if (type === 3) {
                tmp = this.state.bass;
                if (tmp > 0) {
                    tmp--;
                    this.setState({ bass: tmp });
                    let point = this.state.pointsRemaining;
                    point++;
                    this.setState({ pointsRemaining: point });
                }
            }
            else if (type === 4) {
                tmp = this.state.treble;
                if (tmp > 0) {
                    tmp--;
                    this.setState({ treble: tmp });
                    let point = this.state.pointsRemaining;
                    point++;
                    this.setState({ pointsRemaining: point });
                }
            }
            else if (type === 5) {
                tmp = this.state.durability;
                if (tmp > 0) {
                    tmp--;
                    this.setState({ durability: tmp })
                    let point = this.state.pointsRemaining;
                    point++;
                    this.setState({ pointsRemaining: point });
                }
            }

        }
    }
    onSubmitButtonHandler=()=>{
        let data={
            "USERNAME": localStorage.getItem("username"),
            "PRICE": this.state.price,
            "SOUNDQUALITY": this.state.soundquality,
            "BASS": this.state.bass,
            "TREBLE": this.state.treble,
            "DURABILITY": this.state.durability

        }
        axios.post("https://k3rodqx32b.execute-api.us-east-2.amazonaws.com/test/savefindforme",data, { crossdomain: true })
                                .then((response) => {
                                     
                                })
    }
    

    render() {

        return (<div>

            <Property name="Price" value={this.state.price} incClick={() => this.onIncreaseButtonClickHandler(1)} decClick={() => this.onDecreaseButtonClickHandler(1)}></Property>
            <Property name="Soundquality" value={this.state.soundquality} incClick={() => this.onIncreaseButtonClickHandler(2)} decClick={() => this.onDecreaseButtonClickHandler(2)}></Property>
            <Property name="Bass" value={this.state.bass} incClick={() => this.onIncreaseButtonClickHandler(3)} decClick={() => this.onDecreaseButtonClickHandler(3)}></Property>
            <Property name="Treble" value={this.state.treble} incClick={() => this.onIncreaseButtonClickHandler(4)} decClick={() => this.onDecreaseButtonClickHandler(4)}></Property>
            <Property name="Durability" value={this.state.durability} incClick={() => this.onIncreaseButtonClickHandler(5)} decClick={() => this.onDecreaseButtonClickHandler(5)}></Property>
            <label>Points remaining</label>
            <p >{this.state.pointsRemaining}</p>
            <button onClick={this.onSubmitButtonHandler}></button>

        </div>)
    }
}

export default HeadphonePropertyBox;