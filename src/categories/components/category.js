import React from 'react';
import Playlist from '../../playlist/componets/playlist'
import './category.css';

function Category (props)
{
    return(
        <div className="Category">
            <p className="Category-title">{props.description}</p>
            <h2 className="Category-descriptions">{props.title}</h2>
            <Playlist
                handleOpenModal={props.handleOpenModal}
                playlist={props.playlist}
            />
        </div>
    )
}
export default Category;