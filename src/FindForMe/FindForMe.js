import React, { Component } from 'react';
import axios from 'axios';


class FindForMe extends Component {
    constructor(props) {
        super(props);
        let user_name = localStorage.getItem('username');
        let data = {'username':user_name}
        axios.get("https://k3rodqx32b.execute-api.us-east-2.amazonaws.com/test/findforme", {params: data}, { crossdomain: true }).then((res) =>{
                var tmpArray = [...res.data];
                this.setState({data:tmpArray});
                }
       )
    }
    state = {
        data : [],
        page : 1,
        firstPage : false
    }
    render () {
        let firstPage = this.state.firstPage;
        console.log(this.state.data);

        
        return (
            firstPage ? (
                <div>
                    {this.state.data.map((item, i) => {
                        return(
                        <div key={i}>
                            <div>
                                <img alt={item.name} src="https://www.itopya.com/picture500x0/steelseries-arctis-3-oyuncu-kulakligi-7-1-beyaz-2019-edition-1.jpg"  width="150" height="150"/>
                            </div>
                            <div>
                            <h3>{item.brand} - {item.name}</h3>
                                <h3>SCORE: {item.score}</h3>
                            </div>
                        </div>)
                    })}
                </div>
            ) :
            (
                <div>
                    {this.state.data.map((item, i) => {
                        return(
                        <div key={i}>
                            <div>
                                <img alt={item.name} src="https://www.itopya.com/picture500x0/steelseries-arctis-3-oyuncu-kulakligi-7-1-beyaz-2019-edition-1.jpg"  width="150" height="150"/>
                            </div>
                            <div>
                                <h3>{item.brand} - {item.name}</h3>
                                <h3>SCORE: {item.score}</h3>
                            </div>
                        </div>)
                    })}
                </div>
            )
        )
    }

}
export default FindForMe