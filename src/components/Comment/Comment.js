import React from 'react';

import './Comment.css'

const Comment = ((props) => {
    return (

        <div className='Comment'>
            {props.name}
        </div>
    );

})

export default Comment;
