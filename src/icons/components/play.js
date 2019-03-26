import React from 'react';
import Icon from './icon';

function Play(props) {
  return (
    <Icon {...props}> 
        <path d="M6 4l20 12-20 12z"></path> {/*this is children*/}
     </Icon>
  )
}

export default Play;
 