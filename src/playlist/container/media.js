import  React, { Component } from 'react'
import Media from '../componets/media'
import { connect } from 'react-redux'


class MediaContainer extends Component {
    render(){

        return <Media {...this.props.data} />

    }
}
function mapStateToProps(state, props){  //mapeo el stado de redux para mandarlo como propiedad en este componente 
    return{
        data: state.data.entities.media[props.id]
    }
}
export default connect(mapStateToProps)(MediaContainer)