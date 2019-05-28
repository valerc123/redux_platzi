import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import PortalContainer from '../../widgets/containers/portal';
import Modal from "../../widgets/components/modal";
import HandleError from "../../error/containers/handleError";
import VideoPlayer from '../../player/containers/video-player';
import { List as list } from  'immutable';
import { connect } from 'react-redux';

class Home extends Component{
    state = {
        modalVisible: false
    }
    handleOpenModal=(id/*,media*/) =>{
        this.props.dispatch({
            type: 'OPEN_MODAL',
            payload:{
                mediaId: id
            }
        })
        // this.setState({
        //     modalVisible: true,
        //     media: media // es lo mismo media: media
        // })
    }
    
    handleCloseModal =(event) =>{
        // this.setState({
        //     modalVisible: false
        // })
        this.props.dispatch({
            type: 'CLOSE_MODAL'
        })
    }
 render()
    {
        return(
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories 
                        categories={this.props.categories} 
                        handleOpenModal ={this.handleOpenModal} 
                        search={this.props.search}
                    />
                    {
                    this.props.modal.get('visibility') &&
                    <PortalContainer>
                        <Modal
                             handleClick={this.handleCloseModal}>
                            <VideoPlayer 
                                autoplay
                                id ={this.props.modal.get('mediaId')}
                                // src={this.state.media.src}
                                // title={this.state.media.title} 
                                />
                        </Modal>
                    </PortalContainer>
                    } 
                </HomeLayout>
            </HandleError>
        )       
    }
}  

function mapStateToProps(state, props){
    const categories = state.get('data').get('categories').map((categoryId) => {
        return state.get('data').get('entities').get('categories').get(categoryId)
    })
    let searchResults = list(); // inicializo una lista inmutable
    const search = state.get('data').get('search');
    if(search)
    {   
        const mediaList = state.get('data').get('entities').get('media'); //devuelve una lista de los elementos de media
        searchResults = mediaList.filter((item) => {
          return  item.get('author').toLowerCase().includes(search.toLowerCase())// comparo si el nombre de autor es el mismo a la de la busqueda
        }).toList(); // toList, me convierte un mapa a una lista inmutable
    }
    return{
        categories:  categories, //state.data.categories // data desde el store de redux
        // search: state.get('data').get('search')
        search: searchResults,
        modal: state.get('modal'),
    }
}

export default connect(mapStateToProps)(Home)


