import React from 'react';
import './search.css';
//otra manera de hacerlo de modo function 
const Search = (props) => (
    <form action="" className="Search" onSubmit={props.handleSubmit}>
          <input 
          ref={props.setRef}
          className="Search-input" 
          type="text" 
          placeholder="Busca tu video favorito"
          value={props.value}
          onChange={props.handleChange}
          />
    </form>
)
export default Search;
