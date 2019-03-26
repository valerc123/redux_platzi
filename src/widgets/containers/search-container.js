import React , { Component } from 'react';
import Search from '../components/search'

class SearchContainer extends Component{
    state={
        value: 'Luis Fonsi'
    }
    handleSubmit = event =>{
        event.preventDefault();
        console.log(this.input.value, 'submit');
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
export default SearchContainer