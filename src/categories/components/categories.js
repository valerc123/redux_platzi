import React from 'react';
import Category from './category'
import './categories.css';
import SearchContainer from '../../widgets/containers/search-container';
import Media from "../../playlist/componets/media";

function Categories(props)
{
    return(
        <div className="Categories">
            <SearchContainer  />
                {
                    props.search.map( item =>{
                        return <Media
                                    openModal = {props.handleOpenModal}
                                    title  = {item.get('title')}
                                    author = {item.get('author')}
                                    type   = {item.get('type')}
                                    cover  = {item.get('cover')}
                                    src    = {item.get('src')}
                                    key    = {item.get('id')}
                                    id     = {item.get('id')}
                                />
                    })
                }
                {
                    props.categories.map((item) =>
                    {
                    return (
                    <Category 
                            key={item.get('id')} 
                            description={item.get('description')}
                            title={item.get('title')}
                            playlist={item.get('playlist')}
                            handleOpenModal={props.handleOpenModal}
                    />
                    )
                    })
                }
        </div>
    )
}
export default Categories;