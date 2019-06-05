import React , { Component } from 'react';
import Search from '../components/search'
import { connect } from "react-redux";
import * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';

class SearchContainer extends Component{
    state={
        value: 'Luis Fonsi'
    }
    handleSubmit = event =>{
        event.preventDefault();
        console.log(this.input.value, 'submit');

        this.props.actions.searchEntities(this.input.value)

        //actions redux
        // this.props.dispatch({
        //     type: 'SEARCH_ENTITIES',
        //     payload: { query : this.input.value}
        // })
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
function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(SearchContainer)
