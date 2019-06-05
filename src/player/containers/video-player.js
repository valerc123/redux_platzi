import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import formattedTime from '../components/utilities';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volumen from '../components/volumen';
import FullScreen from '../components/fullscreen';
import { connect } from 'react-redux';

class VideoPlayer extends Component {
    
    state={
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false,
        volume: 0,
        toggleVolume: 0
    }
    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }
    componentDidMount(){
        this.setState({
            pause: (!this.props.autoplay)
        })
    }
    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({
          duration: this.video.duration //duration propiedada propia de la etiqueta video
        });
      }
      handleTimeUpdate = event => { 
        //   console.log(this.video.currentTime)
          //currentTime propiedada propia de la etiqueta video (devuelve el tiempo actual del video)
          this.setState({
              currentTime: this.video.currentTime
          })
        }
        handleProgressChange = event => { 
            this.video.currentTime = event.target.value;
        }
        handleSeeking= event => { //se esta moviendo
            this.setState({
                loading: true
            })
        }
        handleSeeked= event => { 
            this.setState({
                loading: false
            })
        }
        handleVolumenChange = event => { 
            this.video.volume = event.target.value;
            //valor del input de range
            //volume atributo nativo 
        }
        handleVolumenClick = event => {
            if(this.state.toggleVolume === 0)
            {   this.setState({volume: this.video.volume})
                this.setState({toggleVolume: 1})
                this.video.volume = 0 //muteo
            } else if (this.state.toggleVolume === 1){
                this.video.volume = this.state.volume
                this.setState({toggleVolume: 0})
            }
        }
        handleFullScreenClick = event =>{
             if(document.webkitIsFullScreen) //si estoy en full-screen
            {  document.webkitExitFullscreen()}//salgo de fullscreen
            else if(document.mozFullScreen){ // para firefox
                document.mozCancelFullScreen() //salgo de full-screen
            }
            else{// si no estoy en fullscreen
                if(this.player.webkitRequestFullScreen){
                    this.player.webkitRequestFullScreen()
                }else if(this.player.mozRequestFullScreen){
                    this.player.mozRequestFullScreen()
                }
            }
        }
        setRef = element => {
            this.player = element
        }

    render() {
        return (
            <VideoPlayerLayout setRef={this.setRef}>
                <Title
                    title={this.props.media.get('title')}
                />
                <Controls>
                    <PlayPause
                        pause={this.state.pause}
                        handleClick={this.togglePlay}
                    />
                    <Timer
                        duration={formattedTime(this.state.duration)}
                        currentTime={formattedTime(this.state.currentTime)}
                    />
                    <ProgressBar
                        duration={this.state.duration}
                        value={this.state.currentTime}
                        handleProgressChange={this.handleProgressChange}
                    />
                    <Volumen
                        handleVolumenClick={this.handleVolumenClick}
                        handleVolumenChange={this.handleVolumenChange}
                    />
                    <FullScreen
                        handleFullScreenClick={this.handleFullScreenClick}
                    />
                </Controls>
                <Spinner 
                    active={this.state.loading}
                />
                <Video
                    autoplay={this.props.autoplay} //true
                    pause={this.state.pause}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                    src={this.props.media.get('src')}/>
                />
            </VideoPlayerLayout>
        )
    }
}


function mapStateToProps(state, props){
    return{
        media: state.get('data').get('entities').get('media').get(props.id),
        // media: state.getIn(['data','entities','media',props.id])
    }
}
export default connect(mapStateToProps)(VideoPlayer);
