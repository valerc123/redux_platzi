import React, {Component} from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related';
import PortalContainer from '../../widgets/containers/portal';
import Modal from "../../widgets/components/modal";
import HandleError from "../../error/containers/handleError";
import VideoPlayer from '../../player/containers/video-player';

class Home extends Component{
    state = {
        modalVisible: false
    }
    handleOpenModal=(media) =>{
        this.setState({
            modalVisible: true,
            media // es lo mismo media: media
        })
    }
    
    handleCloseModal =(event) =>{
        this.setState({
            modalVisible: false
        })
    }
 render()
    {
        return(
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories categories={this.props.data.categories} 
                    handleOpenModal ={this.handleOpenModal} />
                    {
                    this.state.modalVisible &&
                    <PortalContainer>
                        <Modal handleClick={this.handleCloseModal}>
                            <VideoPlayer 
                                autoplay
                                src={this.state.media.src}
                                title={this.state.media.title} />
                        </Modal>
                    </PortalContainer>
                    } 
                </HomeLayout>
            </HandleError>
        )       
    }
}  

export default Home