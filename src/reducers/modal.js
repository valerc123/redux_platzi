import { fromJS } from 'immutable'
import { CLOSE_MODAL, OPEN_MODAL }from '../action-types/index'

const initialState = fromJS({
    visibility: false,
    mediaId: null
});

function modal(state = initialState, action)
{
    switch(action.type)
    {
        case OPEN_MODAL: 
            return state.merge({ //modificamos el estado mezclando los mapas. Para modificar varias propiedades
                visibility: true,
                mediaId: action.payload.mediaId
            })
        case CLOSE_MODAL:
            return state.set('visibility', false) //modifica el estado y cambia el visibility a false
        default:
            return state
    }
}

export default modal; 