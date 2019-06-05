import React, {Component}from 'react';
import './video.css';

class Video extends Component{

    togglePlay(){
        if(this.props.pause)
        {
            this.video.play()
        } else{
            this.video.pause()
        }
        
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.pause !== this.props.pause)
        {
            this.togglePlay();
        }
    }

    setRef = element => {
        this.video = element;
    }

    render(){
        const {
            handleLoadedMetadata,
            handleTimeUpdate,
            handleSeeking,
            handleSeeked
        } = this.props;
        return(
            <div className="Video">
                <video
                    src={this.props.src}
                    autoPlay={this.props.autoplay}
                    ref={this.setRef}
                    onLoadedMetadata={handleLoadedMetadata}
                    onTimeUpdate={handleTimeUpdate} //cada vez que se actualice el tiempo
                    onSeeking={handleSeeking} //se esta moviendo
                    onSeeked={handleSeeked} //se movió (terminó el moviento)
                />
            </div> 
        )
    }
}
export default Video;

//evitar al maximo que los componentes de UI contengan logica,
// en este caso es una exception por el uso de los eventos en los botones