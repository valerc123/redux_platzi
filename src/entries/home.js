
//importamos Las referec¡as
import React from 'react';
import {render} from 'react-dom';
import Home from "../pages/containers/home";
// import Playlist from '../playlist/componets/playlist';
import data from '../api.json';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    //modelo de datos 
    data: {
        ...data
    }
}

const store = createStore(
    (state) => state, //reducer
    initialState,// estado inicial
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//enhancer

);
console.log(store.getState());
// se hace refencia de donde se va renderizar
// const app = document.getElementById('app');
const homeContainer = document.getElementById('home-container');

//cual es el elemento
// const hi = <h1> gonorreaaaaa!</h1>;  
// se ejecuta el render
//ReactDOM.render(hi, app);
  
render (  
    <Provider store={store}> 
        {/* <p>holiii</p> */}
        <Home />
    </Provider> , homeContainer);