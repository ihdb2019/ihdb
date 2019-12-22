import React, { Component } from 'react';
import axios from 'axios';
import NextPageButton from './NextPageButton/NextPageButton';
import FirstPageButton from './FirstPageButton/FirstPageButton';

class ListNews extends Component {

    constructor(props) {
        super(props);
        let data = {page:'1'}
        axios.get("https://v8wg906jm2.execute-api.us-east-2.amazonaws.com/blo/listnews", {params: data}, { crossdomain: true }).then((res) =>{
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

    onNextPageButtonClickHandler = () => {
        console.log(this.state)
        let tmpPage = this.state.page;
        tmpPage = tmpPage + 1;
        this.setState({page: tmpPage});
        this.setState({firstPage: true});

        let data = {page:tmpPage.toString()}
        axios.get("https://v8wg906jm2.execute-api.us-east-2.amazonaws.com/blo/listnews", {params: data}, { crossdomain: true }).then((res) =>{
            var tmpArray = [...res.data];
            this.setState({data:tmpArray});
            }
        )
    }
    onFirstPageButtonClickHandler = () => {
        let tmpPage = this.state.page;
        tmpPage = 1;
        this.setState({page: tmpPage});
        this.setState({firstPage: false});

        let data = {page:tmpPage.toString()}
        axios.get("https://v8wg906jm2.execute-api.us-east-2.amazonaws.com/blo/listnews", {params: data}, { crossdomain: true }).then((res) =>{
            var tmpArray = [...res.data];
            this.setState({data:tmpArray});
            }
        )
    }

    render () {
        let firstPage = this.state.firstPage;
        return(

            firstPage ? (
                <div>
                    {this.state.data.map((item, i) => {
                        return(<div key={i}>
                            <h3>{item.HEADER}</h3>
                            <p>{item.TEXT}</p>
                        </div>)
                    })}
                    
                
                <NextPageButton clicked={this.onNextPageButtonClickHandler}>Next Page</NextPageButton>
                <FirstPageButton clicked={this.onFirstPageButtonClickHandler}>First Page</FirstPageButton>
                </div>
            ):
            (
                <div>
                    {this.state.data.map((item, i) => {
                        return(<div key={i}>
                            <h3>{item.HEADER}</h3>
                            <p>{item.TEXT}</p>
                        </div>)
                    })}
                    <NextPageButton clicked={this.onNextPageButtonClickHandler}>Next Page</NextPageButton>
                </div>
            )

        )
    }
}

export default ListNews