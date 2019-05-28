import React, { PureComponent } from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends PureComponent{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         author: props.author
    //     }
    //     // this.handleClick = this.handleClick.bind(this);//enlazo el evento a la clase
    // }
    state = {
        // author: this.props.author //toma el valor del index
        author: 'leonidas' //le defino un valor
    } 
    handleClick = (event) => {
    //     // console.log(this.props.title);
    //     this.setState({ //cambia el estado del componente
    //         author: 'ricardo celis'
    //     })
    this.props.openModal(this.props.id);//envia todas las propiedades del video (titulo, cover, autor, src)
    }
    render(){
        let {title, author, cover} = this.props;
        const styles = {
            container:{
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red',
                padding: 15
            }
        }
        //html del componente
        return(
            
            <div className='Media' onClick={this.handleClick}>
            <div className='Media-cover'>
                <img className='Media-image'
                 src={cover}
                 alt="" width={240} height={160}/>

                <h3 className='Media-title'>{title}</h3>
                <p className='Media-author'>{author} </p>
            </div>
        </div>
            )
    }
}
// que tipos de datos son permitidos
Media.propiedades = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,//propiedad obligatoria
    author: PropTypes.string,
    type: PropTypes.oneOf(['video','audio'])
    }

export default Media; 