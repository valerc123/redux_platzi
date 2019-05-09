import React , { Component } from 'react';
import Search from '../components/search'
import { connect } from "react-redux";

class SearchContainer extends Component{
    state={
        value: 'Luis Fonsi'
    }
    handleSubmit = event =>{
        event.preventDefault();
        console.log(this.input.value, 'submit');

        //actions redux
        this.props.dispatch({
            type: 'SEARCH_VIDEO',
            payload: { query : this.input.value}
        })
    }
    setInputRef = element =>{
        this.input= element;
    }
    handleInputChange = event =>{
        this.setState({
            value: this.input.value
        })
    }

    render(){
        return(
            <Search 
            value={this.state.value}
            handleChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            setRef={this.setInputRef}
            />
        )
    }
}
export default connect()(SearchContainer)
