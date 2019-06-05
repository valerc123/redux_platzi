import  React, { Component } from 'react'
import Media from '../componets/media'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'


class MediaContainer extends Component {
    
    openModal = (id) => {
        this.props.actions.openModal(id) //accedo a la misma accion pero global

        // this.props.dispatch({
        //    type: 'OPEN_MODAL',
        //    payload:{
        //        mediaId: id
        //    }
        // })
    }

    render(){
       // console.log({...this.props.data.toJS()}) // solo para verificar los datos
        return <Media
        category  = {this.props.data.get('category')}
        author = {this.props.data.get('author')}
        cover  = {this.props.data.get('cover')}
        id     = {this.props.data.get('id')}
        src    = {this.props.data.get('src')}
        type   = {this.props.data.get('type')}
        key    = {this.props.data.get('id')} 
        title  = {this.props.data.get('title')}
        openModal={this.openModal} />
    }
}
function mapStateToProps(state, props){  //mapeo el stado de redux para mandarlo como propiedad en este componente 
    return{
        // data: state.getIn(['data', 'entities', 'media', props.id]) //datos anidados es igual
        data: state.get('data').get('entities').get('media').get(props.id)
    }
}
function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer)