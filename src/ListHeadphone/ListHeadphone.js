import React, { Component } from 'react';
import axios from 'axios';
import NextPageButton from './NextPageButton/NextPageButton';
import FirstPageButton from './FirstPageButton/FirstPageButton';
import './ListHeadphone.css'
class ListHeadphone extends Component {
    constructor(props) {
        super(props);
        let data = { page: '1' }
        axios.get("https://ebn17mlebi.execute-api.us-east-2.amazonaws.com/test/listheadphones", { params: data }, { crossdomain: true }).then((res) => {
            var tmpArray = [...res.data];
            this.setState({ data: tmpArray });
        }
        )
    }
    state = {
        data: [],
        page: 1,
        firstPage: false
    }
    onNextPageButtonClickHandler = () => {
        console.log(this.state)
        let tmpPage = this.state.page;
        tmpPage = tmpPage + 1;
        this.setState({ page: tmpPage });
        this.setState({ firstPage: true });

        let data = { page: tmpPage.toString() }
        axios.get("https://ebn17mlebi.execute-api.us-east-2.amazonaws.com/test/listheadphones", { params: data }, { crossdomain: true }).then((res) => {
            var tmpArray = [...res.data];
            this.setState({ data: tmpArray });
        }
        )
    }
    onFirstPageButtonClickHandler = () => {
        let tmpPage = this.state.page;
        tmpPage = 1;
        this.setState({ page: tmpPage });
        this.setState({ firstPage: false });

        let data = { page: tmpPage.toString() }
        axios.get("https://ebn17mlebi.execute-api.us-east-2.amazonaws.com/test/listheadphones", { params: data }, { crossdomain: true }).then((res) => {
            var tmpArray = [...res.data];
            this.setState({ data: tmpArray });
        }
        )
    }

    render() {
        let firstPage = this.state.firstPage;
        console.log(this.state);
        return (
            firstPage ? (
                <div className="container">
                    <div className="box" >
                    {this.state.data.map((item, i) => {
                        return (

                            

                                <div className="headphone2"key={i}>
                                    <div className="photo">
                                        <img alt={item.HEADPHONENAME} src="https://www.itopya.com/picture500x0/steelseries-arctis-3-oyuncu-kulakligi-7-1-beyaz-2019-edition-1.jpg" width="150" height="150" />
                                    </div>
                                    <div className="name">
                                        <a href={"/headphone/" + item.HEADPHONENAME}>{item.HEADPHONENAME}</a>
                                    </div>
                            </div>)
                    })}<div className="buttongroup">
                    <NextPageButton clicked={this.onNextPageButtonClickHandler}>Next Page</NextPageButton>
                    <FirstPageButton clicked={this.onFirstPageButtonClickHandler}>First Page</FirstPageButton></div>
                </div>
                </div>
            ) :
                (
                    <div className="container">
                        <div className="box">
                        {this.state.data.map((item, i) => {
                            return (
                                
                                    <div className="headphone2" key={i}>
                                        <div className="photo">
                                            <img alt={item.HEADPHONENAME} src="https://www.itopya.com/picture500x0/steelseries-arctis-3-oyuncu-kulakligi-7-1-beyaz-2019-edition-1.jpg" width="150" height="150" />
                                        </div>
                                        <div className="name">
                                            <h3>{item.HEADPHONEBRAND} - {item.HEADPHONENAME}</h3>
                                        </div>
                                </div>)
                        })}
                        <NextPageButton clicked={this.onNextPageButtonClickHandler}>Next Page</NextPageButton>
                        </div>
                    </div>
                )
        )
    }
}
export default ListHeadphone