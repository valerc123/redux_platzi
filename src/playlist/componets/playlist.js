import React from 'react';
// import Media from './media.js';
import MediaContainer  from '../containers/mediaContainer';
import './playlist.css';

//componente funcional
 function Playlist (props) {  
     return(
        <div className="Playlist">
        {
            props.playlist.map((mediaId) =>{
                return <MediaContainer 
                    openModal={props.handleOpenModal} id={mediaId} />
                   
            })
        }
        </div>
    )
}
export default Playlist;