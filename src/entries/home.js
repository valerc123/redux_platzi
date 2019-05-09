
//importamos Las referec¡as
import React from 'react';
import {render} from 'react-dom';
import Home from "../pages/containers/home";
// import Playlist from '../playlist/componets/playlist';
import data from '../api.json';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; // componenten de orden superior
import reducer from '../reducers/data';

const initialState = {
    //modelo de datos 
    data: {
        ...data, // descompongo la api
    },
    search: []
}

const store = createStore(
    reducer, //(state) => state (simpre debe devolver el estado)
    initialState,// estado inicial
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//enhancer

);
console.log(store.getState()); // me devuelve el estado (api)

// se hace refencia de donde se va renderizar
const homeContainer = document.getElementById('home-container');

//cual es el elemento
// const hi = <h1> gonorreaaaaa!</h1>;  
// const app = document.getElementById('app');
// se ejecuta el render
//ReactDOM.render(hi, app);
  
render (  
    <Provider store={store}> 
        <Home />
    </Provider> , homeContainer);