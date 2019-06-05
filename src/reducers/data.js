import normalizedData from '../schemas/index';
import { fromJS } from 'immutable'
import {SEARCH_ENTITTIES} from '../action-types/index';

const initialState =  fromJS({
    entities: normalizedData.entities,
    categories: normalizedData.result.categories,
    search: ''
})

function data(state = initialState, action){
    switch (action.type){
        case SEARCH_ENTITTIES:{

           // action.payload.query = el valor que ingresan en el input
            let results = [];
            // if(action.payload.query){
            //     const list = state.data.categories[2].playlist;  //la data de la api en su ultima posicion 
            //     const results = list.filter((item)=>{
            //         return   item.author.includes(action.payload.query) // Si el autor coincide con lo el valor del input, devuelve true o false
            //     })
            // }
//mutable
            // if (action.payload.query) {
            //     const list = state.data.categories
            //     list.map(category => {
            //       let tempResults = category.playlist.filter(item => {
            //         return item.author.toLowerCase().includes(action.payload.query.toLowerCase())
            //       })
            //       results = results.concat(tempResults)
            //     })
            //   }

            // return {
            //     ...state,
            //     search: results
            // }
//inmutable
            return state.set('search', action.payload.query) // me devuelve un nuevo mapa inmutable,y no modifica el estado
        }
        default:
        return state
    }
}

export default data